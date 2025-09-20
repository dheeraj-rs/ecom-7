'use client';

import { useState, useEffect } from 'react';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/sections/footer';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  Calendar,
  TreePine
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactPage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

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
          <source src="https://player.vimeo.com/external/394391401.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container-forest">
            <h1 className="heading-forest text-center fade-in-up animate">
              Get In
              <span className="block text-wood-gradient">Touch</span>
            </h1>
            <p className="text-xl text-wood-light text-center max-w-3xl mx-auto fade-in-up animate" style={{ animationDelay: '0.2s' }}>
              Ready to bring your woodworking vision to life? We'd love to hear from you. 
              Let's discuss your project and create something extraordinary together.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-forest bg-forest-medium/20">
        <div className="container-forest">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: <Phone className="h-8 w-8" />,
                title: 'Phone',
                info: '+1 (555) 123-4567',
                subInfo: 'Mon - Fri, 8AM - 6PM',
                action: 'Call Now'
              },
              {
                icon: <Mail className="h-8 w-8" />,
                title: 'Email',
                info: 'info@rajankk.com',
                subInfo: 'We reply within 24h',
                action: 'Send Email'
              },
              {
                icon: <MapPin className="h-8 w-8" />,
                title: 'Workshop',
                info: '123 Forest Avenue',
                subInfo: 'Amazon District, BR 12345',
                action: 'Get Directions'
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: 'Hours',
                info: 'Mon - Fri: 8AM - 6PM',
                subInfo: 'Sat: 9AM - 4PM',
                action: 'Schedule Visit'
              }
            ].map((item, idx) => (
              <div key={idx} className="card-forest text-center fade-in-up animate" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-gold-accent mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-wood-light mb-2">{item.title}</h3>
                <p className="text-wood-light/90 mb-1">{item.info}</p>
                <p className="text-wood-light/60 text-sm mb-4">{item.subInfo}</p>
                <Button className="btn-outline-forest text-sm px-4 py-2">
                  {item.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-forest">
        <div className="container-forest">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="fade-in-up">
              <div className="card-forest">
                <h2 className="text-3xl font-bold text-wood-light mb-8">
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-wood-light font-medium mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-forest-medium/50 border border-wood-light/30 rounded-lg text-wood-light placeholder-wood-light/60 focus:outline-none focus:border-gold-accent backdrop-blur-sm"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-light font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-forest-medium/50 border border-wood-light/30 rounded-lg text-wood-light placeholder-wood-light/60 focus:outline-none focus:border-gold-accent backdrop-blur-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-wood-light font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-forest-medium/50 border border-wood-light/30 rounded-lg text-wood-light placeholder-wood-light/60 focus:outline-none focus:border-gold-accent backdrop-blur-sm"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-wood-light font-medium mb-2">Subject *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-forest-medium/50 border border-wood-light/30 rounded-lg text-wood-light focus:outline-none focus:border-gold-accent backdrop-blur-sm"
                      >
                        <option value="">Select subject</option>
                        <option value="custom-order">Custom Order Inquiry</option>
                        <option value="consultation">Design Consultation</option>
                        <option value="restoration">Furniture Restoration</option>
                        <option value="general">General Question</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-wood-light font-medium mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-forest-medium/50 border border-wood-light/30 rounded-lg text-wood-light placeholder-wood-light/60 focus:outline-none focus:border-gold-accent backdrop-blur-sm resize-none"
                      placeholder="Tell us about your project or question..."
                    />
                  </div>

                  <Button type="submit" className="btn-forest w-full text-lg py-4">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* Workshop Info & Services */}
            <div className="space-y-8 fade-in-up" style={{ animationDelay: '0.2s' }}>
              {/* Workshop Image */}
              <div className="card-forest">
                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  >
                    <source src="https://player.vimeo.com/external/394391400.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold text-wood-light mb-2">Visit Our Workshop</h3>
                    <p className="text-wood-light/80 text-sm">
                      See our craftsmanship process firsthand and discuss your project in person.
                    </p>
                  </div>
                </div>
                <Button className="btn-outline-forest w-full">
                  <Calendar className="mr-2 h-4 w-4" />
                  Schedule Workshop Visit
                </Button>
              </div>

              {/* Quick Services */}
              <div className="card-forest">
                <h3 className="text-xl font-semibold text-wood-light mb-6">Quick Services</h3>
                <div className="space-y-4">
                  {[
                    { service: 'Free Consultation', time: '30 minutes', icon: <MessageSquare className="h-5 w-5" /> },
                    { service: 'Design Quote', time: '24-48 hours', icon: <TreePine className="h-5 w-5" /> },
                    { service: 'Project Timeline', time: '1-2 weeks', icon: <Calendar className="h-5 w-5" /> }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-forest-medium/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="text-gold-accent">
                          {item.icon}
                        </div>
                        <span className="text-wood-light">{item.service}</span>
                      </div>
                      <span className="text-wood-light/60 text-sm">{item.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="card-forest">
                <div className="text-center">
                  <div className="text-4xl mb-4">⭐⭐⭐⭐⭐</div>
                  <p className="text-wood-light/90 italic mb-4">
                    "Rajan's craftsmanship is exceptional. He transformed our vision into a beautiful 
                    dining table that's become the centerpiece of our home."
                  </p>
                  <div className="text-gold-accent font-semibold">- Sarah & Michael Johnson</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-forest bg-forest-medium/20">
        <div className="container-forest">
          <div className="text-center mb-12 fade-in-up">
            <h2 className="heading-forest">
              Find Our
              <span className="block text-wood-gradient">Workshop</span>
            </h2>
            <p className="subheading-forest">
              Located in the heart of the Amazon district, our workshop is open for visits by appointment.
            </p>
          </div>

          <div className="card-forest fade-in-up">
            <div className="aspect-video bg-forest-medium/50 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gold-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-wood-light mb-2">Interactive Map</h3>
                <p className="text-wood-light/80 mb-4">
                  123 Forest Avenue, Amazon District, BR 12345
                </p>
                <Button className="btn-forest">
                  Open in Google Maps
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;