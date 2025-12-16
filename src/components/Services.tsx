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
    <section id="services" className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-full backdrop-blur-xl bg-primary/10 border border-primary/20 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            What We{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Automate
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From simple workflows to complex AI-powered systems, we build automation that transforms how you work
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group backdrop-blur-xl bg-card/40 border border-border/50 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-elevated animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-glass`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
