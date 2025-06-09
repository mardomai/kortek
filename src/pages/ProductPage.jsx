import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = React.useState(false);
  const [quantity, setQuantity] = React.useState(1);

  // This would typically come from an API or database
  // For now, we'll combine all products from different categories
  const allProducts = [
    // VELUX Windows
    {
      id: 4,
      name: 'VELUX Standard Plus GLL 1064',
      description: 'Sooja- ja helipidav kolmekordse klaaspaketiga katuseaken',
      price: 591.00,
      image: '/products/roof-window.jpg',
      category: 'Katuseaknad',
      features: [
        'Lakitud puitaken',
        'Integreeritud tuulutusklapp',
        'Tolmu- ja putukafilter',
        'Täiustatud heliisolatsioon',
        'Klaaspaketil lihtsasti puhastatav kate',
        'Energiatõhus 3-kordne klaaspakett (Uw 1,0)',
      ],
      specifications: {
        'Materjal': 'Lakitud männipuit',
        'Avamisviis': 'Ülalt avatav',
        'Klaaspakett': '3-kordne',
        'Soojapidavus': 'Uw 1,0 W/(m²K)',
        'Mõõt': '78x118 cm',
      }
    },
    {
      id: 5,
      name: 'VELUX Premium GGL 3068',
      description: 'Kõrgema klassi katuseaken täiustatud soojusisolatsiooni ja mürasummutusega',
      price: 641.00,
      image: '/products/roof-window-premium.jpg',
      category: 'Katuseaknad',
      features: [
        'Lakitud puitaken',
        'Lamineeritud sisemine klaas turvalisuse tagamiseks',
        'Elegantne disain ja mugav käepide',
        'Väga hea helipidavus',
        'Klaaspaketil kastevastane ja lihtsalt puhastatav kate',
        'Võimalik muuta kaugjuhitavaks',
      ],
      specifications: {
        'Materjal': 'Lakitud männipuit',
        'Avamisviis': 'Ülalt avatav',
        'Klaaspakett': '3-kordne',
        'Soojapidavus': 'Uw 1,0 W/(m²K)',
        'Mõõt': '78x118 cm',
      }
    },
    {
      id: 6,
      name: 'VELUX Standard GLU 0061',
      description: 'Hooldusvaba valge polüuretaankattega katuseaken',
      price: 591.00,
      image: '/products/roof-window-white.jpg',
      category: 'Katuseaknad',
      features: [
        'Puitaken valge polüuretaankattega',
        'Hooldusvaba ja niiskuskindel',
        'Integreeritud tuulutusklapp',
        'Tolmu- ja putukafilter',
        'Energiatõhus 3-kordne klaaspakett',
        'Lisatihend õhukindluse täiustamiseks',
      ],
      specifications: {
        'Materjal': 'Polüuretaankattega puit',
        'Avamisviis': 'Ülalt avatav',
        'Klaaspakett': '3-kordne',
        'Soojapidavus': 'Uw 1,1 W/(m²K)',
        'Mõõt': '78x118 cm',
      }
    },
    // Safety Products
    {
      id: 6,
      name: 'Katuse Turvarööbas Pro',
      description: 'Professionaalne turvarööbaste süsteem katuse hoolduseks ja kaitseks',
      price: 159.99,
      image: '/products/roof-safety.jpg',
      category: 'Turvatooted',
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
    // Drainage Products
    {
      id: 8,
      name: 'Vihmaveesüsteemi Komplekt Pro',
      description: 'Täielik vihmaveesüsteemi komplekt koos vihmaveetorude ja ühendustega',
      price: 89.99,
      image: '/products/drainage-system.jpg',
      category: 'Vihmaveesüsteemid',
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
    // Accessories Products
    {
      id: 11,
      name: 'Harjaplekk Premium',
      description: 'Kvaliteetne harjaplekk katuse harja kaitsmiseks ja viimistlemiseks',
      price: 19.99,
      image: '/products/ridge-flashing.jpg',
      category: 'Lisaplekid',
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
  ];

  const product = allProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Toodet ei leitud</h1>
          <p className="text-gray-600 mb-8">Kahjuks ei leitud toodet ID-ga {id}.</p>
          <Link
            to="/"
            className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
          >
            Tagasi avalehele
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate(-1)}
        className="mb-8 text-gray-600 hover:text-black transition-colors flex items-center"
      >
        ← Tagasi
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </div>

        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <p className="text-3xl font-bold text-gray-900">€{product.price.toFixed(2)}</p>
          </div>

          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Kogus
            </label>
            <div className="flex items-center space-x-4">
              <input
                type="number"
                id="quantity"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
              />
              <button
                onClick={handleAddToCart}
                className={`px-6 py-2 rounded transition-colors ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedToCart ? 'Lisatud' : 'Lisa korvi'}
              </button>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Omadused:</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tehnilised andmed:</h2>
            <div className="grid grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="border-b border-gray-200 pb-2">
                  <dt className="text-sm font-medium text-gray-500">{key}</dt>
                  <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                </div>
              ))}
            </div>
          </div>
        </div>
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

export default ProductPage; 