const Services = () => {
  const services = [
    {
      icon: "🤖",
      title: "AI Implementation",
      description: "Deploy intelligent AI systems that learn and adapt to your business processes."
    },
    {
      icon: "⚙️",
      title: "Process Automation",
      description: "Eliminate manual work with seamless workflow automation across all your tools."
    },
    {
      icon: "🔗",
      title: "API Integration",
      description: "Connect your software ecosystem with custom integrations that just work."
    },
    {
      icon: "📊",
      title: "Data Analytics",
      description: "Transform raw data into actionable insights with automated reporting dashboards."
    },
    {
      icon: "💬",
      title: "Chatbot Development",
      description: "24/7 customer support with AI-powered chatbots that understand context."
    },
    {
      icon: "🎯",
      title: "Custom Solutions",
      description: "Bespoke automation systems tailored to your unique business requirements."
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Comprehensive automation solutions designed to transform your operations
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="p-8 bg-card border border-border rounded-xl hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
