import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

// This would typically come from an API
const products = [
  {
    id: 1,
    name: 'Ruukki Classic C',
    description: 'Klassikaline katuseplekk, mis sobib igale majale. Ruukki Classic on kõrgekvaliteetne teraskatuse lahendus, mis on loodud põhjamaisele kliimale. See on vastupidav, ilmastikukindel ja lihtne paigaldada.',
    price: 24.99,
    image: '/images/products/ruukki-classic.jpg',
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
      <div className="max-w-4xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Toodet ei leitud</h2>
        <button
          onClick={() => navigate('/products')}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
        >
          Tagasi toodete juurde
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg object-cover"
            onError={(e) => {
              e.target.src = '/images/placeholder.jpg';
            }}
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>

          <div className="mb-6">
            <span className="text-3xl font-bold text-gray-900">
              €{product.price.toFixed(2)}
            </span>
            <span className="text-gray-600 ml-2">/ m²</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
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

          {/* Features */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Omadused</h2>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="text-gray-600">{feature}</li>
              ))}
            </ul>
          </div>

          {/* Specifications */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Tehnilised andmed</h2>
            <div className="border rounded-lg overflow-hidden">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div
                  key={key}
                  className={`flex ${
                    index !== 0 ? 'border-t' : ''
                  }`}
                >
                  <div className="w-1/3 p-3 bg-gray-50 font-medium">{key}</div>
                  <div className="w-2/3 p-3">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails; 