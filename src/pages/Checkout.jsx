import React, { useState, useEffect } from 'react';
import PaymentForm from '../components/PaymentForm';
import { useCart } from '../context/CartContext';

const CheckoutSteps = {
  SHIPPING: 'shipping',
  PAYMENT: 'payment',
  CONFIRMATION: 'confirmation'
};

const CHECKOUT_STATE_KEY = 'kortek_checkout_state';

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState(() => {
    const savedState = localStorage.getItem(CHECKOUT_STATE_KEY);
    if (savedState) {
      const { step } = JSON.parse(savedState);
      return step;
    }
    return CheckoutSteps.SHIPPING;
  });

  const [formData, setFormData] = useState(() => {
    const savedState = localStorage.getItem(CHECKOUT_STATE_KEY);
    if (savedState) {
      const { data } = JSON.parse(savedState);
      return data;
    }
    return {
      shipping: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
      },
      additionalInfo: ''
    };
  });

  // Save state to localStorage whenever it changes
  useEffect(() => {
    const stateToSave = {
      step: currentStep,
      data: formData
    };
    localStorage.setItem(CHECKOUT_STATE_KEY, JSON.stringify(stateToSave));
  }, [currentStep, formData]);

  // Clear localStorage when reaching confirmation
  useEffect(() => {
    if (currentStep === CheckoutSteps.CONFIRMATION) {
      localStorage.removeItem(CHECKOUT_STATE_KEY);
    }
  }, [currentStep]);

  // Clear localStorage when component unmounts if not in the middle of checkout
  useEffect(() => {
    return () => {
      const savedState = localStorage.getItem(CHECKOUT_STATE_KEY);
      if (savedState) {
        const { step } = JSON.parse(savedState);
        if (step === CheckoutSteps.CONFIRMATION) {
          localStorage.removeItem(CHECKOUT_STATE_KEY);
        }
      }
    };
  }, []);

  const steps = [
    { id: CheckoutSteps.SHIPPING, label: 'Tarneinfo' },
    { id: CheckoutSteps.PAYMENT, label: 'Maksmine' },
    { id: CheckoutSteps.CONFIRMATION, label: 'Kinnitus' }
  ];

  const handleInputChange = (section, field, value) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const calculateTotal = () => {
    return cartTotal || 0;
  };

  const renderStepIndicator = () => (
    <div className="mb-8">
      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                currentStep === step.id ? 'bg-white border-gray-400 text-gray-600' :
                steps.indexOf({ id: currentStep }) > index ? 'bg-white border-green-500 text-green-500' :
                'bg-white border-gray-300 text-gray-400'
              }`}>
                {steps.indexOf({ id: currentStep }) > index ? '✓' : index + 1}
              </div>
              <span className="text-sm mt-2">{step.label}</span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 h-0.5 bg-gray-200 mx-4" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  const renderShippingForm = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold mb-8">Tarneinfo</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Eesnimi *</label>
          <input
            type="text"
            required
            value={formData.shipping.firstName}
            onChange={(e) => handleInputChange('shipping', 'firstName', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0 py-3 px-4 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Perekonnanimi *</label>
          <input
            type="text"
            required
            value={formData.shipping.lastName}
            onChange={(e) => handleInputChange('shipping', 'lastName', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0 py-3 px-4 text-lg"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">E-post *</label>
        <input
          type="email"
          required
          value={formData.shipping.email}
          onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0 py-3 px-4 text-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
        <input
          type="tel"
          required
          value={formData.shipping.phone}
          onChange={(e) => handleInputChange('shipping', 'phone', e.target.value)}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0 py-3 px-4 text-lg"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Aadress *</label>
        <input
          type="text"
          required
          value={formData.shipping.address}
          onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0 py-3 px-4 text-lg"
        />
      </div>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Linn *</label>
          <input
            type="text"
            required
            value={formData.shipping.city}
            onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0 py-3 px-4 text-lg"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Postiindeks *</label>
          <input
            type="text"
            required
            value={formData.shipping.postalCode}
            onChange={(e) => handleInputChange('shipping', 'postalCode', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0 py-3 px-4 text-lg"
          />
        </div>
      </div>
    </div>
  );

  const renderOrderSummary = () => (
    <div className="bg-gray-50 p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Tellimuse kokkuvõte</h3>
      <div className="space-y-4">
        <div className="flex justify-between">
          <span>Vahesumma:</span>
          <span>€{calculateTotal().toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Käibemaks (20%):</span>
          <span>€{(calculateTotal() * 0.2).toFixed(2)}</span>
        </div>
        <div className="border-t pt-4 font-semibold">
          <div className="flex justify-between">
            <span>Kokku:</span>
            <span>€{(calculateTotal() * 1.2).toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );

  const renderCurrentStep = () => {
    switch (currentStep) {
      case CheckoutSteps.SHIPPING:
        return renderShippingForm();
      case CheckoutSteps.PAYMENT:
        return (
          <div>
            <PaymentForm
              amount={calculateTotal() * 1.2}
              orderDetails={{
                ...formData.shipping,
                items: cart?.map(item => item.name).join(', '),
              }}
            />
          </div>
        );
      case CheckoutSteps.CONFIRMATION:
        return (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold mb-4">Aitäh tellimuse eest!</h2>
            <p className="text-gray-600">
              Teie tellimus on vastu võetud. Saatsime teile e-kirja tellimuskinnitusega.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  const handleNext = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex < steps.length - 1) {
      // Validate shipping form before proceeding
      if (currentStep === CheckoutSteps.SHIPPING) {
        const shippingForm = document.querySelector('form');
        if (shippingForm && !shippingForm.checkValidity()) {
          shippingForm.reportValidity();
          return;
        }
      }
      setCurrentStep(steps[currentIndex + 1].id);
    }
  };

  const handleBack = () => {
    const currentIndex = steps.findIndex(step => step.id === currentStep);
    if (currentIndex > 0) {
      setCurrentStep(steps[currentIndex - 1].id);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {renderStepIndicator()}
      <form onSubmit={(e) => e.preventDefault()} noValidate={false}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {renderCurrentStep()}
          </div>
          <div className="md:col-span-1">
            {renderOrderSummary()}
            <div className="mt-6 space-y-4">
              {currentStep !== CheckoutSteps.CONFIRMATION && (
                <>
                  {currentStep !== CheckoutSteps.SHIPPING && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                    >
                      Tagasi
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-full px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    {currentStep === CheckoutSteps.PAYMENT ? 'Kinnita tellimus' : 'Jätka'}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
} 