import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 500px
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed || !isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 animate-fade-in hidden md:block">
      <div className="relative">
        <Button
          size="icon"
          variant="ghost"
          className="absolute -top-2 -right-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-background border border-border hover:bg-muted"
          onClick={() => setIsDismissed(true)}
        >
          <X className="w-2.5 h-2.5 md:w-3 md:h-3" />
        </Button>
        <Button
          asChild
          size="lg"
          className="bg-primary hover:bg-primary-dark shadow-2xl hover:scale-105 transition-transform text-sm md:text-base px-4 md:px-6"
        >
          <a href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" target="_blank" rel="noopener noreferrer">
            Book Free Call 📞
          </a>
        </Button>
      </div>
    </div>
  );
};

export default FloatingCTA;
