import ValidationObject from '../utils/ValidationObject.js';

export const createOrder = new ValidationObject({
  body: {
    type: 'object',
    properties: {
      items: { type: 'array', items: { type: 'string', pattern: '^[A-Fa-f0-9]{24}$' } },
      user: {
        type: 'object',
        required: ['name', 'email'],
        properties: {
          name: { type: 'string' },
          email: { type: 'string', format: 'email' }
        }
      },
      address: {
        type: 'object',
        required: ['street', 'city', 'postalCode'],
        properties: {
          street: { type: 'string' },
          city: { type: 'string' },
          postalCode: { type: 'string' },
          country: { type: 'string' }
        }
      },
      totalPrice: { type: 'number' },
      status: { type: 'string', enum: ['pending', 'delivered'] }
    },
    required: ['items', 'user', 'address']
  }
});

export const updateOrder = new ValidationObject({
  params: {
    type: 'object',
    required: ['id'],
    properties: {
      id: { type: 'string', pattern: '^[A-Fa-f0-9]{24}$' }
    }
  },
  body: {
    type: 'object',
    required: ['status'],
    properties: {
      status: { type: 'string', enum: ['pending', 'delivered']}
    }
  }
});

