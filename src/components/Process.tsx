const Process = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description: "We analyze your workflows to identify automation opportunities and pain points."
    },
    {
      number: "02",
      title: "Design",
      description: "Custom automation blueprint tailored to your specific business requirements."
    },
    {
      number: "03",
      title: "Implementation",
      description: "Expert deployment with rigorous testing to ensure flawless operation."
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous monitoring and refinement to maximize efficiency and ROI."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Process</h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          A proven approach to delivering automation excellence
        </p>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-border" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative mb-16 last:mb-0 animate-fade-in ${
                index % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Number Circle */}
              <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white font-bold text-xl shadow-lg z-10">
                {step.number}
              </div>

              {/* Content */}
              <div className={`ml-24 md:ml-0 ${index % 2 === 0 ? "md:mr-24" : "md:ml-24"}`}>
                <div className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
