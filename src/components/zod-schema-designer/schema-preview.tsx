import { useState, useMemo } from 'react'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SchemaField } from './types'
import { generateZodSchema } from './schema-utils'
import { zodToJsonSchema } from "zod-to-json-schema"
import { z } from 'zod'

interface SchemaPreviewProps {
  schema: SchemaField;
}

type ViewMode = 'zod' | 'json';

export function SchemaPreview({ schema }: SchemaPreviewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('zod');
  const [copied, setCopied] = useState(false);

  const zodCode = useMemo(() => {
    return generateZodSchema(schema);
  }, [schema]);

  const jsonSchema = useMemo(() => {
    try {
      // Create a function that returns the zod schema
      const schemaFunction = new Function('z', `
        ${zodCode.replace('import { z } from \'zod\';', '').replace('export default', 'return')}
      `);
      
      // Execute the function to get the zod schema
      const zodSchema = schemaFunction(z);
      
      // Convert to JSON schema
      const jsonSchemaResult = zodToJsonSchema(zodSchema, schema.name);
      
      return JSON.stringify(jsonSchemaResult, null, 2);
    } catch (error) {
      return `// Error generating JSON schema: ${error instanceof Error ? error.message : 'Unknown error'}`;
    }
  }, [zodCode, schema.name]);

  const handleCopy = async () => {
    const textToCopy = viewMode === 'zod' ? zodCode : jsonSchema;
    
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <div className="p-4 border-l bg-gray-50 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Schema Preview</h2>
        <div className="flex items-center space-x-2">
          <div className="flex bg-white rounded-lg p-1 border">
            <Button
              variant={viewMode === 'zod' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('zod')}
              className="text-xs"
            >
              Zod Schema
            </Button>
            <Button
              variant={viewMode === 'json' ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('json')}
              className="text-xs"
            >
              JSON Schema
            </Button>
          </div>
          <Button 
            onClick={handleCopy} 
            variant="outline" 
            size="sm"
            className="text-xs"
          >
            {copied ? (
              <>
                <span className="mr-1">✓</span>
                Copied!
              </>
            ) : (
              <>
                <span className="mr-1">📋</span>
                Copy
              </>
            )}
          </Button>
        </div>
      </div>

      <div className="mb-2">
        <Badge variant="secondary" className="text-xs">
          {viewMode === 'zod' ? 'TypeScript/Zod' : 'JSON Schema'}
        </Badge>
      </div>

      <div className="flex-1 overflow-hidden">
        <pre className="bg-white p-4 rounded border text-sm overflow-auto h-full font-mono">
          <code className={`language-${viewMode === 'zod' ? 'typescript' : 'json'}`}>
            {viewMode === 'zod' ? zodCode : jsonSchema}
          </code>
        </pre>
      </div>
    </div>
  );
}
