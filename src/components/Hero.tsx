import { Star, TrendingUp, Clock, Zap, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import zapierLogo from "@/assets/tech/zapier.svg";
import makeLogo from "@/assets/tech/make.svg";
import n8nLogo from "@/assets/tech/n8n.svg";
import airtableLogo from "@/assets/tech/airtable.svg";
import softrLogo from "@/assets/tech/softr.svg";
import mondayLogo from "@/assets/tech/monday.svg";
import shopifyLogo from "@/assets/tech/shopify.svg";
import stripeLogo from "@/assets/tech/stripe-ar21.svg";

const Hero = () => {
  const techIcons = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Make", logo: makeLogo },
    { name: "N8N", logo: n8nLogo },
    { name: "Airtable", logo: airtableLogo },
    { name: "Softr", logo: softrLogo },
    { name: "Monday", logo: mondayLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "Stripe", logo: stripeLogo },
  ];

  const metrics = [
    {
      icon: TrendingUp,
      value: "3x",
      label: "Return on Investment",
    },
    {
      icon: Clock,
      value: "2 Weeks",
      label: "Average Delivery Time",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Business Operations",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 md:pt-36 pb-12 px-4 overflow-hidden">
      {/* Layered Background */}
      <div className="absolute inset-0 bg-background">
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.4]"></div>
        
        {/* Gradient orbs */}
        <div className="absolute top-20 left-[10%] w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-20 right-[10%] w-[600px] h-[600px] bg-accent/6 rounded-full blur-[150px] animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/3 rounded-full blur-[200px]"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Rating Badge */}
        <div 
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-card border border-border mb-10 animate-fade-in"
          style={{ boxShadow: 'var(--shadow-sm)' }}
        >
          <div className="flex -space-x-0.5">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 fill-amber-400 text-amber-400"
                style={{ filter: 'drop-shadow(0 0 4px rgba(251, 191, 36, 0.5))' }}
              />
            ))}
          </div>
          <div className="w-px h-4 bg-border mx-1"></div>
          <span className="text-sm font-medium text-foreground">
            Trusted by 100+ Businesses
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Transform Your Business with{" "}
          <span className="text-gradient">
            Intelligent Automation
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
          We build AI-powered automation systems that handle your repetitive tasks, streamline operations, and free up your team to focus on what actually matters.
        </p>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary-dark text-base md:text-lg px-8 md:px-10 py-6 md:py-7 rounded-full transition-smooth group"
            style={{ boxShadow: 'var(--shadow-elevated)' }}
          >
            <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              Book Free Strategy Call
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto mt-16 mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="card-elevated p-6 md:p-8 group cursor-default"
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary/20 group-hover:scale-110 transition-smooth">
                  <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                </div>
                <div className="font-display font-bold text-3xl md:text-4xl text-gradient mb-1">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Seamless Infinite Scrolling Tech Icons */}
        <div className="relative overflow-hidden animate-fade-in" style={{ animationDelay: '0.5s' }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-4 md:gap-6 animate-seamless-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-4 md:gap-6 shrink-0">
                {techIcons.map((tech, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-3 px-5 md:px-6 py-3 md:py-4 bg-card border border-border rounded-xl whitespace-nowrap hover:border-primary/50 transition-smooth shrink-0 group"
                    style={{ boxShadow: 'var(--shadow-xs)' }}
                  >
                    <img src={tech.logo} alt={tech.name} className="h-6 w-6 md:h-7 md:w-7 object-contain group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-sm md:text-base text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes seamless-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-seamless-scroll {
          animation: seamless-scroll 35s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
