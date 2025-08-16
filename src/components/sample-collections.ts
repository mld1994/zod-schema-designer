import type { SchemaField } from '@/components/zod-schema-designer/types'

export const sampleCollections = {
  users: {
    name: 'Users',
    type: 'object',
    children: [
      { name: 'id', type: 'string', validations: { required: true }, description: 'Unique identifier for the user' },
      { name: 'username', type: 'string', validations: { required: true, min: 3, max: 20 }, description: 'Unique username for the user' },
      { name: 'email', type: 'string', validations: { required: true, regex: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$' }, description: 'Email address' },
      { name: 'password', type: 'string', validations: { required: true, min: 8 }, description: 'User password (min 8 characters)' },
      { name: 'age', type: 'number', validations: { min: 13 }, description: 'User age (must be at least 13)' },
      { name: 'isActive', type: 'boolean', validations: { required: true }, description: 'Active status' },
      { name: 'role', type: 'enum', enumValues: ['user', 'admin', 'moderator'], validations: { required: true }, description: 'User role in the system' },
      { name: 'lastLogin', type: 'date', description: 'Last login timestamp' },
      {
        name: 'profile',
        type: 'object',
        children: [
          { name: 'fullName', type: 'string', validations: { required: true }, description: 'Full name of the user' },
          { name: 'bio', type: 'string', validations: { max: 500 }, description: 'User biography (max 500 characters)' },
          { name: 'avatarUrl', type: 'string', validations: { regex: '^https?://.*$' }, description: 'URL to user\'s avatar image' },
        ]
      },
      {
        name: 'socialMedia',
        type: 'array',
        children: [{
          name: 'account',
          type: 'object',
          children: [
            { name: 'platform', type: 'enum', enumValues: ['twitter', 'facebook', 'instagram', 'linkedin'], validations: { required: true } },
            { name: 'username', type: 'string', validations: { required: true } },
            { name: 'url', type: 'string', validations: { regex: '^https?://.*$' } },
          ]
        }],
        description: 'List of user\'s social media accounts'
      },
    ]
  },
  products: {
    name: 'Products',
    type: 'object',
    children: [
      { name: 'id', type: 'string', validations: { required: true }, description: 'Unique identifier for the product' },
      { name: 'name', type: 'string', validations: { required: true, min: 2, max: 100 }, description: 'Product name' },
      { name: 'description', type: 'string', validations: { max: 1000 }, description: 'Detailed product description' },
      { name: 'price', type: 'number', validations: { required: true, min: 0 }, description: 'Product price in cents' },
      { name: 'category', type: 'enum', enumValues: ['electronics', 'clothing', 'books', 'home', 'other'], validations: { required: true }, description: 'Product category' },
      { name: 'tags', type: 'array', children: [{ name: 'tag', type: 'string' }], description: 'Product tags for easy searching' },
      { name: 'inStock', type: 'boolean', validations: { required: true }, description: 'Whether the product is in stock' },
      { name: 'createdAt', type: 'date', validations: { required: true }, description: 'Product creation date' },
      {
        name: 'dimensions',
        type: 'object',
        children: [
          { name: 'width', type: 'number', validations: { required: true, min: 0 }, description: 'Width in centimeters' },
          { name: 'height', type: 'number', validations: { required: true, min: 0 }, description: 'Height in centimeters' },
          { name: 'depth', type: 'number', validations: { required: true, min: 0 }, description: 'Depth in centimeters' },
        ],
        description: 'Product dimensions'
      },
      {
        name: 'reviews',
        type: 'array',
        children: [{
          name: 'review',
          type: 'object',
          children: [
            { name: 'userId', type: 'string', validations: { required: true }, description: 'ID of the user who left the review' },
            { name: 'rating', type: 'number', validations: { required: true, min: 1, max: 5 }, description: 'Rating from 1 to 5' },
            { name: 'comment', type: 'string', validations: { max: 500 }, description: 'Review comment (max 500 characters)' },
            { name: 'createdAt', type: 'date', validations: { required: true }, description: 'Review creation date' },
          ]
        }],
        description: 'Product reviews'
      },
    ]
  },
  orders: {
    name: 'Orders',
    type: 'object',
    children: [
      { name: 'id', type: 'string', validations: { required: true }, description: 'Unique identifier for the order' },
      { name: 'userId', type: 'string', validations: { required: true }, description: 'ID of the user who placed the order' },
      { name: 'status', type: 'enum', enumValues: ['pending', 'processing', 'shipped', 'delivered', 'cancelled'], validations: { required: true }, description: 'Current status of the order' },
      { name: 'createdAt', type: 'date', validations: { required: true }, description: 'Order creation date' },
      {
        name: 'items',
        type: 'array',
        children: [{
          name: 'item',
          type: 'object',
          children: [
            { name: 'productId', type: 'string', validations: { required: true }, description: 'ID of the ordered product' },
            { name: 'quantity', type: 'number', validations: { required: true, min: 1 }, description: 'Quantity of the product ordered' },
            { name: 'price', type: 'number', validations: { required: true, min: 0 }, description: 'Price of the product at the time of order' },
          ]
        }],
        description: 'List of items in the order'
      },
      {
        name: 'shippingAddress',
        type: 'object',
        children: [
          { name: 'street', type: 'string', validations: { required: true }, description: 'Street address' },
          { name: 'city', type: 'string', validations: { required: true }, description: 'City' },
          { name: 'state', type: 'string', validations: { required: true }, description: 'State/Province' },
          { name: 'country', type: 'string', validations: { required: true }, description: 'Country' },
          { name: 'zipCode', type: 'string', validations: { required: true }, description: 'ZIP/Postal code' },
        ],
        description: 'Shipping address for the order'
      },
      { name: 'totalAmount', type: 'calculated', calculatedField: { dependencies: ['items'], formula: '(items) => items.reduce((sum, item) => sum + item.price * item.quantity, 0)' }, description: 'Total order amount' },
      { name: 'tax', type: 'number', validations: { required: true, min: 0 }, description: 'Tax amount for the order' },
      { name: 'shippingCost', type: 'number', validations: { required: true, min: 0 }, description: 'Shipping cost for the order' },
      { name: 'grandTotal', type: 'calculated', calculatedField: { dependencies: ['totalAmount', 'tax', 'shippingCost'], formula: '(totalAmount, tax, shippingCost) => totalAmount + tax + shippingCost' }, description: 'Grand total including tax and shipping' },
    ]
  },
} satisfies Record<string, SchemaField>

export default sampleCollections
