import request from 'supertest';
import app from '../app';
import createConnection from '../database';

describe('Surveys', () => {
  beforeAll(async () => {
    const connection = await createConnection();
    await connection.runMigrations();
  });

  it('Shoud not be able to create a user with exists email', async () => {
    const response = await request(app).post('/surveys').send({
      title: 'teste01',
      description: 'description 01'
    });
    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
  });

  it('Shold be able to get all Surveys', async () => {
    await request(app).post('/surveys').send({
      title: 'teste02',
      description: 'description 02'
    });

    const response = await request(app).get('/surveys');
    expect(response.body.length).toBe(2);
  });
});
