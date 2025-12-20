import { Star, TrendingUp, Clock, Zap, ArrowRight, Play } from "lucide-react";
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
      description: "Average ROI for clients"
    },
    {
      icon: Clock,
      value: "2 Weeks",
      label: "Average Delivery",
      description: "Fast implementation"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Operations",
      description: "Always running"
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 lg:pt-0 pb-16 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-dot-pattern opacity-30"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] animate-float"></div>
        <div className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-accent/8 rounded-full blur-[180px] animate-float" style={{ animationDelay: "3s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[200px]"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/50 to-background"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-200px)]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left order-1">
            {/* Trust Badge */}
            <div 
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-card/80 backdrop-blur-sm border border-border mb-8 animate-fade-in"
              style={{ boxShadow: 'var(--shadow-sm)' }}
            >
              <div className="flex -space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <span className="h-4 w-px bg-border"></span>
              <span className="text-sm font-medium">
                Trusted by <span className="text-primary font-bold">100+</span> Businesses
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Transform Your
              <br />
              Business with{" "}
              <span className="text-gradient relative">
                Intelligent
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-primary/30" viewBox="0 0 100 12" preserveAspectRatio="none">
                  <path d="M0,8 Q25,0 50,8 T100,8" stroke="currentColor" strokeWidth="3" fill="none"/>
                </svg>
              </span>
              <br />
              <span className="text-gradient">Automation</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              We build AI-powered automation systems that handle your repetitive tasks, 
              streamline operations, and free up your team to focus on what actually matters.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button 
                asChild 
                size="lg" 
                className="bg-primary text-primary-foreground hover:bg-primary-dark text-lg px-8 py-7 rounded-full transition-smooth group"
                style={{ boxShadow: 'var(--shadow-elevated)' }}
              >
                <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  Book Free Strategy Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              
              <Button 
                variant="outline"
                size="lg" 
                className="border-border hover:bg-muted text-lg px-8 py-7 rounded-full group"
              >
                <a href="#portfolio" className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Play className="w-4 h-4 text-primary ml-0.5" />
                  </span>
                  See Our Work
                </a>
              </Button>
            </div>

            {/* Quick Stats - Mobile */}
            <div className="flex flex-wrap gap-6 mt-10 justify-center lg:justify-start text-sm text-muted-foreground animate-fade-in lg:hidden" style={{ animationDelay: '0.4s' }}>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>500+ Hours Saved Monthly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>100% Client Satisfaction</span>
              </div>
            </div>
          </div>

          {/* Right Column - Metrics Cards */}
          <div className="order-2 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 border border-primary/20 rounded-full animate-spin-slow"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 border border-accent/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
              
              {/* Metrics Grid */}
              <div className="grid gap-4">
                {metrics.map((metric, index) => {
                  const Icon = metric.icon;
                  return (
                    <div 
                      key={index}
                      className="card-elevated p-6 flex items-center gap-5 group"
                      style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-8 h-8 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-display font-bold text-3xl md:text-4xl text-gradient">
                          {metric.value}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {metric.label}
                        </div>
                      </div>
                      <ArrowRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                  );
                })}
              </div>

              {/* Floating badge */}
              <div 
                className="absolute -right-4 top-1/2 -translate-y-1/2 hidden xl:block animate-bounce-subtle"
                style={{ boxShadow: 'var(--shadow-lg)' }}
              >
                <div className="bg-card border border-border rounded-2xl p-4">
                  <div className="text-2xl mb-1">🚀</div>
                  <div className="text-xs font-semibold text-muted-foreground">Fast Delivery</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Icons Marquee */}
        <div className="relative mt-16 lg:mt-24 overflow-hidden animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <div className="text-center mb-6">
            <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
              Powered by the tools you already use
            </span>
          </div>
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
          
          <div className="flex gap-6 animate-seamless-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {techIcons.map((tech, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-3 px-6 py-4 bg-card/50 backdrop-blur-sm border border-border/50 rounded-xl whitespace-nowrap hover:border-primary/50 hover:bg-card transition-all shrink-0 group"
                  >
                    <img src={tech.logo} alt={tech.name} className="h-7 w-7 object-contain group-hover:scale-110 transition-transform" />
                    <span className="font-medium text-foreground">{tech.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes seamless-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
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
