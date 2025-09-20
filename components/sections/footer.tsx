'use client';

import Link from 'next/link';
import { 
  TreePine, 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin,
  ArrowUp
} from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-forest-dark border-t border-wood-light/20">
      {/* Background Pattern */}
      <div className="absolute inset-0 wood-grain opacity-30"></div>
      
      <div className="container-forest relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3">
              <TreePine className="h-8 w-8 text-gold-accent" />
              <div>
                <h3 className="font-playfair text-2xl font-bold text-wood-light">
                  Rajan K K
                </h3>
                <p className="text-xs text-wood-light/80 tracking-wider">
                  MASTER WOODWORKER
                </p>
              </div>
            </Link>
            <p className="text-wood-light/80 leading-relaxed">
              Crafting exceptional furniture for over 40 years, where every piece 
              tells a story of forest wisdom and artisan mastery.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-wood-brown/30 rounded-lg hover:bg-gold-accent/30 transition-colors duration-300">
                <Facebook className="h-5 w-5 text-wood-light" />
              </a>
              <a href="#" className="p-2 bg-wood-brown/30 rounded-lg hover:bg-gold-accent/30 transition-colors duration-300">
                <Instagram className="h-5 w-5 text-wood-light" />
              </a>
              <a href="#" className="p-2 bg-wood-brown/30 rounded-lg hover:bg-gold-accent/30 transition-colors duration-300">
                <Linkedin className="h-5 w-5 text-wood-light" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-wood-light text-lg mb-6">Quick Links</h4>
            <nav className="space-y-4">
              {[
                { name: 'Home', href: '/' },
                { name: 'About', href: '/about' },
                { name: 'Gallery', href: '/gallery' },
                { name: 'Services', href: '/services' },
                { name: 'Custom Orders', href: '/custom-orders' },
                { name: 'Contact', href: '/contact' }
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-wood-light/80 hover:text-gold-accent transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-wood-light text-lg mb-6">Services</h4>
            <nav className="space-y-4">
              {[
                'Custom Furniture',
                'Design Consultation',
                'Furniture Restoration',
                'Wood Finishing',
                'Installation',
                'Maintenance'
              ].map((service) => (
                <div key={service} className="text-wood-light/80">
                  {service}
                </div>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-wood-light text-lg mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-gold-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-wood-light/80">+1 (555) 123-4567</p>
                  <p className="text-wood-light/60 text-sm">Mon - Fri, 8AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-gold-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-wood-light/80">info@rajankk.com</p>
                  <p className="text-wood-light/60 text-sm">We reply within 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-accent mt-1 flex-shrink-0" />
                <div>
                  <p className="text-wood-light/80">123 Forest Avenue</p>
                  <p className="text-wood-light/80">Amazon District, BR 12345</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-wood-light/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-wood-light/60 text-sm">
            © 2024 Rajan K K Woodworking. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-wood-light/60">
            <Link href="/privacy" className="hover:text-gold-accent transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-accent transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-wood-brown hover:bg-gold-accent text-forest-light rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;