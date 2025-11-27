import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import FloatingParticles from './components/FloatingParticles';
import HomePage from './components/pages/HomePage';
import MenuPage from './components/pages/MenuPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import LaunchPage from './components/pages/LaunchPage';
import { MenuItem, CartItem } from './types';

type Page = 'home' | 'menu' | 'about' | 'contact' | 'launch';

const App: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');

  // Hash-based routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const validPages: Page[] = ['home', 'menu', 'about', 'contact', 'launch'];
      if (validPages.includes(hash as Page)) {
        setCurrentPage(hash as Page);
        window.scrollTo(0, 0);
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: string) => {
    window.location.hash = page;
    setIsMobileMenuOpen(false);
  };

  const handleAddToCart = (item: MenuItem) => {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);
      if (existing) {
        return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...item, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(0, item.quantity + delta) };
      }
      return item;
    }).filter(item => item.quantity > 0));
  };

  const handleRemoveItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const renderPage = () => {
    switch (currentPage) {
      case 'menu':
        return <MenuPage onAddToCart={handleAddToCart} />;
      case 'about':
        return <AboutPage />;
      case 'contact':
        return <ContactPage />;
      case 'launch':
        return <LaunchPage onNavigate={navigateTo} />;
      case 'home':
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-void text-white selection:bg-neon-red selection:text-white">
      <FloatingParticles />
      
      <Navbar 
        cartCount={cartCount} 
        onCartClick={() => setIsCartOpen(true)}
        onMenuClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
        currentPage={currentPage}
        onNavigate={navigateTo}
      />

      <main>
        {renderPage()}
      </main>

      <Footer onNavigate={navigateTo} />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  );
};

export default App;
