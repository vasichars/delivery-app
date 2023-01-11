import request from 'supertest';
import app from '../src/app.js';

describe('Hello World Test', () => {
  test('GET /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Hello World!');
  });
});
