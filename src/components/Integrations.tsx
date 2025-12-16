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
    <section className="py-12 md:py-24 px-3 md:px-4 bg-gradient-to-b from-background to-muted/30 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      <div className="absolute top-1/2 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-accent/10 rounded-full blur-[100px] md:blur-[120px]"></div>
      
      <div className="container mx-auto mb-8 md:mb-16 relative z-10">
        <div className="inline-block px-4 md:px-6 py-1.5 md:py-2 rounded-full backdrop-blur-xl bg-primary/10 border border-primary/20 mb-4 md:mb-6">
          <span className="text-xs md:text-sm font-semibold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            INTEGRATIONS
          </span>
        </div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">
          Business Apps{" "}
          <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            We Integrate
          </span>
        </h2>
        <p className="text-sm md:text-lg lg:text-xl text-muted-foreground max-w-2xl">
          Seamlessly connect your favorite tools and platforms with our powerful automation solutions
        </p>
      </div>

      <div className="space-y-4 md:space-y-8 relative z-10">
        {/* Row 1 - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 md:gap-6 animate-seamless-scroll-1">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-3 md:gap-6 shrink-0">
                {row1.map((app, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-3 md:py-5 backdrop-blur-xl bg-card/60 border border-border/50 rounded-xl md:rounded-2xl whitespace-nowrap hover:scale-105 md:hover:scale-110 hover:shadow-glass transition-all duration-300 shrink-0 group"
                  >
                    <img src={app.logo} alt={app.name} className="h-6 w-6 md:h-10 md:w-10 object-contain group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm md:text-lg text-foreground">{app.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 md:gap-6 animate-seamless-scroll-reverse">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-3 md:gap-6 shrink-0">
                {row2.map((app, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-3 md:py-5 backdrop-blur-xl bg-card/60 border border-border/50 rounded-xl md:rounded-2xl whitespace-nowrap hover:scale-105 md:hover:scale-110 hover:shadow-glass transition-all duration-300 shrink-0 group"
                  >
                    <img src={app.logo} alt={app.name} className="h-6 w-6 md:h-10 md:w-10 object-contain group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm md:text-lg text-foreground">{app.name}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Row 3 - Left to Right */}
        <div className="relative overflow-hidden">
          <div className="flex gap-3 md:gap-6 animate-seamless-scroll-2">
            {[...Array(3)].map((_, setIndex) => (
              <div key={setIndex} className="flex gap-3 md:gap-6 shrink-0">
                {row3.map((app, i) => (
                  <div
                    key={`${setIndex}-${i}`}
                    className="flex items-center gap-2 md:gap-4 px-4 md:px-8 py-3 md:py-5 backdrop-blur-xl bg-card/60 border border-border/50 rounded-xl md:rounded-2xl whitespace-nowrap hover:scale-105 md:hover:scale-110 hover:shadow-glass transition-all duration-300 shrink-0 group"
                  >
                    <img src={app.logo} alt={app.name} className="h-6 w-6 md:h-10 md:w-10 object-contain group-hover:scale-110 transition-transform" />
                    <span className="font-semibold text-sm md:text-lg text-foreground">{app.name}</span>
                  </div>
                ))}
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
        @keyframes seamless-scroll-2 {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        @keyframes seamless-scroll-reverse {
          0% {
            transform: translateX(calc(-100% / 3));
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-seamless-scroll-1 {
          animation: seamless-scroll-1 45s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll-2 {
          animation: seamless-scroll-2 50s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll-reverse {
          animation: seamless-scroll-reverse 48s linear infinite;
          width: max-content;
        }
        .animate-seamless-scroll-1:hover,
        .animate-seamless-scroll-2:hover,
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
