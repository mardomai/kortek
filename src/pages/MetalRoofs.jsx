import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function MetalRoofs() {
  const { addToCart } = useCart();
  const [addedToCart, setAddedToCart] = React.useState(null);

  const metalRoofProducts = [
    {
      id: 'metal-1',
      name: 'Ruukki Classic C',
      price: 24.99,
      image: '/products/ruukki-classic.jpg',
      description: 'Klassikaline katuseplekk, mis sobib igale majale. Ruukki Classic on kõrgekvaliteetne teraskatuse lahendus, mis on loodud põhjamaisele kliimale.',
      features: [
        'Vastupidav põhjamaisele kliimale',
        'Lihtne paigaldada',
        'Pikaajaline garantii',
        'Klassikaline disain',
        'Sobib kõikidele katusekaldele',
        'Ilmastikukindel'
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Kattekiht': 'Purex',
        'Paksus': '0.5 mm',
        'Kasulik laius': '475 mm',
        'Garantii': '50 aastat'
      }
    },
    {
      id: 'metal-2',
      name: 'Ruukki Hyygge',
      price: 29.99,
      image: '/products/ruukki-hyygge.jpg',
      description: 'Modernne ja minimalistlik katusekate, mis sobib tänapäevase arhitektuuriga. Ruukki Hyygge on uuenduslik lahendus skandinaavia disainiga.',
      features: [
        'Modernne disain',
        'Suurepärane ilmastikukindlus',
        'Lihtne hooldada',
        'Uuenduslik tehnoloogia',
        'Minimaalne hooldus',
        'Vastupidav UV-kiirgusele'
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Kattekiht': 'GreenCoat Pural Matt',
        'Paksus': '0.6 mm',
        'Kasulik laius': '1140 mm',
        'Garantii': '50 aastat'
      }
    },
    {
      id: 'metal-3',
      name: 'Ruukki Adamante',
      price: 27.99,
      image: '/products/ruukki-adamante.jpg',
      description: 'Tugev ja vastupidav katuseplekk, mis sobib nii uutele kui ka renoveeritavatele hoonetele. Tuntud oma vastupidavuse ja elegantse välimuse poolest.',
      features: [
        'Elegantne välimus',
        'Suur vastupidavus',
        'Sobib kõikidele hoonetele',
        'Kvaliteetne viimistlus',
        'Lihtne paigaldada',
        'Pikaajaline garantii'
      ],
      specifications: {
        'Materjal': 'Tsingitud teras',
        'Kattekiht': 'Purex',
        'Paksus': '0.5 mm',
        'Kasulik laius': '1125 mm',
        'Garantii': '50 aastat'
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
        <h1 className="text-4xl font-bold text-black mb-4">Plekk-katused</h1>
        <p className="text-xl text-gray-600">
          Kvaliteetsed ja vastupidavad plekk-katused põhjamaisesse kliimasse
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="prose prose-lg">
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700 font-semibold mb-4">
              Oleme Ruukki ametlik partner ja edasimüüja.
            </p>
            <p className="text-lg text-gray-700">
              Ruukki toodete põhjamaine kvaliteet on tuntud üle maailma. Müüme ja paigaldame erinevaid katuseprofiile, turvaelemente ja vihmaveesüsteeme.
            </p>
          </div>

          <p className="text-lg text-gray-700 mb-8">
            Ruukki teraskatused on valmistatud kvaliteetsest põhjamaade terasest, mis on vastupidav meie karmis kliimas. Katused on kaetud spetsiaalse pinnakattega, mis kaitseb neid korrosiooni eest ja tagab pika kasutusea.
          </p>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <p className="text-lg text-gray-700">
              Ruukki teraskatuste eelised:
            </p>
            <ul className="mt-4 space-y-2">
              <li>✓ Pikk kasutusiga ja garantii kuni 50 aastat</li>
              <li>✓ Vastupidavus põhjamaisele kliimale</li>
              <li>✓ Lihtne paigaldada ja hooldada</li>
              <li>✓ Lai värvivalik ja profiilid</li>
              <li>✓ Soodne hind võrreldes teiste katusekatetega</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col space-y-8">
          <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/ruukki.png"
              alt="Ruukki plekk-katused"
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
          {metalRoofProducts.map((product) => (
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

export default MetalRoofs; 