import React from 'react';
import { Link } from 'react-router-dom';

function Accessories() {
  const products = [
    {
      id: 10,
      name: 'Katuse Lisaplekid',
      description: 'Professionaalsed lisaplekid katuse servadele ja üleminekutele',
      price: 49.99,
      image: '/products/metal-accessories.jpg',
    },
    {
      id: 11,
      name: 'Korstna Plekitööd',
      description: 'Kvaliteetsed korstna plekitööd ja ühendused',
      price: 79.99,
      image: '/products/chimney-work.jpg',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Katuse lisaplekid ja plekksepatööd</h1>
        <p className="text-xl text-gray-600">
          Professionaalsed plekksepatööd ja kvaliteetsed lisaplekid teie katusele
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Meie plekksepatööd</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Katuse lisaplekid</li>
            <li>✓ Korstna plekitööd</li>
            <li>✓ Katuse läbiviigud</li>
            <li>✓ Räästaplekid</li>
            <li>✓ Harjaplekid</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Miks valida meid?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Pikaajaline kogemus</li>
            <li>✓ Professionaalne töö</li>
            <li>✓ Kvaliteetsed materjalid</li>
            <li>✓ Kiire teostus</li>
            <li>✓ Garantii tehtud töödele</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover"
              onError={(e) => {
                e.target.src = '/images/placeholder.jpg';
              }}
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600 mb-4">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  €{product.price.toFixed(2)}
                </span>
                <Link
                  to={`/product/${product.id}`}
                  className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                >
                  Vaata lähemalt
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link
          to="/contact"
          className="inline-block bg-black text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Küsi pakkumist
        </Link>
      </div>
    </div>
  );
}

export default Accessories; 