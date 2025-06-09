import React from 'react';
import { Link } from 'react-router-dom';

function Safety() {
  const products = [
    {
      id: 6,
      name: 'Katuse Turvarööbas Pro',
      description: 'Professionaalne turvarööbaste süsteem katuse hoolduseks ja kaitseks',
      price: 159.99,
      image: '/products/roof-safety.jpg',
      features: [
        'Vastupidav tsingitud teras',
        'Lihtne paigaldus',
        'Sobib kõikidele katusematerjalidele',
        'Vastab EN 795 standardile',
        'Komplektis kinnitustarvikud',
        'Kuni 2 inimese samaaegne kasutus',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Pikkus': '3000 mm',
        'Koormustaluvus': '12 kN',
        'Kaal': '4.5 kg/m',
        'Garantii': '10 aastat',
      }
    },
    {
      id: 7,
      name: 'Lumetõke Standard',
      description: 'Kvaliteetne lumetõkkesüsteem katusele, mis kaitseb inimesi ja vara kukkuva lume eest',
      price: 89.99,
      image: '/products/snow-guard.jpg',
      features: [
        'Tugev konstruktsioon',
        'UV-kindel pulbervärv',
        'Sobib kõikidele katusematerjalidele',
        'Lihtne paigaldada',
        'Vastupidav ilmastikule',
        'Esteetiline välimus',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Pikkus': '3000 mm',
        'Kõrgus': '150 mm',
        'Värv': 'Must/Pruun/Hall',
        'Garantii': '5 aastat',
      }
    },
    {
      id: 8,
      name: 'Katuseaste Komfort',
      description: 'Turvaline ja vastupidav katuseaste katuse hoolduseks ja korstnapühkijale',
      price: 45.99,
      image: '/products/roof-step.jpg',
      features: [
        'Mittelibisev pind',
        'Reguleeritav kalle',
        'Vastupidav konstruktsioon',
        'Sobib kõikidele katusematerjalidele',
        'Lihtne paigaldada',
        'Ilmastikukindel',
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Laius': '350 mm',
        'Koormustaluvus': '150 kg',
        'Värv': 'Must/Pruun/Hall',
        'Garantii': '5 aastat',
      }
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Katuse Turvatooted</h1>
        <p className="text-xl text-gray-600">
          Professionaalsed katuseturvasüsteemid teie ja teie vara kaitseks
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Miks on turvatooted olulised?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Tagavad ohutuse katuse hooldamisel</li>
            <li>✓ Kaitsevad inimesi ja vara kukkuva lume eest</li>
            <li>✓ Vastavad kõikidele ohutusnõuetele</li>
            <li>✓ Pikaajaline vastupidavus</li>
            <li>✓ Suurendavad kinnisvara väärtust</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Tasuta konsultatsioon</li>
            <li>✓ Professionaalne paigaldus</li>
            <li>✓ Ohutussüsteemide projekteerimine</li>
            <li>✓ Iga-aastane ülevaatus</li>
            <li>✓ Sertifitseeritud paigaldus</li>
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

export default Safety; 