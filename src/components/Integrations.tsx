import { 
  Workflow, Database, Calendar, ShoppingCart,
  FileText, HardDrive, MessageSquare, CheckSquare, BarChart,
  Mail, Phone, FileSignature, Palette, Video, TrendingUp,
  DollarSign, Briefcase, Cloud
} from "lucide-react";

const Integrations = () => {
  const row1 = [
    { name: "Monday", icon: Calendar },
    { name: "Airtable", icon: Database },
    { name: "Google Docs", icon: FileText },
    { name: "Google Drive", icon: HardDrive },
    { name: "Google Calendar", icon: Calendar },
    { name: "Slack", icon: MessageSquare },
    { name: "Trello", icon: CheckSquare },
    { name: "Asana", icon: CheckSquare },
  ];

  const row2 = [
    { name: "HubSpot", icon: TrendingUp },
    { name: "Salesforce", icon: Briefcase },
    { name: "Shopify", icon: ShoppingCart },
    { name: "Mailchimp", icon: Mail },
    { name: "Zendesk", icon: MessageSquare },
    { name: "QuickBooks", icon: DollarSign },
    { name: "Xero", icon: DollarSign },
    { name: "Stripe", icon: DollarSign },
  ];

  const row3 = [
    { name: "Twilio", icon: Phone },
    { name: "DocuSign", icon: FileSignature },
    { name: "Canva", icon: Palette },
    { name: "Zoom", icon: Video },
    { name: "Pipedrive", icon: TrendingUp },
    { name: "Tableau", icon: BarChart },
    { name: "Jira", icon: CheckSquare },
    { name: "Dropbox", icon: Cloud },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px]"></div>
      
      <div className="container mx-auto mb-16 relative z-10">
        <div className="inline-block px-6 py-2 rounded-full backdrop-blur-xl bg-primary/10 border border-primary/20 mb-6">
          <span className="text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            INTEGRATIONS
          </span>
        </div>
        <h2 className="text-4xl md:text-6xl font-bold mb-6">
          Business Apps{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            We Integrate
          </span>
        </h2>
        <p className="text-muted-foreground text-xl max-w-2xl">
          Seamlessly connect your favorite tools and platforms with our powerful automation solutions
        </p>
      </div>

      <div className="space-y-8 relative z-10">
        {/* Row 1 - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-seamless-scroll-1">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {row1.map((app, i) => {
                  const Icon = app.icon;
                  return (
                    <div
                      key={`${setIndex}-${i}`}
                      className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-card/60 border border-border/50 rounded-2xl whitespace-nowrap hover:scale-110 hover:shadow-glass transition-all duration-300 shrink-0"
                    >
                      <Icon className="h-7 w-7 text-primary" />
                      <span className="font-semibold text-foreground">{app.name}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-seamless-scroll-2">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {row2.map((app, i) => {
                  const Icon = app.icon;
                  return (
                    <div
                      key={`${setIndex}-${i}`}
                      className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-card/60 border border-border/50 rounded-2xl whitespace-nowrap hover:scale-110 hover:shadow-glass transition-all duration-300 shrink-0"
                    >
                      <Icon className="h-7 w-7 text-primary" />
                      <span className="font-semibold text-foreground">{app.name}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Left to Right (Faster) */}
        <div className="relative overflow-hidden">
          <div className="flex gap-6 animate-seamless-scroll-reverse">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-6 shrink-0">
                {row3.map((app, i) => {
                  const Icon = app.icon;
                  return (
                    <div
                      key={`${setIndex}-${i}`}
                      className="flex items-center gap-3 px-8 py-4 backdrop-blur-xl bg-card/60 border border-border/50 rounded-2xl whitespace-nowrap hover:scale-110 hover:shadow-glass transition-all duration-300 shrink-0"
                    >
                      <Icon className="h-7 w-7 text-primary" />
                      <span className="font-semibold text-foreground">{app.name}</span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes seamless-scroll-1 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-seamless-scroll-1 {
          animation: seamless-scroll-1 40s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll-1:hover {
          animation-play-state: paused;
        }

        @keyframes seamless-scroll-2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        .animate-seamless-scroll-2 {
          animation: seamless-scroll-2 35s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll-2:hover {
          animation-play-state: paused;
        }

        @keyframes seamless-scroll-reverse {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-seamless-scroll-reverse {
          animation: seamless-scroll-reverse 30s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll-reverse:hover {
          animation-play-state: paused;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
