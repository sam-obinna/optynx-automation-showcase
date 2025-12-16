import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-12 md:py-24 px-3 md:px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-5 md:left-10 w-32 md:w-64 h-32 md:h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-5 md:right-10 w-48 md:w-96 h-48 md:h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-fade-in px-2">
          Ready to Automate Your Business?
        </h2>
        <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in px-2" style={{ animationDelay: '0.1s' }}>
          Stop wasting time on repetitive tasks. Let's build automation systems that free your team to focus on what matters most.
        </p>
        
        <Button 
          asChild 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-sm md:text-lg px-6 md:px-8 py-5 md:py-6 shadow-2xl hover:scale-105 transition-transform animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer">
            Book Your Free Strategy Call →
          </a>
        </Button>

        <p className="mt-4 md:mt-6 text-xs md:text-sm opacity-75 animate-fade-in px-2" style={{ animationDelay: '0.3s' }}>
          No obligation • 30-minute consultation • Custom automation roadmap
        </p>
      </div>
    </section>
  );
};

export default CTA;
