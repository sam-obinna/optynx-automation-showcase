import { Link } from "react-router-dom";
import { Mail, Linkedin, Twitter, Instagram, ArrowUpRight, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  const services = [
    "AI Implementation",
    "Process Automation",
    "API Integration",
    "Chatbot Development",
    "Data Analytics"
  ];

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Brand Column */}
            <div className="col-span-2 md:col-span-4 lg:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-6">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                  <path d="M50 35 L54 20 L46 20 Z M50 65 L54 80 L46 80 Z M65 50 L80 54 L80 46 Z M35 50 L20 54 L20 46 Z" fill="hsl(var(--primary))"/>
                  <path d="M62 38 L73 27 L69 23 L58 34 Z M38 62 L27 73 L23 69 L34 58 Z M62 62 L73 73 L69 77 L58 66 Z M38 38 L27 27 L23 31 L34 42 Z" fill="hsl(var(--accent))"/>
                  <circle cx="50" cy="50" r="15" fill="hsl(var(--primary))"/>
                  <circle cx="50" cy="50" r="8" fill="hsl(var(--secondary))"/>
                </svg>
                <span className="font-display text-2xl font-bold text-primary">OpTynx</span>
              </Link>
              
              <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
                Building intelligent automation systems that transform how businesses operate. 
                Save time, reduce errors, and scale smarter.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                {socials.map((social) => (
                  <a 
                    key={social.label} 
                    href={social.href} 
                    className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all group" 
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Navigation</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a 
                      href={link.href} 
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-1 group"
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/60">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-6">Get in Touch</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="mailto:hello@optynx.com" 
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                  >
                    <Mail className="w-4 h-4 text-primary" />
                    hello@optynx.com
                  </a>
                </li>
                <li className="pt-2">
                  <a 
                    href="https://cal.com/samuel-optynx/30min" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
                  >
                    Book a Call
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/40">
              © {currentYear} OpTynx. All rights reserved.
            </p>
            <p className="text-sm text-white/40 flex items-center gap-1">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> for automation enthusiasts
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
