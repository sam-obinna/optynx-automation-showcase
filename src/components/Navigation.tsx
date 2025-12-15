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
      <div className="container mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between">
          
          {/* Logo with Favicon */}
          <a href="#home" className="flex items-center gap-2 group">
            <img 
              src="/favicon.png" 
              alt="OpTynx Logo" 
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg"
            />

            <span className="text-lg sm:text-xl font-bold text-gradient transition-all duration-300">
              OpTynx
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-foreground/80 hover:text-foreground font-medium transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#ff4f00] to-[#ff8c42] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <Button
              asChild
              size="sm"
              className="bg-[#FF4000] text-white hover:bg-[#e33a00] transition-all duration-300 shadow-glass border-0 rounded-full px-4 text-sm"
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
            className="md:hidden p-1.5 rounded-lg backdrop-blur-xl bg-card/60 border border-border/50"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-3 pb-3 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-foreground/80 hover:text-foreground font-medium px-3 py-2 rounded-lg backdrop-blur-xl bg-card/40 border border-border/30 hover:border-[#ff4f00]/50 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}

              <Button
                asChild
                size="sm"
                className="bg-[#FF4000] text-white hover:bg-[#e33a00] transition-all duration-300 shadow-glass border-0 rounded-lg text-sm"
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
