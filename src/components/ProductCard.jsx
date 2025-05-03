import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02] duration-200">
      <Link to={`/product/${product.id}`}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
      </Link>
      <div className="p-4">
        <Link
          to={`/product/${product.id}`}
          className="text-black hover:text-gray-700 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        </Link>
        <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-black font-semibold">${product.price.toFixed(2)}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-black hover:bg-gray-800 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Lisa ostukorvi
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard; 