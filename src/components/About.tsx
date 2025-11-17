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
    <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      <div className="absolute top-20 right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/10 dark:bg-primary/5 rounded-full blur-[120px] animate-float"></div>
      
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-block px-4 sm:px-6 py-2 rounded-full backdrop-blur-xl bg-secondary/10 dark:bg-secondary/20 border border-secondary/20 dark:border-secondary/30 mb-4 sm:mb-6">
              <span className="text-xs sm:text-sm font-semibold text-primary">ABOUT US</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">We're <span className="text-primary">OpTynx</span></h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              <p>We're the team that gets it. Nobody wakes up excited about data entry, copying information between apps, or sending the same email for the 100th time.</p>
              <p>That's where we come in. We build automation systems that handle all the boring, repetitive stuff so your team can focus on work that actually matters.</p>
              <p className="text-foreground font-semibold">Simple, powerful automation that just works.</p>
            </div>
            <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl backdrop-blur-xl bg-card/40 dark:bg-card/60 border border-border/50 shadow-glass">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl sm:text-2xl text-primary">500+ Hours</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Saved monthly for our clients</div>
              </div>
            </div>
          </div>
          <div className="animate-slide-up">
            <div className="backdrop-blur-xl bg-card/40 dark:bg-card/60 border border-border/50 rounded-3xl p-6 sm:p-8 md:p-10 shadow-elevated hover:shadow-glow dark:hover:shadow-primary/10 transition-all duration-500">
              <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-primary">Platform Expertise</h3>
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {platforms.map((platform, index) => (
                  <div key={platform.name} className="group p-4 sm:p-6 rounded-2xl backdrop-blur-xl bg-background/60 dark:bg-background/40 border border-border/30 hover:border-primary/50 hover:scale-105 sm:hover:scale-110 transition-all duration-300 hover:shadow-glass" style={{ animationDelay: `${index * 0.1}s` }}>
                    <img src={platform.logo} alt={platform.name} className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-contain mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <p className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm sm:text-base">{platform.name}</p>
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
