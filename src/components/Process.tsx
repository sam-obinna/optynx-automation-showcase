import { Search, PenTool, Rocket, TrendingUp, Workflow } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We analyze your workflows to identify automation opportunities and understand your unique challenges.",
    },
    {
      number: "02",
      icon: PenTool,
      title: "Design",
      description: "We create a custom automation blueprint tailored to your specific business needs and goals.",
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementation",
      description: "We build, test, and deploy your automation system with minimal disruption to your operations.",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimization",
      description: "We monitor performance and continuously refine your automations for maximum efficiency.",
    },
  ];

  return (
    <section className="py-16 md:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.3]"></div>
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6">
            <Workflow className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent">OUR PROCESS</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
            How We{" "}
            <span className="text-gradient">Transform</span>{" "}
            Your Business
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that delivers results every time
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-secondary transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-6 md:gap-8 lg:gap-12 ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } animate-fade-in`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  {/* Content Card */}
                  <div className={`flex-1 w-full ${isEven ? "lg:text-right" : "lg:text-left"}`}>
                    <div 
                      className="card-elevated p-6 md:p-8 group"
                    >
                      <div className={`flex items-center gap-4 mb-5 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        {/* Step Number */}
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-primary flex items-center justify-center text-xl md:text-2xl font-bold text-white font-display group-hover:scale-110 transition-smooth">
                          {step.number}
                        </div>
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-smooth">
                          <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                        </div>
                      </div>
                      <h3 className="font-display text-xl md:text-2xl lg:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Dot - Desktop */}
                  <div className="hidden lg:flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden lg:block"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
