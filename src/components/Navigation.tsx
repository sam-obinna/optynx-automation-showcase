import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-xl border-b border-border' 
          : 'bg-transparent'
      }`}
      style={{ boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none' }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <svg 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-10 h-10 md:w-11 md:h-11"
            >
              <path 
                d="M50 35 L54 20 L46 20 Z M50 65 L54 80 L46 80 Z M65 50 L80 54 L80 46 Z M35 50 L20 54 L20 46 Z" 
                fill="#ff4f00"
              />
              <path 
                d="M62 38 L73 27 L69 23 L58 34 Z M38 62 L27 73 L23 69 L34 58 Z M62 62 L73 73 L69 77 L58 66 Z M38 38 L27 27 L23 31 L34 42 Z" 
                fill="#ff8c42"
              />
              <circle cx="50" cy="50" r="15" fill="#ff4f00"/>
              <circle cx="50" cy="50" r="8" fill="currentColor" className="text-background"/>
            </svg>

            <span className="font-display text-xl md:text-2xl font-bold text-primary">
              OpTynx
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-foreground/70 hover:text-foreground font-medium transition-colors text-sm rounded-lg hover:bg-muted/50"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button 
              asChild 
              className="bg-primary text-white hover:bg-primary-dark rounded-full px-6 transition-smooth group"
            >
              <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Get Started
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg bg-muted/50 border border-border"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-3 pt-3 border-t border-border">
                <Button asChild className="w-full bg-primary text-white hover:bg-primary-dark rounded-lg">
                  <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
