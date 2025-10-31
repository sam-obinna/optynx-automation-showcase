import { Star } from "lucide-react";
import { Button } from "./ui/button";
import zapierLogo from "@/assets/tech/zapier.svg";
import makeLogo from "@/assets/tech/make.svg";
import n8nLogo from "@/assets/tech/n8n.svg";
import airtableLogo from "@/assets/tech/airtable.svg";
import softrLogo from "@/assets/tech/softr.svg";
import mondayLogo from "@/assets/tech/monday.svg";
import shopifyLogo from "@/assets/tech/shopify.svg";
import stripeLogo from "@/assets/tech/stripe-ar21.svg";

const Hero = () => {
  const techIcons = [
    { name: "Zapier", logo: zapierLogo },
    { name: "Make", logo: makeLogo },
    { name: "N8N", logo: n8nLogo },
    { name: "Airtable", logo: airtableLogo },
    { name: "Softr", logo: softrLogo },
    { name: "Monday", logo: mondayLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "Stripe", logo: stripeLogo },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto text-center animate-fade-in">
        {/* Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-primary text-primary animate-scale-in" style={{ animationDelay: `${i * 0.1}s` }} />
          ))}
          <span className="text-sm font-medium ml-2">Trusted by 100+ Businesses</span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Transform Your Business with{" "}
          <span className="text-primary bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
            Intelligent Automation
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          We build AI-powered automation systems that handle your repetitive tasks, streamline operations, and free up your team to focus on what actually matters.
        </p>

        {/* CTA */}
        <Button asChild size="lg" className="bg-primary hover:bg-primary-dark text-lg px-8 py-6 group">
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            Book Free Strategy Call →
          </a>
        </Button>

        {/* Infinite Scrolling Tech Icons */}
        <div className="mt-16 overflow-hidden">
          <div className="flex gap-8 animate-scroll">
            {[...techIcons, ...techIcons, ...techIcons].map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg whitespace-nowrap hover:scale-110 transition-transform"
              >
                <img src={tech.logo} alt={tech.name} className="h-6 w-6 object-contain" />
                <span className="font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;
