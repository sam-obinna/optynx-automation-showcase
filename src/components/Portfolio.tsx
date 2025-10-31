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
    <section id="portfolio" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Work</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Real automation solutions delivering measurable results
        </p>

        {/* Carousel Container */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Arrows */}
          {currentIndex > 0 && (
            <Button
              variant="outline"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-10 bg-background shadow-lg hover:scale-110"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
          )}
          {currentIndex < portfolioItems.length - 1 && (
            <Button
              variant="outline"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-10 bg-background shadow-lg hover:scale-110"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          )}

          {/* Portfolio Card */}
          <div className="perspective-1000">
            <div
              className={`relative w-full h-[500px] md:h-[600px] transition-transform duration-500 transform-style-3d cursor-pointer ${
                flipped === currentIndex ? "rotate-y-180" : ""
              }`}
              onClick={() => handleCardClick(currentIndex)}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={portfolioItems[currentIndex].image}
                  alt={portfolioItems[currentIndex].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute top-8 left-8 right-8">
                  <div className="inline-block px-4 py-2 bg-primary rounded-full text-sm font-medium mb-4">
                    {portfolioItems[currentIndex].category}
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
                    {portfolioItems[currentIndex].title}
                  </h3>
                </div>
                <div className="absolute bottom-8 left-8 right-8 text-white text-sm">
                  Click to see details →
                </div>
              </div>

              {/* Back */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl overflow-hidden shadow-2xl bg-card border border-border p-8 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">{portfolioItems[currentIndex].title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Problem</h4>
                    <p className="text-muted-foreground">{portfolioItems[currentIndex].problem}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Solution</h4>
                    <p className="text-muted-foreground">{portfolioItems[currentIndex].solution}</p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">Results</h4>
                    <p className="text-foreground font-medium">{portfolioItems[currentIndex].results}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">Click to flip back</p>
              </div>
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-primary w-8" : "bg-border hover:bg-primary/50"
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
