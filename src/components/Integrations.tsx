import { Plug } from "lucide-react";
import mondayLogo from "@/assets/tech/monday.svg";
import airtableLogo from "@/assets/tech/airtable.svg";
import gdocsLogo from "@/assets/tech/gdocs.svg";
import gdriveLogo from "@/assets/tech/gdrive.svg";
import gcalendarLogo from "@/assets/tech/gcalendar.svg";
import slackLogo from "@/assets/tech/slack.svg";
import trelloLogo from "@/assets/tech/trello.svg";
import asanaLogo from "@/assets/tech/asana.svg";
import hubspotLogo from "@/assets/tech/hubspot.svg";
import salesforceLogo from "@/assets/tech/salesforce.svg";
import shopifyLogo from "@/assets/tech/shopify.svg";
import mailchimpLogo from "@/assets/tech/mailchimp.svg";
import zendeskLogo from "@/assets/tech/zendesk.svg";
import quickbooksLogo from "@/assets/tech/quickbooks.svg";
import xeroLogo from "@/assets/tech/xero.svg";
import stripeLogo from "@/assets/tech/stripe-ar21.svg";
import twilioLogo from "@/assets/tech/twilio-icon.svg";
import docusignLogo from "@/assets/tech/docusign.svg";
import canvaLogo from "@/assets/tech/canva-icon.svg";
import zoomLogo from "@/assets/tech/zoomus-icon.svg";
import pipedriveLogo from "@/assets/tech/pipedrive-svgrepo-com.svg";
import tableauLogo from "@/assets/tech/tableau-software.svg";
import jiraLogo from "@/assets/tech/jira-1.svg";
import dropboxLogo from "@/assets/tech/dropbox-2.svg";

const Integrations = () => {
  const row1 = [
    { name: "Monday", logo: mondayLogo },
    { name: "Airtable", logo: airtableLogo },
    { name: "Google Docs", logo: gdocsLogo },
    { name: "Google Drive", logo: gdriveLogo },
    { name: "Google Calendar", logo: gcalendarLogo },
    { name: "Slack", logo: slackLogo },
    { name: "Trello", logo: trelloLogo },
    { name: "Asana", logo: asanaLogo },
  ];

  const row2 = [
    { name: "HubSpot", logo: hubspotLogo },
    { name: "Salesforce", logo: salesforceLogo },
    { name: "Shopify", logo: shopifyLogo },
    { name: "Mailchimp", logo: mailchimpLogo },
    { name: "Zendesk", logo: zendeskLogo },
    { name: "QuickBooks", logo: quickbooksLogo },
    { name: "Xero", logo: xeroLogo },
    { name: "Stripe", logo: stripeLogo },
  ];

  const row3 = [
    { name: "Twilio", logo: twilioLogo },
    { name: "DocuSign", logo: docusignLogo },
    { name: "Canva", logo: canvaLogo },
    { name: "Zoom", logo: zoomLogo },
    { name: "Pipedrive", logo: pipedriveLogo },
    { name: "Tableau", logo: tableauLogo },
    { name: "Jira", logo: jiraLogo },
    { name: "Dropbox", logo: dropboxLogo },
  ];

  const IntegrationRow = ({ apps, direction = 'left', speed = 45 }: { apps: typeof row1, direction?: 'left' | 'right', speed?: number }) => (
    <div className="relative overflow-hidden py-2">
      <div 
        className={`flex gap-4 md:gap-6 ${direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right'}`}
        style={{ '--scroll-speed': `${speed}s` } as React.CSSProperties}
      >
        {[...Array(3)].map((_, setIndex) => (
          <div key={setIndex} className="flex gap-4 md:gap-6 shrink-0">
            {apps.map((app, i) => (
              <div
                key={`${setIndex}-${i}`}
                className="flex items-center gap-3 md:gap-4 px-5 md:px-8 py-3 md:py-4 bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl whitespace-nowrap hover:border-primary/30 hover:bg-card transition-all duration-300 shrink-0 group cursor-default"
              >
                <img 
                  src={app.logo} 
                  alt={app.name} 
                  className="h-7 w-7 md:h-9 md:w-9 object-contain group-hover:scale-110 transition-transform" 
                />
                <span className="font-medium text-sm md:text-base text-foreground">{app.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="integrations" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-muted/30"></div>
      <div className="absolute inset-0 bg-dot-pattern opacity-20"></div>
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] -translate-y-1/2"></div>
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[120px] -translate-y-1/2"></div>
      
      {/* Header */}
      <div className="container mx-auto mb-12 md:mb-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Plug className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">Integrations</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Apps We{" "}
            <span className="text-gradient">Integrate</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Seamlessly connect your favorite tools and platforms with our powerful automation solutions
          </p>
        </div>
      </div>

      {/* Scrolling Rows */}
      <div className="space-y-4 md:space-y-6 relative z-10">
        <IntegrationRow apps={row1} direction="left" speed={50} />
        <IntegrationRow apps={row2} direction="right" speed={55} />
        <IntegrationRow apps={row3} direction="left" speed={45} />
      </div>

      {/* Counter */}
      <div className="container mx-auto mt-12 md:mt-16 relative z-10">
        <div className="text-center">
          <span className="text-sm text-muted-foreground">
            And <span className="text-primary font-bold">200+</span> more integrations available
          </span>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        @keyframes scroll-right {
          0% { transform: translateX(calc(-100% / 3)); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scroll-left var(--scroll-speed, 45s) linear infinite;
          width: max-content;
        }
        .animate-scroll-right {
          animation: scroll-right var(--scroll-speed, 45s) linear infinite;
          width: max-content;
        }
        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
