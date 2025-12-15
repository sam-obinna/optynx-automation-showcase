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
    <section className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute top-1/3 right-20 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-[100px] animate-float"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 animate-fade-in">
          <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full backdrop-blur-xl bg-accent/10 dark:bg-accent/20 border border-accent/20 dark:border-accent/30 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-semibold text-primary">
              OUR PROCESS
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            How We{" "}
            <span className="text-primary">
              Transform
            </span>{" "}
            Your Business
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform -translate-x-1/2 rounded-full"></div>

          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } animate-slide-up`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Content */}
                  <div className={`flex-1 ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="backdrop-blur-xl bg-card/40 dark:bg-card/60 border border-border/50 rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 hover:scale-[1.02] transition-all duration-500 hover:shadow-elevated dark:hover:shadow-primary/10 group">
                      <div className={`flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-primary flex items-center justify-center text-lg sm:text-xl font-bold text-white shadow-glass group-hover:rotate-6 transition-transform duration-300">
                          {step.number}
                        </div>
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary/80 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-primary transition-all">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Icon */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-glow"></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block"></div>
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
