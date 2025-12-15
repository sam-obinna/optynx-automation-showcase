import { Bot, Settings, Link, BarChart, MessageSquare, Sparkles } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Implementation",
      description: "Integrate cutting-edge AI solutions to automate decision-making and enhance customer interactions.",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Streamline your workflows by automating repetitive tasks and business processes end-to-end.",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Link,
      title: "API Integration",
      description: "Connect all your tools and systems seamlessly for smooth data flow across your entire stack.",
      gradient: "from-accent to-primary",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with automated reporting and real-time dashboards.",
      gradient: "from-primary via-accent to-secondary",
    },
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "Build intelligent conversational AI that provides 24/7 customer support and engagement.",
      gradient: "from-secondary via-primary to-accent",
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your unique business challenges.",
      gradient: "from-accent via-secondary to-primary",
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute bottom-20 left-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-accent/10 dark:bg-accent/5 rounded-full blur-[100px]"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full backdrop-blur-xl bg-primary/10 dark:bg-primary/20 border border-primary/20 dark:border-primary/30 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-semibold text-primary">
              SERVICES
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-1">
            What We{" "}
            <span className="text-gradient">
              Automate
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto px-1">
            From simple workflows to complex AI-powered systems, we build automation that transforms how you work
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-card/40 dark:bg-card/60 border border-border/50 rounded-xl sm:rounded-2xl p-3 sm:p-5 md:p-6 hover:scale-105 transition-all duration-500 hover:shadow-elevated dark:hover:shadow-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl icon-container-gradient flex items-center justify-center mb-3 sm:mb-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-glass">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold mb-1.5 sm:mb-2 text-foreground group-hover:text-primary transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-xs sm:text-sm line-clamp-3">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
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

export default Services;
