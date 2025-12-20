import { Button } from "./ui/button";
import { ArrowRight, Sparkles, Calendar, Clock, CheckCircle } from "lucide-react";

const CTA = () => {
  const benefits = [
    "Free 30-minute consultation",
    "Custom automation roadmap",
    "No obligation"
  ];

  return (
    <section id="contact" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
      
      {/* Animated Orbs */}
      <div className="absolute top-0 left-[10%] w-[400px] h-[400px] bg-primary/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-0 right-[10%] w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] animate-float" style={{ animationDelay: '2s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm animate-fade-in">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wide">Free Consultation</span>
          </div>

          {/* Headline */}
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
            Ready to Automate
            <br />
            Your Business?
          </h2>
          
          {/* Subtext */}
          <p className="text-lg md:text-xl lg:text-2xl mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Stop wasting time on repetitive tasks. Let's build automation systems 
            that free your team to focus on what matters most.
          </p>

          {/* Benefits */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-white/90">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          {/* CTA Button */}
          <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              size="lg" 
              className="bg-white text-secondary hover:bg-white/90 text-lg md:text-xl px-10 py-8 rounded-full transition-all group"
              style={{ boxShadow: '0 25px 80px -20px rgba(0, 0, 0, 0.4)' }}
            >
              <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Book Your Free Strategy Call
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Time indicator */}
          <div className="flex items-center justify-center gap-2 mt-6 text-white/60 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <Clock className="w-4 h-4" />
            <span className="text-sm">Takes only 30 minutes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
