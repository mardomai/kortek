import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// Import products from ProductPage
const products = [
  // Metal Roofs
  {
    id: 1,
    category: 'metal',
    name: 'Klassikaline Plekk-katus',
    price: 29.99,
    image: '/products/metal-roof.jpg',
    description: 'Kvaliteetne plekk-katuse paneel suurepärase vastupidavuse ja ilmastikukindlusega.',
  },
  // Tile Roofs
  {
    id: 2,
    category: 'tile',
    name: 'Keraamilised Katusekivid',
    price: 4.99,
    image: '/products/tile-roof.jpg',
    description: 'Traditsioonilised keraamilised katusekivid klassikalise välimuse ja pikaajalise kaitsega.',
  },
  // Eternit Roofs
  {
    id: 3,
    category: 'eternit',
    name: 'Eterniit Katuseplaadid',
    price: 19.99,
    image: '/products/eternit-roof.jpg',
    description: 'Vastupidavad eterniitplaadid usaldusväärseks ja kuluefektiivseks katuse lahenduseks.',
  },
];

const categoryTitles = {
  metal: 'Plekk-katused',
  tile: 'Kivikatused',
  eternit: 'Eterniitkatused',
};

function Products() {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = useState(null);
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
          {category ? categoryTitles[category] : 'Meie tooted'}
        </h1>
        <p className="mt-4 text-xl text-gray-600">
          Kvaliteetsed katusekatted ja fassaadimaterjalid
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
                onError={(e) => {
                  e.target.src = '/images/placeholder.jpg';
                }}
              />
            </Link>
            
            <div className="p-6">
              <Link 
                to={`/product/${product.id}`}
                className="block mb-2"
              >
                <h2 className="text-xl font-semibold text-gray-900 hover:text-gray-600">
                  {product.name}
                </h2>
              </Link>
              
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  €{product.price.toFixed(2)}
                </span>
                
                <button
                  onClick={() => handleAddToCart(product)}
                  className={`px-4 py-2 rounded-lg transition-colors ${
                    addedToCart === product.id
                      ? 'bg-green-500 text-white'
                      : 'bg-black text-white hover:bg-gray-800'
                  }`}
                >
                  {addedToCart === product.id ? 'Lisatud ✓' : 'Lisa korvi'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products; 