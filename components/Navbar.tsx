import React from 'react';
import { ShoppingBag, Menu as MenuIcon, X, Flame } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
  onMenuClick: () => void;
  isMobileMenuOpen: boolean;
  currentPage: string;
  onNavigate: (page: string) => void;
}

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'menu', label: 'Menu' },
  { id: 'about', label: 'Story' },
  { id: 'contact', label: 'Visit' },
  { id: 'launch', label: 'Launch 🚀' },
];

const Navbar: React.FC<NavbarProps> = ({ 
  cartCount, 
  onCartClick, 
  onMenuClick, 
  isMobileMenuOpen,
  currentPage,
  onNavigate 
}) => {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-2 py-3 md:px-8 md:py-6 w-full">
        <div className="glass-panel max-w-7xl mx-auto rounded-2xl md:rounded-full px-4 py-3 md:px-8 md:py-4 flex items-center justify-between shadow-2xl shadow-black/20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 md:gap-3 group cursor-pointer shrink-0"
          >
            <div className="relative">
              <Flame className="w-6 h-6 md:w-8 md:h-8 text-saffron animate-pulse group-hover:text-turmeric transition-colors" />
              <div className="absolute inset-0 bg-saffron blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
            </div>
            <span className="text-lg md:text-2xl font-display font-bold tracking-tighter whitespace-nowrap">
              CRAZY<span className="text-saffron">TADKA</span>
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-bold tracking-widest uppercase text-gray-400 font-sans">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`transition-colors duration-300 whitespace-nowrap ${
                  currentPage === link.id 
                    ? 'text-saffron' 
                    : 'hover:text-turmeric'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 md:gap-4 shrink-0">
            <button 
              onClick={onCartClick}
              className="relative p-2 md:p-3 hover:bg-white/5 rounded-full transition-all duration-300 group border border-transparent hover:border-white/10"
              aria-label="View Cart"
            >
              <ShoppingBag className="w-5 h-5 text-white group-hover:text-turmeric transition-colors" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 md:w-5 md:h-5 bg-saffron rounded-full flex items-center justify-center text-[8px] md:text-[10px] font-bold text-white shadow-lg shadow-saffron/50 animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button 
              onClick={onMenuClick}
              className="md:hidden p-2 hover:bg-white/5 rounded-full transition-all"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <MenuIcon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-void/95 backdrop-blur-lg" onClick={onMenuClick} />
          <div className="absolute top-24 left-4 right-4 glass-panel rounded-2xl p-6 shadow-2xl">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className={`text-left py-3 px-4 rounded-xl font-bold tracking-wider uppercase transition-all ${
                    currentPage === link.id
                      ? 'bg-saffron/20 text-saffron'
                      : 'text-gray-300 hover:bg-white/5 hover:text-turmeric'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;