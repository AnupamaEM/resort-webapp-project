import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';
import FloatingBookButton from '@/components/FloatingBookButton';

const Index = () => {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <GallerySection />
      <Footer />
      <FloatingBookButton />
    </main>
  );
};

export default Index;
