import { Zap, Users } from "lucide-react";
import zapierLogo from "@/assets/tech/zapier.svg";
import makeLogo from "@/assets/tech/make.svg";
import n8nLogo from "@/assets/tech/n8n.svg";
import airtableLogo from "@/assets/tech/airtable.svg";
import softrLogo from "@/assets/tech/leadsimple.jpg";
import mondayLogo from "@/assets/tech/monday.svg";

const About = () => {
  const platforms = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Leadsimple", logo: softrLogo },
    { name: "Make.com", logo: makeLogo },
    { name: "N8N", logo: n8nLogo },
    { name: "Airtable", logo: airtableLogo },
    { name: "Monday.com", logo: mondayLogo },
  ];

  return (
    <section id="about" className="py-16 md:py-28 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute top-20 right-[5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-6">
              <Users className="w-4 h-4 text-secondary" />
              <span className="text-sm font-semibold text-secondary">ABOUT US</span>
            </div>
            
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              We're <span className="text-gradient">OpTynx</span>
            </h2>
            
            <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p>
                We're the team that gets it. Nobody wakes up excited about data entry, copying information between apps, or sending the same email for the 100th time.
              </p>
              <p>
                That's where we come in. We build automation systems that handle all the boring, repetitive stuff so your team can focus on work that actually matters.
              </p>
              <p className="text-foreground font-semibold">
                Simple, powerful automation that just works.
              </p>
            </div>

            {/* Stats Card */}
            <div 
              className="mt-8 flex items-center gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 md:w-7 md:h-7 text-white" />
              </div>
              <div>
                <div className="font-display font-bold text-2xl md:text-3xl text-gradient">500+ Hours</div>
                <div className="text-sm text-muted-foreground">Saved monthly for our clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Platform Expertise */}
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div 
              className="bg-card border border-border rounded-3xl p-6 md:p-10"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <h3 className="font-display text-xl md:text-2xl font-bold mb-6 md:mb-8 text-gradient">
                Platform Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {platforms.map((platform, index) => (
                  <div 
                    key={platform.name} 
                    className="group p-4 md:p-6 rounded-xl bg-muted/50 border border-transparent hover:border-primary/30 hover:bg-card transition-smooth animate-fade-in cursor-default"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="h-8 w-8 md:h-10 md:w-10 object-contain mb-3 group-hover:scale-110 transition-transform" 
                    />
                    <p className="font-semibold text-sm md:text-base text-foreground group-hover:text-primary transition-colors">
                      {platform.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
