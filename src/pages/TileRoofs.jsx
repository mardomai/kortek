import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function TileRoofs() {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = React.useState(null);

  const tileRoofProducts = [
    {
      id: 'tile-1',
      name: 'BMI Monier Elegant',
      price: 4.99,
      image: '/products/monier-elegant.jpg',
      description: 'Klassikaline keraamiline katusekivi elegantse disainiga. Sobib ideaalselt nii uutele kui ka renoveeritavatele hoonetele.',
      features: [
        'Naturaalne materjal',
        'Pikk eluiga',
        'Hea soojapidavus',
        'Ilmastikukindel',
        'Tulekindel',
        'Garantii 30 aastat'
      ],
      specifications: {
        'Materjal': 'Keraamiline',
        'Mõõdud': '330x420 mm',
        'Kaal': '3.6 kg/tk',
        'Värv': 'Punane/Must',
        'Minimaalne kalle': '22°'
      }
    },
    {
      id: 'tile-2',
      name: 'BMI Monier Nova',
      price: 3.99,
      image: '/products/monier-nova.jpg',
      description: 'Modernne betoonkivi kaasaegse disainiga. Suurepärane hinna ja kvaliteedi suhe, sobib hästi Põhjamaade kliimasse.',
      features: [
        'Ökonoomne valik',
        'Vastupidav',
        'Lihtne paigaldada',
        'Hea ilmastikukindlus',
        'UV-kindel',
        'Garantii 30 aastat'
      ],
      specifications: {
        'Materjal': 'Betoon',
        'Mõõdud': '330x420 mm',
        'Kaal': '4.2 kg/tk',
        'Värv': 'Must/Pruun/Hall',
        'Minimaalne kalle': '17°'
      }
    },
    {
      id: 'tile-3',
      name: 'BMI Monier Premium',
      price: 5.99,
      image: '/products/monier-premium.jpg',
      description: 'Kõrgekvaliteediline keraamiline katusekivi erilise pinnatöötlusega. Maksimaalne vastupidavus ja esteetiline välimus.',
      features: [
        'Eriline pinnatöötlus',
        'Maksimaalne vastupidavus',
        'Suurepärane ilmastikukindlus',
        'Lai värvivalik',
        'Lihtne hooldada',
        'Garantii 40 aastat'
      ],
      specifications: {
        'Materjal': 'Keraamiline',
        'Mõõdud': '330x420 mm',
        'Kaal': '3.8 kg/tk',
        'Värv': 'Must/Pruun/Hall/Punane',
        'Minimaalne kalle': '20°'
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
        <h1 className="text-4xl font-bold text-black mb-4">Kivikatused</h1>
        <p className="text-xl text-gray-600">
          Vastupidavad ja ajatud kivikatused igale kodule
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="prose prose-lg">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Oleme BMI Monieri ametlik partner ja edasimüüja.
            </p>
            <p className="text-lg text-gray-700">
              BMI Monier on maailma juhtiv katusematerjalide tootja, kelle tooted on tuntud oma kvaliteedi ja vastupidavuse poolest.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Kivikatused on ühed vanimad ja vastupidavamad katusekatte lahendused. Need on looduslikud, ilmastikukindlad ja sobivad ideaalselt Eesti kliimasse.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              Kivikatuste eelised:
            </p>
            <ul className="mt-4 space-y-2">
              <li>✓ Pikk kasutusiga (kuni 100 aastat)</li>
              <li>✓ Suurepärane ilmastikukindlus</li>
              <li>✓ Hea soojapidavus</li>
              <li>✓ Tulekindlus</li>
              <li>✓ Minimaalne hooldus</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/monier.png"
              alt="BMI Monier kivikatused"
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
          {tileRoofProducts.map((product) => (
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
                  <span className="text-2xl font-bold text-black">€{product.price}/tk</span>
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

export default TileRoofs; 