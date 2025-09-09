const request = require('supertest');
const app = require('../app');

describe('Events API', () => {

  describe('GET /api/events', () => {
    it('should return all events', async () => {
      const res = await request(app).get('/api/events');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });

  describe('GET /api/events/id/:id', () => {
    it('should return an event by id', async () => {
      const res = await request(app).get('/api/events/id/1');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('id', '1');
    });
  });

  describe('GET /api/events/:year', () => {
    it('should return events by year', async () => {
      const res = await request(app).get('/api/events/2024');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBeGreaterThan(0);
      expect(res.body[0]).toHaveProperty('year', 2024);
    });
  });

  describe('POST /api/events', () => {
    it('should create a new event', async () => {
      const newEvent = {
        title: 'New Test Event',
        date: '2024-12-31',
        description: 'A new event for testing',
        year: 2024,
        images: ['test.jpg']
      };
      const res = await request(app)
        .post('/api/events')
        .send(newEvent);
      expect(res.statusCode).toEqual(201);
      expect(res.body).toHaveProperty('id');
      expect(res.body.title).toEqual(newEvent.title);
    });

    it('should return 400 if required fields are missing', async () => {
      const newEvent = {
        title: 'New Test Event'
      };
      const res = await request(app)
        .post('/api/events')
        .send(newEvent);
      expect(res.statusCode).toEqual(400);
    });

    it('should return 400 for invalid year', async () => {
        const newEvent = {
            title: 'New Test Event',
            date: '2024-12-31',
            description: 'A new event for testing',
            year: '2024'
          };
        const res = await request(app)
          .post('/api/events')
          .send(newEvent);
        expect(res.statusCode).toEqual(400);
      });

      it('should return 400 for invalid date', async () => {
        const newEvent = {
            title: 'New Test Event',
            date: 'invalid-date',
            description: 'A new event for testing',
            year: 2024
          };
        const res = await request(app)
          .post('/api/events')
          .send(newEvent);
        expect(res.statusCode).toEqual(400);
      });

      it('should return 400 for invalid images format', async () => {
        const newEvent = {
            title: 'New Test Event',
            date: '2024-12-31',
            description: 'A new event for testing',
            year: 2024,
            images: 'test.jpg'
          };
        const res = await request(app)
          .post('/api/events')
          .send(newEvent);
        expect(res.statusCode).toEqual(400);
      });
  });

  describe('POST /api/events/:id/register', () => {
    it('should register a user for an event', async () => {
      const registration = {
        name: 'Test User',
        email: 'test@example.com'
      };
      const res = await request(app)
        .post('/api/events/1/register')
        .send(registration);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('success', true);
    });

    it('should return 400 if name or email are missing', async () => {
      const registration = {
        name: 'Test User'
      };
      const res = await request(app)
        .post('/api/events/1/register')
        .send(registration);
      expect(res.statusCode).toEqual(400);
    });
  });
});
