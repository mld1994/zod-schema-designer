'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'
import { SchemaField } from '@/components/zod-schema-designer/types'
import { ZodSchemaDesigner } from '@/components/zod-schema-designer/zod-schema-designer'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarTrigger,
  SidebarProvider,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { sampleCollections } from './sample-collections'

export function ZodSchemaShowcase() {
  const [collections, setCollections] = useState(sampleCollections);
  const [activeCollection, setActiveCollection] = useState<string>('users');
  const [newSchemaName, setNewSchemaName] = useState('');
  const [isNewSchemaDialogOpen, setIsNewSchemaDialogOpen] = useState(false);

  const handleSave = (updatedSchema: SchemaField) => {
    setCollections(prev => ({
      ...prev,
      [activeCollection]: updatedSchema
    }));
  };

  const handleCollectionChange = (collectionName: string) => {
    setActiveCollection(collectionName);
  };

  const handleCreateNewSchema = () => {
    if (newSchemaName.trim() !== '') {
      const newSchema: SchemaField = {
        name: newSchemaName,
        type: 'object',
        children: []
      };
      setCollections(prev => ({
        ...prev,
        [newSchemaName]: newSchema
      }));
      setActiveCollection(newSchemaName);
      setNewSchemaName('');
      setIsNewSchemaDialogOpen(false);
    }
  };

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full">
        <Sidebar className="flex-shrink-0">
          <SidebarHeader>
            <h2 className="text-xl font-bold p-4">Zod Schema Designer Demo</h2>
          </SidebarHeader>
          <SidebarContent className="flex flex-col h-[calc(100vh-4rem)]">
            <SidebarMenu className="px-4 flex-grow">
              {Object.keys(collections).map((collectionName) => (
                <SidebarMenuItem key={collectionName}>
                  <SidebarMenuButton
                    onClick={() => handleCollectionChange(collectionName)}
                    isActive={activeCollection === collectionName}
                  >
                    {collections[collectionName as keyof typeof collections].name}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <SidebarMenuItem>
                <Dialog open={isNewSchemaDialogOpen} onOpenChange={setIsNewSchemaDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="w-full justify-start">
                      <Plus className="mr-2 h-4 w-4" />
                      New Schema
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Schema</DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          value={newSchemaName}
                          onChange={(e) => setNewSchemaName(e.target.value)}
                          className="col-span-3"
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button onClick={handleCreateNewSchema}>Create</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </SidebarMenuItem>
            </SidebarMenu>
            <div className="p-4 text-sm text-gray-500 border-t">
              © {new Date().getFullYear()} Bishoy Labib. MIT License.
            </div>
          </SidebarContent>
        </Sidebar>
        <div className="flex-grow overflow-hidden">
          <div className="h-full flex flex-col">
            <div className="flex items-center justify-between p-4 border-b">
              <div className="flex items-center">
                <SidebarTrigger />
                <h1 className="text-2xl font-bold ml-4">{collections[activeCollection as keyof typeof collections].name}</h1>
              </div>
              <a 
                href="https://github.com/Bishoymly/zod-schema-designer" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            <div className="flex-grow overflow-auto">
              <ZodSchemaDesigner
                key={activeCollection}
                initialSchema={collections[activeCollection as keyof typeof collections]}
                onSave={handleSave}
                showGeneratedCode={true}
              />
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}

