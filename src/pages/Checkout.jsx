import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Checkout() {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

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

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would process the payment
    clearCart();
    navigate('/');
    alert('Täname ostu eest!');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Tarneinfo</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-primary mb-1">Eesnimi</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-secondary rounded bg-white"
              />
            </div>
            <div>
              <label className="block text-primary mb-1">Perekonnanimi</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-secondary rounded bg-white"
              />
            </div>
          </div>

          <div>
            <label className="block text-primary mb-1">E-post</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-secondary rounded bg-white"
            />
          </div>

          <div>
            <label className="block text-primary mb-1">Aadress</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-secondary rounded bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-primary mb-1">Linn</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-secondary rounded bg-white"
              />
            </div>
            <div>
              <label className="block text-primary mb-1">Postiindeks</label>
              <input
                type="text"
                name="zipCode"
                value={formData.zipCode}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-secondary rounded bg-white"
              />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-primary mb-6 mt-8">Makseinfo</h2>

          <div>
            <label className="block text-primary mb-1">Kaardi number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleInputChange}
              required
              className="w-full p-2 border border-secondary rounded bg-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-primary mb-1">Kehtivusaeg</label>
              <input
                type="text"
                name="expiryDate"
                placeholder="KK/AA"
                value={formData.expiryDate}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-secondary rounded bg-white"
              />
            </div>
            <div>
              <label className="block text-primary mb-1">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleInputChange}
                required
                className="w-full p-2 border border-secondary rounded bg-white"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded transition-colors mt-8"
          >
            Maksa (${cartTotal.toFixed(2)})
          </button>
        </form>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-primary mb-6">Tellimuse kokkuvõte</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          {cart.map(item => (
            <div key={item.id} className="flex items-center py-4 border-b border-secondary last:border-0">
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h3 className="text-primary font-medium">{item.name}</h3>
                <p className="text-secondary">Kogus: {item.quantity}</p>
                <p className="text-accent">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="mt-6 pt-6 border-t border-secondary">
            <div className="flex justify-between text-lg font-semibold">
              <span className="text-primary">Kokku:</span>
              <span className="text-accent">${cartTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout; 