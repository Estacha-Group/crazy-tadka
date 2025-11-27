import React from 'react';
import { ArrowRight, Flame, Star, Users, Award } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden py-20 px-4">
        {/* Background */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1548943487-a2e4e43b485c?q=80&w=2000&auto=format&fit=crop")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/40" />
          <div className="absolute inset-0 bg-saffron/10 mix-blend-overlay" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center w-full max-w-5xl mx-auto mt-12 md:mt-0">
          <div className="inline-flex items-center justify-center mb-4 md:mb-6">
            <span className="py-2 px-4 md:px-6 rounded-full border border-turmeric/30 bg-turmeric/10 text-turmeric font-bold tracking-[0.15em] text-[10px] md:text-sm uppercase backdrop-blur-md whitespace-nowrap">
              Premium Indian Fusion
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold mb-6 md:mb-8 leading-none text-glow drop-shadow-2xl">
            <span className="block">TASTE THE</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-turmeric to-saffron animate-gradient-x whitespace-nowrap">
              EXPLOSION
            </span>
          </h1>
          
          <p className="text-gray-300 text-sm sm:text-base md:text-xl lg:text-2xl max-w-sm md:max-w-2xl mx-auto mb-8 md:mb-12 leading-relaxed font-light font-sans tracking-wide px-2">
            A symphony of <span className="text-saffron font-semibold">exotic spices</span> and bold flavors, 
            crafted with passion for the adventurous soul.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center w-full max-w-md mx-auto sm:max-w-none">
            <button 
              onClick={() => onNavigate('menu')}
              className="w-full sm:w-auto group relative px-8 md:px-10 py-4 md:py-5 bg-saffron text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,119,34,0.5)] transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span className="relative z-10">Explore Menu</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-chili to-saffron opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            
            <button 
              onClick={() => onNavigate('about')}
              className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 glass-panel text-white font-bold tracking-widest uppercase text-xs md:text-sm rounded-full hover:bg-white/10 hover:border-turmeric/50 transition-all duration-300 backdrop-blur-md"
            >
              Our Story
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 md:py-32 px-4 md:px-8 z-10 bg-void">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-turmeric text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-white mb-6">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-turmeric">Crazy</span> Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Flame, title: 'Bold Flavors', desc: 'Authentic spices sourced from across India' },
              { icon: Star, title: 'Premium Quality', desc: 'Fresh ingredients, no compromises' },
              { icon: Users, title: 'Expert Chefs', desc: 'Masters of traditional Indian cuisine' },
              { icon: Award, title: 'Award Winning', desc: 'Recognized for culinary excellence' },
            ].map((item) => (
              <div 
                key={item.title}
                className="glass-panel rounded-2xl p-6 md:p-8 text-center hover:border-saffron/30 transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-saffron" />
                </div>
                <h3 className="text-white font-display font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass-panel rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-4xl font-display font-bold text-white mb-4">
              Ready to Experience the <span className="text-saffron">Tadka</span>?
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Visit us or check out our launch details for the grand opening celebration!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-saffron text-white font-bold tracking-wider uppercase text-sm rounded-full hover:bg-orange-600 transition-all"
              >
                Visit Us
              </button>
              <button 
                onClick={() => onNavigate('launch')}
                className="px-8 py-4 glass-panel text-turmeric font-bold tracking-wider uppercase text-sm rounded-full hover:bg-white/10 transition-all border border-turmeric/30"
              >
                Launch Details 🚀
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
