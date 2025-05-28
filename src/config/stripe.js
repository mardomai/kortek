import { loadStripe } from '@stripe/stripe-js';

// Create a custom error handler
const handleStripeError = (error) => {
  // Ignore analytics-related errors
  if (error?.message?.includes('r.stripe.com') || 
      error?.message?.includes('Failed to fetch') ||
      error?.message?.includes('ERR_BLOCKED_BY_CLIENT')) {
    return;
  }
  console.error('Stripe error:', error);
};

// Initialize Stripe with error handling
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY, {
  apiVersion: '2023-10-16', // Use the latest API version
  locale: 'et', // Set locale to Estonian
  betas: ['elements_enable_deferred_intent_beta_1'],
  stripeAccount: undefined, // Add this to disable analytics
  advancedFraudSignals: false, // Disable advanced fraud signals
}).catch(handleStripeError);

// Log successful initialization
stripePromise.then(
  (stripe) => {
    if (stripe) {
      console.log('Stripe initialized successfully');
    }
  },
  handleStripeError
);

export default stripePromise; 