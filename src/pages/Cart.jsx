import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  if (items.length === 0) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-4">Teie ostukorv on tühi</h2>
          <p className="text-gray-600 mb-6">Lisa tooteid, et alustada ostlemist</p>
          <Link
            to="/products"
            className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Vaata tooteid
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8">Ostukorv</h1>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="md:col-span-2">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex gap-4 p-4 mb-4 bg-white rounded-lg shadow"
            >
              <div className="w-24 h-24 flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>

              <div className="flex-grow">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-600 mb-2">€{item.price.toFixed(2)}</p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                      disabled={item.quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    Eemalda
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  €{(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Tellimuse kokkuvõte</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Vahesumma:</span>
                <span>€{getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Käibemaks (20%):</span>
                <span>€{(getCartTotal() * 0.2).toFixed(2)}</span>
              </div>
              <div className="border-t pt-3">
                <div className="flex justify-between font-semibold">
                  <span>Kokku:</span>
                  <span>€{(getCartTotal() * 1.2).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full bg-black text-white text-center py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Jätka tellimisega
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart; 