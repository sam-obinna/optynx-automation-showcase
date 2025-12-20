import { useState } from "react";
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most automation projects are completed within 2-4 weeks, depending on complexity. We work in sprints to deliver value quickly and iterate based on your feedback. Simple integrations can be done in days, while complex enterprise solutions may take longer."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "Not at all! We handle all the technical heavy lifting. Our solutions are designed to be user-friendly, and we provide comprehensive training for your team. You'll have full documentation and ongoing support to ensure success."
    },
    {
      question: "What if my tools aren't listed?",
      answer: "We work with hundreds of platforms beyond what's shown on our website. If your tool has an API, we can likely integrate it. During our discovery call, we'll assess compatibility and provide a clear path forward."
    },
    {
      question: "How much does automation cost?",
      answer: "Investment varies based on scope and complexity. Most clients see ROI within 3-6 months through time savings alone. We provide detailed proposals after understanding your specific needs and goals during our free consultation."
    },
    {
      question: "Can you automate my specific workflow?",
      answer: "Probably! We've automated everything from complex financial processes to creative workflows, inventory management, and customer service. Book a call and we'll assess your specific requirements and provide honest feedback."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "All projects include 30 days of post-launch support to ensure everything runs smoothly. We also offer maintenance packages for ongoing optimization, updates, monitoring, and new automation requests as your needs evolve."
    },
    {
      question: "Will automation replace my team?",
      answer: "No—automation augments your team by eliminating repetitive tasks. This allows your people to focus on strategic, creative work that drives real business value. Most clients find their teams become more productive and satisfied."
    },
    {
      question: "How secure is the automation?",
      answer: "Security is paramount. We follow industry best practices, use encrypted connections, implement role-based access controls, and never store sensitive data unnecessarily. All automations are built with security and compliance in mind."
    }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/3 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary uppercase tracking-wide">FAQ</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Frequently Asked{" "}
            <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Everything you need to know about working with us
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 animate-fade-in ${
                openIndex === index 
                  ? 'border-primary/30 bg-card shadow-lg' 
                  : 'border-border bg-card/50 hover:border-primary/20'
              }`}
              style={{ 
                animationDelay: `${0.05 * index}s`,
                boxShadow: openIndex === index ? 'var(--shadow-md)' : 'none'
              }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center gap-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className={`font-semibold text-lg transition-colors ${
                  openIndex === index ? 'text-primary' : 'text-foreground'
                }`}>
                  {faq.question}
                </span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                  openIndex === index 
                    ? 'bg-primary text-white rotate-180' 
                    : 'bg-muted text-muted-foreground'
                }`}>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="text-center mt-16 p-8 rounded-3xl bg-muted/50 border border-border animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <MessageCircle className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="font-display text-2xl font-bold mb-3">Still have questions?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find the answer you're looking for? Let's chat!
          </p>
          <Button asChild className="bg-primary text-white hover:bg-primary-dark rounded-full px-8">
            <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer">
              Book a Free Call
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
