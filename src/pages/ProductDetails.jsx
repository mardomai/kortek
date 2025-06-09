import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// This would typically come from an API
const products = [
  // Metal Roofs
  {
    id: 1,
    name: 'Ruukki Classic C',
    description: 'Klassikaline katuseplekk, mis sobib igale majale. Ruukki Classic on kõrgekvaliteetne teraskatuse lahendus, mis on loodud põhjamaisele kliimale. See on vastupidav, ilmastikukindel ja lihtne paigaldada.',
    price: 24.99,
    image: '/images/products/ruukki-classic.jpg',
    category: 'Plekk-katused',
    features: [
      'Vastupidav põhjamaisele kliimale',
      'Lihtne paigaldada',
      'Pikaajaline garantii',
      'Klassikaline disain',
    ],
    specifications: {
      'Materjal': 'Tsingitud teras',
      'Kattekiht': 'Purex',
      'Paksus': '0.5 mm',
      'Kasulik laius': '475 mm',
    },
  },
  {
    id: 2,
    name: 'Ruukki Hyygge',
    description: 'Modernne ja minimalistlik katusekate, mis sobib tänapäevase arhitektuuriga. Ruukki Hyygge on uuenduslik lahendus, mis ühendab endas skandinaavia disaini ja kaasaegse tehnoloogia.',
    price: 29.99,
    image: '/images/products/ruukki-hyygge.jpg',
    category: 'Plekk-katused',
    features: [
      'Modernne disain',
      'Suurepärane ilmastikukindlus',
      'Lihtne hooldada',
      'Uuenduslik tehnoloogia',
    ],
    specifications: {
      'Materjal': 'Tsingitud teras',
      'Kattekiht': 'GreenCoat Pural Matt',
      'Paksus': '0.6 mm',
      'Kasulik laius': '1140 mm',
    },
  },
  {
    id: 3,
    name: 'Ruukki Adamante',
    description: 'Tugev ja vastupidav katuseplekk, mis sobib nii uutele kui ka renoveeritavatele hoonetele. Ruukki Adamante on tuntud oma vastupidavuse ja elegantse välimuse poolest.',
    price: 27.99,
    image: '/images/products/ruukki-adamante.jpg',
    category: 'Plekk-katused',
    features: [
      'Elegantne välimus',
      'Suur vastupidavus',
      'Sobib kõikidele hoonetele',
      'Kvaliteetne viimistlus',
    ],
    specifications: {
      'Materjal': 'Tsingitud teras',
      'Kattekiht': 'Purex',
      'Paksus': '0.5 mm',
      'Kasulik laius': '1125 mm',
    },
  },
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
  {
    id: 7,
    name: 'Lumetõke Standard',
    description: 'Kvaliteetne lumetõkkesüsteem katusele, mis kaitseb inimesi ja vara kukkuva lume eest',
    price: 89.99,
    image: '/products/snow-guard.jpg',
    category: 'Turvatooted',
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
  {
    id: 9,
    name: 'Vihmaveerenn Premium',
    description: 'Kvaliteetne vihmaveerenn katuselt tuleva vee efektiivseks ärajuhtimiseks',
    price: 29.99,
    image: '/products/gutter.jpg',
    category: 'Vihmaveesüsteemid',
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
  // Accessories Products
  {
    id: 10,
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
  {
    id: 11,
    name: 'Otsaplekk Standard',
    description: 'Vastupidav otsaplekk katuse servade kaitsmiseks ja viimistlemiseks',
    price: 15.99,
    image: '/products/verge-flashing.jpg',
    category: 'Lisaplekid',
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
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Toodet ei leitud</h2>
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

  const priceDisplay = product.category === 'Plekk-katused' 
    ? `€${product.price.toFixed(2)} / m²` 
    : `€${product.price.toFixed(2)}`;

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
            <div className="text-sm text-gray-500 mb-2">{product.category}</div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <p className="text-3xl font-bold text-gray-900">{priceDisplay}</p>
          </div>

          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-2">
              Kogus
            </label>
            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <span className="px-4 py-2 border-x">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className={`flex-grow py-3 px-6 rounded-lg transition-colors ${
                  addedToCart
                    ? 'bg-green-500 text-white'
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                {addedToCart ? 'Lisatud ✓' : 'Lisa korvi'}
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

export default ProductDetails; 