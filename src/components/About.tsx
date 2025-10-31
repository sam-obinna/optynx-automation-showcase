import zapierLogo from "@/assets/tech/zapier.svg";
import makeLogo from "@/assets/tech/make.svg";
import n8nLogo from "@/assets/tech/n8n.svg";
import airtableLogo from "@/assets/tech/airtable.svg";
import softrLogo from "@/assets/tech/softr.svg";
import leadsimpleLogo from "@/assets/tech/leadsimple.jpg";

const About = () => {
  const platforms = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Make.com", logo: makeLogo },
    { name: "N8N", logo: n8nLogo },
    { name: "Airtable", logo: airtableLogo },
    { name: "Softr", logo: softrLogo },
    { name: "LeadSimple", logo: leadsimpleLogo },
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
              <img 
                src={platform.logo} 
                alt={platform.name}
                className="h-12 w-12 mb-3 object-contain group-hover:scale-125 transition-transform"
              />
              <span className="text-sm font-medium text-center">{platform.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
