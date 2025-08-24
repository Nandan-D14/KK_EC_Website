const express = require('express');
const router = express.Router();

// GET /api/events - Get all events
router.get('/', (req, res) => {
  // Mock data - replace with database queries
  const events = [
    {
      id: 1,
      title: "Kannada Rajyotsava 2024",
      date: "2024-11-01",
      description: "Grand celebration of Karnataka Formation Day",
      year: 2024,
      images: ["event1.jpg", "event2.jpg"]
    },
    {
      id: 2,
      title: "Cultural Night 2024",
      date: "2024-10-15",
      description: "Traditional dance and music performances",
      year: 2024,
      images: ["cultural1.jpg", "cultural2.jpg"]
    }
  ];
  
  res.json(events);
});

// GET /api/events/:year - Get events by year
router.get('/:year', (req, res) => {
  const year = parseInt(req.params.year);
  // Mock data - filter by year
  const events = [
    {
      id: 1,
      title: `Kannada Rajyotsava ${year}`,
      date: `${year}-11-01`,
      description: "Grand celebration of Karnataka Formation Day",
      year: year,
      images: ["event1.jpg", "event2.jpg"]
    }
  ];
  
  res.json(events);
});

// POST /api/events - Create new event
router.post('/', (req, res) => {
  const { title, date, description, year, images } = req.body;
  
  // Validation
  if (!title || !date || !description || !year) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Mock response - replace with database insertion
  const newEvent = {
    id: Date.now(),
    title,
    date,
    description,
    year,
    images: images || []
  };
  
  res.status(201).json(newEvent);
});

module.exports = router;