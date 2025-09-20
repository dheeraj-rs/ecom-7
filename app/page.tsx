import Navbar from '@/components/navigation/navbar';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import GalleryPreview from '@/components/sections/gallery-preview';
import ServicesPreview from '@/components/sections/services-preview';
import Footer from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <GalleryPreview />
      <ServicesPreview />
      <Footer />
    </main>
  );
}