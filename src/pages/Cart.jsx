import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { TrashIcon } from '@heroicons/react/24/outline';

function Cart() {
  const navigate = useNavigate();
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl text-primary mb-4">Ostukorv on tühi</h2>
        <button
          onClick={() => navigate('/')}
          className="text-accent hover:text-accent-dark"
        >
          Jätka ostlemist
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-primary mb-8">Ostukorv</h1>

      <div className="grid grid-cols-1 gap-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md p-6 flex items-center"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded"
            />

            <div className="ml-6 flex-grow">
              <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
              <p className="text-accent">${item.price.toFixed(2)}</p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-secondary text-white w-8 h-8 rounded"
                >
                  -
                </button>
                <span className="text-primary text-lg w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-secondary text-white w-8 h-8 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-accent hover:text-accent-dark"
                title="Eemalda"
              >
                <TrashIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center text-xl font-semibold">
          <span className="text-primary">Kokku:</span>
          <span className="text-accent">${cartTotal.toFixed(2)}</span>
        </div>

        <button
          onClick={() => navigate('/checkout')}
          className="mt-6 w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded transition-colors"
        >
          Mine maksma
        </button>
      </div>
    </div>
  );
}

export default Cart; 