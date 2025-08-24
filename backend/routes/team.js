const express = require('express');
const router = express.Router();

// GET /api/team - Get all team members
router.get('/', (req, res) => {
  // Mock data - replace with database queries
  const team = [
    {
      id: 1,
      name: "Arjun Kumar",
      role: "Club Head",
      year: 2025,
      image: "arjun.jpg",
      bio: "Leading the cultural celebrations with passion",
      contact: "arjun@pesu.pes.edu"
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Cultural Head",
      year: 2025,
      image: "priya.jpg",
      bio: "Organizing traditional performances and events",
      contact: "priya@pesu.pes.edu"
    }
  ];
  
  res.json(team);
});

// GET /api/team/:year - Get team members by year
router.get('/:year', (req, res) => {
  const year = parseInt(req.params.year);
  // Mock data - filter by year
  const team = [
    {
      id: 1,
      name: "Arjun Kumar",
      role: "Club Head",
      year: year,
      image: "arjun.jpg",
      bio: "Leading the cultural celebrations with passion",
      contact: "arjun@pesu.pes.edu"
    }
  ];
  
  res.json(team);
});

// POST /api/team - Add new team member
router.post('/', (req, res) => {
  const { name, role, year, image, bio, contact } = req.body;
  
  // Validation
  if (!name || !role || !year) {
    return res.status(400).json({ error: 'Missing required fields' });
  }
  
  // Mock response - replace with database insertion
  const newMember = {
    id: Date.now(),
    name,
    role,
    year,
    image: image || 'default.jpg',
    bio: bio || '',
    contact: contact || ''
  };
  
  res.status(201).json(newMember);
});

module.exports = router;