import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

// Using the same mock data from Home.jsx
const products = [
  {
    id: 1,
    category: 'metal',
    name: 'Klassikaline Plekk-katus',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1605800655743-d1f0b29e3f82?w=500',
    description: 'Kvaliteetne plekk-katuse paneel suurepärase vastupidavuse ja ilmastikukindlusega.\n\nOmadused:\n\n- Premium terasest konstruktsioon\n- UV-kindel kate\n- Lihtne paigaldussüsteem\n- 30-aastane garantii\n- Ilmastikukindlad ühendused',
  },
  {
    id: 2,
    category: 'tile',
    name: 'Keraamilised Katusekivid',
    price: 4.99,
    image: 'https://images.unsplash.com/photo-1604761773874-5f7831174a02?w=500',
    description: 'Traditsioonilised keraamilised katusekivid klassikalise välimuse ja pikaajalise kaitsega.\n\nOmadused:\n\n- Külmakindel keraamika\n- Lukustussüsteem\n- Klassikaline välimus\n- 50-aastane eluiga\n- Minimaalne hooldus',
  },
  {
    id: 3,
    category: 'eternit',
    name: 'Eterniit Katuseplaadid',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1605800657235-4c11a97f9f45?w=500',
    description: 'Vastupidavad eterniitplaadid usaldusväärseks ja kuluefektiivseks katuse lahenduseks.\n\nOmadused:\n\n- Kiudtsemendist konstruktsioon\n- Ilmastikukindel\n- Tulekindel\n- Lihtne paigaldus\n- Keskkonnasõbralik',
  },
  {
    id: 4,
    category: 'windows',
    name: 'Katuseaken',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1598977123118-4e20e0d8dc06?w=500',
    description: 'Kaasaegne katuseaken loomulikuks valgustuseks ja ventilatsiooniks.\n\nOmadused:\n\n- Kahekordne klaaspakett\n- Kaugjuhitav avamine\n- Vihmasensor\n- Soojusisolatsioon\n- UV-kaitse',
  },
  {
    id: 5,
    category: 'safety',
    name: 'Katuse Turvarööbas',
    price: 159.99,
    image: 'https://images.unsplash.com/photo-1621203816965-0571e417d523?w=500',
    description: 'Professionaalne turvarööbaste süsteem katuse hoolduseks ja kaitseks.\n\nOmadused:\n\n- Tsingitud terasest konstruktsioon\n- Modulaarne disain\n- Lihtne paigaldus\n- Vastab ohutusstandarditele\n- Reguleeritavad komponendid',
  },
  {
    id: 6,
    category: 'drainage',
    name: 'Vihmaveesüsteemi Komplekt',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1518618750560-8f07abde4c4b?w=500',
    description: 'Täielik vihmaveesüsteemi komplekt koos vihmaveetorude ja ühendustega.\n\nOmadused:\n\n- Alumiiniumist konstruktsioon\n- Kõik kinnitustarvikud kaasas\n- Õmblusteta disain\n- 10-aastane garantii\n- Lihtne hooldus',
  },
  {
    id: 7,
    category: 'accessories',
    name: 'Plekitööde Komplekt',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1635424040420-c0cef7b37c41?w=500',
    description: 'Professionaalne plekkdetailide komplekt katuse servadele ja üleminekutele.\n\nOmadused:\n\n- Eelvormitud detailid\n- Korrosioonikindel materjal\n- Universaalne ühilduvus\n- Täielik paigaldusjuhend\n- Ilmastikukindel tihendus',
  },
];

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="text-center py-12">
        <h2 className="text-2xl text-primary">Toodet ei leitud</h2>
        <button
          onClick={() => navigate('/')}
          className="mt-4 text-accent hover:text-accent-dark"
        >
          Tagasi avalehele
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    navigate('/cart');
  };

  return (
    <div>
      <button
        onClick={() => navigate('/')}
        className="flex items-center text-primary hover:text-accent mb-6"
      >
        <ArrowLeftIcon className="h-5 w-5 mr-2" />
        Tagasi toodete juurde
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-primary">{product.name}</h1>
          <p className="text-2xl text-accent mt-2">${product.price.toFixed(2)} / ühik</p>
          <div className="mt-4 text-secondary whitespace-pre-line">{product.description}</div>

          <div className="mt-6">
            <label className="block text-primary mb-2">Kogus</label>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="bg-secondary text-white w-8 h-8 rounded"
              >
                -
              </button>
              <span className="text-primary text-lg">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="bg-secondary text-white w-8 h-8 rounded"
              >
                +
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 w-full bg-accent hover:bg-accent-dark text-white font-medium py-3 px-6 rounded transition-colors"
          >
            Lisa ostukorvi
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails; 