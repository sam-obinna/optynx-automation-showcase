import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = isHomePage ? [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
  ] : [
    { href: "/", label: "Home", isLink: true },
    { href: "/projects", label: "Projects", isLink: true },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-xl border-b border-border py-3' 
            : 'bg-transparent py-5'
        }`}
        style={{ boxShadow: isScrolled ? 'var(--shadow-sm)' : 'none' }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <svg 
                  viewBox="0 0 100 100" 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-10 h-10 md:w-12 md:h-12 group-hover:scale-105 transition-transform"
                >
                  <path 
                    d="M50 35 L54 20 L46 20 Z M50 65 L54 80 L46 80 Z M65 50 L80 54 L80 46 Z M35 50 L20 54 L20 46 Z" 
                    fill="hsl(var(--primary))"
                  />
                  <path 
                    d="M62 38 L73 27 L69 23 L58 34 Z M38 62 L27 73 L23 69 L34 58 Z M62 62 L73 73 L69 77 L58 66 Z M38 38 L27 27 L23 31 L34 42 Z" 
                    fill="hsl(var(--accent))"
                  />
                  <circle cx="50" cy="50" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="50" cy="50" r="8" fill="hsl(var(--background))"/>
                </svg>
              </div>
              <span className="font-display text-xl md:text-2xl font-bold">
                <span className="text-primary">Op</span>
                <span className="text-foreground">Tynx</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.isLink ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`px-4 py-2.5 font-medium text-sm rounded-lg transition-all ${
                      location.pathname === link.href 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground/70 hover:text-foreground hover:bg-muted/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2.5 text-foreground/70 hover:text-foreground font-medium text-sm rounded-lg hover:bg-muted/50 transition-all"
                  >
                    {link.label}
                  </a>
                )
              ))}
              {isHomePage && (
                <Link
                  to="/projects"
                  className="px-4 py-2.5 text-foreground/70 hover:text-foreground font-medium text-sm rounded-lg hover:bg-muted/50 transition-all"
                >
                  All Projects
                </Link>
              )}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a 
                href="#contact" 
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </a>
              <Button 
                asChild 
                className="bg-primary text-white hover:bg-primary-dark rounded-full px-6 group"
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
              className="lg:hidden p-2.5 rounded-xl bg-muted/50 border border-border hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-background/80 backdrop-blur-lg"
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div 
          className={`absolute top-20 left-4 right-4 bg-card border border-border rounded-2xl p-6 transition-all duration-300 ${
            isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
          }`}
          style={{ boxShadow: 'var(--shadow-xl)' }}
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              link.isLink ? (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium px-4 py-3 rounded-xl transition-colors ${
                    location.pathname === link.href 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground/80 hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-foreground/80 hover:text-foreground font-medium px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors"
                >
                  {link.label}
                </a>
              )
            ))}
            {isHomePage && (
              <Link
                to="/projects"
                onClick={() => setIsOpen(false)}
                className="text-foreground/80 hover:text-foreground font-medium px-4 py-3 rounded-xl hover:bg-muted/50 transition-colors"
              >
                All Projects
              </Link>
            )}
            
            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full bg-primary text-white hover:bg-primary-dark rounded-xl py-6">
                <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
