const About = () => {
  const platforms = [
    { name: "Zapier", emoji: "⚡" },
    { name: "Make.com", emoji: "🔧" },
    { name: "N8N", emoji: "🔄" },
    { name: "Airtable", emoji: "📊" },
    { name: "Softr", emoji: "🎯" },
    { name: "LeadSimple", emoji: "📈" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">We're OpTynx</h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed max-w-3xl">
          We're tired of watching teams waste hours on boring, repetitive tasks. So we build automation systems that actually work—freeing your people to do the creative, strategic work that moves your business forward. No fluff, just results.
        </p>

        <h3 className="text-2xl md:text-3xl font-bold mb-8">Platform Expertise</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {platforms.map((platform, index) => (
            <div
              key={platform.name}
              className="flex flex-col items-center justify-center p-6 bg-card border border-border rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="text-4xl mb-3 group-hover:scale-125 transition-transform">{platform.emoji}</span>
              <span className="text-sm font-medium text-center">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
