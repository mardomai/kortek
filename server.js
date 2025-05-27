const dotenv = require('dotenv');

// Load environment variables first
dotenv.config();

const express = require('express');
const { createServer: createViteServer } = require('vite');
const stripeMiddleware = require('./server/middleware');
const cors = require('cors');

async function createServer() {
  const app = express();
  
  // Enable CORS first
  app.use(cors());
  
  // Handle Stripe webhook raw body before JSON parser
  app.use('/api/stripe/webhook', express.raw({ type: 'application/json' }));
  
  // Parse JSON payloads for other routes
  app.use(express.json());

  // Use Stripe middleware for API routes
  app.use('/api', stripeMiddleware);

  // Create Vite server in middleware mode and use its middleware last
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });

  app.use(vite.middlewares);

  const port = process.env.PORT || 5173;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer().catch((err) => {
  console.error('Error starting server:', err);
  process.exit(1);
}); 