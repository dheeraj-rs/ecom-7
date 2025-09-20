'use client';

import { useState, useEffect } from 'react';
import { ChevronDown, TreePine, Hammer, Award, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  if (!mounted) return null;

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <source src="https://player.vimeo.com/external/394391406.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165&oauth2_token_id=57447761" type="video/mp4" />
      </video>
      
      {/* Video Overlay */}
      <div className="video-overlay"></div>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container-forest">
          <div className="max-w-4xl">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-wood-brown/20 backdrop-blur-sm border border-wood-light/30 rounded-full px-6 py-3 mb-8 fade-in-up animate">
              <Award className="h-5 w-5 text-gold-accent" />
              <span className="text-wood-light font-medium">40 Years of Master Craftsmanship</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-8 fade-in-up animate" 
                style={{ animationDelay: '0.2s' }}>
              <span className="text-forest-gradient">Crafting Dreams</span>
              <br />
              <span className="text-wood-light">from Forest</span>
              <br />
              <span className="text-wood-gradient">to Home</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-wood-light/90 mb-12 max-w-2xl leading-relaxed fade-in-up animate" 
               style={{ animationDelay: '0.4s' }}>
              Experience the artistry of Rajan K K, where each piece tells a story of nature's beauty 
              transformed into timeless furniture through four decades of passionate craftsmanship.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-16 fade-in-up animate" 
                 style={{ animationDelay: '0.6s' }}>
              <Button className="btn-forest text-lg px-12 py-6">
                Explore Gallery
              </Button>
              <Button variant="outline" className="btn-outline-forest text-lg px-12 py-6">
                Custom Order
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 fade-in-up animate" 
                 style={{ animationDelay: '0.8s' }}>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-wood-brown/30 rounded-lg backdrop-blur-sm">
                  <Clock className="h-6 w-6 text-gold-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-wood-light">40+</div>
                  <div className="text-wood-light/80">Years Experience</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-wood-brown/30 rounded-lg backdrop-blur-sm">
                  <Hammer className="h-6 w-6 text-gold-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-wood-light">500+</div>
                  <div className="text-wood-light/80">Pieces Crafted</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-wood-brown/30 rounded-lg backdrop-blur-sm">
                  <TreePine className="h-6 w-6 text-gold-accent" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-wood-light">100%</div>
                  <div className="text-wood-light/80">Sustainable Wood</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 animate-bounce"
      >
        <div className="flex flex-col items-center space-y-2 text-wood-light hover:text-gold-accent transition-colors duration-300">
          <span className="text-sm font-medium tracking-wider">DISCOVER MORE</span>
          <ChevronDown className="h-6 w-6" />
        </div>
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 opacity-20 float">
        <TreePine className="h-32 w-32 text-wood-light" />
      </div>
      <div className="absolute bottom-1/3 left-10 opacity-10 float" style={{ animationDelay: '2s' }}>
        <TreePine className="h-24 w-24 text-wood-light" />
      </div>
    </section>
  );
};

export default HeroSection;