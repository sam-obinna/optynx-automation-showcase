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
      color: "from-primary to-secondary",
    },
    {
      icon: Clock,
      value: "2 Weeks",
      label: "Average Delivery Time",
      color: "from-secondary to-accent",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Business Operations",
      color: "from-accent to-primary",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-8 px-3 sm:px-4 md:px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
        <div className="absolute top-20 left-10 w-32 h-32 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-[80px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate-fade-in max-w-6xl">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-card border border-border mb-6 sm:mb-8 shadow-sm">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]"
              strokeWidth={1.2}
              stroke="green"
            />
          ))}
          <span className="text-[10px] sm:text-xs font-semibold ml-1 text-foreground">
            100% Client Satisfaction
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight max-w-4xl mx-auto px-1">
          Transform Your Business with{" "}
          <span className="text-primary">
            Intelligent Automation
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-1">
          We build AI-powered automation systems that handle your repetitive tasks, streamline operations, 
          and free up your team to focus on what actually matters.
        </p>

        {/* CTA Button */}
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark text-sm sm:text-base px-5 sm:px-8 py-4 sm:py-6 rounded-full hover:scale-105 transition-all duration-300 shadow-elevated hover:shadow-glow mb-8 sm:mb-12">
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            Book Free Strategy Call →
          </a>
        </Button>

        {/* Metrics Section */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-4xl mx-auto mb-8 sm:mb-12 px-1">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="bg-card dark:bg-card/80 border border-border rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md dark:hover:shadow-primary/10 group"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-primary flex items-center justify-center mb-2 sm:mb-3 mx-auto group-hover:rotate-12 transition-transform duration-300 shadow-glass">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary">
                  {metric.value}
                </div>
                <div className="text-[10px] sm:text-xs text-muted-foreground mt-0.5 sm:mt-1 leading-tight">
                  {metric.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Seamless Infinite Scrolling Tech Icons */}
        <div className="relative overflow-hidden px-1">
          <div className="flex gap-2 sm:gap-3 md:gap-4 animate-seamless-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-2 sm:gap-3 md:gap-4 shrink-0">
                {techIcons.map((tech, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-4 md:px-6 py-2 sm:py-3 bg-card dark:bg-card/80 border border-border rounded-lg sm:rounded-xl whitespace-nowrap hover:scale-110 hover:border-primary transition-all duration-300 shrink-0"
                  >
                    <img src={tech.logo} alt={tech.name} className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 object-contain" />
                    <span className="font-medium text-foreground text-xs sm:text-sm">{tech.name}</span>
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
          animation: seamless-scroll 40s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll:hover {
          animation-play-state: paused;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;