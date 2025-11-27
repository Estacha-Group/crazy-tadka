import React from 'react';
import { Heart, Leaf, Clock, Award, ChefHat, Flame, Linkedin, Facebook, Twitter } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-turmeric text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Our Journey
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-turmeric">Story</span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto" />
        </div>

        {/* Story Section */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-6">
                Where <span className="text-saffron">Passion</span> Meets <span className="text-turmeric">Flavor</span>
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                CRAZY TADKA was born from a simple yet powerful idea: to bring the authentic, 
                bold flavors of India to Bhubaneswar in a way that's both traditional and exciting.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our journey began with a love for the sizzle of spices hitting hot oil, 
                the aromatic clouds of cumin and coriander, and the satisfaction of a perfectly 
                balanced curry. We believe that great food isn't just about taste—it's about 
                creating memories, bringing people together, and celebrating life.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Every dish at CRAZY TADKA tells a story of heritage, craftsmanship, and 
                innovation. From our signature Volcanic Paneer Tikka to our legendary Smoked 
                Butter Chicken, we pour our hearts into every plate we serve.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800&auto=format&fit=crop"
                  alt="Indian spices and cooking"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-saffron to-chili rounded-2xl -z-10 blur-2xl opacity-50" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white text-center mb-10">
            Our <span className="text-saffron">Values</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: Heart, 
                title: 'Made with Love', 
                desc: 'Every dish is prepared with care and passion, just like home-cooked food should be.' 
              },
              { 
                icon: Leaf, 
                title: 'Fresh & Authentic', 
                desc: 'We source the finest spices and freshest ingredients to ensure authentic flavors.' 
              },
              { 
                icon: Clock, 
                title: 'Time-Honored Recipes', 
                desc: 'Traditional cooking methods passed down through generations of culinary masters.' 
              },
            ].map((value) => (
              <div 
                key={value.title}
                className="glass-panel rounded-2xl p-6 text-center hover:border-saffron/30 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 flex items-center justify-center">
                  <value.icon className="w-7 h-7 text-saffron" />
                </div>
                <h3 className="text-white font-display font-bold text-lg mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team/Chef Section */}
        <div className="glass-panel rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Meet Our <span className="text-turmeric">Culinary Team</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our talented chefs bring decades of combined experience and a shared passion for creating extraordinary dishes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                name: 'Chef Rajan', 
                role: 'Head Chef', 
                icon: ChefHat,
                desc: '20+ years mastering North Indian cuisine' 
              },
              { 
                name: 'Chef Priya', 
                role: 'Tandoor Specialist', 
                icon: Flame,
                desc: 'Expert in clay oven cooking techniques' 
              },
              { 
                name: 'Chef Arjun', 
                role: 'Fusion Expert', 
                icon: Award,
                desc: 'Innovative blend of traditional & modern' 
              },
            ].map((chef) => (
              <div key={chef.name} className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron to-chili flex items-center justify-center">
                  <chef.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-white font-display font-bold text-lg">{chef.name}</h3>
                <p className="text-saffron text-sm font-semibold mb-2">{chef.role}</p>
                <p className="text-gray-400 text-sm">{chef.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="glass-panel rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              Our <span className="text-saffron">Founder</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 rounded-full bg-gradient-to-br from-saffron to-chili p-1">
                  <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
                    <img 
                      src="https://media.licdn.com/dms/image/v2/D5603AQH87d3Uk6lO9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718951322498?e=1753920000&v=beta&t=8X4QxqJKu9PaQy0xK7nMlLVnJ8zKzKqK7qKqJKuKqKo"
                      alt="Om Swarup Bindhani"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.parentElement!.innerHTML = '<span class="text-6xl font-display font-bold text-saffron">OB</span>';
                      }}
                    />
                  </div>
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-turmeric to-chili rounded-full -z-10 blur-2xl opacity-50" />
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">
                Om Swarup Bindhani
              </h3>
              <p className="text-saffron font-semibold mb-4">Founder & Visionary</p>
              <p className="text-turmeric text-sm font-medium mb-6">
                Serial & Social Entrepreneur | Agro-Tourism Innovator | Nation-Builder
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/ombindhani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-saffron/20 hover:border-saffron/50 transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5 text-gray-300 hover:text-saffron" />
                </a>
                <a 
                  href="https://www.facebook.com/ombindhani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-saffron/20 hover:border-saffron/50 transition-all duration-300"
                >
                  <Facebook className="w-5 h-5 text-gray-300 hover:text-saffron" />
                </a>
                <a 
                  href="https://x.com/theombindhani" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-saffron/20 hover:border-saffron/50 transition-all duration-300"
                >
                  <Twitter className="w-5 h-5 text-gray-300 hover:text-saffron" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
