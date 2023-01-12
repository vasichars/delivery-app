import request from 'supertest';
import mongoose from 'mongoose';
import app from '../../src/app.js';

describe('Product Controller', () => {

  afterAll(async () => {
    await mongoose.disconnect();
  });

  test('GET /product', async () => {
    const response = await request(app).get('/product');
    expect(response.status).toBe(200);
    expect(response.body).toMatchObject({ data: expect.any(Array) });
    expect(response.body.data).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          price: expect.any(Number),
          category: expect.any(String),
          image: expect.any(String)
        })
      ])
    );
  });
});
