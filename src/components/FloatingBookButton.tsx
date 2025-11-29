import { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

const FloatingBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <button
      className={`fixed bottom-8 right-8 z-50 flex items-center gap-3 rounded-full bg-gold px-6 py-4 font-semibold uppercase tracking-wider text-charcoal shadow-glow-gold transition-all duration-500 hover:bg-gold-light hover:scale-105 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
    >
      <Calendar className="h-5 w-5" />
      <span className="hidden sm:inline">Book Now</span>
    </button>
  );
};

export default FloatingBookButton;
