import React from 'react';
import { Link } from 'react-router-dom';

function Accessories() {
  const products = [
    {
      id: 11,
      name: 'Harjaplekk Premium',
      description: 'Kvaliteetne harjaplekk katuse harja kaitsmiseks ja viimistlemiseks',
      price: 19.99,
      image: '/products/ridge-flashing.jpg',
      features: [
        'Vastupidav tsingitud teras',
        'UV-kindel pulbervärv',
        'Lihtne paigaldada',
        'Sobib kõikidele katusematerjalidele',
        'Ilmastikukindel',
        'Garantii 10 aastat',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Pikkus': '2000 mm',
        'Laius': '312 mm',
        'Värv': 'Must/Pruun/Hall',
        'Paksus': '0.5 mm',
      }
    },
    {
      id: 12,
      name: 'Otsaplekk Standard',
      description: 'Vastupidav otsaplekk katuse servade kaitsmiseks ja viimistlemiseks',
      price: 15.99,
      image: '/products/verge-flashing.jpg',
      features: [
        'Kvaliteetne tsingitud teras',
        'UV-kindel värv',
        'Universaalne kinnitus',
        'Sobib kõikidele katustele',
        'Vastupidav ilmastikule',
        'Garantii 5 aastat',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Pikkus': '2000 mm',
        'Laius': '150 mm',
        'Värv': 'Must/Pruun/Hall',
        'Paksus': '0.5 mm',
      }
    },
    {
      id: 13,
      name: 'Neeluplekk Pro',
      description: 'Professionaalne neeluplekk katuse neelukohtade kaitsmiseks',
      price: 24.99,
      image: '/products/valley-flashing.jpg',
      features: [
        'Tugevdatud konstruktsioon',
        'UV-kindel pulbervärv',
        'Suur vee läbilaskevõime',
        'Sobib kõikidele katusematerjalidele',
        'Ilmastikukindel',
        'Garantii 10 aastat',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Pikkus': '2000 mm',
        'Laius': '500 mm',
        'Värv': 'Must/Pruun/Hall',
        'Paksus': '0.5 mm',
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Katuse Lisaplekid</h1>
        <p className="text-xl text-gray-600">
          Kvaliteetsed lisaplekid ja plekksepatööd teie katuse täiuslikuks viimistluseks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Miks valida meie lisaplekid?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Kõrgekvaliteediline tsingitud teras</li>
            <li>✓ UV-kindel pulbervärv</li>
            <li>✓ Täpne mõõtmine ja valmistamine</li>
            <li>✓ Professionaalne paigaldus</li>
            <li>✓ Pikaajaline garantii</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Tasuta konsultatsioon</li>
            <li>✓ Mõõtmine objektil</li>
            <li>✓ Plekkdetailide valmistamine</li>
            <li>✓ Professionaalne paigaldus</li>
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

export default Accessories; 