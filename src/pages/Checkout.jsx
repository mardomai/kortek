import { useCart } from '../context/CartContext';
import PaymentForm from '../components/PaymentForm';

const Checkout = () => {
  const { items = [], getCartTotal } = useCart();
  const total = getCartTotal();

  // Debug log to check the values
  console.log('Cart items:', items);
  console.log('Total amount:', total);

  const orderDetails = {
    items: items?.length > 0 ? items.map(item => `${item.name} (${item.quantity}x)`).join(', ') : 'No items',
    email: '',
    additionalServices: items?.length > 0 ? 'Standard delivery' : ''
  };

  if (!items || items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6">Checkout</h1>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
          <p className="text-yellow-700">Your cart is empty. Please add items before proceeding to checkout.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="mb-6 p-4 bg-gray-50 rounded-lg">
        <h2 className="text-lg font-semibold mb-2">Order Summary</h2>
        <div className="space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>{item.name} x {item.quantity}</span>
              <span>€{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
          <div className="border-t pt-2 mt-2 font-semibold">
            <div className="flex justify-between">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
      <PaymentForm 
        amount={total}
        orderDetails={orderDetails}
      />
    </div>
  );
};

export default Checkout; 