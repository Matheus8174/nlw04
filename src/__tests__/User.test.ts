import request from 'supertest';
import app from '../app';
import createConnection from '../database';

describe('Users', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Should be able to create a new user', async () => {
    const response = await request(app).post('/users').send({
      email: 'usr@mal.o',
      name: 'userexmp'
    });

    expect(response.status).toBe(201);
  });
});

// 1:01:45

// right now time, 1:01:43
