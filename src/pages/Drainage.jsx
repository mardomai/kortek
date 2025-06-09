import React from 'react';
import { Link } from 'react-router-dom';

function Drainage() {
  const products = [
    {
      id: 8,
      name: 'Vihmaveesüsteemi Komplekt Pro',
      description: 'Täielik vihmaveesüsteemi komplekt koos vihmaveetorude ja ühendustega',
      price: 89.99,
      image: '/products/drainage-system.jpg',
      features: [
        'Tsingitud teras, kaetud UV-kindla värviga',
        'Lihtne paigaldada',
        'Komplektis kõik vajalikud ühendused',
        'Sobib kõikidele katusematerjalidele',
        'Vastupidav ilmastikule',
        'Garantii 10 aastat',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Renni läbimõõt': '125 mm',
        'Toru läbimõõt': '87 mm',
        'Värv': 'Must/Pruun/Valge',
        'Komplekti pikkus': '20 m',
      }
    },
    {
      id: 9,
      name: 'Vihmaveerenn Premium',
      description: 'Kvaliteetne vihmaveerenn katuselt tuleva vee efektiivseks ärajuhtimiseks',
      price: 29.99,
      image: '/products/gutter.jpg',
      features: [
        'Vastupidav konstruktsioon',
        'UV-kindel pulbervärv',
        'Lihtne paigaldada',
        'Suur vee läbilaskevõime',
        'Ei roosteta',
        'Garantii 15 aastat',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Läbimõõt': '125/150 mm',
        'Pikkus': '3000 mm',
        'Värv': 'Must/Pruun/Valge',
        'Paksus': '0.6 mm',
      }
    },
    {
      id: 10,
      name: 'Vihmaveetoru Komplekt',
      description: 'Professionaalne vihmaveetorude komplekt koos kinnitustega',
      price: 39.99,
      image: '/products/downpipe.jpg',
      features: [
        'Tugev ja vastupidav',
        'Lihtne paigaldada',
        'Komplektis kinnitused',
        'Sobib kõikidele hoonetele',
        'Ilmastikukindel',
        'Garantii 10 aastat',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Läbimõõt': '87/100 mm',
        'Pikkus': '3000 mm',
        'Värv': 'Must/Pruun/Valge',
        'Paksus': '0.6 mm',
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Vihmaveesüsteemid</h1>
        <p className="text-xl text-gray-600">
          Kvaliteetsed vihmaveesüsteemid teie maja kaitseks ja pikaealisuse tagamiseks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Miks on vihmaveesüsteem oluline?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Kaitseb maja vundamenti ja seinu</li>
            <li>✓ Hoiab ära niiskuskahjustused</li>
            <li>✓ Pikendab maja eluiga</li>
            <li>✓ Säästab raha remondikuludelt</li>
            <li>✓ Tagab kuiva ja turvalise keskkonna</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Tasuta konsultatsioon</li>
            <li>✓ Professionaalne paigaldus</li>
            <li>✓ Süsteemi projekteerimine</li>
            <li>✓ Regulaarne hooldus</li>
            <li>✓ Garantiiremont</li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Omadused:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {product.features.slice(0, 3).map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  €{product.price.toFixed(2)}
                </span>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors"
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