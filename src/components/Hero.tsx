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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card border border-border mb-12 shadow-sm">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
              strokeWidth={1.2}
              stroke="green"
            />
          ))}
          <span className="text-sm font-semibold ml-2 text-foreground">
            100% Client Satisfaction
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight max-w-5xl mx-auto">
          Transform Your Business with{" "}
          <span className="text-primary">
            Intelligent Automation
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
          We build AI-powered automation systems that handle your repetitive tasks, streamline operations, 
          and free up your team to focus on what actually matters.
        </p>

        {/* CTA Button */}
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary-dark text-lg px-10 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-elevated hover:shadow-glow mb-16">
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            Book Free Strategy Call →
          </a>
        </Button>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="bg-card border border-border rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300 shadow-glass`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className={`font-bold text-3xl md:text-4xl bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
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
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-seamless-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {techIcons.map((tech, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-3 px-8 py-4 bg-card border border-border rounded-2xl whitespace-nowrap hover:scale-110 hover:border-primary transition-all duration-300 shrink-0"
                  >
                    <img src={tech.logo} alt={tech.name} className="h-7 w-7 object-contain" />
                    <span className="font-semibold text-foreground">{tech.name}</span>
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