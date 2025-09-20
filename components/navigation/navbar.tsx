'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, TreePine, Phone, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Services', href: '/services' },
    { name: 'Custom Orders', href: '/custom-orders' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      scrolled 
        ? 'bg-forest-dark/95 backdrop-blur-lg shadow-2xl border-b border-wood-light/20' 
        : 'bg-transparent'
    )}>
      <div className="container-forest">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <TreePine className="h-8 w-8 text-wood-light group-hover:text-gold-accent transition-colors duration-300" />
              <div className="absolute inset-0 bg-wood-light/20 rounded-full scale-0 group-hover:scale-125 transition-transform duration-300"></div>
            </div>
            <div>
              <h1 className="font-playfair text-2xl font-bold text-wood-light group-hover:text-gold-accent transition-colors duration-300">
                Rajan K K
              </h1>
              <p className="text-xs text-wood-light/80 font-light tracking-wider">
                MASTER WOODWORKER
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-wood-light hover:text-gold-accent transition-all duration-300 font-medium group"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gold-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6 text-sm text-wood-light/80">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <span>info@rajankk.com</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-wood-light hover:text-gold-accent transition-colors duration-300"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-forest-dark/98 backdrop-blur-lg border-t border-wood-light/20">
          <div className="container-forest py-6">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-wood-light hover:text-gold-accent transition-colors duration-300 py-3 border-b border-wood-light/10 last:border-none"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-3 text-sm text-wood-light/80">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@rajankk.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;