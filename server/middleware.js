const express = require('express');
const router = express.Router();

// Middleware to verify Stripe webhook signatures
const verifyStripeWebhook = (req, res, next) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  // Skip verification if no webhook secret is configured
  if (!endpointSecret) {
    console.log('Skipping webhook verification - no webhook secret configured');
    return next();
  }

  if (!sig) {
    return res.status(400).send('No Stripe signature found');
  }

  try {
    const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      endpointSecret
    );
    req.stripeEvent = event;
    next();
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
};

// Apply webhook verification middleware only to webhook routes
router.use('/stripe/webhook', verifyStripeWebhook);

module.exports = router; 