import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How long does implementation take?",
      answer: "Most automation projects are completed within 2-4 weeks, depending on complexity. We work in sprints to deliver value quickly and iterate based on your feedback."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "Not at all! We handle all the technical heavy lifting. Our solutions are designed to be user-friendly, and we provide comprehensive training for your team."
    },
    {
      question: "What if my tools aren't listed?",
      answer: "We work with hundreds of platforms beyond what's shown. If your tool has an API, we can integrate it. We'll assess compatibility during our discovery call."
    },
    {
      question: "How much does automation cost?",
      answer: "Investment varies based on scope and complexity. Most clients see ROI within 3-6 months through time savings alone. We'll provide a detailed proposal after understanding your needs."
    },
    {
      question: "Can you automate my specific workflow?",
      answer: "Probably! We've automated everything from complex financial processes to creative workflows. Book a call and we'll assess your specific requirements."
    },
    {
      question: "What ongoing support do you provide?",
      answer: "All projects include 30 days of post-launch support. We also offer maintenance packages for ongoing optimization, updates, and new automation requests."
    },
    {
      question: "Will automation replace my team?",
      answer: "No—automation augments your team by eliminating repetitive tasks, allowing them to focus on strategic, creative work that drives real business value."
    },
    {
      question: "How secure is the automation?",
      answer: "Security is paramount. We follow industry best practices, use encrypted connections, implement role-based access controls, and never store sensitive data unnecessarily."
    }
  ];

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">Frequently Asked Questions</h2>
        <p className="text-muted-foreground text-center mb-12">
          Everything you need to know about working with us
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden bg-card animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-semibold text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
