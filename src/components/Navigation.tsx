import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
    <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-background/70 border-b border-border/50 shadow-glass">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Logo with OpTynx SVG - Now Static */}
          <a href="#home" className="flex items-center gap-3 group">
            <svg 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-12 h-12"
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
              <circle cx="50" cy="50" r="8" fill="#0a0a0a"/>
            </svg>

            <span className="text-2xl font-bold text-[#ff4f00] transition-all duration-300">
              OpTynx
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff4f00] to-[#ff8c42] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            {/* Solid Orange Get Started Button */}
            <Button
              asChild
              className="bg-[#FF4000] text-white hover:bg-[#e33a00] transition-all duration-300 shadow-glass border-0 rounded-full px-6"
            >
              <a 
                href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl backdrop-blur-xl bg-card/60 border border-border/50"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium px-4 py-3 rounded-xl backdrop-blur-xl bg-card/40 border border-border/30 hover:border-[#ff4f00]/50 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}

              {/* Solid Orange Mobile Button */}
              <Button
                asChild
                className="bg-[#FF4000] text-white hover:bg-[#e33a00] transition-all duration-300 shadow-glass border-0 rounded-xl"
              >
                <a 
                  href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Started
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
