import { Star, TrendingUp, Clock, Zap, Workflow, Database, Mail, Calendar, ShoppingCart, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const techIcons = [
    { name: "Zapier", icon: Workflow },
    { name: "Make", icon: Workflow },
    { name: "N8N", icon: Workflow },
    { name: "Airtable", icon: Database },
    { name: "Softr", icon: Database },
    { name: "Monday", icon: Calendar },
    { name: "Shopify", icon: ShoppingCart },
    { name: "Stripe", icon: CreditCard },
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto text-center relative z-10 animate-fade-in">
        {/* Rating Badge with Glass Effect */}
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full backdrop-blur-xl bg-card/40 border border-primary/20 mb-8 shadow-glass">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className="w-5 h-5 fill-primary text-primary animate-scale-in" 
              style={{ animationDelay: `${i * 0.1}s` }} 
            />
          ))}
          <span className="text-sm font-semibold ml-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Trusted by 100+ Businesses
          </span>
        </div>

        {/* Headline with Gradient */}
        <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-8 leading-tight">
          Transform Your Business with{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            Intelligent Automation
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto mb-12 leading-relaxed">
          We build AI-powered automation systems that handle your repetitive tasks, streamline operations, 
          and free up your team to focus on what actually matters.
        </p>

        {/* CTA Button with Glow Effect */}
        <Button asChild size="lg" className="group relative bg-gradient-to-r from-primary via-secondary to-accent text-white text-lg px-10 py-7 rounded-full hover:scale-105 transition-all duration-300 shadow-elevated hover:shadow-glow border-0 overflow-hidden mb-16">
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            <span className="relative z-10 flex items-center gap-2">
              Book Free Strategy Call
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent via-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </Button>

        {/* Metrics Section with Glass Morphism */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 shadow-glass hover:shadow-elevated group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 mx-auto group-hover:rotate-12 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">
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
                {techIcons.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <div
                      key={`${setIndex}-${i}`}
                      className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-card/60 border border-border/50 rounded-2xl whitespace-nowrap hover:scale-110 hover:shadow-glass transition-all duration-300 shrink-0"
                    >
                      <Icon className="h-7 w-7 text-primary" />
                      <span className="font-semibold text-foreground">{tech.name}</span>
                    </div>
                  );
                })}
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
