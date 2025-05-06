import { Link } from 'react-router-dom';
import { ShoppingCartIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';
import { useState } from 'react';

function Navbar() {
  const { cartItemsCount } = useCart();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { id: 'metal', name: 'Plekk-katused' },
    { id: 'tile', name: 'Kivikatused' },
    { id: 'eternit', name: 'Eterniitkatused' },
    { id: 'windows', name: 'Katuseaknad' },
    { id: 'safety', name: 'Turvatooted' },
    { id: 'drainage', name: 'Vihmaveesüsteemid' },
    { id: 'accessories', name: 'Katuse lisaplekid ja plekksepatööd' },
  ];

  return (
    <nav className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src="/logo.png" alt="Kortek" className="h-8 w-auto" />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative">
              <button
                className="flex items-center space-x-1 text-black"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <span>Tooted</span>
                <ChevronDownIcon className="h-4 w-4" />
              </button>

              {isDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                  {categories.map(category => (
                    <Link
                      key={category.id}
                      to={`/?category=${category.id}`}
                      className="block px-4 py-2 text-black hover:bg-gray-100"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/company" className="text-black">
              Ettevõte
            </Link>

            <Link to="/fassaadid" className="text-black">
              Fassaadid
            </Link>

            <Link to="/completed-works" className="text-black">
              Tehtud Tööd
            </Link>

            <Link to="/cart" className="relative text-black">
              <ShoppingCartIcon className="h-6 w-6" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 