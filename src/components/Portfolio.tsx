import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Briefcase, ArrowRight, ExternalLink, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { portfolioItems } from "@/data/portfolioData";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isAnimating]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const currentProject = portfolioItems[currentIndex];

  return (
    <section id="portfolio" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our <span className="text-gradient">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Real automation solutions delivering measurable business results
          </p>
        </div>

        {/* Portfolio Carousel */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Image Side */}
            <div className="relative">
              <div 
                className="relative aspect-[4/3] rounded-3xl overflow-hidden group"
                style={{ boxShadow: 'var(--shadow-xl)' }}
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className={`w-full h-full object-cover transition-all duration-700 ${isAnimating ? 'scale-105 opacity-0' : 'scale-100 opacity-100'}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-primary rounded-full text-sm font-medium text-white">
                    {currentProject.category}
                  </span>
                </div>

                {/* Project Number */}
                <div className="absolute bottom-6 left-6">
                  <span className="font-display text-6xl font-bold text-white/20">
                    {String(currentIndex + 1).padStart(2, '0')}
                  </span>
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex gap-3 mt-6 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                  onClick={prevSlide}
                  disabled={isAnimating}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="w-12 h-12 rounded-full border-border hover:bg-primary hover:text-white hover:border-primary transition-all"
                  onClick={nextSlide}
                  disabled={isAnimating}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
                
                {/* Progress */}
                <div className="flex items-center gap-2 ml-auto">
                  <span className="font-display font-bold text-primary">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-muted-foreground">/</span>
                  <span className="text-muted-foreground">{String(portfolioItems.length).padStart(2, '0')}</span>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className={`space-y-6 transition-all duration-500 ${isAnimating ? 'opacity-0 translate-x-8' : 'opacity-100 translate-x-0'}`}>
              <h3 className="font-display text-3xl md:text-4xl font-bold">
                {currentProject.title}
              </h3>

              {/* Problem */}
              <div className="p-5 rounded-2xl bg-destructive/5 border border-destructive/20">
                <h4 className="text-sm font-semibold text-destructive uppercase tracking-wide mb-2">The Challenge</h4>
                <p className="text-muted-foreground">{currentProject.problem}</p>
              </div>

              {/* Solution */}
              <div className="p-5 rounded-2xl bg-primary/5 border border-primary/20">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-2">Our Solution</h4>
                <p className="text-muted-foreground">{currentProject.solution}</p>
              </div>

              {/* Results */}
              <div className="p-5 rounded-2xl bg-green-500/5 border border-green-500/20">
                <h4 className="text-sm font-semibold text-green-600 uppercase tracking-wide mb-2">The Results</h4>
                <p className="text-foreground font-semibold text-lg">{currentProject.results}</p>
              </div>

              {/* View Full Case Study */}
              <Link 
                to={`/projects?project=${currentProject.id}`}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group"
              >
                View Full Case Study
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-12">
            {portfolioItems.slice(0, 10).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating && index !== currentIndex) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-8" 
                    : "bg-border w-2 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
            {portfolioItems.length > 10 && (
              <span className="text-xs text-muted-foreground ml-2">+{portfolioItems.length - 10} more</span>
            )}
          </div>
        </div>

        {/* View All Projects */}
        <div className="text-center mt-16">
          <Link to="/projects">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 group border-border hover:border-primary"
            >
              View All {portfolioItems.length} Projects
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
