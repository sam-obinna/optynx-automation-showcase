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
    <section id="about" className="py-12 sm:py-16 md:py-20 px-3 sm:px-4 md:px-6 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute top-20 right-10 w-40 h-40 sm:w-64 sm:h-64 md:w-96 md:h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-[100px] animate-float"></div>
      
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-3 sm:px-4 py-1.5 rounded-full backdrop-blur-xl bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-3 sm:mb-4">
              <span className="text-[10px] sm:text-xs font-semibold text-primary">ABOUT US</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">We're <span className="text-primary">OpTynx</span></h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>We're the team that gets it. Nobody wakes up excited about data entry, copying information between apps, or sending the same email for the 100th time.</p>
              <p>That's where we come in. We build automation systems that handle all the boring, repetitive stuff so your team can focus on work that actually matters.</p>
              <p className="text-foreground font-semibold">Simple, powerful automation that just works.</p>
            </div>
            <div className="mt-4 sm:mt-6 flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-xl backdrop-blur-xl bg-card/40 dark:bg-card/60 border border-border/50 shadow-glass">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="font-bold text-lg sm:text-xl text-primary">500+ Hours</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">Saved monthly for our clients</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="backdrop-blur-xl bg-card/40 dark:bg-card/60 border border-border/50 rounded-2xl p-4 sm:p-6 md:p-8 shadow-elevated hover:shadow-glow dark:hover:shadow-primary/10 transition-all duration-500">
              <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-primary">Platform Expertise</h3>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
                {platforms.map((platform, index) => (
                  <div key={platform.name} className="group p-3 sm:p-4 rounded-xl backdrop-blur-xl bg-background/60 dark:bg-background/40 border border-border/30 hover:border-primary/50 hover:scale-105 transition-all duration-300 hover:shadow-glass" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img src={platform.logo} alt={platform.name} className="h-6 w-6 sm:h-8 sm:w-8 object-contain mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-medium text-foreground group-hover:text-primary transition-colors text-xs sm:text-sm">{platform.name}</p>
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
