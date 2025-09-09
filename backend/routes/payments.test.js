const request = require('supertest');
const app = require('../app');

describe('Payments API', () => {

  describe('GET /api/payments/upi-info', () => {
    it('should return UPI information', async () => {
      const res = await request(app).get('/api/payments/upi-info');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('upiId');
      expect(res.body).toHaveProperty('merchantName');
      expect(res.body).toHaveProperty('qrCode');
      expect(res.body).toHaveProperty('supportedApps');
    });
  });

  describe('POST /api/payments/verify', () => {
    it('should verify a payment', async () => {
      const payment = {
        transactionId: '12345',
        amount: 100
      };
      const res = await request(app)
        .post('/api/payments/verify')
        .send(payment);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('verified', true);
      expect(res.body.transactionId).toEqual(payment.transactionId);
    });

    it('should return 400 if transaction details are missing', async () => {
      const payment = {
        amount: 100
      };
      const res = await request(app)
        .post('/api/payments/verify')
        .send(payment);
      expect(res.statusCode).toEqual(400);
    });
  });

  describe('POST /api/payments/webhook', () => {
    it('should receive webhook data', async () => {
      const webhookData = {
        event: 'payment.success',
        payload: {
          id: 'pay_123',
          amount: 100
        }
      };
      const res = await request(app)
        .post('/api/payments/webhook')
        .send(webhookData);
      expect(res.statusCode).toEqual(200);
      expect(res.body).toHaveProperty('received', true);
    });
  });

  describe('GET /api/payments/history', () => {
    it('should return payment history', async () => {
      const res = await request(app).get('/api/payments/history');
      expect(res.statusCode).toEqual(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBeGreaterThan(0);
    });
  });
});
