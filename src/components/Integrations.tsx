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
    <section className="py-20 px-4 bg-background overflow-hidden">
      <div className="container mx-auto mb-12">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Business Apps We Integrate</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto">
          Seamlessly connect your favorite tools and platforms
        </p>
      </div>

      <div className="space-y-8">
        {/* Row 1 */}
        <div className="flex gap-6 animate-scroll-slow">
          {[...row1, ...row1, ...row1].map((app, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg whitespace-nowrap hover:scale-110 transition-transform flex-shrink-0"
            >
              <img src={app.logo} alt={app.name} className="h-8 w-8 object-contain" />
              <span className="font-medium text-lg">{app.name}</span>
            </div>
          ))}
        </div>

        {/* Row 2 - Reverse */}
        <div className="flex gap-6 animate-scroll-slow-reverse">
          {[...row2, ...row2, ...row2].map((app, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg whitespace-nowrap hover:scale-110 transition-transform flex-shrink-0"
            >
              <img src={app.logo} alt={app.name} className="h-8 w-8 object-contain" />
              <span className="font-medium text-lg">{app.name}</span>
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="flex gap-6 animate-scroll-slow">
          {[...row3, ...row3, ...row3].map((app, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-lg whitespace-nowrap hover:scale-110 transition-transform flex-shrink-0"
            >
              <img src={app.logo} alt={app.name} className="h-8 w-8 object-contain" />
              <span className="font-medium text-lg">{app.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll-slow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        @keyframes scroll-slow-reverse {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-slow {
          animation: scroll-slow 40s linear infinite;
        }
        .animate-scroll-slow-reverse {
          animation: scroll-slow-reverse 40s linear infinite;
        }
        .animate-scroll-slow:hover,
        .animate-scroll-slow-reverse:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Integrations;
