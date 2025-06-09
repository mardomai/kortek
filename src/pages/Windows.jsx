import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Windows() {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = React.useState(null);

  const products = [
    {
      id: 4,
      name: 'VELUX Standard Plus GLL 1064',
      description: 'Sooja- ja helipidav kolmekordse klaaspaketiga katuseaken',
      price: 591.00,
      image: '/products/roof-window.jpg',
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
    }
  ];

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity: 1 });
    setAddedToCart(product.id);
    setTimeout(() => setAddedToCart(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-black mb-4">VELUX Katuseaknad</h1>
        <p className="text-xl text-gray-600">
          Päevavalguse ja tervisliku sisekliima spetsialistina pakub VELUX kvaliteetseid katuseaknaid
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Miks valida VELUX?</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Katuseakende kaudu tuleb ruumi 2x rohkem päevavalgust</li>
            <li>✓ Suurepärane soojusisolatsioon</li>
            <li>✓ Lihtne paigaldus ja hooldus</li>
            <li>✓ Pikaajaline garantii</li>
            <li>✓ Lai valik lisatarvikuid</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-black mb-4">Meie teenused</h2>
          <ul className="space-y-3 text-gray-600">
            <li>✓ Tasuta konsultatsioon</li>
            <li>✓ Professionaalne paigaldus</li>
            <li>✓ Garantiiremont</li>
            <li>✓ Hooldus ja remont</li>
            <li>✓ Lisatarvikute paigaldus</li>
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
                <div className="space-x-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`px-4 py-2 rounded transition-colors ${
                      addedToCart === product.id
                        ? 'bg-green-500 text-white'
                        : 'bg-black text-white hover:bg-gray-800'
                    }`}
                  >
                    {addedToCart === product.id ? 'Lisatud' : 'Lisa korvi'}
                  </button>
                  <Link
                    to={`/product/${product.id}`}
                    className="inline-block px-4 py-2 border border-black rounded hover:bg-gray-100 transition-colors"
                  >
                    Vaata lähemalt
                  </Link>
                </div>
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