import { Star } from "lucide-react";

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
    <section id="testimonials" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-muted/30 dark:bg-muted/20">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-2 sm:mb-3 px-1">What Our Clients Say</h2>
        <p className="text-muted-foreground text-center mb-6 sm:mb-8 text-xs sm:text-sm px-1">
          Real results from real businesses
        </p>

        <div className="grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 sm:p-5 md:p-6 bg-card dark:bg-card/80 border border-border rounded-lg sm:rounded-xl hover:shadow-lg dark:hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl sm:text-4xl text-primary mb-2 sm:mb-3">"</div>
              <p className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed text-foreground">{testimonial.quote}</p>
              
              <div className="flex items-center gap-0.5 mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-xs sm:text-sm text-foreground">{testimonial.author}</div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground">
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
