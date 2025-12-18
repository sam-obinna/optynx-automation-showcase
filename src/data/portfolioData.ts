export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  problem: string;
  solution: string;
  results: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  timeline: string;
  client: string;
  industry: string;
  teamSize: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "order-processing-system",
    title: "Order Processing System",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=800&h=600&fit=crop",
    problem: "Manual order processing taking 4 hours daily with frequent errors and delayed shipments",
    solution: "Automated Shopify-to-fulfillment pipeline with real-time tracking and intelligent routing",
    results: "95% time saved, zero processing errors, same-day fulfillment achieved",
    description: "We built a fully automated order processing system that connects Shopify with fulfillment centers, providing real-time inventory updates, automatic order routing, and customer notifications throughout the delivery journey.",
    fullDescription: "Our client, a rapidly growing e-commerce retailer, was struggling with manual order processing that consumed 4+ hours daily and resulted in frequent shipping errors. Their team was overwhelmed, and customer complaints were mounting due to delayed shipments and incorrect orders.\n\nWe designed and implemented a comprehensive automation solution that seamlessly connects their Shopify store with multiple fulfillment centers. The system automatically routes orders based on inventory availability, shipping destination, and carrier rates. Real-time inventory synchronization prevents overselling, while automated customer notifications keep buyers informed at every stage.\n\nThe solution includes intelligent error handling, automatic retry mechanisms, and a centralized dashboard for monitoring all operations. Custom alerts notify the team of any issues requiring human intervention, while 99% of orders flow through without manual touch.",
    technologies: ["Shopify", "Zapier", "Airtable", "Slack", "Twilio", "Google Sheets"],
    timeline: "3 weeks",
    client: "E-commerce Retailer",
    industry: "Retail & E-commerce",
    teamSize: "2 automation specialists"
  },
  {
    id: "employee-onboarding-portal",
    title: "Employee Onboarding Portal",
    category: "Human Resources",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
    problem: "Inconsistent onboarding experience across departments leading to compliance issues and extended ramp-up time",
    solution: "Custom portal with automated document collection, training schedules, and progress tracking",
    results: "70% faster onboarding, 100% compliance rate, improved new hire satisfaction",
    description: "A comprehensive employee onboarding system that automates document collection, training schedule management, and progress tracking. New hires get a consistent, personalized experience while HR saves countless hours.",
    fullDescription: "A fast-growing tech startup approached us with a critical challenge: their onboarding process was inconsistent, paper-heavy, and causing compliance headaches. New hires in different departments had vastly different experiences, and HR was spending 15+ hours per new employee on administrative tasks.\n\nWe built a custom onboarding portal that transforms the entire new hire experience from day one. The system automatically generates personalized onboarding journeys based on role, department, and location. Digital document collection with e-signatures eliminates paperwork, while automated training schedules ensure no critical sessions are missed.\n\nManagers receive real-time visibility into their new hires' progress, with automated check-in reminders at key milestones. The portal integrates with existing HRIS systems, automatically provisioning accounts and access as onboarding tasks are completed. A built-in feedback loop captures new hire sentiment, enabling continuous improvement of the onboarding experience.",
    technologies: ["Softr", "Airtable", "DocuSign", "Slack", "Google Workspace", "Calendly"],
    timeline: "4 weeks",
    client: "Tech Startup",
    industry: "Technology",
    teamSize: "2 automation specialists"
  },
  {
    id: "ai-lead-scoring",
    title: "AI Lead Scoring System",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    problem: "Sales team wasting 60% of time on unqualified leads with low conversion rates",
    solution: "ML-powered lead scoring with CRM integration and automated routing",
    results: "40% increase in conversion rates, 3x improvement in sales efficiency",
    description: "An intelligent lead scoring system that analyzes prospect behavior, engagement patterns, and demographic data to prioritize the most promising leads. Seamlessly integrated with existing CRM workflows.",
    fullDescription: "A SaaS company's sales team was struggling with an overwhelming volume of leads but low conversion rates. Sales reps were spending the majority of their time on prospects unlikely to convert, while high-value opportunities slipped through the cracks.\n\nWe implemented an AI-powered lead scoring system that analyzes over 50 behavioral and demographic signals to predict conversion probability. The system tracks website engagement, email interactions, content downloads, and social media activity, combining this with firmographic data to generate real-time scores.\n\nLeads are automatically routed to the appropriate sales rep based on score, territory, and expertise. High-priority leads trigger instant notifications, while lower-scored prospects are nurtured through automated email sequences. The system continuously learns from conversion outcomes, improving its predictions over time. A comprehensive dashboard provides visibility into lead quality trends and sales team performance.",
    technologies: ["Make.com", "OpenAI", "HubSpot", "Airtable", "Clearbit", "Slack"],
    timeline: "5 weeks",
    client: "SaaS Company",
    industry: "Software & Technology",
    teamSize: "3 specialists"
  },
  {
    id: "financial-dashboard",
    title: "Automated Financial Dashboard",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    problem: "Manual data aggregation from 8+ sources taking 10+ hours weekly with frequent errors",
    solution: "Real-time dashboard pulling from QuickBooks, Stripe, and banking APIs with automated reconciliation",
    results: "Instant financial visibility, 10 hours/week saved, eliminated manual errors",
    description: "A real-time financial dashboard that aggregates data from multiple sources, providing instant insights into revenue, expenses, and cash flow. Automated alerts for budget thresholds and anomalies.",
    fullDescription: "A growing consulting firm was drowning in financial data scattered across multiple platforms. Their finance team spent 10+ hours weekly manually aggregating data from QuickBooks, Stripe, bank accounts, and spreadsheets. The resulting reports were often outdated by the time they reached leadership.\n\nWe built a real-time financial dashboard that automatically pulls data from all sources, normalizes it, and presents unified insights. The system performs automatic bank reconciliation, categorizes transactions using AI, and generates daily, weekly, and monthly reports without human intervention.\n\nCustom KPI tracking monitors key metrics like monthly recurring revenue, customer acquisition cost, and runway. Automated alerts notify stakeholders when budgets are exceeded, unusual transactions occur, or cash flow projections raise concerns. The dashboard includes drill-down capabilities for detailed analysis and export functionality for board presentations.",
    technologies: ["N8N", "QuickBooks", "Stripe", "Tableau", "Plaid", "Google Sheets"],
    timeline: "4 weeks",
    client: "Consulting Firm",
    industry: "Professional Services",
    teamSize: "2 specialists"
  },
  {
    id: "supply-chain-optimizer",
    title: "Supply Chain Optimizer",
    category: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop",
    problem: "Inefficient inventory management causing frequent stockouts and excess carrying costs",
    solution: "Predictive inventory system with automated reordering and supplier management",
    results: "30% reduction in carrying costs, 95% reduction in stockouts, optimized supplier relationships",
    description: "A predictive inventory management system that analyzes sales patterns, seasonal trends, and supplier lead times to optimize stock levels and automate reordering before stockouts occur.",
    fullDescription: "A regional retail chain with 25 locations was experiencing significant inventory challenges. Stockouts were causing lost sales and customer frustration, while overstocking tied up capital and led to markdowns. Manual inventory management was unsustainable as the business scaled.\n\nWe developed a predictive inventory optimization system that analyzes historical sales data, seasonal patterns, local events, and supplier performance to forecast demand with 94% accuracy. The system automatically generates purchase orders when inventory reaches calculated reorder points, factoring in lead times and safety stock requirements.\n\nReal-time inventory visibility across all locations enables automatic transfer suggestions between stores. Supplier scorecards track performance, and the system identifies opportunities for consolidation and negotiation. Integration with POS systems ensures data accuracy, while mobile alerts keep managers informed of critical inventory situations.",
    technologies: ["Zapier", "Airtable", "Shopify", "Twilio", "Python", "Tableau"],
    timeline: "6 weeks",
    client: "Retail Chain",
    industry: "Retail",
    teamSize: "3 specialists"
  },
  {
    id: "support-chatbot",
    title: "24/7 Support Chatbot",
    category: "Customer Service",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=600&fit=crop",
    problem: "Limited support hours leading to customer frustration and overwhelmed support team",
    solution: "AI chatbot handling common queries with intelligent human escalation",
    results: "85% query resolution rate, 24/7 availability, 60% reduction in support tickets",
    description: "An intelligent customer support chatbot that handles common inquiries, processes returns, and tracks orders around the clock. Seamlessly escalates complex issues to human agents with full context.",
    fullDescription: "An e-commerce platform with 100K+ monthly customers was struggling to provide adequate support. Limited support hours meant customers in different time zones waited hours or days for responses. The support team was overwhelmed with repetitive queries, leaving complex issues unaddressed.\n\nWe built an AI-powered support chatbot that handles the most common customer inquiries 24/7. The bot processes order tracking requests, handles return initiations, answers product questions, and resolves shipping issues autonomously. Natural language processing enables conversational interactions that feel human.\n\nFor complex issues, the bot seamlessly escalates to human agents, providing full conversation context and customer history. The system learns from agent interactions, continuously expanding its knowledge base. Analytics dashboards track resolution rates, common issues, and customer satisfaction, enabling continuous improvement. Integration with the help desk ensures a unified support experience.",
    technologies: ["OpenAI", "Intercom", "Zapier", "Slack", "Airtable", "Twilio"],
    timeline: "3 weeks",
    client: "E-commerce Platform",
    industry: "E-commerce",
    teamSize: "2 specialists"
  },
  {
    id: "crm-automation",
    title: "CRM Automation Suite",
    category: "Sales",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?w=800&h=600&fit=crop",
    problem: "Sales reps spending 40% of time on data entry instead of selling",
    solution: "Automated CRM updates with activity tracking, follow-up scheduling, and pipeline management",
    results: "40% more selling time, 100% CRM accuracy, 25% increase in closed deals",
    description: "A comprehensive CRM automation solution that eliminates manual data entry, automates follow-up sequences, and provides real-time pipeline insights for data-driven sales decisions.",
    fullDescription: "A B2B software company's sales team was frustrated. They were spending nearly half their time on CRM administration instead of building relationships and closing deals. Data quality was poor, follow-ups were missed, and pipeline visibility was unreliable.\n\nWe implemented a complete CRM automation suite that virtually eliminates manual data entry. Email and calendar integrations automatically log all customer interactions. Meeting notes are transcribed and summarized using AI, with key insights and action items extracted and saved to contact records.\n\nAutomated follow-up sequences ensure no opportunity falls through the cracks. Smart reminders adapt based on deal stage, customer engagement, and best practices. Pipeline forecasting uses AI to predict close probabilities and flag at-risk deals. Real-time dashboards give leadership accurate visibility into sales performance and team activity.",
    technologies: ["HubSpot", "Zapier", "OpenAI", "Calendly", "Gmail", "Slack"],
    timeline: "4 weeks",
    client: "B2B Software Company",
    industry: "Technology",
    teamSize: "2 specialists"
  },
  {
    id: "invoice-processing",
    title: "Intelligent Invoice Processing",
    category: "Finance",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
    problem: "Manual invoice processing causing payment delays and vendor relationship issues",
    solution: "AI-powered invoice capture, validation, and approval workflow automation",
    results: "90% faster processing, eliminated late payments, 15% early payment discounts captured",
    description: "An intelligent invoice processing system that uses OCR and AI to capture invoice data, validate against purchase orders, route for approval, and schedule payments automatically.",
    fullDescription: "A manufacturing company processing 500+ invoices monthly was struggling with their manual AP workflow. Invoices piled up in email inboxes, data entry was error-prone, approvals were bottlenecked, and late payments were damaging vendor relationships.\n\nWe built an intelligent invoice processing system that transforms the entire accounts payable workflow. Invoices arriving via email are automatically captured using AI-powered OCR, extracting key data with 99% accuracy. The system validates invoices against purchase orders and receiving records, flagging discrepancies for review.\n\nApproval workflows route invoices to the right approvers based on amount, department, and vendor. Mobile-friendly approvals enable quick decisions from anywhere. Approved invoices are automatically scheduled for payment, optimizing cash flow while capturing early payment discounts. A vendor portal provides self-service access to payment status, reducing AP team inquiries by 70%.",
    technologies: ["Make.com", "Google Cloud Vision", "QuickBooks", "Slack", "DocuSign", "Airtable"],
    timeline: "5 weeks",
    client: "Manufacturing Company",
    industry: "Manufacturing",
    teamSize: "2 specialists"
  },
  {
    id: "content-management-system",
    title: "Content Publishing Automation",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2fce4?w=800&h=600&fit=crop",
    problem: "Content team spending 20+ hours weekly on manual publishing and distribution tasks",
    solution: "Automated content workflow from creation to multi-platform distribution with analytics",
    results: "80% reduction in publishing time, 3x content output, unified analytics dashboard",
    description: "A complete content automation system that streamlines the entire publishing workflow, from draft to publication across multiple platforms with automated social distribution.",
    fullDescription: "A digital media company producing 50+ pieces of content weekly was bottlenecked by manual publishing processes. Writers submitted content via email, editors juggled multiple documents, and publishing to their website plus 5 social platforms was a time-consuming, error-prone process.\n\nWe created an end-to-end content automation system that transforms their publishing workflow. Writers submit content through a structured form that captures all necessary metadata. Automated workflows route content through editing, fact-checking, and approval stages, with clear status visibility for all stakeholders.\n\nApproved content is automatically formatted and scheduled for publication across all platforms. AI-powered tools generate social media snippets, meta descriptions, and alt text. Post-publication, the system tracks performance across all channels, aggregating data into a unified analytics dashboard. Content performance insights inform future editorial decisions and help identify top-performing topics and formats.",
    technologies: ["Airtable", "Zapier", "WordPress", "Buffer", "OpenAI", "Google Analytics"],
    timeline: "4 weeks",
    client: "Digital Media Company",
    industry: "Media & Publishing",
    teamSize: "2 specialists"
  },
  {
    id: "customer-feedback-loop",
    title: "Customer Feedback Intelligence",
    category: "Customer Service",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=600&fit=crop",
    problem: "Customer feedback scattered across channels with no systematic analysis or action",
    solution: "Unified feedback collection with AI sentiment analysis and automated response workflows",
    results: "100% feedback captured, 50% faster issue resolution, actionable insights dashboard",
    description: "A comprehensive customer feedback system that aggregates input from all channels, analyzes sentiment using AI, and triggers appropriate workflows based on feedback type and urgency.",
    fullDescription: "A subscription service company was collecting customer feedback through multiple channels—NPS surveys, support tickets, social media, app reviews—but lacked a unified view. Valuable insights were lost, and unhappy customers churned before issues could be addressed.\n\nWe built a customer feedback intelligence platform that aggregates all feedback into a single system. AI-powered sentiment analysis categorizes feedback and identifies key themes. Urgent negative feedback triggers immediate alerts and response workflows, while positive feedback is routed for testimonial collection and recognition.\n\nAutomated surveys are sent at key customer journey moments, with response rates optimized through timing analysis. Feedback trends are visualized in real-time dashboards, enabling product and support teams to identify and prioritize improvements. Closed-loop workflows ensure customers are notified when their feedback leads to changes, building loyalty and encouraging future input.",
    technologies: ["Typeform", "Zapier", "OpenAI", "Slack", "Airtable", "Intercom"],
    timeline: "3 weeks",
    client: "Subscription Service",
    industry: "SaaS",
    teamSize: "2 specialists"
  },
  {
    id: "recruitment-automation",
    title: "Recruitment Pipeline Automation",
    category: "Human Resources",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop",
    problem: "Recruiting team overwhelmed with 500+ applications per role and slow hiring process",
    solution: "AI-powered resume screening, automated interview scheduling, and candidate experience optimization",
    results: "75% reduction in time-to-hire, 90% candidate satisfaction, eliminated scheduling overhead",
    description: "A complete recruitment automation system that screens resumes using AI, automates interview scheduling, and ensures every candidate has an exceptional experience.",
    fullDescription: "A rapidly scaling company was hiring 50+ roles per quarter but their recruiting process was breaking down. Recruiters couldn't keep up with 500+ applications per role, qualified candidates were slipping through, and the time-to-hire was averaging 45 days. Candidate experience was suffering.\n\nWe implemented a recruitment automation system that transforms the entire hiring process. AI-powered resume screening evaluates candidates against role requirements, scoring and ranking applicants within seconds. Top candidates are automatically moved forward, while others receive personalized rejection emails.\n\nIntegrated scheduling eliminates back-and-forth emails—candidates self-book interviews through a smart system that considers interviewer availability, room resources, and time zones. Automated reminders reduce no-shows. Throughout the process, candidates receive timely updates, ensuring a positive experience regardless of outcome. Hiring dashboards track pipeline metrics, identify bottlenecks, and measure recruiting team performance.",
    technologies: ["Lever", "Zapier", "OpenAI", "Calendly", "Slack", "Gmail"],
    timeline: "5 weeks",
    client: "Growth-Stage Startup",
    industry: "Technology",
    teamSize: "3 specialists"
  },
  {
    id: "project-management-hub",
    title: "Project Management Hub",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop",
    problem: "Projects scattered across tools with no visibility into status, resources, or deadlines",
    solution: "Centralized project hub with automated status updates, resource tracking, and deadline management",
    results: "100% project visibility, 30% improvement in on-time delivery, eliminated status meetings",
    description: "A unified project management system that consolidates information from multiple tools, automates status reporting, and provides real-time visibility into project health.",
    fullDescription: "An agency managing 30+ concurrent client projects had information scattered across Asana, Slack, email, and spreadsheets. Project managers spent hours in status meetings, clients complained about lack of visibility, and deadline misses were becoming common.\n\nWe built a centralized project management hub that aggregates data from all existing tools. Automated workflows sync task status, update timelines, and calculate project health scores in real-time. Clients access a branded portal showing their project progress, upcoming milestones, and deliverables.\n\nAI-powered risk detection identifies projects trending off-track, alerting managers before deadlines are missed. Resource utilization dashboards show team capacity and help optimize allocation. Automated weekly status reports eliminate manual compilation, while smart reminders keep team members focused on priority tasks. Integration with time tracking enables accurate profitability analysis by project and client.",
    technologies: ["Asana", "Zapier", "Slack", "Airtable", "Softr", "Google Sheets"],
    timeline: "4 weeks",
    client: "Creative Agency",
    industry: "Professional Services",
    teamSize: "2 specialists"
  },
  {
    id: "ecommerce-analytics",
    title: "E-commerce Analytics Platform",
    category: "E-commerce",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    problem: "Data siloed across platforms making it impossible to understand true marketing ROI",
    solution: "Unified analytics dashboard connecting advertising, website, and sales data with attribution modeling",
    results: "Complete marketing visibility, 35% improvement in ROAS, data-driven budget allocation",
    description: "A comprehensive e-commerce analytics platform that unifies data from all marketing channels, tracks customer journeys, and provides actionable insights for optimizing spend.",
    fullDescription: "An e-commerce brand spending $500K monthly on advertising had no clear picture of what was working. Data was siloed across Facebook, Google, TikTok, and Shopify. Each platform claimed credit for sales, and the marketing team was flying blind on budget allocation.\n\nWe built a unified analytics platform that aggregates data from all advertising platforms, website analytics, and Shopify. Custom attribution modeling tracks the true customer journey, properly crediting touchpoints across channels. Real-time dashboards show performance by channel, campaign, and creative with accurate ROAS calculations.\n\nAutomated reporting delivers daily performance snapshots to the team and detailed weekly analyses to leadership. Anomaly detection alerts the team to sudden performance changes, enabling quick response. Cohort analysis reveals customer lifetime value by acquisition source, informing strategic decisions. The platform enabled a complete reallocation of budget that increased overall ROAS by 35%.",
    technologies: ["Supermetrics", "Google BigQuery", "Tableau", "Shopify", "Zapier", "Slack"],
    timeline: "6 weeks",
    client: "DTC E-commerce Brand",
    industry: "E-commerce",
    teamSize: "3 specialists"
  },
  {
    id: "contract-management",
    title: "Contract Lifecycle Management",
    category: "Legal",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
    problem: "Contracts lost in email, renewals missed, and legal team overwhelmed with routine requests",
    solution: "Automated contract repository with AI-powered analysis, approval workflows, and renewal tracking",
    results: "100% contract visibility, zero missed renewals, 60% faster contract turnaround",
    description: "A complete contract management system that centralizes all agreements, automates approval workflows, tracks key dates, and uses AI to extract and analyze contract terms.",
    fullDescription: "A growing company with 1,000+ active contracts had no central repository. Contracts were buried in email, renewal dates were frequently missed (costing thousands in auto-renewals), and the legal team spent most of their time on routine contract requests instead of strategic work.\n\nWe implemented a contract lifecycle management system that transforms how the company handles agreements. All contracts are centralized in a searchable repository with AI-powered term extraction. Key dates, obligations, and renewal terms are automatically identified and tracked.\n\nSelf-service contract request portals enable business teams to initiate standard agreements without legal involvement. Automated approval workflows route contracts based on type, value, and risk level. Proactive renewal alerts ensure contracts are renegotiated or terminated before unwanted auto-renewals. The legal team now focuses on high-value work while routine processes run automatically.",
    technologies: ["Airtable", "DocuSign", "OpenAI", "Slack", "Softr", "Zapier"],
    timeline: "5 weeks",
    client: "Private Equity Firm",
    industry: "Financial Services",
    teamSize: "2 specialists"
  },
  {
    id: "event-management",
    title: "Event Management Platform",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    problem: "Event planning chaotic with spreadsheets, manual registration, and poor attendee communication",
    solution: "End-to-end event management with automated registration, communication sequences, and check-in",
    results: "50% reduction in planning time, 95% attendee satisfaction, seamless event execution",
    description: "A comprehensive event management system that handles everything from registration to post-event follow-up, with automated communications and real-time attendee tracking.",
    fullDescription: "A professional association hosting 20+ events annually was struggling with manual processes. Registration was handled through a basic form, attendee communication was inconsistent, check-in was chaotic, and post-event follow-up was often forgotten. Staff were overwhelmed, and attendee experience suffered.\n\nWe built an end-to-end event management platform that automates the entire event lifecycle. Beautiful registration pages capture attendee information and integrate with payment processing. Automated communication sequences deliver confirmations, reminders, venue details, and logistics at perfectly timed intervals.\n\nMobile check-in with QR codes eliminates registration lines. Real-time dashboards show attendance, no-shows, and session popularity. Post-event workflows trigger thank-you emails, feedback surveys, and follow-up sequences. Integration with CRM ensures attendee engagement history is captured for future personalization. The platform reduced staff event time by 50% while improving attendee satisfaction.",
    technologies: ["Airtable", "Stripe", "Zapier", "Twilio", "Typeform", "Softr"],
    timeline: "4 weeks",
    client: "Professional Association",
    industry: "Non-profit",
    teamSize: "2 specialists"
  },
  {
    id: "vendor-management",
    title: "Vendor Management System",
    category: "Operations",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    problem: "Vendor information scattered, compliance tracking manual, and procurement process inefficient",
    solution: "Centralized vendor portal with automated compliance monitoring and procurement workflows",
    results: "100% compliance visibility, 40% faster procurement, improved vendor relationships",
    description: "A unified vendor management system that centralizes vendor information, automates compliance tracking, and streamlines the procurement process from request to payment.",
    fullDescription: "A healthcare company working with 200+ vendors had critical gaps in their vendor management. Vendor information was scattered across spreadsheets, compliance documentation was manually tracked (a major risk in healthcare), and the procurement process was slow and inconsistent.\n\nWe built a comprehensive vendor management system that centralizes all vendor information, contracts, and compliance documentation. Automated compliance monitoring tracks certification expirations, insurance renewals, and required documentation, sending proactive alerts and vendor reminders.\n\nSelf-service procurement request portals enable departments to submit requests that are automatically routed for approval. Approved requests generate RFQs sent to qualified vendors, with responses collected and compared in a structured format. Purchase orders are automatically generated, and receiving confirmation triggers payment scheduling. A vendor portal provides partners with self-service access to payment status and compliance requirements.",
    technologies: ["Airtable", "Softr", "DocuSign", "QuickBooks", "Zapier", "Slack"],
    timeline: "6 weeks",
    client: "Healthcare Provider",
    industry: "Healthcare",
    teamSize: "3 specialists"
  },
  {
    id: "data-enrichment",
    title: "Lead Data Enrichment Engine",
    category: "Sales",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
    problem: "Incomplete lead data causing sales reps to waste time on research instead of selling",
    solution: "Automated data enrichment combining multiple sources to create complete prospect profiles",
    results: "95% data completeness, 30% more selling time, improved personalization and conversion",
    description: "An automated data enrichment system that aggregates information from multiple sources to build comprehensive prospect profiles, enabling more personalized and effective sales outreach.",
    fullDescription: "A B2B sales team was struggling with incomplete lead data. Sales reps spent 30+ minutes researching each prospect before outreach, pulling information from LinkedIn, company websites, news sources, and various databases. This manual research was eating into selling time and still resulted in incomplete pictures.\n\nWe built an automated data enrichment engine that triggers when new leads enter the CRM. The system queries multiple data sources—Clearbit, LinkedIn, company websites, news APIs, and industry databases—to build comprehensive prospect profiles in seconds. Company information, recent news, technology stack, funding history, and key decision-makers are all captured.\n\nAI-powered analysis identifies potential pain points and talking points based on the enriched data. Personalized email snippets are generated for each prospect. The enriched data enables precise segmentation for targeted campaigns. Sales reps now have complete profiles instantly, allowing them to focus on relationship building and closing deals instead of research.",
    technologies: ["Clearbit", "LinkedIn API", "Make.com", "OpenAI", "HubSpot", "Airtable"],
    timeline: "3 weeks",
    client: "Enterprise Software Company",
    industry: "Technology",
    teamSize: "2 specialists"
  },
  {
    id: "quality-assurance",
    title: "Quality Assurance Automation",
    category: "Manufacturing",
    image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&h=600&fit=crop",
    problem: "Manual QA inspections causing bottlenecks, inconsistent results, and delayed shipments",
    solution: "Automated QA system with digital checklists, photo documentation, and real-time defect tracking",
    results: "50% faster inspections, 99.5% consistency, complete traceability achieved",
    description: "A digital quality assurance system that standardizes inspections, captures photo documentation, tracks defects in real-time, and provides complete product traceability.",
    fullDescription: "A manufacturing company producing precision components was struggling with their quality assurance process. Paper-based inspections were slow, results varied between inspectors, and traceability documentation took hours to compile. Customer quality requirements were increasing, and the manual system couldn't keep up.\n\nWe implemented a digital quality assurance system that transforms the entire inspection process. Inspectors use tablets to complete standardized digital checklists with required photo documentation. Measurements are captured with connected devices, eliminating transcription errors. Real-time defect tracking enables immediate response to quality issues.\n\nAutomated alerts notify supervisors of out-of-spec conditions, while statistical process control charts identify trends before they become problems. Complete product traceability is maintained, with inspection records instantly retrievable by serial number or production batch. Integration with ERP systems ensures quality holds prevent shipment of non-conforming products. Customer audit documentation that once took hours is now generated instantly.",
    technologies: ["Airtable", "Softr", "Zapier", "Google Cloud Vision", "Slack", "Power BI"],
    timeline: "5 weeks",
    client: "Precision Manufacturing",
    industry: "Manufacturing",
    teamSize: "3 specialists"
  },
  {
    id: "social-media-automation",
    title: "Social Media Command Center",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    problem: "Social media management consuming 25+ hours weekly with inconsistent posting and engagement",
    solution: "Centralized social media management with AI content generation, scheduling, and analytics",
    results: "70% time saved, 3x engagement rate, consistent brand presence across all platforms",
    description: "A complete social media automation system that streamlines content creation, scheduling, engagement monitoring, and performance analytics across all major platforms.",
    fullDescription: "A consumer brand was struggling to maintain an effective social media presence. Their small marketing team was spending 25+ hours weekly managing 5 social platforms, yet posting was inconsistent, engagement went unmonitored for hours, and they had no clear picture of what content was resonating.\n\nWe built a social media command center that centralizes management of all platforms. AI-powered content generation creates platform-optimized posts from a single content brief, maintaining brand voice while adapting format for each network. Visual content is automatically resized for each platform's requirements.\n\nSmart scheduling optimizes posting times based on historical engagement data. Real-time monitoring captures mentions, comments, and messages across all platforms, with automated routing to the right team member. Sentiment analysis flags potential issues for immediate attention. Comprehensive analytics dashboards show performance trends, competitor benchmarking, and content insights that inform strategy.",
    technologies: ["Buffer", "OpenAI", "Canva", "Zapier", "Airtable", "Sprout Social"],
    timeline: "3 weeks",
    client: "Consumer Brand",
    industry: "Retail",
    teamSize: "2 specialists"
  },
  {
    id: "client-reporting",
    title: "Automated Client Reporting",
    category: "Professional Services",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
    problem: "Consultants spending 15+ hours monthly creating client reports from multiple data sources",
    solution: "Automated report generation pulling from all data sources with AI-powered insights",
    results: "95% reduction in report creation time, improved client satisfaction, consistent deliverables",
    description: "An automated client reporting system that aggregates data from all relevant sources, generates professional reports with AI-powered insights, and delivers them on schedule.",
    fullDescription: "A consulting firm delivering monthly performance reports to 50+ clients was drowning in manual work. Consultants spent 15+ hours per client each month pulling data from various platforms, formatting reports, and writing analysis. Quality varied significantly between consultants, and reports were frequently late.\n\nWe built an automated client reporting system that transforms the entire process. The system automatically pulls data from all relevant sources—analytics platforms, advertising accounts, CRM, and project management tools—aggregating it into unified client datasets. Report templates are populated automatically with current data and visualizations.\n\nAI-powered analysis generates initial insights, highlighting key trends, anomalies, and recommendations. Consultants review and enhance the AI-generated content, adding strategic context in minutes instead of hours. Branded PDF reports are generated and delivered on schedule via email, with client portals providing access to historical reports and real-time dashboards. What once took 15 hours now takes 30 minutes of consultant time.",
    technologies: ["Supermetrics", "Google Data Studio", "OpenAI", "Airtable", "Zapier", "Webflow"],
    timeline: "4 weeks",
    client: "Marketing Agency",
    industry: "Professional Services",
    teamSize: "2 specialists"
  }
];

export const getRelatedProjects = (currentId: string, count: number = 3): PortfolioItem[] => {
  const currentProject = portfolioItems.find(p => p.id === currentId);
  if (!currentProject) return portfolioItems.slice(0, count);
  
  // Find projects in the same category first, then fill with others
  const sameCategory = portfolioItems.filter(p => p.id !== currentId && p.category === currentProject.category);
  const otherProjects = portfolioItems.filter(p => p.id !== currentId && p.category !== currentProject.category);
  
  return [...sameCategory, ...otherProjects].slice(0, count);
};
