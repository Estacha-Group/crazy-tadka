import React, { useState, useEffect } from 'react';
import { Phone, Facebook, Instagram, Twitter, Youtube, MapPin, Utensils, ChefHat, Flame, Calendar, Gift, Star } from 'lucide-react';

interface LaunchPageProps {
  onNavigate: (page: string) => void;
}

const LaunchPage: React.FC<LaunchPageProps> = ({ onNavigate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const launchDate = new Date('December 15, 2025 00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = launchDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen pt-24 md:pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 md:px-8">
        
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="text-6xl md:text-7xl mb-4 animate-bounce">🍛</div>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-4">
            <span className="text-white">Grand</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-turmeric to-chili animate-gradient-x"> Opening</span>
          </h1>
          <p className="text-turmeric text-lg md:text-xl font-light tracking-wide">The Wait is Almost Over!</p>
        </div>

        {/* Launch Badge */}
        <div className="flex justify-center mb-10">
          <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-chili to-saffron text-white font-bold text-sm md:text-base tracking-wider uppercase animate-pulse-glow">
            <Calendar className="w-5 h-5" />
            December 15, 2025
          </span>
        </div>

        {/* Countdown Timer */}
        <div className="glass-panel rounded-3xl p-6 md:p-10 mb-10">
          <h2 className="text-gray-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6 text-center">
            Countdown to Launch
          </h2>
          <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
            {[
              { value: timeLeft.days, label: 'Days' },
              { value: timeLeft.hours, label: 'Hours' },
              { value: timeLeft.minutes, label: 'Minutes' },
              { value: timeLeft.seconds, label: 'Seconds' }
            ].map((item, index) => (
              <React.Fragment key={item.label}>
                <div className="glass-panel rounded-xl md:rounded-2xl p-3 md:p-5 min-w-[70px] md:min-w-[100px] text-center">
                  <span className="block text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-saffron to-turmeric">
                    {item.value.toString().padStart(2, '0')}
                  </span>
                  <span className="block text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">{item.label}</span>
                </div>
                {index < 3 && <span className="text-2xl md:text-4xl font-bold text-saffron animate-pulse hidden sm:block">:</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* What to Expect */}
        <div className="glass-panel rounded-3xl p-6 md:p-10 mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-center mb-8">
            What to <span className="text-saffron">Expect</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Utensils, title: 'Authentic Recipes', desc: 'Traditional Indian dishes crafted with love and premium spices' },
              { icon: Flame, title: 'Fresh Spices', desc: 'Sourced directly from farms across India for authentic flavors' },
              { icon: ChefHat, title: 'Expert Chefs', desc: 'Culinary masters with decades of experience in Indian cuisine' }
            ].map((feature) => (
              <div 
                key={feature.title} 
                className="glass-panel rounded-xl p-5 text-center hover:border-saffron/50 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 flex items-center justify-center">
                  <feature.icon className="w-7 h-7 text-saffron" />
                </div>
                <h3 className="text-white font-display font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Grand Opening Specials */}
        <div className="glass-panel rounded-3xl p-6 md:p-10 mb-10 bg-gradient-to-br from-saffron/5 to-chili/5 border-saffron/20">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Gift className="w-6 h-6 text-saffron" />
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white">
              Opening Day <span className="text-turmeric">Specials</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { emoji: '🎉', text: '20% off on all orders' },
              { emoji: '🍛', text: 'Free dessert with every meal' },
              { emoji: '🎁', text: 'Lucky draw prizes' },
              { emoji: '📸', text: 'Free photo booth experience' }
            ].map((special) => (
              <div key={special.text} className="flex items-center gap-3 glass-panel rounded-xl p-4">
                <span className="text-2xl">{special.emoji}</span>
                <span className="text-gray-300">{special.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact & Location */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {/* Call to Reserve */}
          <div className="glass-panel rounded-2xl p-6 text-center">
            <h3 className="text-gray-400 text-sm font-bold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Reserve Your Spot
            </h3>
            <a 
              href="tel:+919040485999" 
              className="inline-flex items-center gap-3 px-6 py-4 glass-panel rounded-full border-2 border-saffron text-white font-bold text-lg hover:bg-saffron transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:animate-bounce">📱</span>
              <span>+91 9040485999</span>
            </a>
          </div>

          {/* Location */}
          <div className="glass-panel rounded-2xl p-6 text-center">
            <h3 className="text-gray-400 text-sm font-bold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
              <MapPin className="w-4 h-4" /> Find Us
            </h3>
            <p className="text-gray-300 mb-3">
              KIIT Road, Patia<br />
              Bhubaneswar, Odisha 751024
            </p>
            <a 
              href="https://maps.google.com/?q=KIIT+Road+Patia+Bhubaneswar+Odisha"
              target="_blank"
              rel="noopener noreferrer"
              className="text-saffron hover:text-turmeric transition-colors text-sm"
            >
              View on Google Maps →
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="text-center mb-10">
          <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Follow Our Journey</p>
          <div className="flex justify-center gap-3">
            {[
              { icon: Facebook, label: 'Facebook' },
              { icon: Instagram, label: 'Instagram' },
              { icon: Twitter, label: 'Twitter' },
              { icon: Youtube, label: 'YouTube' }
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={social.label}
                className="w-12 h-12 glass-panel rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-saffron hover:to-chili transition-all duration-300 hover:-translate-y-1"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Explore Menu CTA */}
        <div className="text-center">
          <p className="text-gray-400 mb-4">Can't wait? Explore what's coming!</p>
          <button
            onClick={() => onNavigate('menu')}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-saffron to-chili text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(255,119,34,0.4)] transition-all"
          >
            <Star className="w-5 h-5" />
            Preview Our Menu
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaunchPage;
