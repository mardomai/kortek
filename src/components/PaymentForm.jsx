import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

// Initialize Stripe with the publishable key from environment variables
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

console.log('Stripe publishable key:', import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = ({ amount, orderDetails }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [paymentIntent, setPaymentIntent] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      console.log('Stripe or Elements not loaded');
      return;
    }

    setProcessing(true);
    setError(null);

    try {
      // First, validate the form
      const { error: submitError } = await elements.submit();
      if (submitError) {
        throw submitError;
      }

      // Then confirm the payment
      const { error: confirmError, paymentIntent: confirmedIntent } = await stripe.confirmPayment({
        elements,
        confirmParams: {
          return_url: `${window.location.origin}/payment-success`,
        },
        redirect: 'if_required',
      });

      if (confirmError) {
        throw confirmError;
      }

      if (confirmedIntent.status === 'succeeded') {
        setSucceeded(true);
        setPaymentIntent(confirmedIntent);
      } else if (confirmedIntent.status === 'requires_action') {
        // Handle 3D Secure authentication if needed
        const { error: actionError } = await stripe.handleNextAction({
          clientSecret: confirmedIntent.client_secret
        });
        
        if (actionError) {
          throw actionError;
        }
      }
    } catch (err) {
      console.error('Payment error:', err);
      setError(err.message || 'Makse töötlemisel tekkis viga. Palun proovige uuesti.');
    } finally {
      setProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary Section */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Tellimuse kokkuvõte</h2>
          
          {/* Order Details */}
          <div className="space-y-4">
            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Tooted:</span>
              <span className="font-medium">{orderDetails?.items || 'Katuse paigaldus'}</span>
            </div>
            
            {orderDetails?.additionalServices && (
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-600">Lisateenused:</span>
                <span className="font-medium">{orderDetails.additionalServices}</span>
              </div>
            )}

            <div className="flex justify-between items-center py-2 border-b border-gray-200">
              <span className="text-gray-600">Käibemaks (20%):</span>
              <span className="font-medium">€{((amount * 0.2) || 0).toFixed(2)}</span>
            </div>

            <div className="flex justify-between items-center py-3 font-semibold text-lg">
              <span>Kokku:</span>
              <span>€{amount?.toFixed(2) || '0.00'}</span>
            </div>
          </div>

          {/* Secure Payment Notice */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-2 text-blue-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm">Turvaline makse Stripe'i kaudu</span>
            </div>
          </div>
        </div>

        {/* Payment Form Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Makseandmed</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-white rounded-lg">
              <PaymentElement 
                options={{
                  layout: {
                    type: 'tabs',
                    defaultCollapsed: false,
                  },
                }}
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center gap-2 text-red-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <span>{error}</span>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={!stripe || processing}
              className={`w-full py-3 px-6 rounded-lg transition-colors duration-200 ${
                processing || !stripe
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {processing ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Töötleb...
                </span>
              ) : (
                `Maksa €${amount?.toFixed(2) || '0.00'}`
              )}
            </button>

            {succeeded && (
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center gap-2 text-green-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Makse õnnestus! Teid suunatakse edasi...</span>
                </div>
              </div>
            )}
          </form>

          {/* Payment Methods */}
          <div className="mt-6 flex items-center justify-center space-x-4 text-gray-500">
            <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-8" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

const PaymentForm = ({ amount, orderDetails }) => {
  const [clientSecret, setClientSecret] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (!amount || amount <= 0) {
          throw new Error('Invalid amount');
        }

        // Convert euros to cents for Stripe
        const amountInCents = Math.round(amount * 100);

        const response = await fetch('/api/stripe/create-payment-intent', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            amount: amountInCents,
            email: orderDetails?.email,
            metadata: {
              items: orderDetails?.items,
              additionalServices: orderDetails?.additionalServices
            }
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create payment intent');
        }

        const data = await response.json();
        
        if (!data.clientSecret) {
          throw new Error('No client secret received');
        }

        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error('Error creating payment intent:', error);
        setError(error.message || 'Network error occurred. Please check your connection and try again.');
      } finally {
        setIsLoading(false);
      }
    };

    if (amount && amount > 0) {
      createPaymentIntent();
    }
  }, [amount, orderDetails]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mb-4"></div>
        <div className="text-gray-600">Laeb makse vormi...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
        <div className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 text-sm text-red-600 hover:text-red-800 underline"
        >
          Try again
        </button>
      </div>
    );
  }

  if (!clientSecret) {
    return null;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'stripe',
          variables: {
            colorPrimary: '#000000',
            colorBackground: '#ffffff',
            borderRadius: '8px',
          },
        },
        loader: 'auto',
      }}
    >
      <CheckoutForm amount={amount} orderDetails={orderDetails} />
    </Elements>
  );
};

export default PaymentForm; 