'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { TreePine, Leaf, Mountain, Users } from 'lucide-react';

const AboutSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="section-forest relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <source src="https://player.vimeo.com/external/394391405.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <div className="container-forest relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up">
            <h2 className="heading-forest">
              Four Decades of
              <span className="block text-wood-gradient">Forest Wisdom</span>
            </h2>
            
            <p className="subheading-forest">
              From the heart of nature comes a craftsman's journey spanning four decades, 
              where every grain tells a story and every piece carries the soul of the forest.
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-wood-brown/30 rounded-lg backdrop-blur-sm mt-1">
                  <TreePine className="h-6 w-6 text-gold-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-wood-light mb-2">Sustainable Sourcing</h3>
                  <p className="text-wood-light/80 leading-relaxed">
                    Every piece begins with responsibly sourced wood, honoring the forest 
                    while creating heirloom-quality furniture that lasts generations.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-wood-brown/30 rounded-lg backdrop-blur-sm mt-1">
                  <Leaf className="h-6 w-6 text-gold-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-wood-light mb-2">Traditional Techniques</h3>
                  <p className="text-wood-light/80 leading-relaxed">
                    Master craftsmanship passed down through generations, combined with 
                    modern precision to create furniture that bridges past and present.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-wood-brown/30 rounded-lg backdrop-blur-sm mt-1">
                  <Mountain className="h-6 w-6 text-gold-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-wood-light mb-2">Natural Inspiration</h3>
                  <p className="text-wood-light/80 leading-relaxed">
                    Drawing inspiration from the Amazon's natural forms and patterns, 
                    each creation reflects the organic beauty of the forest ecosystem.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-forest text-center">
                <div className="text-4xl font-bold text-gold-accent mb-2">40+</div>
                <div className="text-wood-light">Years Mastering</div>
              </div>
              <div className="card-forest text-center">
                <div className="text-4xl font-bold text-gold-accent mb-2">500+</div>
                <div className="text-wood-light">Pieces Created</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative scale-in">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent z-10"></div>
              <Image
                src="https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg"
                alt="Master craftsman Rajan K K working on wood"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20">
                <div className="bg-forest-medium/80 backdrop-blur-lg rounded-lg p-6 border border-wood-light/20">
                  <h4 className="text-xl font-semibold text-wood-light mb-2">Rajan K K</h4>
                  <p className="text-wood-light/80">
                    "Each piece of wood whispers its story. My role is to listen and help it become what it was meant to be."
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-wood-brown/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gold-accent/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="mt-32 text-center fade-in-up">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-wood-gradient mb-8">
              The Philosophy of Wood
            </h3>
            <p className="text-xl text-wood-light/90 leading-relaxed mb-12">
              "Wood is not just material—it's a living memory of rain, sunshine, and time. 
              When you touch a piece I've crafted, you're touching a story that began in the forest 
              and found its purpose in your home."
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="h-px bg-wood-light/30 flex-1"></div>
              <Users className="h-8 w-8 text-gold-accent" />
              <div className="h-px bg-wood-light/30 flex-1"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;