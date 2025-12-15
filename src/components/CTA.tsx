import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-48 sm:h-48 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 animate-fade-in px-1">
          Ready to Automate Your Business?
        </h2>
        <p className="text-sm sm:text-base md:text-lg mb-5 sm:mb-6 opacity-90 max-w-xl mx-auto leading-relaxed animate-fade-in px-1" style={{ animationDelay: '0.1s' }}>
          Stop wasting time on repetitive tasks. Let's build automation systems that free your team to focus on what matters most.
        </p>
        
        <Button 
          asChild 
          size="default" 
          className="bg-white text-primary hover:bg-white/90 text-sm sm:text-base px-5 sm:px-6 py-4 sm:py-5 shadow-2xl hover:scale-105 transition-transform animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            Book Your Free Strategy Call →
          </a>
        </Button>

        <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs opacity-75 animate-fade-in px-1" style={{ animationDelay: '0.3s' }}>
          No obligation • 30-minute consultation • Custom automation roadmap
        </p>
      </div>
    </section>
  );
};

export default CTA;
