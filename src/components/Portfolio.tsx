import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, Briefcase, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { portfolioItems } from "@/data/portfolioData";

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setFlipped(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setFlipped(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setFlipped(null);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleCardClick = (index: number) => {
    setFlipped(flipped === index ? null : index);
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
      if (flipped === null) {
        nextSlide();
      }
    }, 6000);
    return () => clearInterval(interval);
  }, [flipped]);

  const currentProject = portfolioItems[currentIndex];

  return (
    <section id="portfolio" className="py-20 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]"></div>
      <div className="absolute top-1/4 left-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">PORTFOLIO</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Our{" "}
            <span className="text-gradient">Work</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Real automation solutions delivering measurable results
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows - Desktop */}
          <Button
            variant="outline"
            size="icon"
            className={`hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-20 z-10 w-14 h-14 rounded-full bg-card border-border transition-smooth ${
              isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white hover:border-primary hover:scale-110'
            }`}
            onClick={prevSlide}
            disabled={isAnimating}
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={`hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-20 z-10 w-14 h-14 rounded-full bg-card border-border transition-smooth ${
              isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary hover:text-white hover:border-primary hover:scale-110'
            }`}
            onClick={nextSlide}
            disabled={isAnimating}
            style={{ boxShadow: 'var(--shadow-lg)' }}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Portfolio Card */}
          <div className="perspective-1000">
            <div
              className={`relative w-full aspect-[4/3] md:aspect-[16/10] transition-all duration-500 ease-out transform-style-3d cursor-pointer ${
                flipped === currentIndex ? "rotate-y-180" : ""
              }`}
              onClick={() => handleCardClick(currentIndex)}
            >
              {/* Front */}
              <div 
                className="absolute inset-0 backface-hidden rounded-2xl md:rounded-3xl overflow-hidden"
                style={{ boxShadow: 'var(--shadow-xl)' }}
              >
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-5 md:top-8 left-5 md:left-8 right-5 md:right-8">
                  <div className="inline-block px-3 md:px-4 py-1.5 bg-primary rounded-full text-xs md:text-sm font-medium text-white mb-3">
                    {currentProject.category}
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg">
                    {currentProject.title}
                  </h3>
                </div>
                <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8 flex items-center justify-between">
                  <span className="text-white/80 text-sm md:text-base font-medium">
                    Tap to see details →
                  </span>
                  <Link 
                    to={`/projects?project=${currentProject.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium hover:bg-white/30 transition-colors"
                  >
                    View Full Case
                    <ExternalLink className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Back */}
              <div 
                className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl md:rounded-3xl overflow-hidden bg-card border border-border p-6 md:p-10 flex flex-col justify-center"
                style={{ boxShadow: 'var(--shadow-xl)' }}
              >
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-6">{currentProject.title}</h3>
                <div className="space-y-4 md:space-y-6">
                  <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
                    <h4 className="text-destructive font-semibold mb-2 text-sm md:text-base uppercase tracking-wide">Problem</h4>
                    <p className="text-muted-foreground text-sm md:text-base">{currentProject.problem}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20">
                    <h4 className="text-primary font-semibold mb-2 text-sm md:text-base uppercase tracking-wide">Solution</h4>
                    <p className="text-muted-foreground text-sm md:text-base">{currentProject.solution}</p>
                  </div>
                  <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
                    <h4 className="text-green-600 font-semibold mb-2 text-sm md:text-base uppercase tracking-wide">Results</h4>
                    <p className="text-foreground font-semibold text-sm md:text-lg">{currentProject.results}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6">
                  <p className="text-sm text-muted-foreground">Tap to flip back</p>
                  <Link 
                    to={`/projects?project=${currentProject.id}`}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                  >
                    View Full Case Study
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={prevSlide}
              disabled={isAnimating}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full"
              onClick={nextSlide}
              disabled={isAnimating}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8 md:mt-12">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? "bg-primary w-10" 
                    : "bg-border w-2.5 hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Projects Link */}
        <div className="text-center mt-12 md:mt-16">
          <Link to="/projects">
            <Button variant="outline" size="lg" className="rounded-full group">
              <span>View All Projects</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1200px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
};

export default Portfolio;
