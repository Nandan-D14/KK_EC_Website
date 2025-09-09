const request = require('supertest');
const app = require('../app');

describe('Team API', () => {

  describe('GET /api/team', () => {
    it('should return all team members', async () => {
      const res = await request(app).get('/api/team');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/team/:year', () => {
    it('should return team members by year', async () => {
      const res = await request(app).get('/api/team/2025');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty('year', 2025);
    });
  });

  describe('POST /api/team', () => {
    it('should create a new team member', async () => {
      const newMember = {
        name: 'Test Member',
        role: 'Test Role',
        year: 2025
      };
      const res = await request(app)
        .post('/api/team')
        .send(newMember);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.name).toEqual(newMember.name);
    });

    it('should return 400 if required fields are missing', async () => {
      const newMember = {
        name: 'Test Member'
      };
      const res = await request(app)
        .post('/api/team')
        .send(newMember);
      expect(res.statusCode).toEqual(400);
    });
  });
});
