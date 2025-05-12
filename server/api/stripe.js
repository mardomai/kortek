const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

// Create a payment intent
router.post('/create-payment-intent', async (req, res) => {
  try {
    const { amount, currency = 'eur', email, metadata = {} } = req.body;

    if (!amount) {
      return res.status(400).json({ error: 'Summa on kohustuslik' });
    }

    // Create a customer if email is provided
    let customer;
    if (email) {
      const customers = await stripe.customers.list({ email });
      customer = customers.data[0] || await stripe.customers.create({ email });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(amount * 100), // Convert to cents
      currency,
      customer: customer?.id,
      metadata: {
        ...metadata,
        email,
      },
      automatic_payment_methods: {
        enabled: true,
      },
      description: `Order: ${metadata.items || 'Product purchase'}`,
    });

    res.json({
      clientSecret: paymentIntent.client_secret,
      customerId: customer?.id,
    });
  } catch (error) {
    console.error('Error creating payment intent:', error);
    res.status(500).json({ 
      error: 'Makse algatamine ebaõnnestus',
      details: error.message 
    });
  }
});

// Webhook handler for Stripe events
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  try {
    switch (event.type) {
      case 'payment_intent.succeeded':
        const paymentIntent = event.data.object;
        console.log('Payment succeeded:', {
          id: paymentIntent.id,
          amount: paymentIntent.amount / 100,
          customer: paymentIntent.customer,
          metadata: paymentIntent.metadata,
        });
        // Here you would typically:
        // 1. Update order status in your database
        // 2. Send confirmation email
        // 3. Trigger any necessary fulfillment processes
        break;

      case 'payment_intent.payment_failed':
        const failedPayment = event.data.object;
        console.log('Payment failed:', {
          id: failedPayment.id,
          amount: failedPayment.amount / 100,
          customer: failedPayment.customer,
          error: failedPayment.last_payment_error,
        });
        // Here you would typically:
        // 1. Update order status in your database
        // 2. Send notification to customer
        break;

      case 'customer.subscription.created':
        const subscription = event.data.object;
        console.log('Subscription created:', subscription.id);
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