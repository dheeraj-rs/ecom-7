'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/sections/footer';
import { 
  Hammer, 
  TreePine, 
  Home, 
  Palette, 
  Wrench, 
  CheckCircle,
  Star,
  Clock,
  DollarSign,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  duration: string;
  popular: boolean;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Home className="h-8 w-8" />,
    title: 'Custom Furniture Design',
    description: 'Bespoke furniture pieces designed and crafted to your exact specifications and space requirements.',
    features: ['Design Consultation', '3D Visualization', 'Premium Materials', 'Lifetime Warranty', 'Free Delivery'],
    priceRange: '$1,500 - $8,000',
    duration: '4-8 weeks',
    popular: true,
    image: 'https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg'
  },
  {
    id: 2,
    icon: <Palette className="h-8 w-8" />,
    title: 'Interior Design Consultation',
    description: 'Complete interior design consultation and space planning with forest-inspired aesthetics.',
    features: ['Space Planning', 'Material Selection', 'Color Coordination', 'Project Timeline', '3D Renderings'],
    priceRange: '$500 - $2,000',
    duration: '1-2 weeks',
    popular: false,
    image: 'https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg'
  },
  {
    id: 3,
    icon: <Wrench className="h-8 w-8" />,
    title: 'Furniture Restoration',
    description: 'Expert restoration services to bring your cherished wooden furniture back to its original glory.',
    features: ['Damage Assessment', 'Wood Repair', 'Refinishing', 'Hardware Replacement', 'Preservation'],
    priceRange: '$300 - $1,500',
    duration: '2-4 weeks',
    popular: false,
    image: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg'
  },
  {
    id: 4,
    icon: <TreePine className="h-8 w-8" />,
    title: 'Sustainable Wood Sourcing',
    description: 'Ethically sourced wood selection service ensuring environmental responsibility.',
    features: ['FSC Certified Wood', 'Local Sourcing', 'Waste Reduction', 'Carbon Footprint Tracking', 'Quality Guarantee'],
    priceRange: 'Consultation',
    duration: 'Ongoing',
    popular: false,
    image: 'https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg'
  }
];

const ServicesPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <source src="https://player.vimeo.com/external/394391403.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container-forest">
            <h1 className="heading-forest text-center fade-in-up animate">
              Professional
              <span className="block text-wood-gradient">Woodworking Services</span>
            </h1>
            <p className="text-xl text-wood-light text-center max-w-3xl mx-auto fade-in-up animate" style={{ animationDelay: '0.2s' }}>
              From custom furniture design to restoration, we provide comprehensive woodworking services 
              that honor both craftsmanship tradition and modern living needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-forest">
        <div className="container-forest">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:-translate-y-2 fade-in-up animate`}
                style={{ animationDelay: `${index * 200}ms` }}
                onClick={() => setSelectedService(service)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-3 -right-3 z-30">
                    <div className="bg-gold-accent text-forest-dark px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2">
                      <Star className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div className="card-forest h-full relative overflow-hidden">
                  {/* Service Image */}
                  <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <div className="p-3 bg-wood-brown/80 rounded-lg text-gold-accent backdrop-blur-sm">
                        {service.icon}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-wood-light mb-4 group-hover:text-gold-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-wood-light/80 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-wood-light/80">
                        <CheckCircle className="h-4 w-4 text-gold-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Service Details */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-wood-light/20">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="h-4 w-4 text-gold-accent" />
                      <div>
                        <div className="text-xs text-wood-light/60">Price Range</div>
                        <div className="text-sm font-semibold text-wood-light">{service.priceRange}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4 text-gold-accent" />
                      <div>
                        <div className="text-xs text-wood-light/60">Duration</div>
                        <div className="text-sm font-semibold text-wood-light">{service.duration}</div>
                      </div>
                    </div>
                  </div>

                  <Button className="btn-forest w-full mt-6">
                    Learn More
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-forest bg-forest-medium/20">
        <div className="container-forest">
          <div className="text-center mb-16 fade-in-up">
            <h2 className="heading-forest">
              Our Proven
              <span className="block text-wood-gradient">Craftsmanship Process</span>
            </h2>
            <p className="subheading-forest max-w-3xl mx-auto">
              Every project follows our time-tested approach that ensures exceptional quality 
              and complete customer satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Understanding your vision and requirements', icon: <Users className="h-6 w-6" /> },
              { step: '02', title: 'Design', description: 'Creating detailed plans and 3D visualizations', icon: <Palette className="h-6 w-6" /> },
              { step: '03', title: 'Material Selection', description: 'Choosing the perfect sustainable wood', icon: <TreePine className="h-6 w-6" /> },
              { step: '04', title: 'Craftsmanship', description: 'Expert handcrafting with precision', icon: <Hammer className="h-6 w-6" /> },
              { step: '05', title: 'Delivery', description: 'Professional installation and setup', icon: <Home className="h-6 w-6" /> }
            ].map((item, idx) => (
              <div key={idx} className="text-center fade-in-up animate" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="card-forest mb-4">
                  <div className="w-16 h-16 bg-wood-brown/30 rounded-full flex items-center justify-center text-gold-accent mx-auto mb-4">
                    {item.icon}
                  </div>
                  <div className="text-3xl font-bold text-gold-accent mb-2">{item.step}</div>
                  <h4 className="text-lg font-semibold text-wood-light mb-2">{item.title}</h4>
                  <p className="text-wood-light/80 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-forest">
        <div className="container-forest">
          <div className="text-center fade-in-up">
            <h2 className="heading-forest mb-8">
              Ready to Start Your
              <span className="block text-wood-gradient">Dream Project?</span>
            </h2>
            <p className="subheading-forest max-w-2xl mx-auto mb-12">
              Let's discuss your vision and create something extraordinary together. 
              Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="btn-forest text-lg px-12 py-6">
                Get Free Consultation
              </Button>
              <Button variant="outline" className="btn-outline-forest text-lg px-12 py-6">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ServicesPage;