import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Company from './pages/Company';
import CompletedWorks from './pages/CompletedWorks';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import FloatingChatButton from './components/FloatingChatButton';
import { CartProvider } from './context/CartContext';
import Fassaadid from './pages/Fassaadid';

const routerOptions = {
  future: {
    v7_startTransition: true,
    v7_relativeSplatPath: true
  }
};

function App() {
  return (
    <CartProvider>
      <Router {...routerOptions}>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="container mx-auto px-4 py-8 flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/company" element={<Company />} />
              <Route path="/fassaadid" element={<Fassaadid />} />
              <Route path="/completed-works" element={<CompletedWorks />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            </Routes>
          </main>
          <Footer />
          <FloatingChatButton />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
