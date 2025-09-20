'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/sections/footer';
import { Search, Filter, Eye, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  likes: number;
  views: number;
  materials: string[];
  year: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Amazon Dining Table',
    category: 'Dining Furniture',
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg',
    description: 'Live-edge dining table crafted from sustainable Amazon hardwood with natural river patterns',
    likes: 124,
    views: 890,
    materials: ['Amazon Hardwood', 'Epoxy Resin', 'Steel Legs'],
    year: '2023'
  },
  {
    id: 2,
    title: 'Forest Bookshelf',
    category: 'Storage',
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
    description: 'Organic bookshelf inspired by forest canopy layers with adjustable shelving',
    likes: 89,
    views: 654,
    materials: ['Oak Wood', 'Natural Finish'],
    year: '2023'
  },
  {
    id: 3,
    title: 'Canopy Bed Frame',
    category: 'Bedroom',
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg',
    description: 'Majestic bed frame echoing the grandeur of forest trees with hand-carved details',
    likes: 156,
    views: 1200,
    materials: ['Mahogany', 'Hand Carving'],
    year: '2024'
  },
  {
    id: 4,
    title: 'River Coffee Table',
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg',
    description: 'Epoxy river table celebrating the Amazon waterways with LED lighting',
    likes: 203,
    views: 1456,
    materials: ['Walnut', 'Blue Epoxy', 'LED Lights'],
    year: '2024'
  },
  {
    id: 5,
    title: 'Garden Bench',
    category: 'Outdoor',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg',
    description: 'Weather-resistant outdoor seating with natural curves and ergonomic design',
    likes: 76,
    views: 432,
    materials: ['Teak Wood', 'Weather Seal'],
    year: '2023'
  },
  {
    id: 6,
    title: 'Executive Desk',
    category: 'Office',
    image: 'https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg',
    description: 'Professional workspace with forest-inspired design and hidden cable management',
    likes: 134,
    views: 789,
    materials: ['Cherry Wood', 'Brass Hardware'],
    year: '2024'
  },
  {
    id: 7,
    title: 'Kitchen Island',
    category: 'Kitchen',
    image: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg',
    description: 'Custom kitchen island with integrated storage and natural wood grain patterns',
    likes: 167,
    views: 923,
    materials: ['Maple Wood', 'Granite Top'],
    year: '2023'
  },
  {
    id: 8,
    title: 'Wine Cabinet',
    category: 'Storage',
    image: 'https://images.pexels.com/photos/3621104/pexels-photo-3621104.jpeg',
    description: 'Temperature-controlled wine storage with elegant curved design',
    likes: 98,
    views: 567,
    materials: ['Cedar Wood', 'Cork Insulation'],
    year: '2024'
  },
  {
    id: 9,
    title: 'Reading Nook',
    category: 'Living Room',
    image: 'https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg',
    description: 'Cozy reading corner with built-in lighting and cushioned seating',
    likes: 145,
    views: 812,
    materials: ['Pine Wood', 'Fabric Cushions'],
    year: '2023'
  }
];

const categories = ['All', 'Dining Furniture', 'Living Room', 'Bedroom', 'Storage', 'Office', 'Outdoor', 'Kitchen'];

const GalleryPage = () => {
  const [filteredItems, setFilteredItems] = useState(galleryItems);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = galleryItems;
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.materials.some(material => 
          material.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
    
    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm]);

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        >
          <source src="https://player.vimeo.com/external/394391404.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container-forest">
            <h1 className="heading-forest text-center fade-in-up animate">
              Gallery of
              <span className="block text-wood-gradient">Forest Creations</span>
            </h1>
            <p className="text-xl text-wood-light/90 text-center max-w-3xl mx-auto fade-in-up animate" style={{ animationDelay: '0.2s' }}>
              Explore our complete collection of handcrafted furniture pieces, each telling its own story of transformation from forest to home.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-forest-medium/20">
        <div className="container-forest">
          <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-wood-light/60" />
              <input
                type="text"
                placeholder="Search gallery..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-forest-medium/50 border border-wood-light/30 rounded-lg text-wood-light placeholder-wood-light/60 focus:outline-none focus:border-gold-accent backdrop-blur-sm"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gold-accent text-forest-dark'
                      : 'bg-forest-medium/50 text-wood-light hover:bg-wood-brown/50'
                  } backdrop-blur-sm border border-wood-light/20`}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-6 text-wood-light/80">
            Showing {filteredItems.length} of {galleryItems.length} pieces
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-forest">
        <div className="container-forest">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={item.id}
                className="group cursor-pointer transform transition-all duration-500 hover:-translate-y-2 fade-in-up animate"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedItem(item)}
              >
                <div className="card-forest overflow-hidden">
                  <div className="relative h-64 mb-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center justify-between text-wood-light">
                          <span className="px-3 py-1 bg-wood-brown/80 backdrop-blur-sm rounded-full text-sm">
                            {item.category}
                          </span>
                          <div className="flex items-center space-x-4 text-sm">
                            <div className="flex items-center space-x-1">
                              <Eye className="h-4 w-4" />
                              <span>{item.views}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Heart className="h-4 w-4" />
                              <span>{item.likes}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-wood-light mb-2 group-hover:text-gold-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-wood-light/80 text-sm mb-4 line-clamp-2">
                    {item.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {item.materials.map((material, idx) => (
                      <span key={idx} className="px-2 py-1 bg-wood-brown/20 text-wood-light/80 text-xs rounded">
                        {material}
                      </span>
                    ))}
                  </div>
                  
                  <div className="text-gold-accent text-sm font-medium">
                    Created in {item.year}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-wood-light mb-4">No items found</h3>
              <p className="text-wood-light/80">Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-forest-dark/90 backdrop-blur-lg z-50 flex items-center justify-center p-4">
          <div className="max-w-4xl w-full max-h-[90vh] overflow-y-auto card-forest">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-wood-light">{selectedItem.title}</h2>
              <Button
                onClick={() => setSelectedItem(null)}
                className="p-2 hover:bg-wood-brown/30 rounded-lg transition-colors duration-300"
              >
                <X className="h-6 w-6 text-wood-light" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative h-96 lg:h-full">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-wood-light mb-2">Description</h3>
                  <p className="text-wood-light/80">{selectedItem.description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-wood-light mb-2">Materials Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.materials.map((material, idx) => (
                      <span key={idx} className="px-3 py-1 bg-wood-brown/30 text-wood-light rounded-lg">
                        {material}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-wood-light font-medium mb-1">Category</h4>
                    <p className="text-wood-light/80">{selectedItem.category}</p>
                  </div>
                  <div>
                    <h4 className="text-wood-light font-medium mb-1">Year Created</h4>
                    <p className="text-wood-light/80">{selectedItem.year}</p>
                  </div>
                  <div>
                    <h4 className="text-wood-light font-medium mb-1">Views</h4>
                    <p className="text-wood-light/80">{selectedItem.views}</p>
                  </div>
                  <div>
                    <h4 className="text-wood-light font-medium mb-1">Likes</h4>
                    <p className="text-wood-light/80">{selectedItem.likes}</p>
                  </div>
                </div>
                
                <Button className="btn-forest w-full">
                  Request Similar Piece
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
};

export default GalleryPage;