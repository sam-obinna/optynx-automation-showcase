import { Search, PenTool, Rocket, TrendingUp, Workflow, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Discovery",
      description: "We analyze your current workflows, identify bottlenecks, and uncover automation opportunities that will have the biggest impact on your business.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: PenTool,
      title: "Design",
      description: "We create a custom automation blueprint tailored to your specific needs, mapping out every integration and workflow with precision.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: Rocket,
      title: "Implementation",
      description: "We build, test, and deploy your automation system with minimal disruption, ensuring everything runs smoothly from day one.",
      color: "from-primary to-accent"
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Optimization",
      description: "We monitor performance, gather insights, and continuously refine your automations to maximize efficiency and ROI.",
      color: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <section id="process" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 rounded-full blur-[200px]"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-6 animate-fade-in">
            <Workflow className="w-4 h-4 text-accent" />
            <span className="text-sm font-semibold text-accent uppercase tracking-wide">Our Process</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            How We{" "}
            <span className="text-gradient">Transform</span>
            <br className="hidden sm:block" />
            {" "}Your Business
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A proven 4-step methodology that delivers measurable results every time
          </p>
        </div>

        {/* Process Steps - Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-accent/50 to-green-500/50 -translate-x-1/2"></div>

            {/* Steps */}
            <div className="space-y-8 lg:space-y-0">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16 animate-fade-in ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 0.15}s` }}
                  >
                    {/* Content */}
                    <div className={`flex-1 w-full ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div 
                        className="bg-card border border-border rounded-3xl p-8 group hover:border-primary/30 transition-all duration-500"
                        style={{ boxShadow: 'var(--shadow-md)' }}
                      >
                        <div className={`flex items-center gap-4 mb-6 ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                          {/* Step Number */}
                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-lg font-bold text-white font-display group-hover:scale-110 transition-transform`}>
                            {step.number}
                          </div>
                          
                          {/* Icon */}
                          <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                            <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                          </div>
                        </div>

                        <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                          {step.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Center Dot */}
                    <div className="hidden lg:flex items-center justify-center relative z-10">
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${step.color} ring-4 ring-background shadow-lg`}></div>
                    </div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a 
              href="https://cal.com/samuel-optynx/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all group"
            >
              Start your transformation today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
