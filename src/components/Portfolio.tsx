import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

const portfolioItems = [
  {
    title: "Order Processing System",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop",
    problem: "Manual order processing taking 4 hours daily",
    solution: "Automated Shopify-to-fulfillment pipeline with real-time tracking",
    results: "95% time saved, zero processing errors"
  },
  {
    title: "Employee Onboarding Portal",
    category: "Human Resources",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    problem: "Inconsistent onboarding experience across departments",
    solution: "Custom portal with automated document collection and training schedules",
    results: "70% faster onboarding, 100% compliance"
  },
  {
    title: "AI Lead Scoring System",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    problem: "Sales team wasting time on unqualified leads",
    solution: "ML-powered lead scoring with CRM integration",
    results: "40% increase in conversion rates"
  },
  {
    title: "Automated Financial Dashboard",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Manual data aggregation from multiple sources",
    solution: "Real-time dashboard pulling from QuickBooks, Stripe, and banking APIs",
    results: "Instant financial visibility, 10 hours/week saved"
  },
  {
    title: "Supply Chain Optimizer",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    problem: "Inefficient inventory management causing stockouts",
    solution: "Predictive inventory system with automated reordering",
    results: "30% reduction in carrying costs"
  },
  {
    title: "24/7 Support Chatbot",
    category: "Customer Service",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    problem: "Limited support hours leading to customer frustration",
    solution: "AI chatbot handling common queries with human escalation",
    results: "85% query resolution, 24/7 availability"
  }
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState<number | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
    setFlipped(null);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length);
    setFlipped(null);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setFlipped(null);
  };

  const handleCardClick = (index: number) => {
    setFlipped(flipped === index ? null : index);
  };

  return (
    <section id="portfolio" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-background to-muted/30 dark:to-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 px-1">Our Work</h2>
        <p className="text-muted-foreground text-center mb-6 sm:mb-8 max-w-xl mx-auto text-xs sm:text-sm px-1">
          Real automation solutions delivering measurable results
        </p>

        {/* Carousel Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows - Hidden on mobile */}
          {currentIndex > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-10 z-10 bg-background dark:bg-card shadow-lg hover:scale-110 w-8 h-8 sm:w-10 sm:h-10"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          )}
          {currentIndex < portfolioItems.length - 1 && (
            <Button
              variant="outline"
              size="icon"
              className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-10 z-10 bg-background dark:bg-card shadow-lg hover:scale-110 w-8 h-8 sm:w-10 sm:h-10"
              onClick={nextSlide}
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          )}

          {/* Portfolio Card */}
          <div className="perspective-1000">
            <div
              className={`relative w-full h-[320px] sm:h-[400px] md:h-[480px] transition-transform duration-500 transform-style-3d cursor-pointer ${
                flipped === currentIndex ? "rotate-y-180" : ""
              }`}
              onClick={() => handleCardClick(currentIndex)}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={portfolioItems[currentIndex].image}
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6">
                  <div className="inline-block px-2.5 sm:px-3 py-1 sm:py-1.5 bg-primary rounded-full text-[10px] sm:text-xs font-medium mb-2 sm:mb-3">
                    {portfolioItems[currentIndex].category}
                  </div>
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                    {portfolioItems[currentIndex].title}
                  </h3>
                </div>
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 text-white text-[10px] sm:text-xs">
                  Tap to see details →
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-card border border-border p-4 sm:p-6 flex flex-col justify-center">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">{portfolioItems[currentIndex].title}</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <h4 className="text-primary font-semibold mb-1 text-xs sm:text-sm">Problem</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{portfolioItems[currentIndex].problem}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-1 text-xs sm:text-sm">Solution</h4>
                    <p className="text-muted-foreground text-xs sm:text-sm">{portfolioItems[currentIndex].solution}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-1 text-xs sm:text-sm">Results</h4>
                    <p className="text-foreground font-medium text-xs sm:text-sm">{portfolioItems[currentIndex].results}</p>
                  </div>
                </div>
                <p className="text-[10px] sm:text-xs text-muted-foreground mt-3 sm:mt-4">Tap to flip back</p>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-4 sm:mt-6">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-5 sm:w-6" : "bg-border hover:bg-primary/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
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
