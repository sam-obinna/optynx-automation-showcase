const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-muted/50 dark:from-muted/30 to-background border-t border-border/50 pt-8 sm:pt-12 pb-4 sm:pb-6 px-3 sm:px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
              <img 
                src="/favicon.png" 
                alt="OpTynx Logo" 
                className="w-6 h-6 sm:w-8 sm:h-8 rounded-md"
              />
              <span className="text-sm sm:text-base font-bold text-gradient">OpTynx</span>
            </div>
            <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed">
              AI & Business Process Automation specialists helping companies work smarter, not harder.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-2 sm:mb-3 text-foreground text-xs sm:text-sm">Services</h3>
            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">AI Implementation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Process Automation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">API Integration</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-2 sm:mb-3 text-foreground text-xs sm:text-sm">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-2 sm:mb-3 text-foreground text-xs sm:text-sm">Get In Touch</h3>
            <ul className="space-y-1 sm:space-y-1.5 text-[10px] sm:text-xs text-muted-foreground">
              <li>
                <a href="mailto:samuel@optynx.com" className="hover:text-primary transition-colors break-all">
                  samuel@optynx.com
                </a>
              </li>
              <li>
                <a 
                  href="https://cal.com/samuel-obinna-nwafor-gvyquk/optnx" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-4 sm:pt-6 border-t border-border/20 text-center text-[10px] sm:text-xs text-muted-foreground">
          <p>&copy; {currentYear} OpTynx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
