# 🎨 Zod Schema Designer

A powerful visual schema designer for creating and editing [Zod](https://zod.dev/) validation schemas with an intuitive drag-and-drop interface.

![Zod Schema Designer Demo](demo01.png)

## ✨ Features

- **Visual Schema Building**: Create complex Zod schemas using an intuitive visual interface
- **Real-time Code Generation**: See your Zod schema code generated in real-time as you design
- **Comprehensive Type Support**: Support for all major Zod types including:
  - ✅ Primitives (`string`, `number`, `boolean`, `date`)
  - ✅ Complex Types (`object`, `array`, `enum`)
  - ✅ Union Types (`z.union([z.number(), z.null()]).optional()`)
  - ✅ Calculated Fields with custom formulas
  - ✅ File uploads
- **Advanced Validations**: Configure min/max values, regex patterns, custom validators, and default values
- **Import/Export**: Load existing Zod schemas and export your designs
- **TypeScript Ready**: Built with TypeScript for excellent developer experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mld1994/zod-schema-designer.git
cd zod-schema-designer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📖 Usage

### Creating a Schema

1. **Add Fields**: Click the "Add Field" button to create new schema fields
2. **Configure Properties**: Use the properties panel to set field names, types, and validations
3. **Nest Objects**: Create complex nested structures by adding child fields to object types
4. **Set Validations**: Configure validation rules like required fields, min/max values, regex patterns
5. **Generate Code**: View the generated Zod schema code in real-time

### Union Types Example

To create a union type like `z.union([z.number(), z.null()]).optional()`:

1. Select "Union" as the field type
2. Click "Add Union Type" to add each type (number, null)
3. Set the field as optional in the validations panel
4. The generated code will be: `z.union([z.number(), z.null()]).optional()`

### Sample Schemas

The project includes sample schemas to get you started:

- **User Profile**: Basic user information with validation
- **Product Catalog**: E-commerce product schema with categories
- **API Response**: Complex nested API response structure
- **Form Data**: Contact form with file uploads

## 🏗️ Project Structure

```
src/
├── components/
│   ├── ui/                          # Reusable UI components
│   └── zod-schema-designer/         # Core designer components
│       ├── zod-schema-designer.tsx  # Main designer component
│       ├── properties-panel.tsx     # Field configuration panel
│       ├── schema-field-editor.tsx  # Individual field editor
│       ├── validation-editor.tsx    # Validation rules editor
│       ├── types.ts                 # TypeScript type definitions
│       └── schema-utils.ts          # Schema generation utilities
├── lib/
│   └── utils.ts                     # Utility functions
└── app/                             # Next.js app structure
```

## 🛠️ Built With

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI components
- **Lucide React** - Icons
- **Zod** - Schema validation

## 📋 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Roadmap

- [ ] **Drag & Drop Interface**: Visual drag-and-drop field reordering
- [ ] **Schema Templates**: Pre-built schema templates for common use cases
- [ ] **Import from JSON**: Generate schemas from existing JSON data
- [ ] **Export Options**: Export to different formats (JSON Schema, TypeScript interfaces)
- [ ] **Collaboration**: Share and collaborate on schemas
- [ ] **Version Control**: Schema versioning and history
- [ ] **API Integration**: Direct integration with backend APIs

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Zod](https://zod.dev/) - For the amazing schema validation library
- [Radix UI](https://radix-ui.com/) - For accessible UI primitives
- [Tailwind CSS](https://tailwindcss.com/) - For the utility-first CSS framework

## 📧 Contact

Created by [@mld1994](https://github.com/mld1994)

Project Link: [https://github.com/mld1994/zod-schema-designer](https://github.com/mld1994/zod-schema-designer)

---

⭐ If you found this project helpful, please give it a star on GitHub!