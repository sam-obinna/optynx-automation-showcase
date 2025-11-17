const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-muted/50 dark:from-muted/30 to-background border-t border-border/50 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Company Info */}
          <div className="sm:col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center font-bold text-white text-sm sm:text-base">
                OT
              </div>
              <span className="text-lg sm:text-xl font-bold text-foreground">OpTynx</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI & Business Process Automation specialists helping companies work smarter, not harder.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Services</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">AI Implementation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Process Automation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">API Integration</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-3 sm:mb-4 text-foreground text-sm sm:text-base">Get In Touch</h3>
            <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
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

        <div className="pt-6 sm:pt-8 border-t border-border/20 text-center text-xs sm:text-sm text-muted-foreground">
          <p>&copy; {currentYear} OpTynx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
