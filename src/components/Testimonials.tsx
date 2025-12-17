import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "OpTynx transformed our operations completely. What used to take our team 20 hours a week now happens automatically. The ROI was immediate and the support has been exceptional.",
      author: "Sarah Chen",
      role: "Operations Director",
      company: "TechFlow Solutions",
      initials: "SC"
    },
    {
      quote: "We were skeptical about automation, but OpTynx made it seamless. They understood our unique needs and delivered a custom solution that's saved us over $50k in the first year alone.",
      author: "Michael Rodriguez",
      role: "CEO",
      company: "GrowthLab Inc",
      initials: "MR"
    }
  ];

  return (
    <section id="testimonials" className="py-16 md:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]"></div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">TESTIMONIALS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Real results from real businesses
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="card-elevated p-6 md:p-8 lg:p-10 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Quote className="w-6 h-6 text-primary" />
              </div>

              {/* Quote Text */}
              <p className="text-base md:text-lg lg:text-xl mb-6 leading-relaxed text-foreground">
                "{testimonial.quote}"
              </p>
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 md:w-5 md:h-5 fill-amber-400 text-amber-400" 
                  />
                ))}
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold font-display">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-base md:text-lg">{testimonial.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
