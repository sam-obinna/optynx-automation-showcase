import { useState } from "react";
import { Mail, Send, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name.trim() || !email.trim()) {
      toast({
        title: "Please fill in all fields",
        description: "We need your name and email to subscribe you to our newsletter.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubscribed(true);
    setName("");
    setEmail("");
    
    toast({
      title: "Welcome to the community!",
      description: "You've been successfully subscribed to our newsletter.",
    });
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-primary/10 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-primary/15 rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">STAY UPDATED</span>
          </div>
          
          {/* Heading */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Subscribe to Our{" "}
            <span className="text-gradient">Newsletter</span>
          </h2>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get exclusive insights on automation, AI trends, and industry best practices delivered straight to your inbox. No spam, just valuable content.
          </p>
          
          {isSubscribed ? (
            <div className="card-elevated p-8 text-center animate-scale-in">
              <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">You're Subscribed!</h3>
              <p className="text-muted-foreground">
                Thank you for joining our community. Check your inbox for a welcome email.
              </p>
              <Button 
                variant="ghost" 
                className="mt-4 text-primary hover:text-primary-dark"
                onClick={() => setIsSubscribed(false)}
              >
                Subscribe another email
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="card-elevated p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <label htmlFor="name" className="block text-sm font-medium text-left mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-12 bg-background border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-left mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="h-12 pl-12 bg-background border-border/50 focus:border-primary"
                      />
                    </div>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary text-white hover:bg-primary-dark rounded-full group px-8"
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-pulse">Subscribing...</span>
                    </>
                  ) : (
                    <>
                      Subscribe Now
                      <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground mt-4">
                  By subscribing, you agree to receive our newsletter. Unsubscribe anytime.
                </p>
              </div>
            </form>
          )}
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Weekly insights
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              No spam ever
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              Unsubscribe anytime
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
