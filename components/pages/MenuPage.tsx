import React, { useState, useMemo } from 'react';
import { MENU_ITEMS, CATEGORIES } from '../../constants';
import { MenuItem, Category } from '../../types';
import DishCard from '../DishCard';

interface MenuPageProps {
  onAddToCart: (item: MenuItem) => void;
}

const MenuPage: React.FC<MenuPageProps> = ({ onAddToCart }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filteredItems = useMemo(() => {
    if (activeCategory === 'all') return MENU_ITEMS;
    return MENU_ITEMS.filter(item => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-turmeric text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Our Creations
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold text-white mb-6 leading-tight">
            Curated <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-turmeric">Menu</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
            Discover our carefully crafted dishes, each one a masterpiece of authentic Indian flavors and modern culinary techniques.
          </p>
          <div className="w-24 md:w-32 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto mt-6" />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10 md:mb-16">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as Category)}
              className={`px-5 md:px-8 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase transition-all duration-300 border backdrop-blur-md whitespace-nowrap ${
                activeCategory === cat.id
                  ? 'bg-saffron border-saffron text-white shadow-[0_0_20px_rgba(255,119,34,0.4)] transform scale-105'
                  : 'bg-white/5 border-white/10 text-gray-400 hover:border-turmeric/50 hover:text-turmeric'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredItems.map((item) => (
            <DishCard key={item.id} item={item} onAdd={onAddToCart} />
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No items found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuPage;
