export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  results: string;
  description: string;
  technologies: string[];
  timeline: string;
  client: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "order-processing-system",
    title: "Order Processing System",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop",
    problem: "Manual order processing taking 4 hours daily",
    solution: "Automated Shopify-to-fulfillment pipeline with real-time tracking",
    results: "95% time saved, zero processing errors",
    description: "We built a fully automated order processing system that connects Shopify with fulfillment centers, providing real-time inventory updates, automatic order routing, and customer notifications throughout the delivery journey.",
    technologies: ["Shopify", "Zapier", "Airtable", "Slack"],
    timeline: "3 weeks",
    client: "E-commerce Retailer"
  },
  {
    id: "employee-onboarding-portal",
    title: "Employee Onboarding Portal",
    category: "Human Resources",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    problem: "Inconsistent onboarding experience across departments",
    solution: "Custom portal with automated document collection and training schedules",
    results: "70% faster onboarding, 100% compliance",
    description: "A comprehensive employee onboarding system that automates document collection, training schedule management, and progress tracking. New hires get a consistent, personalized experience while HR saves countless hours.",
    technologies: ["Softr", "Airtable", "DocuSign", "Slack"],
    timeline: "4 weeks",
    client: "Tech Startup"
  },
  {
    id: "ai-lead-scoring",
    title: "AI Lead Scoring System",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    problem: "Sales team wasting time on unqualified leads",
    solution: "ML-powered lead scoring with CRM integration",
    results: "40% increase in conversion rates",
    description: "An intelligent lead scoring system that analyzes prospect behavior, engagement patterns, and demographic data to prioritize the most promising leads. Seamlessly integrated with existing CRM workflows.",
    technologies: ["Make.com", "OpenAI", "HubSpot", "Airtable"],
    timeline: "5 weeks",
    client: "SaaS Company"
  },
  {
    id: "financial-dashboard",
    title: "Automated Financial Dashboard",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Manual data aggregation from multiple sources",
    solution: "Real-time dashboard pulling from QuickBooks, Stripe, and banking APIs",
    results: "Instant financial visibility, 10 hours/week saved",
    description: "A real-time financial dashboard that aggregates data from multiple sources, providing instant insights into revenue, expenses, and cash flow. Automated alerts for budget thresholds and anomalies.",
    technologies: ["N8N", "QuickBooks", "Stripe", "Tableau"],
    timeline: "4 weeks",
    client: "Consulting Firm"
  },
  {
    id: "supply-chain-optimizer",
    title: "Supply Chain Optimizer",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    problem: "Inefficient inventory management causing stockouts",
    solution: "Predictive inventory system with automated reordering",
    results: "30% reduction in carrying costs",
    description: "A predictive inventory management system that analyzes sales patterns, seasonal trends, and supplier lead times to optimize stock levels and automate reordering before stockouts occur.",
    technologies: ["Zapier", "Airtable", "Shopify", "Twilio"],
    timeline: "6 weeks",
    client: "Retail Chain"
  },
  {
    id: "support-chatbot",
    title: "24/7 Support Chatbot",
    category: "Customer Service",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    problem: "Limited support hours leading to customer frustration",
    solution: "AI chatbot handling common queries with human escalation",
    results: "85% query resolution, 24/7 availability",
    description: "An intelligent customer support chatbot that handles common inquiries, processes returns, and tracks orders around the clock. Seamlessly escalates complex issues to human agents with full context.",
    technologies: ["OpenAI", "Intercom", "Zapier", "Slack"],
    timeline: "3 weeks",
    client: "E-commerce Platform"
  }
];
