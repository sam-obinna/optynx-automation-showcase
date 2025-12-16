const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-background border-t border-border/50 pt-10 md:pt-16 pb-6 md:pb-8 px-3 md:px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center font-bold text-white text-sm md:text-base">
                OT
              </div>
              <span className="text-lg md:text-xl font-bold">OpTynx</span>
            </div>
            <p className="text-xs md:text-sm opacity-80 leading-relaxed">
              AI & Business Process Automation specialists helping companies work smarter, not harder.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Services</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm opacity-80">
              <li><a href="#services" className="hover:text-primary transition-colors">AI Implementation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Process Automation</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">API Integration</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Quick Links</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm opacity-80">
              <li><a href="#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-bold mb-3 md:mb-4 text-sm md:text-base">Get In Touch</h3>
            <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm opacity-80">
              <li>
                <a href="mailto:samuel@optynx.com" className="hover:text-primary transition-colors">
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

        <div className="pt-6 md:pt-8 border-t border-border/20 text-center text-xs md:text-sm opacity-60">
          <p>&copy; {currentYear} OpTynx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
