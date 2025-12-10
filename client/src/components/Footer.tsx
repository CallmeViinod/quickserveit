import { Link } from 'wouter';
import { 
  Mail, 
  MapPin, 
  MessageCircle,
  ArrowUpRight,
  Shield,
  Clock
} from 'lucide-react';

const footerLinks = {
  services: [
    { label: 'Institute Services', href: '/institute-services' },
    { label: 'Creative Studio', href: '/creative-studio' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Portfolio', href: '/portfolio' },
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms of Service', href: '/legal/terms' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Disclaimer', href: '/legal/disclaimer' },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/">
              <span className="inline-block cursor-pointer" data-testid="link-footer-brand">
                <span className="text-xl font-bold tracking-tight">
                  <span className="text-primary">Quickserve</span>
                  <span className="text-foreground"> IT</span>
                </span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Premium institutional technology services and cinematic creative production. 
              Trusted by schools, creators, and organizations.
            </p>

            <div className="flex items-center gap-4 mt-6">
              <div className="trust-badge">
                <Shield className="w-3.5 h-3.5" />
                <span className="text-xs">Confidential</span>
              </div>
              <div className="trust-badge">
                <Clock className="w-3.5 h-3.5" />
                <span className="text-xs">24/7 Ready</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-1 group cursor-pointer"
                      data-testid={`link-footer-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {link.label}
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0.5 group-hover:opacity-100 transition-all" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@quickserveit.online"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  data-testid="link-footer-email"
                >
                  <Mail className="w-4 h-4" />
                  contact@quickserveit.online
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  data-testid="link-footer-whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Support
                </a>
              </li>
              <li className="text-sm text-muted-foreground flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Available across India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            {currentYear} Quickserve IT. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Built with precision. Delivered with excellence.
          </p>
        </div>
      </div>
    </footer>
  );
}
