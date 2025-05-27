import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingChatButton from './FloatingChatButton';

function Layout() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <Outlet />
      </main>
      <Footer />
      <FloatingChatButton />
    </div>
  );
}

export default Layout; 