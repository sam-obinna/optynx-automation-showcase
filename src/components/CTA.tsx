import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-gradient-to-br from-primary via-secondary to-accent text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Ready to Automate Your Business?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Stop wasting time on repetitive tasks. Let's build automation systems that free your team to focus on what matters most.
        </p>
        
        <Button 
          asChild 
          size="lg" 
          className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:scale-105 transition-transform animate-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            Book Your Free Strategy Call →
          </a>
        </Button>

        <p className="mt-6 text-sm opacity-75 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          No obligation • 30-minute consultation • Custom automation roadmap
        </p>
      </div>
    </section>
  );
};

export default CTA;
