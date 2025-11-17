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
    <section id="testimonials" className="py-16 sm:py-20 px-4 sm:px-6 bg-muted/30 dark:bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">What Our Clients Say</h2>
        <p className="text-muted-foreground text-center mb-8 sm:mb-12 text-sm sm:text-base px-2">
          Real results from real businesses
        </p>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 sm:p-8 bg-card dark:bg-card/80 border border-border rounded-xl hover:shadow-xl dark:hover:shadow-primary/10 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl sm:text-6xl text-primary mb-3 sm:mb-4">"</div>
              <p className="text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed text-foreground">{testimonial.quote}</p>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm sm:text-base">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base text-foreground">{testimonial.author}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
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
