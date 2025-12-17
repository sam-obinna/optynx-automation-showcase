import { Bot, Settings, Link, BarChart, MessageSquare, Sparkles, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Bot,
      title: "AI Implementation",
      description: "Integrate cutting-edge AI solutions to automate decision-making and enhance customer interactions.",
    },
    {
      icon: Settings,
      title: "Process Automation",
      description: "Streamline your workflows by automating repetitive tasks and business processes end-to-end.",
    },
    {
      icon: Link,
      title: "API Integration",
      description: "Connect all your tools and systems seamlessly for smooth data flow across your entire stack.",
    },
    {
      icon: BarChart,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with automated reporting and real-time dashboards.",
    },
    {
      icon: MessageSquare,
      title: "Chatbot Development",
      description: "Build intelligent conversational AI that provides 24/7 customer support and engagement.",
    },
    {
      icon: Sparkles,
      title: "Custom Solutions",
      description: "Tailored automation solutions designed specifically for your unique business challenges.",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">SERVICES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            What We{" "}
            <span className="text-gradient">Automate</span>
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            From simple workflows to complex AI-powered systems, we build automation that transforms how you work
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="card-elevated p-6 md:p-8 group cursor-default animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-smooth">
                    <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground/30 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
