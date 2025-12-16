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
      <div className="container mx-auto px-3 md:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative w-9 h-9 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center font-bold text-white text-base md:text-xl shadow-elevated group-hover:scale-110 transition-transform duration-300">
              <span className="relative z-10">OT</span>
              <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              OpTynx
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-foreground/80 hover:text-foreground font-medium transition-all duration-300 relative group text-sm xl:text-base"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <Button asChild className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-all duration-300 shadow-glass border-0 rounded-full px-4 xl:px-6 text-sm">
              <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
                Get Started
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-xl backdrop-blur-xl bg-card/60 border border-border/50"
          >
            {isOpen ? <X className="w-5 h-5 md:w-6 md:h-6" /> : <Menu className="w-5 h-5 md:w-6 md:h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-2 md:gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium px-3 md:px-4 py-2.5 md:py-3 rounded-xl backdrop-blur-xl bg-card/40 border border-border/30 hover:border-primary/50 transition-all duration-300 text-sm md:text-base"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 transition-all duration-300 shadow-glass border-0 rounded-xl text-sm md:text-base">
                <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
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
