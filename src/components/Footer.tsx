const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-muted/50 to-background border-t border-border/50 pt-10 md:pt-16 pb-6 md:pb-8 px-3 md:px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 md:mb-12">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <div className="flex items-center gap-3 group">
              <svg 
              viewBox="0 0 100 100" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-12 h-12"
            >
              <path 
                d="M50 35 L54 20 L46 20 Z M50 65 L54 80 L46 80 Z M65 50 L80 54 L80 46 Z M35 50 L20 54 L20 46 Z" 
                fill="#ff4f00"
              />
              <path 
                d="M62 38 L73 27 L69 23 L58 34 Z M38 62 L27 73 L23 69 L34 58 Z M62 62 L73 73 L69 77 L58 66 Z M38 38 L27 27 L23 31 L34 42 Z" 
                fill="#ff8c42"
              />
              <circle cx="50" cy="50" r="15" fill="#ff4f00"/>
              <circle cx="50" cy="50" r="8" fill="#0a0a0a"/>
            </svg>
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
