import React from 'react';
import { Link } from 'react-router-dom';

function Windows() {
  const products = [
    {
      id: 4,
      name: 'VELUX Standard Plus',
      description: 'Kvaliteetne katuseaken loomuliku valguse ja ventilatsiooni jaoks',
      price: 299.99,
      image: '/products/roof-window.jpg',
    },
    {
      id: 5,
      name: 'VELUX Premium',
      description: 'Kõrgema klassi katuseaken täiustatud soojusisolatsiooni ja mürasummutusega',
      price: 399.99,
      image: '/products/roof-window-premium.jpg',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Katuseaknad</h1>
        <p className="text-xl text-gray-600">
          VELUX katuseaknad tagavad loomuliku valguse ja värske õhu teie katusealusesse ruumi
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Miks valida VELUX?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Suurepärane soojusisolatsioon</li>
            <li>✓ Lihtne paigaldus</li>
            <li>✓ Pikaajaline garantii</li>
            <li>✓ Lai valik lisatarvikuid</li>
            <li>✓ Vastupidavus ekstreemsetes ilmastikutingimustes</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Professionaalne paigaldus</li>
            <li>✓ Tasuta konsultatsioon</li>
            <li>✓ Garantiiremont</li>
            <li>✓ Hooldus ja remont</li>
            <li>✓ Lisatarvikute paigaldus</li>
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

export default Windows; 