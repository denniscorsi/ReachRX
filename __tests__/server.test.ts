import request from 'supertest';
import app from '../server/express';

describe('Server', () => {
  it('serves html at root', async () => {
    return request(app)
      .get('/')
      .expect(200)
      .expect('Content-Type', 'text/html');
  });

  it('returns list of doctors', async () => {
    return request(app)
      .get('/doctors')
      .expect(200)
      .expect('Content-Type', 'application/json')
      .expect((res) => {
        console.log('BODY!', res.body);
        expect(res.body.length).toBe(5);
      });
  });

  it('sends a 404 response', async () => {
    return request(app).get('/notapath').expect(404);
  });
});
