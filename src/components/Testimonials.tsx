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
    <section id="testimonials" className="py-12 md:py-20 px-3 md:px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-2 md:mb-4">What Our Clients Say</h2>
        <p className="text-sm md:text-base text-muted-foreground text-center mb-6 md:mb-12">
          Real results from real businesses
        </p>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-5 md:p-8 bg-card border border-border rounded-xl hover:shadow-xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-4xl md:text-6xl text-primary mb-2 md:mb-4">"</div>
              <p className="text-sm md:text-lg mb-4 md:mb-6 leading-relaxed">{testimonial.quote}</p>
              
              <div className="flex items-center gap-1 mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-primary text-primary" />
                ))}
              </div>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm md:text-base">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-bold text-sm md:text-base">{testimonial.author}</div>
                  <div className="text-xs md:text-sm text-muted-foreground">
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
