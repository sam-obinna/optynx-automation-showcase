import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Portfolio" },
  ];

  const socials = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-secondary text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]"></div>
      
      <div className="container mx-auto px-4 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-4">
              <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" className="w-10 h-10">
                <path d="M50 35 L54 20 L46 20 Z M50 65 L54 80 L46 80 Z M65 50 L80 54 L80 46 Z M35 50 L20 54 L20 46 Z" fill="#ff4f00"/>
                <path d="M62 38 L73 27 L69 23 L58 34 Z M38 62 L27 73 L23 69 L34 58 Z M62 62 L73 73 L69 77 L58 66 Z M38 38 L27 27 L23 31 L34 42 Z" fill="#ff8c42"/>
                <circle cx="50" cy="50" r="15" fill="#ff4f00"/><circle cx="50" cy="50" r="8" fill="#1a1a1a"/>
              </svg>
              <span className="font-display text-xl font-bold text-primary">OpTynx</span>
            </a>
            <p className="text-white/60 text-sm leading-relaxed mb-5">Building intelligent automation systems that transform how businesses operate.</p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a key={social.label} href={social.href} className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all" aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (<li key={link.href}><a href={link.href} className="text-sm text-white/60 hover:text-white transition-colors">{link.label}</a></li>))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Services</h4>
            <ul className="space-y-2.5">
              <li><span className="text-sm text-white/60">AI Implementation</span></li>
              <li><span className="text-sm text-white/60">Process Automation</span></li>
              <li><span className="text-sm text-white/60">API Integration</span></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li><a href="mailto:hello@optynx.com" className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors"><Mail className="w-4 h-4" />hello@optynx.com</a></li>
              <li><a href="https://cal.com/samuel-optynx/30min" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:text-primary-glow transition-colors">Book a Call →</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-6 border-t border-white/10 text-center">
          <p className="text-sm text-white/40">© {currentYear} OpTynx. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
