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

  return (
    <section id="integrations" className="py-32 px-4 relative overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      <div className="absolute top-40 right-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[140px] animate-morph"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-float-slow" style={{ animationDelay: "3s" }}></div>

      <div className="container mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-24 animate-fade-in">
          <div className="inline-block px-6 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-bold text-primary">100+ Integrations</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] animate-gradient-shift">
              Seamless Integrations
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Connect with all your favorite tools. We integrate with 100+ platforms to create
            a unified automation ecosystem for your business.
          </p>
        </div>

        {/* Three Rows of Seamless Infinite Scrolling */}
        <div className="space-y-8">
          {/* Row 1 - Normal Direction */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6">
              <div className="flex gap-6 animate-scroll-seamless hover:pause">
                {[...row1, ...row1].map((app, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-10 py-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-3xl whitespace-nowrap hover:scale-110 transition-all duration-300 shrink-0 shadow-sm hover:shadow-glass group"
                  >
                    <img src={app.logo} alt={app.name} className="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold text-foreground text-lg">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>

          {/* Row 2 - Reverse Direction */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6">
              <div className="flex gap-6 animate-scroll-seamless-reverse hover:pause">
                {[...row2, ...row2].map((app, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-10 py-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-accent/50 rounded-3xl whitespace-nowrap hover:scale-110 transition-all duration-300 shrink-0 shadow-sm hover:shadow-glass group"
                  >
                    <img src={app.logo} alt={app.name} className="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold text-foreground text-lg">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>

          {/* Row 3 - Normal Direction (Slower) */}
          <div className="relative overflow-hidden">
            <div className="flex gap-6">
              <div className="flex gap-6 animate-scroll-seamless-slow hover:pause">
                {[...row3, ...row3].map((app, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 px-10 py-6 bg-card/80 backdrop-blur-sm border-2 border-border hover:border-primary/50 rounded-3xl whitespace-nowrap hover:scale-110 transition-all duration-300 shrink-0 shadow-sm hover:shadow-glass group"
                  >
                    <img src={app.logo} alt={app.name} className="h-8 w-8 object-contain group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold text-foreground text-lg">{app.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      <style>{`
        .animate-scroll-seamless {
          animation: scroll-seamless 30s linear infinite;
        }
        .animate-scroll-seamless-reverse {
          animation: scroll-seamless-reverse 35s linear infinite;
        }
        .animate-scroll-seamless-slow {
          animation: scroll-seamless 45s linear infinite;
        }
        @keyframes scroll-seamless-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-seamless:hover,
        .animate-scroll-seamless-reverse:hover,
        .animate-scroll-seamless-slow:hover {
          animation-play-state: paused;
        }
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
