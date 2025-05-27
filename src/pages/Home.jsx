import { useSearchParams, Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    category: 'metal',
    name: 'Klassikaline Plekk-katus',
    price: 29.99,
    image: '/products/metal-roof.jpg',
    description: 'Kvaliteetne plekk-katuse paneel suurepärase vastupidavuse ja ilmastikukindlusega.',
  },
  {
    id: 2,
    category: 'tile',
    name: 'Keraamilised Katusekivid',
    price: 4.99,
    image: '/products/tile-roof.jpg',
    description: 'Traditsioonilised keraamilised katusekivid klassikalise välimuse ja pikaajalise kaitsega.',
  },
  {
    id: 3,
    category: 'eternit',
    name: 'Eterniit Katuseplaadid',
    price: 19.99,
    image: '/products/eternit-roof.jpg',
    description: 'Vastupidavad eterniitplaadid usaldusväärseks ja kuluefektiivseks katuse lahenduseks.',
  },
  {
    id: 4,
    category: 'windows',
    name: 'Katuseaken',
    price: 299.99,
    image: '/products/roof-window.jpg',
    description: 'Kaasaegne katuseaken loomulikuks valgustuseks ja ventilatsiooniks.',
  },
  {
    id: 5,
    category: 'safety',
    name: 'Katuse Turvarööbas',
    price: 159.99,
    image: '/products/roof-safety.jpg',
    description: 'Professionaalne turvarööbaste süsteem katuse hoolduseks ja kaitseks.',
  },
  {
    id: 6,
    category: 'drainage',
    name: 'Vihmaveesüsteemi Komplekt',
    price: 89.99,
    image: '/products/drainage-system.jpg',
    description: 'Täielik vihmaveesüsteemi komplekt koos vihmaveetorude ja ühendustega.',
  },
  {
    id: 7,
    category: 'accessories',
    name: 'Plekitööde Komplekt',
    price: 49.99,
    image: '/products/metal-accessories.jpg',
    description: 'Professionaalne plekkdetailide komplekt katuse servadele ja üleminekutele.',
  },
];

function Home() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');

  const filteredProducts = category
    ? products.filter(product => product.category === category)
    : products;

  const categoryTitles = {
    metal: 'Plekk-katused',
    tile: 'Kivikatused',
    eternit: 'Eterniitkatused',
    windows: 'Katuseaknad',
    safety: 'Turvatooted',
    drainage: 'Vihmaveesüsteemid',
    accessories: 'Katuse lisaplekid ja plekksepatööd',
  };

  return (
    <div className="space-y-12">
      {!category && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plekk-katused Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black mb-4">Plekk-katused</h2>
            <p className="text-gray-600 mb-6">
              Ruukkit usaldavad tuhanded koduomanikud nii Eestis kui ka kaugemal ja juba üle 25 aasta. 
              Oleme Ruukki ametlik partner ja meie töö on sama kvaliteetne kui Ruukki tooted.
            </p>
            <Link
              to="/?category=metal"
              className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Plekk-katused
            </Link>
          </div>

          {/* Kivikatused Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black mb-4">Kivikatused</h2>
            <p className="text-gray-600 mb-6">
              Tootevalikus on erinevad kivi- ja bituumenkatuste materjalid. Suures tootevalikus 
              orienteerumiseks on meil BMI partnerina pädevad teadmised ning saame need sinu kasuks tööle panna.
            </p>
            <Link
              to="/?category=tile"
              className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Kivikatused
            </Link>
          </div>

          {/* Eterniitkatused Section */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-black mb-4">Eterniitkatused</h2>
            <p className="text-gray-600 mb-6">
              Eterniit kauakestev ja ohutu katusekattematerjal, mis on valmistatud tsemendist, 
              lubjakivist, tselluloosist, veest ja kaasaegses materjalis asbesti asendanud PVA kiududest.
            </p>
            <Link
              to="/?category=eternit"
              className="inline-block bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Eterniitkatused
            </Link>
          </div>
        </div>
      )}

      {category && (
        <>
          <h1 className="text-3xl font-bold text-black mb-8">
            {categoryTitles[category]}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
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
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      €{product.price.toFixed(2)}
                    </span>
                    <Link
                      to={`/product/${product.id}`}
                      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
                    >
                      Vaata lähemalt
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home; 