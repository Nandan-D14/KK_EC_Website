const express = require('express');
const router = express.Router();

// GET /api/payments/upi-info - Get UPI payment information
router.get('/upi-info', (req, res) => {
  const upiInfo = {
    upiId: 'kannada-kutta@pesu',
    merchantName: 'PESU Kannada Kutta',
    qrCode: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', // Base64 placeholder
    supportedApps: ['PhonePe', 'Google Pay', 'Paytm', 'BHIM', 'Amazon Pay']
  };
  
  res.json(upiInfo);
});

// POST /api/payments/verify - Verify payment status
router.post('/verify', (req, res) => {
  const { transactionId, amount, upiRef } = req.body;
  
  // Validation
  if (!transactionId || !amount) {
    return res.status(400).json({ error: 'Missing transaction details' });
  }
  
  // Mock verification - replace with actual payment gateway verification
  const verification = {
    transactionId,
    status: 'SUCCESS', // SUCCESS, PENDING, FAILED
    amount,
    timestamp: new Date().toISOString(),
    upiRef,
    verified: true
  };
  
  res.json(verification);
});

// POST /api/payments/webhook - Handle payment webhook
router.post('/webhook', (req, res) => {
  const paymentData = req.body;
  
  // Process webhook data
  console.log('Payment webhook received:', paymentData);
  
  // Respond to payment gateway
  res.status(200).json({ received: true });
});

// GET /api/payments/history - Get payment history (admin only)
router.get('/history', (req, res) => {
  // Mock payment history - replace with database queries
  const payments = [
    {
      id: 1,
      amount: 100,
      donor: 'Anonymous',
      timestamp: '2024-01-15T10:30:00Z',
      status: 'SUCCESS',
      purpose: 'Event Support'
    },
    {
      id: 2,
      amount: 250,
      donor: 'Rajesh Kumar',
      timestamp: '2024-01-14T15:45:00Z',
      status: 'SUCCESS',
      purpose: 'Cultural Program'
    }
  ];
  
  res.json(payments);
});

module.exports = router;