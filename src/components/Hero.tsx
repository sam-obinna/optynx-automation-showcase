import { Star, TrendingUp, Clock, Zap } from "lucide-react";
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 px-4 overflow-hidden">
      {/* Animated Background with Morphing Shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        {/* Morphing blob animations */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-[120px] animate-morph"></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-[130px] animate-morph" style={{ animationDelay: "4s" }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] animate-float-slow"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        {/* Rating Badge with Modern Design */}
        <div className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-card/80 backdrop-blur-xl border-2 border-primary/20 mb-12 shadow-glass hover:shadow-glow transition-all duration-500 hover:scale-105 group">
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className="w-4 h-4 fill-primary text-primary group-hover:scale-110 transition-transform duration-300" 
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
          <span className="text-sm font-bold text-primary">
            Trusted by 100+ Businesses
          </span>
        </div>

        {/* Headline with Stagger Animation */}
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-8 leading-tight max-w-6xl mx-auto animate-fade-in">
          Transform Your Business with{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift">
              Intelligent Automation
            </span>
            <span className="absolute -bottom-2 left-0 w-full h-3 bg-primary/20 blur-lg"></span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed animate-slide-up" style={{ animationDelay: "200ms" }}>
          We build AI-powered automation systems that handle your repetitive tasks, streamline operations, 
          and free up your team to focus on what actually matters.
        </p>

        {/* CTA Button with Modern Design */}
        <Button 
          asChild 
          size="lg" 
          className="relative group bg-primary hover:bg-primary-dark text-primary-foreground text-lg px-12 py-7 rounded-full hover:scale-105 transition-all duration-500 shadow-elevated hover:shadow-glow mb-20 animate-scale-in overflow-hidden"
          style={{ animationDelay: "400ms" }}
        >
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            <span className="relative z-10 flex items-center gap-2 font-semibold">
              Book Free Strategy Call
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </a>
        </Button>

        {/* Metrics Section with Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-24">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="relative group bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-3xl p-8 hover:scale-105 transition-all duration-500 shadow-glass hover:shadow-elevated animate-slide-up"
                style={{ animationDelay: `${600 + index * 150}ms` }}
              >
                {/* Icon with animated background */}
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-5 mx-auto group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                  <div className="absolute inset-0 rounded-2xl bg-primary/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                </div>
                
                {/* Metric Value */}
                <div className="text-5xl font-extrabold mb-3 text-primary group-hover:text-accent transition-colors duration-500">
                  {metric.value}
                </div>
                
                {/* Label */}
                <div className="text-base text-muted-foreground font-medium">
                  {metric.label}
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-accent/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>

        {/* Seamless Infinite Scrolling Tech Icons */}
        <div className="relative">
          <div className="flex gap-6 items-center">
            {/* Create seamless loop with duplicated content */}
            <div className="flex gap-6 animate-scroll-seamless hover:pause">
              {[...techIcons, ...techIcons].map((tech, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-8 py-4 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-2xl whitespace-nowrap hover:scale-110 transition-all duration-300 shrink-0 shadow-sm hover:shadow-glass"
                >
                  <img src={tech.logo} alt={tech.name} className="h-6 w-6 object-contain" />
                  <span className="font-semibold text-foreground">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .animate-scroll-seamless:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
