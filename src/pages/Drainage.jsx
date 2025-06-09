import React from 'react';
import { Link } from 'react-router-dom';

function Drainage() {
  const products = [
    {
      id: 8,
      name: 'Vihmaveesüsteemi Komplekt',
      description: 'Täielik vihmaveesüsteemi komplekt koos vihmaveetorude ja ühendustega',
      price: 89.99,
      image: '/products/drainage-system.jpg',
    },
    {
      id: 9,
      name: 'Vihmaveerenn',
      description: 'Kvaliteetne vihmaveerenn katuselt tuleva vee efektiivseks ärajuhtimiseks',
      price: 29.99,
      image: '/products/gutter.jpg',
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Vihmaveesüsteemid</h1>
        <p className="text-xl text-gray-600">
          Kvaliteetsed vihmaveesüsteemid teie maja kaitseks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Miks on vihmaveesüsteem oluline?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Kaitseb maja vundamenti</li>
            <li>✓ Hoiab ära niiskuskahjustused</li>
            <li>✓ Pikendab maja eluiga</li>
            <li>✓ Säästab raha remondikuludelt</li>
            <li>✓ Tagab kuiva ja turvalise keskkonna</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Vihmaveesüsteemide projekteerimine</li>
            <li>✓ Professionaalne paigaldus</li>
            <li>✓ Regulaarne hooldus</li>
            <li>✓ Rennide puhastus</li>
            <li>✓ Süsteemi remont ja uuendamine</li>
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

export default Drainage; 