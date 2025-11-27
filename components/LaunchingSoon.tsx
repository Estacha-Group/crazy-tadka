import React, { useState, useEffect } from 'react';
import { Phone, Facebook, Instagram, Twitter, Youtube, MapPin, Clock, Utensils, ChefHat, Flame } from 'lucide-react';

const LaunchingSoon: React.FC = () => {
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
    <div className="min-h-screen bg-void relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Floating food emojis */}
        <div className="absolute text-4xl opacity-20 animate-float" style={{ top: '10%', left: '5%', animationDelay: '0s' }}>🌶️</div>
        <div className="absolute text-5xl opacity-20 animate-float" style={{ top: '20%', right: '10%', animationDelay: '2s' }}>🍛</div>
        <div className="absolute text-4xl opacity-20 animate-float" style={{ bottom: '30%', left: '8%', animationDelay: '4s' }}>🥘</div>
        <div className="absolute text-4xl opacity-20 animate-float" style={{ top: '60%', right: '5%', animationDelay: '6s' }}>🌿</div>
        <div className="absolute text-3xl opacity-20 animate-float" style={{ bottom: '15%', right: '15%', animationDelay: '8s' }}>🔥</div>
        <div className="absolute text-4xl opacity-20 animate-float" style={{ top: '40%', left: '3%', animationDelay: '10s' }}>🍚</div>
        
        {/* Glowing orbs */}
        <div className="absolute w-[400px] h-[400px] rounded-full bg-saffron/10 blur-[100px] -top-20 -left-20" />
        <div className="absolute w-[350px] h-[350px] rounded-full bg-chili/10 blur-[100px] -bottom-20 -right-20" />
        <div className="absolute w-[300px] h-[300px] rounded-full bg-turmeric/10 blur-[80px] top-1/2 right-10" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen p-4 md:p-8">
        <div className="glass-panel rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 max-w-3xl w-full mx-auto text-center">
          
          {/* Logo Section */}
          <div className="mb-8">
            <div className="text-6xl md:text-7xl mb-4 animate-bounce">🍛</div>
            <h1 className="text-4xl md:text-6xl font-display font-extrabold mb-2">
              <span className="text-white">CRAZY</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron via-turmeric to-chili animate-gradient-x"> TADKA</span>
            </h1>
            <p className="text-turmeric text-lg md:text-xl font-light tracking-wide">Where Spices Come Alive!</p>
          </div>

          {/* Launch Badge */}
          <div className="inline-block mb-8">
            <span className="px-6 py-3 rounded-full bg-gradient-to-r from-chili to-saffron text-white font-bold text-sm md:text-base tracking-wider uppercase animate-pulse-glow">
              🚀 Launching December 15, 2025
            </span>
          </div>

          {/* Countdown Timer */}
          <div className="mb-10">
            <h2 className="text-gray-400 text-sm md:text-base font-bold tracking-[0.2em] uppercase mb-6">Grand Opening In</h2>
            <div className="flex justify-center items-center gap-2 md:gap-4 flex-wrap">
              {[
                { value: timeLeft.days, label: 'Days' },
                { value: timeLeft.hours, label: 'Hours' },
                { value: timeLeft.minutes, label: 'Minutes' },
                { value: timeLeft.seconds, label: 'Seconds' }
              ].map((item, index) => (
                <React.Fragment key={item.label}>
                  <div className="glass-panel rounded-xl md:rounded-2xl p-3 md:p-5 min-w-[70px] md:min-w-[90px]">
                    <span className="block text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-saffron to-turmeric">
                      {item.value.toString().padStart(2, '0')}
                    </span>
                    <span className="block text-[10px] md:text-xs text-gray-500 uppercase tracking-widest mt-1">{item.label}</span>
                  </div>
                  {index < 3 && <span className="text-2xl md:text-4xl font-bold text-saffron animate-pulse">:</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-sm md:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Get ready for an <span className="text-turmeric font-semibold">explosion of authentic Indian flavors!</span> We're bringing the finest spices, traditional recipes, and a whole lot of <em className="text-saffron">tadka</em> magic to your plate.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { icon: Utensils, text: 'Authentic Recipes' },
              { icon: Flame, text: 'Fresh Spices' },
              { icon: ChefHat, text: 'Expert Chefs' }
            ].map((feature) => (
              <div key={feature.text} className="glass-panel rounded-xl px-4 py-3 flex items-center gap-2 hover:border-saffron/50 transition-all duration-300 hover:-translate-y-1">
                <feature.icon className="w-5 h-5 text-saffron" />
                <span className="text-sm text-gray-300">{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="mb-8">
            <h3 className="text-gray-400 text-sm font-bold tracking-wider uppercase mb-4 flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" /> Call Us For Reservations
            </h3>
            <a 
              href="tel:+919040485999" 
              className="inline-flex items-center gap-3 px-8 py-4 glass-panel rounded-full border-2 border-saffron text-white font-bold text-xl hover:bg-saffron hover:text-white transition-all duration-300 group"
            >
              <span className="text-2xl group-hover:animate-bounce">📱</span>
              <span>+91 9040485999</span>
            </a>
          </div>

          {/* Location Preview */}
          <div className="mb-8 text-gray-400 text-sm flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-chili" />
            <span>KIIT Road, Patia, Bhubaneswar, Odisha 751024</span>
          </div>

          {/* Social Links */}
          <div className="mb-8">
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

          {/* Footer */}
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-600 text-sm">&copy; 2025 CRAZY TADKA. All rights reserved.</p>
            <p className="text-saffron text-sm mt-1 animate-pulse">🌶️ Spice up your life! 🌶️</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchingSoon;
