# Kannada Rajyotsava Backend

Backend API for the PESU Kannada Kutta Rajyotsava website.

## Features

- Event management API
- Team member management
- UPI payment integration
- RESTful endpoints
- CORS enabled for frontend integration

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create environment file:
   ```bash
   cp .env.example .env
   ```

3. Update environment variables in `.env`

4. Start development server:
   ```bash
   npm run dev
   ```

## API Endpoints

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:year` - Get events by year
- `POST /api/events` - Create new event

### Team
- `GET /api/team` - Get all team members
- `GET /api/team/:year` - Get team by year
- `POST /api/team` - Add team member

### Payments
- `GET /api/payments/upi-info` - Get UPI details
- `POST /api/payments/verify` - Verify payment
- `POST /api/payments/webhook` - Payment webhook
- `GET /api/payments/history` - Payment history

### Health
- `GET /api/health` - Server health check

## Environment Variables

- `PORT` - Server port (default: 5000)
- `NODE_ENV` - Environment (development/production)
- `DB_*` - Database configuration
- `UPI_*` - Payment gateway configuration
- `EMAIL_*` - Email service configuration
- `JWT_SECRET` - JWT signing secret

## Development

- `npm run dev` - Start with nodemon
- `npm start` - Start production server