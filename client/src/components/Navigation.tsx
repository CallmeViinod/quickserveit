import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/institute-services', label: 'Institute Services' },
  { href: '/creative-studio', label: 'Creative Studio' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <motion.header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-border/50' 
            : 'bg-transparent'
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/">
              <span
                className="flex items-center gap-2 cursor-pointer"
                data-testid="link-brand"
              >
                <span className="text-xl lg:text-2xl font-bold tracking-tight">
                  <span className="text-primary">Quickserve</span>
                  <span className="text-foreground"> IT</span>
                </span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-colors rounded-md cursor-pointer',
                      location === link.href
                        ? 'text-primary'
                        : 'text-muted-foreground hover:text-foreground'
                    )}
                    data-testid={`link-nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                    {location === link.href && (
                      <motion.span
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                        layoutId="nav-underline"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <Link href="/contact">
                <Button 
                  variant="default" 
                  size="sm"
                  className="gold-glow"
                  data-testid="button-get-started"
                >
                  Get Started
                </Button>
              </Link>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              data-testid="button-mobile-menu"
            >
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-background border-l border-border z-50 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="flex items-center justify-between p-4 border-b border-border">
                <span className="text-lg font-semibold">
                  <span className="text-primary">Quickserve</span>
                  <span className="text-foreground"> IT</span>
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close menu"
                  data-testid="button-close-menu"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <nav className="p-4">
                <ul className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link href={link.href}>
                        <span
                          className={cn(
                            'flex items-center px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer',
                            location === link.href
                              ? 'bg-primary/10 text-primary'
                              : 'text-foreground hover:bg-muted'
                          )}
                          data-testid={`link-mobile-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {link.label}
                        </span>
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-6 pt-6 border-t border-border">
                  <Link href="/contact">
                    <Button 
                      className="w-full gold-glow" 
                      size="lg"
                      data-testid="button-mobile-get-started"
                    >
                      Get Started
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
