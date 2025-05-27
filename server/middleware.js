const express = require('express');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
}

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const router = express.Router();

// Create payment intent endpoint
router.post('/stripe/create-payment-intent', express.json(), async (req, res) => {
  console.log('Received create-payment-intent request');
  console.log('Request body:', req.body);
  
  try {
    const { amount } = req.body;

    if (!amount || amount <= 0) {
      console.log('Invalid amount:', amount);
      return res.status(400).json({ error: 'Valid amount is required' });
    }

    console.log('Creating payment intent with amount:', amount);

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency: 'eur',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log('Payment intent created:', {
      id: paymentIntent.id,
      clientSecret: paymentIntent.client_secret ? 'exists' : 'missing',
    });

    res.json({
      clientSecret: paymentIntent.client_secret
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Makse algatamine ebaõnnestus',
      details: error.message 
    });
  }
});

// Stripe webhook endpoint
router.post('/stripe/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  console.log('Received webhook request');

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
    console.log('Webhook event type:', event.type);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('Payment succeeded:', {
          id: paymentIntent.id,
          amount: paymentIntent.amount / 100,
          metadata: paymentIntent.metadata,
        });
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('Payment failed:', {
          id: failedPayment.id,
          amount: failedPayment.amount / 100,
          error: failedPayment.last_payment_error,
        });
        break;

      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Error handling webhook event:', err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 