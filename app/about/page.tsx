'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '@/components/navigation/navbar';
import Footer from '@/components/sections/footer';
import { TreePine, Award, Users, Leaf, Mountain, Heart } from 'lucide-react';

const AboutPage = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const achievements = [
    { number: '40+', label: 'Years Experience', icon: <Award className="h-8 w-8" /> },
    { number: '500+', label: 'Pieces Crafted', icon: <TreePine className="h-8 w-8" /> },
    { number: '200+', label: 'Happy Clients', icon: <Users className="h-8 w-8" /> },
    { number: '100%', label: 'Sustainable', icon: <Leaf className="h-8 w-8" /> }
  ];

  const timeline = [
    {
      year: '1984',
      title: 'The Beginning',
      description: 'Started woodworking journey as an apprentice, learning traditional techniques from master craftsmen in the Amazon region.'
    },
    {
      year: '1992',
      title: 'First Workshop',
      description: 'Established the first independent workshop, focusing on sustainable furniture using locally sourced materials.'
    },
    {
      year: '2000',
      title: 'Recognition',
      description: 'Received the Master Craftsman certification and began training the next generation of woodworkers.'
    },
    {
      year: '2010',
      title: 'Sustainability Pioneer',
      description: 'Became one of the first certified sustainable furniture makers in the region, setting new industry standards.'
    },
    {
      year: '2024',
      title: 'Legacy Continues',
      description: 'Four decades later, still passionate about creating heirloom-quality furniture that honors the forest.'
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="video-background"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <source src="https://player.vimeo.com/external/394391407.sd.mp4?s=5318b6b2e8e3b3b1c9b5b9d9a6e1b8e7d1f9e5c7&profile_id=165" type="video/mp4" />
        </video>
        <div className="video-overlay"></div>
        
        <div className="relative z-20 h-full flex items-center">
          <div className="container-forest">
            <div className="max-w-4xl">
              <h1 className="heading-forest fade-in-up animate">
                The Story Behind
                <span className="block text-wood-gradient">Four Decades</span>
              </h1>
              <p className="subheading-forest fade-in-up animate" style={{ animationDelay: '0.2s' }}>
                From a young apprentice learning the secrets of the forest to a master craftsman 
                shaping the future of sustainable woodworking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="section-forest relative">
        <div className="container-forest">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div className="fade-in-up">
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-wood-gradient mb-8">
                A Journey Rooted in Nature
              </h2>
              <div className="space-y-6 text-lg text-wood-light/90 leading-relaxed">
                <p>
                  In 1984, a young man walked into the depths of the Amazon forest with nothing 
                  but curiosity and a deep respect for nature. What he discovered there would 
                  shape not just his career, but his entire philosophy of life.
                </p>
                <p>
                  Under the tutelage of indigenous craftsmen, Rajan K K learned that woodworking 
                  isn't just about shaping material—it's about understanding the soul of each 
                  tree, honoring its journey from seed to timber, and ensuring its story 
                  continues in the homes and hearts of people.
                </p>
                <p>
                  Today, four decades later, every piece that emerges from our workshop carries 
                  this philosophy: a deep connection to nature, respect for traditional 
                  techniques, and an unwavering commitment to sustainability.
                </p>
              </div>
            </div>

            <div className="relative scale-in">
              <div className="relative h-[500px] rounded-2xl overflow-hidden">
                <Image
                  src="https://images.pexels.com/photos/6474473/pexels-photo-6474473.jpeg"
                  alt="Rajan K K in his workshop"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/60 to-transparent"></div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gold-accent/20 rounded-full blur-xl"></div>
            </div>
          </div>

          {/* Achievements */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32 fade-in-up">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center card-forest">
                <div className="text-gold-accent mb-4 flex justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-wood-light mb-2">
                  {achievement.number}
                </div>
                <div className="text-wood-light/80">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>

          {/* Philosophy */}
          <div className="text-center mb-32 fade-in-up">
            <div className="max-w-4xl mx-auto">
              <h3 className="font-playfair text-3xl md:text-4xl font-bold text-wood-gradient mb-8">
                Our Philosophy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="card-forest">
                  <Mountain className="h-12 w-12 text-gold-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-wood-light mb-4">Respect Nature</h4>
                  <p className="text-wood-light/80">
                    Every tree has lived decades before becoming furniture. We honor that 
                    journey by using sustainable practices and waste-free methods.
                  </p>
                </div>
                
                <div className="card-forest">
                  <Heart className="h-12 w-12 text-gold-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-wood-light mb-4">Craft with Love</h4>
                  <p className="text-wood-light/80">
                    Each piece is created with passion and attention to detail that can only 
                    come from genuine love for the craft.
                  </p>
                </div>
                
                <div className="card-forest">
                  <Users className="h-12 w-12 text-gold-accent mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-wood-light mb-4">Build Legacy</h4>
                  <p className="text-wood-light/80">
                    We don't just make furniture; we create heirlooms that will be 
                    cherished for generations to come.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="fade-in-up">
            <h3 className="font-playfair text-3xl md:text-4xl font-bold text-wood-gradient text-center mb-16">
              Four Decades of Excellence
            </h3>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start space-x-8 mb-16 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-wood-brown rounded-full flex items-center justify-center text-wood-light font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 card-forest">
                    <h4 className="text-2xl font-bold text-wood-light mb-4">{item.title}</h4>
                    <p className="text-wood-light/80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default AboutPage;