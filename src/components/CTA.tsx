import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-16 md:py-28 px-4 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-secondary"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-10 left-[10%] w-64 md:w-80 h-64 md:h-80 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-10 right-[10%] w-80 md:w-96 h-80 md:h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm animate-fade-in">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white">FREE CONSULTATION</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Ready to Automate Your Business?
        </h2>
        
        <p className="text-base md:text-lg lg:text-xl mb-10 text-white/80 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Stop wasting time on repetitive tasks. Let's build automation systems that free your team to focus on what matters most.
        </p>
        
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            asChild 
            size="lg" 
            className="bg-white text-secondary hover:bg-white/90 text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full transition-smooth group"
            style={{ boxShadow: '0 20px 60px -15px rgba(0, 0, 0, 0.3)' }}
          >
            <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Book Your Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        <p className="mt-6 text-sm text-white/60 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          No obligation • 30-minute consultation • Custom automation roadmap
        </p>
      </div>
    </section>
  );
};

export default CTA;
