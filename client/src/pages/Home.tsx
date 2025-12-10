import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, MessageCircle, Sparkles, Building2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { TypewriterText } from '@/components/TypewriterText';
import { DynamicGreeting } from '@/components/DynamicGreeting';
import { InsightBox } from '@/components/InsightBox';
import { TrustBadges } from '@/components/TrustBadges';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { instituteServices, creativeServices } from '@/lib/data';

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticleCanvas mode="corporate" density={60} />

      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <DynamicGreeting className="mb-6" />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-foreground">Your </span>
            <span className="gold-text">Digital Command</span>
            <br />
            <span className="text-foreground">Center</span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TypewriterText 
              text="Institutional precision meets cinematic creativity."
              speed={40}
              delay={800}
            />
          </motion.div>

          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Premium technology services for schools, colleges, and government institutions. 
            World-class creative production for brands and creators.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/contact">
              <Button size="lg" className="gold-glow gap-2" data-testid="button-hero-get-started">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="/institute-services">
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-hero-services">
                <Building2 className="w-4 h-4" />
                Our Services
              </Button>
            </Link>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary" className="gap-2" data-testid="button-hero-whatsapp">
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </Button>
            </a>
          </motion.div>

          <TrustBadges variant="minimal" className="justify-center" />

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <InsightBox className="mx-auto" />
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-primary rounded-full" />
          </div>
        </motion.div>
      </section>

      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Institute Services"
            title="Institutional Excellence"
            description="Government-grade documentation, portal management, and digital support for educational institutions."
            mode="corporate"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {instituteServices.slice(0, 3).map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                mode="corporate"
              />
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/institute-services">
              <Button variant="outline" className="gap-2" data-testid="button-view-institute-services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(80, 135, 255, 0.1) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto relative">
          <SectionHeader
            subtitle="Creative Studio"
            title="Cinematic Production"
            description="Premium video editing, branding, motion graphics, and content strategy for creators and brands."
            mode="cinematic"
          />

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {creativeServices.slice(0, 4).map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                mode="cinematic"
              />
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link href="/creative-studio">
              <Button variant="outline" className="gap-2 border-[#5087ff]/30 text-[#5087ff] hover:bg-[#5087ff]/10" data-testid="button-view-creative-studio">
                <Sparkles className="w-4 h-4" />
                Enter Creative Studio
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Why Choose Us"
            title="The Quickserve Advantage"
            description="Built on trust, precision, and relentless commitment to excellence."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: 'Confidential Operations',
                description: 'Bank-grade security for your sensitive documents and data. Every project is handled with complete discretion.',
                icon: '🔒',
              },
              {
                title: 'Emergency Ready',
                description: '24/7 availability for urgent institutional deadlines. We understand that education never sleeps.',
                icon: '⚡',
              },
              {
                title: 'Premium Quality',
                description: 'Every deliverable meets the highest standards. No compromises on accuracy, design, or timeliness.',
                icon: '✨',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl mb-4" aria-hidden="true">{item.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to <span className="gold-text">Transform</span> Your Workflow?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
              Whether you need institutional documentation or creative production, 
              Quickserve IT delivers excellence every time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gold-glow gap-2" data-testid="button-cta-contact">
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" data-testid="button-cta-pricing">
                  View Pricing
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
