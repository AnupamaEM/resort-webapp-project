import { useEffect, useRef, useState } from 'react';
import { Home, Compass, Leaf } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Accommodation',
    subtitle: 'Luxury Living',
    description: 'Private villas, sky-view rooms, ocean decks',
    rotation: -3,
    delay: 0,
  },
  {
    icon: Compass,
    title: 'Adventure Activities',
    subtitle: 'Explore the Wild',
    description: 'Rafting, hiking, scuba, night safaris',
    rotation: 2,
    delay: 0.1,
  },
  {
    icon: Leaf,
    title: 'Wellness & Spa',
    subtitle: 'Heal by Nature',
    description: 'Ayurveda, herbal therapies, silent retreats',
    rotation: -2,
    delay: 0.2,
  },
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-cream to-secondary py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute h-96 w-96 rounded-full bg-forest blur-3xl" style={{ top: '10%', left: '10%' }} />
        <div className="absolute h-96 w-96 rounded-full bg-teal blur-3xl" style={{ bottom: '10%', right: '10%' }} />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <span className="mb-4 inline-block text-sm uppercase tracking-[0.3em] text-forest">
            Our Offerings
          </span>
          <h2 className="font-serif text-4xl font-bold text-charcoal md:text-5xl lg:text-6xl">
            Curated <span className="text-gradient-gold">Experiences</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-muted-foreground">
            Every moment at Serenity Haven is designed to reconnect you with nature and yourself.
          </p>
        </div>

        {/* Floating Cards */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`floating-card group relative w-full max-w-sm cursor-pointer rounded-3xl border border-border/50 bg-card/80 p-8 backdrop-blur-xl transition-all duration-700 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{
                transform: isVisible ? `rotate(${service.rotation}deg)` : 'rotate(0deg) translateY(80px)',
                transitionDelay: `${service.delay}s`,
              }}
            >
              {/* Glow Effect */}
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-gold/0 via-gold/0 to-gold/0 opacity-0 blur transition-all duration-500 group-hover:from-gold/20 group-hover:via-teal/10 group-hover:to-gold/20 group-hover:opacity-100" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-forest/10 text-forest transition-all duration-500 group-hover:bg-gold group-hover:text-charcoal group-hover:shadow-glow-gold">
                  <service.icon className="h-8 w-8" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <h3 className="font-serif text-2xl font-semibold text-charcoal transition-colors group-hover:text-forest">
                  {service.title}
                </h3>
                <p className="mt-1 text-sm uppercase tracking-widest text-gold">
                  {service.subtitle}
                </p>
                <p className="mt-4 text-muted-foreground">
                  {service.description}
                </p>

                {/* Learn More */}
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-forest opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <span>Discover More</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </div>
              </div>

              {/* Corner Accent */}
              <div className="absolute -right-1 -top-1 h-20 w-20 overflow-hidden rounded-tr-3xl">
                <div className="absolute right-2 top-2 h-4 w-4 rounded-full bg-gold/20 transition-all duration-500 group-hover:h-8 group-hover:w-8 group-hover:bg-gold/40" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
