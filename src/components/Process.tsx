import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We analyze your workflows to identify automation opportunities and understand your unique challenges.",
      gradient: "from-primary to-secondary",
    },
    {
      number: "02",
      icon: PenTool,
      title: "Design",
      description: "We create a custom automation blueprint tailored to your specific business needs and goals.",
      gradient: "from-secondary to-accent",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementation",
      description: "We build, test, and deploy your automation system with minimal disruption to your operations.",
      gradient: "from-accent via-secondary to-primary",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimization",
      description: "We monitor performance and continuously refine your automations for maximum efficiency.",
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/3 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-float"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-block px-6 py-2 rounded-full backdrop-blur-xl bg-accent/10 border border-accent/20 mb-6">
            <span className="text-sm font-semibold bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              OUR PROCESS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            How We{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Business
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-accent transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-3xl p-8 hover:scale-105 transition-all duration-500 hover:shadow-elevated group">
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-3xl font-bold text-white shadow-glass group-hover:rotate-12 transition-transform duration-300`}>
                          {step.number}
                        </div>
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-secondary group-hover:bg-clip-text group-hover:text-transparent transition-all">
                        {step.title}
                      </h3>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden lg:block relative z-10">
                    <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${step.gradient} shadow-glow`}></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
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

export default Process;
