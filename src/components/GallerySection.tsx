import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import galleryVilla from '@/assets/gallery-villa.jpg';
import galleryPool from '@/assets/gallery-pool.jpg';
import gallerySpa from '@/assets/gallery-spa.jpg';
import galleryDining from '@/assets/gallery-dining.jpg';

const galleryItems = [
  { src: galleryPool, title: 'Infinity Pool', subtitle: 'Sunset Views', size: 'large' },
  { src: galleryVilla, title: 'Private Villa', subtitle: 'Ocean Suite', size: 'medium' },
  { src: gallerySpa, title: 'Wellness Spa', subtitle: 'Healing Touch', size: 'medium' },
  { src: galleryDining, title: 'Fine Dining', subtitle: 'Culinary Art', size: 'small' },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-charcoal py-24"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal-light/20 via-transparent to-transparent" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.3em] text-gold">
            Visual Journey
          </span>
          <h2 className="font-serif text-4xl font-bold text-cream md:text-5xl lg:text-6xl">
            Moments of <span className="text-gradient-gold">Bliss</span>
          </h2>
        </div>

        {/* Asymmetrical Mosaic Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:grid-rows-2 lg:gap-6">
          {/* Large Image */}
          <div
            className={`group relative col-span-1 row-span-2 cursor-pointer overflow-hidden rounded-2xl md:col-span-2 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            onClick={() => setSelectedImage(galleryItems[0].src)}
          >
            <div className="aspect-square h-full w-full md:aspect-auto">
              <img
                src={galleryItems[0].src}
                alt={galleryItems[0].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-serif text-2xl font-semibold text-cream">{galleryItems[0].title}</h3>
              <p className="text-sm text-gold">{galleryItems[0].subtitle}</p>
            </div>
            <div className="absolute inset-0 border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/30 rounded-2xl" />
          </div>

          {/* Medium Image 1 */}
          <div
            className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '0.1s' }}
            onClick={() => setSelectedImage(galleryItems[1].src)}
          >
            <div className="aspect-[4/3]">
              <img
                src={galleryItems[1].src}
                alt={galleryItems[1].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-serif text-lg font-semibold text-cream">{galleryItems[1].title}</h3>
              <p className="text-xs text-gold">{galleryItems[1].subtitle}</p>
            </div>
            <div className="absolute inset-0 border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/30 rounded-2xl" />
          </div>

          {/* Medium Image 2 */}
          <div
            className={`group relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '0.15s' }}
            onClick={() => setSelectedImage(galleryItems[2].src)}
          >
            <div className="aspect-[4/3]">
              <img
                src={galleryItems[2].src}
                alt={galleryItems[2].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-serif text-lg font-semibold text-cream">{galleryItems[2].title}</h3>
              <p className="text-xs text-gold">{galleryItems[2].subtitle}</p>
            </div>
            <div className="absolute inset-0 border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/30 rounded-2xl" />
          </div>

          {/* Small Vertical Image */}
          <div
            className={`group relative col-span-1 row-span-1 cursor-pointer overflow-hidden rounded-2xl md:col-span-2 transition-all duration-700 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
            }`}
            style={{ transitionDelay: '0.2s' }}
            onClick={() => setSelectedImage(galleryItems[3].src)}
          >
            <div className="aspect-video">
              <img
                src={galleryItems[3].src}
                alt={galleryItems[3].title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full transition-transform duration-500 group-hover:translate-y-0">
              <h3 className="font-serif text-lg font-semibold text-cream">{galleryItems[3].title}</h3>
              <p className="text-xs text-gold">{galleryItems[3].subtitle}</p>
            </div>
            <div className="absolute inset-0 border-2 border-gold/0 transition-all duration-500 group-hover:border-gold/30 rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-charcoal/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute right-6 top-6 text-cream/60 transition-colors hover:text-gold"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery fullscreen"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default GallerySection;
