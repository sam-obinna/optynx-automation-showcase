import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500 && !isDismissed) setIsVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDismissed]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 hidden md:block animate-fade-in">
      <div className="relative group">
        <button onClick={() => { setIsDismissed(true); setIsVisible(false); }} className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-card border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <X className="w-3 h-3 text-muted-foreground" />
        </button>
        <a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-5 py-3.5 bg-primary text-white rounded-full transition-all hover:scale-105 font-medium" style={{ boxShadow: '0 0 60px rgba(255, 79, 0, 0.25)' }}>
          <MessageCircle className="w-5 h-5" /><span>Book a Call</span>
        </a>
      </div>
    </div>
  );
};

export default FloatingCTA;
