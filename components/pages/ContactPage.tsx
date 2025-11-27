import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Page Header */}
        <div className="text-center mb-16">
          <span className="text-turmeric text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3 block">
            Get In Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold text-white mb-6">
            Visit <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-turmeric">Us</span>
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            We'd love to have you! Come experience the authentic flavors of CRAZY TADKA.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-saffron to-transparent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Location */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg mb-2">Location</h3>
                  <a 
                    href="https://maps.google.com/?q=Plot+No.+13/1423+%26+13/1424,+Mouza-Nuagaon,+Po-Malipada+and+Ps-Chandka,+(Near+IIIT,+Madhupur+and+Paikarapur+Road)+Bhubaneswar-751003"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-saffron transition-colors"
                  >
                    Plot No. 13/1423 & 13/1424,<br />
                    Mouza-Nuagaon, Po-Malipada and Ps-Chandka,<br />
                    (Near IIIT, Madhupur and Paikarapur Road)<br />
                    Bhubaneswar-751003<br />
                    India
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg mb-2">Phone</h3>
                  <a href="tel:+919040485999" className="text-gray-300 hover:text-saffron transition-colors text-lg">
                    +91 9040485999
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Call for reservations</p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:hello@crazytadka.com" className="text-gray-300 hover:text-saffron transition-colors">
                    hello@crazytadka.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-saffron/20 to-chili/20 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-saffron" />
                </div>
                <div>
                  <h3 className="text-white font-display font-bold text-lg mb-2">Opening Hours</h3>
                  <div className="text-gray-300 space-y-1">
                    <p><span className="text-gray-500">Mon - Thu:</span> 11:00 AM - 10:00 PM</p>
                    <p><span className="text-gray-500">Fri - Sat:</span> 11:00 AM - 11:00 PM</p>
                    <p><span className="text-gray-500">Sunday:</span> 12:00 PM - 10:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map & Social */}
          <div className="space-y-6">
            {/* Google Map */}
            <div className="glass-panel rounded-2xl overflow-hidden h-[300px] md:h-[450px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.9869876543!2d85.7790!3d20.2870!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDE3JzEzLjIiTiA4NcKwNDYnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="CRAZY TADKA Location"
                className="w-full h-full"
              />
            </div>
            <div className="text-center mt-4">
              <a 
                href="https://maps.google.com/?q=Plot+No.+13/1423+%26+13/1424,+Mouza-Nuagaon,+Po-Malipada+and+Ps-Chandka,+(Near+IIIT,+Madhupur+and+Paikarapur+Road)+Bhubaneswar-751003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-saffron hover:text-turmeric transition-colors text-sm font-medium"
              >
                <MapPin className="w-4 h-4" />
                Open in Google Maps
              </a>
            </div>

            {/* Social Media */}
            <div className="glass-panel rounded-2xl p-6 md:p-8">
              <h3 className="text-white font-display font-bold text-lg mb-4 text-center">Follow Us</h3>
              <div className="flex justify-center gap-4">
                {[
                  { icon: Instagram, label: 'Instagram', color: 'hover:bg-pink-600' },
                  { icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-600' },
                  { icon: Twitter, label: 'Twitter', color: 'hover:bg-sky-500' },
                ].map((social) => (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className={`w-14 h-14 glass-panel rounded-full flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Reservation CTA */}
            <div className="glass-panel rounded-2xl p-6 md:p-8 text-center bg-gradient-to-br from-saffron/10 to-chili/10 border-saffron/20">
              <h3 className="text-white font-display font-bold text-xl mb-2">Make a Reservation</h3>
              <p className="text-gray-400 mb-4">Book your table and experience the CRAZY TADKA magic!</p>
              <a 
                href="tel:+919040485999"
                className="inline-flex items-center gap-2 px-8 py-4 bg-saffron text-white font-bold rounded-full hover:bg-orange-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
