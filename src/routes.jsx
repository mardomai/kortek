import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import Company from './pages/Company';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import CompletedWorks from './pages/CompletedWorks';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Fassaadid from './pages/Fassaadid';
import Windows from './pages/Windows';
import Safety from './pages/Safety';
import Drainage from './pages/Drainage';
import Accessories from './pages/Accessories';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      },
      {
        path: 'company',
        element: <Company />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'checkout',
        element: <Checkout />,
      },
      {
        path: 'fassaadid',
        element: <Fassaadid />,
      },
      {
        path: 'completed-works',
        element: <CompletedWorks />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'privacy-policy',
        element: <PrivacyPolicy />,
      },
      {
        path: 'windows',
        element: <Windows />,
      },
      {
        path: 'safety',
        element: <Safety />,
      },
      {
        path: 'drainage',
        element: <Drainage />,
      },
      {
        path: 'accessories',
        element: <Accessories />,
      },
    ],
  },
]); 