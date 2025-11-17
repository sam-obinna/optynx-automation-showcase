import { useState, useEffect } from "react";
import { Button } from "./ui/button";

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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <Button
        asChild
        size="lg"
        className="shadow-2xl hover:scale-105 transition-all duration-300 hover:shadow-3xl"
        style={{
          backgroundColor: '#695be8',
          color: 'white',
          fontSize: '18px',
          fontWeight: '600',
          padding: '12px 32px',
          borderRadius: '8px',
          border: '2px solid #695be8',
          letterSpacing: '0.5px'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#5848c7';
          e.currentTarget.style.borderColor = '#5848c7';
          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#695be8';
          e.currentTarget.style.borderColor = '#695be8';
          e.currentTarget.style.transform = 'scale(1) translateY(0)';
        }}
      >
        <a 
          href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            textDecoration: 'none',
            color: 'white'
          }}
        >
          <span>Book a Call Today</span>
          <svg 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        </a>
      </Button>
    </div>
  );
};

export default FloatingCTA;