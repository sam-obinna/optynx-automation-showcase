import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "OpTynx transformed our operations completely. What used to take our team 20 hours a week now happens automatically. The ROI was immediate and the support has been exceptional throughout the entire process.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions",
      initials: "SC",
      metric: "20 hours/week saved"
    },
    {
      quote: "We were skeptical about automation, but OpTynx made it seamless. They understood our unique needs and delivered a custom solution that's saved us over $50k in the first year alone.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "GrowthLab Inc",
      initials: "MR",
      metric: "$50k+ saved annually"
    },
    {
      quote: "The team at OpTynx didn't just build automations – they transformed how we think about our processes. Our team can now focus on strategic work instead of repetitive tasks.",
      author: "Emily Watson",
      role: "Head of Operations",
      company: "ScaleUp Ventures",
      initials: "EW",
      metric: "95% error reduction"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Testimonials</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Real results from real businesses we've helped transform
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div 
          className="relative bg-card border border-border rounded-3xl p-8 md:p-12 animate-fade-in"
          style={{ 
            boxShadow: 'var(--shadow-xl)',
            animationDelay: '0.3s' 
          }}
        >
          {/* Quote Icon */}
          <div className="absolute -top-6 left-8 md:left-12 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center">
            <Quote className="w-6 h-6 text-white" />
          </div>

          {/* Content */}
          <div className="pt-4">
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl font-medium leading-relaxed mb-8">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author & Navigation */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-border">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold font-display text-lg">
                  {testimonials[activeIndex].initials}
                </div>
                <div>
                  <div className="font-bold text-lg">{testimonials[activeIndex].author}</div>
                  <div className="text-muted-foreground">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </div>
                </div>
              </div>

              {/* Metric Badge */}
              <div className="px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
                <span className="text-green-600 font-semibold">
                  {testimonials[activeIndex].metric}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex gap-3 mt-8 md:absolute md:bottom-12 md:right-12">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border hover:bg-primary hover:text-white hover:border-primary"
              onClick={prevTestimonial}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-border hover:bg-primary hover:text-white hover:border-primary"
              onClick={nextTestimonial}
            >
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeIndex ? 'bg-primary w-8' : 'bg-border hover:bg-primary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
