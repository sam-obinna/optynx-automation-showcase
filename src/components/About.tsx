import { Zap } from "lucide-react";
import zapierLogo from "@/assets/tech/zapier.svg";
import makeLogo from "@/assets/tech/make.svg";
import n8nLogo from "@/assets/tech/n8n.svg";
import airtableLogo from "@/assets/tech/airtable.svg";
import softrLogo from "@/assets/tech/softr.svg";
import mondayLogo from "@/assets/tech/monday.svg";

const About = () => {
  const platforms = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Make.com", logo: makeLogo },
    { name: "N8N", logo: n8nLogo },
    { name: "Airtable", logo: airtableLogo },
    { name: "Softr", logo: softrLogo },
    { name: "Monday.com", logo: mondayLogo },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-6 py-2 rounded-full backdrop-blur-xl bg-secondary/10 border border-secondary/20 mb-6">
              <span className="text-sm font-semibold bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">ABOUT US</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">We're <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">OpTynx</span></h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>We're the team that gets it. Nobody wakes up excited about data entry, copying information between apps, or sending the same email for the 100th time.</p>
              <p>That's where we come in. We build automation systems that handle all the boring, repetitive stuff so your team can focus on work that actually matters.</p>
              <p className="text-foreground font-semibold">Simple, powerful automation that just works.</p>
            </div>
            <div className="mt-8 flex items-center gap-4 p-6 rounded-2xl backdrop-blur-xl bg-card/40 border border-border/50 shadow-glass">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">500+ Hours</div>
                <div className="text-sm text-muted-foreground">Saved monthly for our clients</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="backdrop-blur-xl bg-card/40 border border-border/50 rounded-3xl p-10 shadow-elevated hover:shadow-glow transition-all duration-500">
              <h3 className="text-2xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Platform Expertise</h3>
              <div className="grid grid-cols-2 gap-6">
                {platforms.map((platform, index) => (
                  <div key={platform.name} className="group p-6 rounded-2xl backdrop-blur-xl bg-background/60 border border-border/30 hover:border-primary/50 hover:scale-110 transition-all duration-300 hover:shadow-glass" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img src={platform.logo} alt={platform.name} className="h-12 w-12 object-contain mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors">{platform.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`.bg-grid-pattern{background-image:linear-gradient(to right,hsl(var(--border)) 1px,transparent 1px),linear-gradient(to bottom,hsl(var(--border)) 1px,transparent 1px);background-size:40px 40px}`}</style>
    </section>
  );
};

export default About;
