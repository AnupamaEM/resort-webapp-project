import { Instagram, Facebook, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-dark">
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6bTAtMjBjMC0yLjIwOS0xLjc5MS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')]" />
      </div>

      {/* Decorative Top Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent" />

      <div className="container relative z-10 mx-auto px-6 py-20">
        <div className="flex flex-col items-center gap-12">
          {/* Logo / Brand */}
          <div className="text-center">
            <h3 className="font-serif text-4xl font-bold text-cream">
              Serenity <span className="text-gradient-gold">Haven</span>
            </h3>
            <p className="mt-2 text-sm uppercase tracking-[0.3em] text-cream/50">
              Luxury Retreat
            </p>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px w-16 bg-gold/30" />
            <div className="h-2 w-2 rotate-45 bg-gold/50" />
            <div className="h-px w-16 bg-gold/30" />
          </div>

          {/* Contact Info - Vertical Layout */}
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="group flex items-center gap-3 text-cream/70 transition-colors hover:text-gold">
              <MapPin className="h-5 w-5 text-gold" />
              <span className="font-light">123 Paradise Lane, Serenity Island</span>
            </div>
            <div className="group flex items-center gap-3 text-cream/70 transition-colors hover:text-gold">
              <Phone className="h-5 w-5 text-gold" />
              <span className="font-light">+1 (555) 123-4567</span>
            </div>
            <div className="group flex items-center gap-3 text-cream/70 transition-colors hover:text-gold">
              <Mail className="h-5 w-5 text-gold" />
              <span className="font-light">reservations@serenityhaven.com</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6">
            {[
              { icon: Instagram, href: '#' },
              { icon: Facebook, href: '#' },
              { icon: Twitter, href: '#' },
              { icon: Youtube, href: '#' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="group flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream/60 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-charcoal"
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Quote */}
          <div className="max-w-md text-center">
            <p className="font-serif text-xl italic text-cream/60">
              "Come as guests. Leave as family."
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 flex w-full flex-col items-center gap-4 border-t border-cream/10 pt-8">
            <div className="flex flex-wrap justify-center gap-6 text-sm text-cream/40">
              <a href="#" className="transition-colors hover:text-gold">Privacy Policy</a>
              <a href="#" className="transition-colors hover:text-gold">Terms of Service</a>
              <a href="#" className="transition-colors hover:text-gold">Cancellation Policy</a>
            </div>
            <p className="text-xs text-cream/30">
              © {new Date().getFullYear()} Serenity Haven. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
