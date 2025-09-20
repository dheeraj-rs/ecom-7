'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Hammer, 
  TreePine, 
  Home, 
  Palette, 
  Wrench, 
  ArrowRight,
  CheckCircle,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  priceRange: string;
  popular: boolean;
}

const services: Service[] = [
  {
    id: 1,
    icon: <Home className="h-8 w-8" />,
    title: 'Custom Furniture',
    description: 'Bespoke furniture pieces designed and crafted to your exact specifications and space requirements.',
    features: ['Design Consultation', '3D Visualization', 'Premium Materials', 'Lifetime Warranty'],
    priceRange: '$1,500 - $8,000',
    popular: true
  },
  {
    id: 2,
    icon: <Palette className="h-8 w-8" />,
    title: 'Design & Planning',
    description: 'Complete interior design consultation and space planning with forest-inspired aesthetics.',
    features: ['Space Planning', 'Material Selection', 'Color Coordination', 'Project Timeline'],
    priceRange: '$500 - $2,000',
    popular: false
  },
  {
    id: 3,
    icon: <Wrench className="h-8 w-8" />,
    title: 'Restoration',
    description: 'Expert restoration services to bring your cherished wooden furniture back to its original glory.',
    features: ['Damage Assessment', 'Wood Repair', 'Refinishing', 'Hardware Replacement'],
    priceRange: '$300 - $1,500',
    popular: false
  },
  {
    id: 4,
    icon: <TreePine className="h-8 w-8" />,
    title: 'Sustainable Sourcing',
    description: 'Ethically sourced wood selection service ensuring environmental responsibility.',
    features: ['FSC Certified Wood', 'Local Sourcing', 'Waste Reduction', 'Carbon Footprint Tracking'],
    priceRange: 'Consultation',
    popular: false
  }
];

const ServicesPreview = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <section className="section-forest relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-forest-medium/20 to-transparent"></div>
      
      <div className="container-forest relative z-20">
        {/* Section Header */}
        <div className="text-center mb-20 fade-in-up">
          <h2 className="heading-forest">
            Comprehensive
            <span className="block text-wood-gradient">Woodworking Services</span>
          </h2>
          <p className="subheading-forest max-w-3xl mx-auto">
            From initial concept to final delivery, we provide complete woodworking services 
            that honor both craftsmanship tradition and modern living needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-500 transform hover:-translate-y-2 fade-in-up`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 z-30">
                  <div className="bg-gold-accent text-forest-dark px-3 py-1 rounded-full text-sm font-semibold flex items-center space-x-1">
                    <Star className="h-3 w-3" />
                    <span>Popular</span>
                  </div>
                </div>
              )}

              <div className="card-forest h-full relative overflow-hidden">
                {/* Icon */}
                <div className="mb-6">
                  <div className="p-4 bg-wood-brown/30 rounded-xl inline-block text-gold-accent group-hover:text-wood-light transition-colors duration-300">
                    {service.icon}
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
                      <CheckCircle className="h-4 w-4 text-gold-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Price */}
                <div className="mt-auto pt-4 border-t border-wood-light/20">
                  <div className="flex items-center justify-between">
                    <span className="text-wood-light/80 text-sm">Starting from</span>
                    <span className="text-xl font-bold text-gold-accent">{service.priceRange}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                {hoveredService === service.id && (
                  <div className="absolute inset-0 border-2 border-gold-accent rounded-xl pointer-events-none animate-pulse"></div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Process Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16 fade-in-up">
          <div>
            <h3 className="font-playfair text-3xl font-bold text-wood-gradient mb-8">
              Our Craftsmanship Process
            </h3>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Consultation & Design', description: 'Understanding your vision and space requirements' },
                { step: '02', title: 'Material Selection', description: 'Choosing the perfect sustainable wood for your piece' },
                { step: '03', title: 'Expert Craftsmanship', description: 'Handcrafting with precision and traditional techniques' },
                { step: '04', title: 'Quality Assurance', description: 'Rigorous testing and finishing for perfection' },
                { step: '05', title: 'Delivery & Setup', description: 'Professional installation and aftercare guidance' }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-wood-brown/30 rounded-lg flex items-center justify-center text-gold-accent font-bold backdrop-blur-sm">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-wood-light mb-2">{item.title}</h4>
                    <p className="text-wood-light/80">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden relative">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="https://player.vimeo.com/external/394391403.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 to-transparent"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-wood-brown/20 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center fade-in-up">
          <Link href="/services">
            <Button className="btn-forest text-lg px-12 py-6 group">
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;