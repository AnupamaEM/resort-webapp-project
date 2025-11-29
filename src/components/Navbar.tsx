import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Experiences', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Accommodations', href: '#accommodations' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/90 py-4 backdrop-blur-xl shadow-soft'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="font-serif text-2xl font-bold text-cream">
          Serenity<span className="text-gold">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium uppercase tracking-widest text-cream/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <button className="rounded-full border border-gold bg-transparent px-6 py-2 text-sm font-semibold uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-charcoal">
            Reserve
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="text-cream md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute left-0 right-0 top-full bg-charcoal/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <nav className="container mx-auto flex flex-col gap-4 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-medium text-cream/70 transition-colors hover:text-gold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="mt-4 rounded-full bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-wider text-charcoal">
            Reserve Now
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
