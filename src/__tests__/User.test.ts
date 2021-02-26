import request from 'supertest';
import app from '../app';

describe('Users', () => {
  request(app).post('/users').send({
    email: 'user@email.com',
    name: 'user example'
  });
});
