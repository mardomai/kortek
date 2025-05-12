import React, { useState } from 'react';
import PaymentForm from '../components/PaymentForm';
import { useCart } from '../context/CartContext';

const CheckoutSteps = {
  SHIPPING: 'shipping',
  BILLING: 'billing',
  PAYMENT: 'payment',
  CONFIRMATION: 'confirmation'
};

export default function CheckoutPage() {
  const { cart, cartTotal } = useCart();
  const [currentStep, setCurrentStep] = useState(CheckoutSteps.SHIPPING);
  const [formData, setFormData] = useState({
    shipping: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
    },
    billing: {
      sameAsShipping: true,
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      postalCode: '',
    },
    additionalInfo: ''
  });

  const steps = [
    { id: CheckoutSteps.SHIPPING, label: 'Tarneinfo' },
    { id: CheckoutSteps.BILLING, label: 'Arveinfo' },
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

  const handleBillingSameAsShipping = (checked) => {
    setFormData(prev => ({
      ...prev,
      billing: {
        ...prev.billing,
        sameAsShipping: checked,
        ...(checked ? {
          firstName: prev.shipping.firstName,
          lastName: prev.shipping.lastName,
          address: prev.shipping.address,
          city: prev.shipping.city,
          postalCode: prev.shipping.postalCode,
        } : {})
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
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Tarneinfo</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Eesnimi *</label>
          <input
            type="text"
            required
            value={formData.shipping.firstName}
            onChange={(e) => handleInputChange('shipping', 'firstName', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Perekonnanimi *</label>
          <input
            type="text"
            required
            value={formData.shipping.lastName}
            onChange={(e) => handleInputChange('shipping', 'lastName', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">E-post *</label>
        <input
          type="email"
          required
          value={formData.shipping.email}
          onChange={(e) => handleInputChange('shipping', 'email', e.target.value)}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Telefon *</label>
        <input
          type="tel"
          required
          value={formData.shipping.phone}
          onChange={(e) => handleInputChange('shipping', 'phone', e.target.value)}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Aadress *</label>
        <input
          type="text"
          required
          value={formData.shipping.address}
          onChange={(e) => handleInputChange('shipping', 'address', e.target.value)}
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Linn *</label>
          <input
            type="text"
            required
            value={formData.shipping.city}
            onChange={(e) => handleInputChange('shipping', 'city', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Postiindeks *</label>
          <input
            type="text"
            required
            value={formData.shipping.postalCode}
            onChange={(e) => handleInputChange('shipping', 'postalCode', e.target.value)}
            className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
          />
        </div>
      </div>
    </div>
  );

  const renderBillingForm = () => (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold mb-6">Arveinfo</h2>
      <div className="mb-4">
        <label className="flex items-center">
          <input
            type="checkbox"
            checked={formData.billing.sameAsShipping}
            onChange={(e) => handleBillingSameAsShipping(e.target.checked)}
            className="rounded bg-white border-gray-300 text-gray-600 focus:ring-0"
          />
          <span className="ml-2">Sama mis tarneaadress</span>
        </label>
      </div>
      {!formData.billing.sameAsShipping && (
        <>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Eesnimi *</label>
              <input
                type="text"
                required
                value={formData.billing.firstName}
                onChange={(e) => handleInputChange('billing', 'firstName', e.target.value)}
                className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Perekonnanimi *</label>
              <input
                type="text"
                required
                value={formData.billing.lastName}
                onChange={(e) => handleInputChange('billing', 'lastName', e.target.value)}
                className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Aadress *</label>
            <input
              type="text"
              required
              value={formData.billing.address}
              onChange={(e) => handleInputChange('billing', 'address', e.target.value)}
              className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Linn *</label>
              <input
                type="text"
                required
                value={formData.billing.city}
                onChange={(e) => handleInputChange('billing', 'city', e.target.value)}
                className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Postiindeks *</label>
              <input
                type="text"
                required
                value={formData.billing.postalCode}
                onChange={(e) => handleInputChange('billing', 'postalCode', e.target.value)}
                className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
              />
            </div>
          </div>
        </>
      )}
      <div>
        <label className="block text-sm font-medium text-gray-700">Lisainfo</label>
        <textarea
          value={formData.additionalInfo}
          onChange={(e) => handleInputChange('additionalInfo', '', e.target.value)}
          rows="4"
          className="mt-1 block w-full rounded-md bg-white border-gray-300 shadow-sm focus:border-gray-400 focus:ring-0"
          placeholder="Märkused tellimuse kohta..."
        />
      </div>
    </div>
  );

  const renderOrderSummary = () => {
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
        <h3 className="text-lg font-semibold mb-4">Tellimuse kokkuvõte</h3>
        <div className="space-y-3">
          {cart && cart.map((item) => (
            <div key={item.id} className="flex justify-between py-2 border-b border-gray-200">
              <div>
                <span className="font-medium">{item.name}</span>
                <span className="text-gray-600 text-sm block">Kogus: {item.quantity}</span>
              </div>
              <span>€{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between pt-4">
            <span className="font-medium">Kokku:</span>
            <span className="font-semibold">€{calculateTotal().toFixed(2)}</span>
          </div>
        </div>
      </div>
    );
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case CheckoutSteps.SHIPPING:
        return renderShippingForm();
      case CheckoutSteps.BILLING:
        return renderBillingForm();
      case CheckoutSteps.PAYMENT:
        return (
          <div>
            <h2 className="text-xl font-semibold mb-6">Maksmine</h2>
            <PaymentForm
              amount={calculateTotal()}
              orderDetails={{
                email: formData.shipping.email,
                items: cart ? cart.map(item => item.name).join(', ') : '',
                shipping: `${formData.shipping.address}, ${formData.shipping.city}`,
                customer: `${formData.shipping.firstName} ${formData.shipping.lastName}`
              }}
            />
          </div>
        );
      case CheckoutSteps.CONFIRMATION:
        return (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-white border-2 border-green-500 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Tellimus on edukalt esitatud!</h2>
            <p className="text-gray-600">
              Kinnituskiri on saadetud aadressile {formData.shipping.email}
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {renderStepIndicator()}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {renderCurrentStep()}
            
            {currentStep !== CheckoutSteps.CONFIRMATION && (
              <div className="flex justify-between mt-8">
                {currentStep !== CheckoutSteps.SHIPPING && (
                  <button
                    onClick={handleBack}
                    className="px-6 py-2 bg-white border border-gray-400 text-gray-600 rounded-md hover:bg-gray-50"
                  >
                    Tagasi
                  </button>
                )}
                {currentStep !== CheckoutSteps.PAYMENT && (
                  <button
                    onClick={handleNext}
                    className="px-6 py-2 bg-white border border-gray-400 text-gray-600 rounded-md hover:bg-gray-50 ml-auto"
                  >
                    Edasi
                  </button>
                )}
              </div>
            )}
          </div>
          
          <div className="md:col-span-1">
            {renderOrderSummary()}
          </div>
        </div>
      </div>
    </div>
  );
} 