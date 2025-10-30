const Integrations = () => {
  const row1 = [
    { name: "Monday", emoji: "📅" },
    { name: "Airtable", emoji: "📊" },
    { name: "Google Docs", emoji: "📄" },
    { name: "Google Drive", emoji: "💾" },
    { name: "Google Calendar", emoji: "📆" },
    { name: "Slack", emoji: "💬" },
    { name: "Trello", emoji: "📋" },
    { name: "Asana", emoji: "✅" },
  ];

  const row2 = [
    { name: "HubSpot", emoji: "🎯" },
    { name: "Salesforce", emoji: "☁️" },
    { name: "Shopify", emoji: "🛍️" },
    { name: "Mailchimp", emoji: "📧" },
    { name: "Zendesk", emoji: "🎧" },
    { name: "QuickBooks", emoji: "💰" },
    { name: "Xero", emoji: "💳" },
    { name: "Stripe", emoji: "💵" },
  ];

  const row3 = [
    { name: "Twilio", emoji: "📱" },
    { name: "DocuSign", emoji: "✍️" },
    { name: "Canva", emoji: "🎨" },
    { name: "Zoom", emoji: "📹" },
    { name: "Pipedrive", emoji: "📈" },
    { name: "Tableau", emoji: "📊" },
    { name: "Jira", emoji: "🐛" },
    { name: "Dropbox", emoji: "📦" },
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
              <span className="text-3xl">{app.emoji}</span>
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
              <span className="text-3xl">{app.emoji}</span>
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
              <span className="text-3xl">{app.emoji}</span>
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
