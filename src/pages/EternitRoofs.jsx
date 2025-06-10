import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function EternitRoofs() {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = React.useState(null);

  const eternitRoofProducts = [
    {
      id: 'eternit-1',
      name: 'Eternit Baltic Klasika',
      price: 19.99,
      image: '/products/eternit-klasika.jpg',
      description: 'Klassikaline eterniitplaat traditsioonilise lainelise profiiliga. Vastupidav ja usaldusväärne lahendus igale katusele.',
      features: [
        'Keskkonnasõbralik',
        'Vastupidav',
        'Ilmastikukindel',
        'Tulekindel',
        'Lihtne paigaldada',
        'Garantii 15 aastat'
      ],
      specifications: {
        'Materjal': 'Kiudtsement',
        'Mõõdud': '1130x1250 mm',
        'Paksus': '6.0 mm',
        'Värv': 'Hall/Must/Punane',
        'Minimaalne kalle': '15°'
      }
    },
    {
      id: 'eternit-2',
      name: 'Eternit Baltic Villa',
      price: 22.99,
      image: '/products/eternit-villa.jpg',
      description: 'Modernne eterniitplaat sileda pinnaga. Sobib ideaalselt kaasaegse arhitektuuriga hoonetele.',
      features: [
        'Modernne disain',
        'Sile pind',
        'UV-kindel',
        'Külmakindel',
        'Hea mürasummutus',
        'Garantii 20 aastat'
      ],
      specifications: {
        'Materjal': 'Kiudtsement',
        'Mõõdud': '600x600 mm',
        'Paksus': '8.0 mm',
        'Värv': 'Must/Hall/Grafiit',
        'Minimaalne kalle': '25°'
      }
    },
    {
      id: 'eternit-3',
      name: 'Eternit Baltic Premium',
      price: 24.99,
      image: '/products/eternit-premium.jpg',
      description: 'Kõrgekvaliteediline eterniitplaat erilise pinnatöötlusega. Maksimaalne vastupidavus ja esteetiline välimus.',
      features: [
        'Eriline pinnatöötlus',
        'Maksimaalne vastupidavus',
        'Vetthülgav pind',
        'Lai värvivalik',
        'Lihtne hooldada',
        'Garantii 30 aastat'
      ],
      specifications: {
        'Materjal': 'Kiudtsement',
        'Mõõdud': '1130x1250 mm',
        'Paksus': '6.5 mm',
        'Värv': 'Must/Hall/Pruun/Punane',
        'Minimaalne kalle': '15°'
      }
    }
  ];

  const handleAddToCart = (product) => {
    addToCart(product);
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">Eterniitkatused</h1>
        <p className="text-xl text-gray-600">
          Vastupidavad ja keskkonnasõbralikud eterniitkatused
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="prose prose-lg">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Oleme Eternit Baltic ametlik partner ja edasimüüja.
            </p>
            <p className="text-lg text-gray-700">
              Eternit Baltic on Põhjamaade juhtiv kiudtsementplaatide tootja, kelle tooted on tuntud oma kvaliteedi ja vastupidavuse poolest.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Eterniitkatused on keskkonnasõbralik ja vastupidav valik. Tänapäevane eterniit on valmistatud tsemendist, lubjakivist, tselluloosist ja PVA kiududest, mis muudab selle eriti tugevaks ja ilmastikukindlaks.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              Eterniitkatuste eelised:
            </p>
            <ul className="mt-4 space-y-2">
              <li>✓ Pikk kasutusiga (30+ aastat)</li>
              <li>✓ Keskkonnasõbralik materjal</li>
              <li>✓ Suurepärane hinna ja kvaliteedi suhe</li>
              <li>✓ Hea mürasummutus</li>
              <li>✓ Lihtne paigaldada ja hooldada</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/bestor.png"
              alt="Eternit Baltic katused"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="grid grid-cols-1 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
              <ul className="space-y-3 text-gray-600">
                <li>✓ Tasuta konsultatsioon</li>
                <li>✓ Mõõtmine objektil</li>
                <li>✓ Professionaalne paigaldus</li>
                <li>✓ Garantiiremont</li>
                <li>✓ Hooldus ja remont</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-12">Meie tooted</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {eternitRoofProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-black mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Omadused:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">✓</span>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold mb-2">Tehnilised andmed:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="text-sm">
                        <span className="text-gray-500">{key}:</span>
                        <span className="text-gray-900 ml-1">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-2xl font-bold text-black">€{product.price}/m²</span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`px-6 py-2 rounded-lg transition-colors ${
                      addedToCart === product.id
                        ? 'bg-green-500 text-white'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {addedToCart === product.id ? 'Lisatud ✓' : 'Lisa ostukorvi'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
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

export default EternitRoofs; 