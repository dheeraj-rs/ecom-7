'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Eye, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  likes: number;
  views: number;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Amazon Dining Table',
    category: 'Dining Furniture',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg',
    description: 'Live-edge dining table crafted from sustainable Amazon hardwood',
    likes: 124,
    views: 890
  },
  {
    id: 2,
    title: 'Forest Bookshelf',
    category: 'Storage',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    description: 'Organic bookshelf inspired by forest canopy layers',
    likes: 89,
    views: 654
  },
  {
    id: 3,
    title: 'Canopy Bed Frame',
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    description: 'Majestic bed frame echoing the grandeur of forest trees',
    likes: 156,
    views: 1200
  },
  {
    id: 4,
    title: 'River Coffee Table',
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
    description: 'Epoxy river table celebrating the Amazon waterways',
    likes: 203,
    views: 1456
  },
  {
    id: 5,
    title: 'Garden Bench',
    category: 'Outdoor',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    description: 'Weather-resistant outdoor seating with natural curves',
    likes: 76,
    views: 432
  },
  {
    id: 6,
    title: 'Executive Desk',
    category: 'Office',
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg',
    description: 'Professional workspace with forest-inspired design',
    likes: 134,
    views: 789
  }
];

const GalleryPreview = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = parseInt(entry.target.getAttribute('data-id') || '0');
            setVisibleItems(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll('.gallery-item');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-forest relative">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-background opacity-20"
      >
        <source src="https://player.vimeo.com/external/394391404.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
      </video>
      <div className="video-overlay"></div>

      <div className="container-forest relative z-20">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="heading-forest">
            Gallery of
            <span className="block text-wood-gradient">Forest Creations</span>
          </h2>
          <p className="subheading-forest max-w-3xl mx-auto">
            Explore a curated collection of handcrafted furniture pieces, each telling 
            its own story of transformation from forest to home.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              data-id={item.id}
              className={`gallery-item group cursor-pointer transform transition-all duration-700 ${
                visibleItems.includes(item.id) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative h-80 rounded-xl overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-wood-brown/80 backdrop-blur-sm rounded-full text-sm text-wood-light">
                        {item.category}
                      </span>
                      <div className="flex items-center space-x-4 text-wood-light/80">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span className="text-sm">{item.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="h-4 w-4" />
                          <span className="text-sm">{item.likes}</span>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-wood-light mb-2">
                      {item.title}
                    </h3>
                    <p className="text-wood-light/80 text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Hover Effect */}
                {hoveredItem === item.id && (
                  <div className="absolute inset-0 border-2 border-gold-accent rounded-xl pointer-events-none animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <Link href="/gallery">
            <Button className="btn-forest text-lg px-12 py-6 group">
              View Complete Gallery
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;