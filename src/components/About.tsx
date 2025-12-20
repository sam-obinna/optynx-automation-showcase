import { Zap, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
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

  const benefits = [
    "Save 500+ hours monthly on repetitive tasks",
    "Reduce human error by 95% with automated workflows",
    "Scale operations without scaling headcount",
    "Get real-time insights with automated reporting"
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 mb-8 animate-fade-in">
              <Users className="w-4 h-4 text-secondary-foreground" />
              <span className="text-sm font-semibold uppercase tracking-wide">About Us</span>
            </div>
            
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 animate-fade-in leading-tight" style={{ animationDelay: '0.1s' }}>
              We're <span className="text-gradient">OpTynx</span>
              <br />
              <span className="text-muted-foreground text-3xl sm:text-4xl md:text-5xl">Your Automation Partner</span>
            </h2>
            
            <div className="space-y-5 text-lg text-muted-foreground leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <p>
                We're the team that gets it. Nobody wakes up excited about data entry, 
                copying information between apps, or sending the same email for the 100th time.
              </p>
              <p>
                That's where we come in. We build automation systems that handle all the 
                boring, repetitive stuff so your team can focus on work that actually matters.
              </p>
            </div>

            {/* Benefits List */}
            <div className="mt-8 space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button 
                asChild
                size="lg"
                className="bg-primary text-white hover:bg-primary-dark rounded-full px-8 group"
              >
                <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Start Your Automation Journey
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Stats & Platforms */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            {/* Main Stats Card */}
            <div 
              className="bg-card border border-border rounded-3xl p-8 md:p-10"
              style={{ boxShadow: 'var(--shadow-lg)' }}
            >
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="font-display font-bold text-4xl md:text-5xl text-gradient">500+</div>
                  <div className="text-muted-foreground">Hours Saved Monthly</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 rounded-2xl bg-muted/50">
                  <div className="font-display font-bold text-2xl md:text-3xl text-foreground mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="p-4 rounded-2xl bg-muted/50">
                  <div className="font-display font-bold text-2xl md:text-3xl text-foreground mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </div>
              </div>
            </div>

            {/* Platform Expertise */}
            <div 
              className="bg-card border border-border rounded-3xl p-8"
              style={{ boxShadow: 'var(--shadow-md)' }}
            >
              <h3 className="font-display text-xl font-bold mb-6">
                Platform <span className="text-gradient">Expertise</span>
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform, index) => (
                  <div 
                    key={platform.name} 
                    className="group flex flex-col items-center p-4 rounded-2xl bg-muted/30 border border-transparent hover:border-primary/30 hover:bg-muted/50 transition-all cursor-default"
                    style={{ animationDelay: `${0.4 + index * 0.05}s` }}
                  >
                    <img 
                      src={platform.logo} 
                      alt={platform.name} 
                      className="h-10 w-10 object-contain mb-2 group-hover:scale-110 transition-transform" 
                    />
                    <p className="text-xs font-medium text-muted-foreground group-hover:text-foreground text-center transition-colors">
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
