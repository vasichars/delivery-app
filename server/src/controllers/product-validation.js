import ValidationObject from '../utils/ValidationObject.js';

export const getProducts = new ValidationObject({
  query: {
    type: 'object',
    properties: {
      currency: {
        type: 'string',
        enum: ['', 'EUR', 'USD', 'CAD', 'CHF', 'CNY', 'CZK', 'GBP', 'HKD', 'JPY', 'RUB']
      }
    }
  }
});