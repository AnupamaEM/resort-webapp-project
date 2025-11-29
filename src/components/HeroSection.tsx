import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-resort.jpg';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out',
        }}
      >
        <img
          src={heroImage}
          alt="Luxury tropical resort at golden hour"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-forest/60" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-gold/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="animate-fade-up">
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.4em] text-gold">
            Exclusive Sanctuary
          </span>
        </div>

        <h1 className="animate-fade-up font-serif text-5xl font-bold leading-tight text-cream md:text-7xl lg:text-8xl" style={{ animationDelay: '0.1s' }}>
          Serenity
          <span className="block text-gradient-gold">Haven</span>
        </h1>

        <p className="animate-fade-up mt-6 max-w-xl text-lg font-light text-cream/80 md:text-xl" style={{ animationDelay: '0.2s' }}>
          Where silence meets luxury. Discover a world where nature embraces elegance.
        </p>

        <div className="animate-fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row" style={{ animationDelay: '0.3s' }}>
          <button className="group relative overflow-hidden rounded-full bg-gold px-10 py-4 text-sm font-semibold uppercase tracking-widest text-charcoal transition-all duration-500 hover:shadow-glow-gold">
            <span className="relative z-10">Book Your Escape</span>
            <div className="absolute inset-0 -translate-x-full bg-gold-light transition-transform duration-500 group-hover:translate-x-0" />
          </button>

          <button className="group relative overflow-hidden rounded-full border-2 border-cream/30 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-cream backdrop-blur-sm transition-all duration-500 hover:border-gold hover:text-gold">
            Explore Experiences
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* Scroll Indicator - centered container */}
      <div className="absolute bottom-10 left-0 right-0 z-10 flex justify-center">
        <button
          onClick={scrollToServices}
          className="animate-bounce text-cream/60 transition-colors hover:text-gold"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest">Discover</span>
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </div>

      {/* Decorative Lines */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />
    </section>
  );
};

export default HeroSection;
