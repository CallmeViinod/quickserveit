import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Info, CheckCircle2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { SectionHeader } from '@/components/SectionHeader';
import { PricingCard } from '@/components/PricingCard';
import { pricingTiers } from '@/lib/data';

const pricingPhilosophy = [
  {
    title: 'Fair & Predictable',
    description: 'Transparent pricing based on workload, complexity, and urgency.',
  },
  {
    title: 'No Hidden Fees',
    description: 'What we quote is what you pay. No surprises.',
  },
  {
    title: 'Value-Driven',
    description: 'Quality work that saves you time and stress.',
  },
];

const urgentPolicies = [
  'Same-day requests require priority charges',
  'Weekend/holiday work billed at premium rates',
  'Emergency support available 24/7',
  'On-site visits incur travel charges',
];

export default function Pricing() {
  return (
    <div className="relative min-h-screen">
      <ParticleCanvas mode="corporate" density={40} />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-foreground">Pricing & </span>
            <span className="gold-text">Plans</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Flexible engagement models designed for institutions, creators, 
            and organizations of all sizes.
          </motion.p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pricingTiers.map((tier, index) => (
              <PricingCard key={tier.id} tier={tier} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            subtitle="Our Approach"
            title="Pricing Philosophy"
            description="We believe in fair, transparent pricing that reflects the true value of professional work."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {pricingPhilosophy.map((item, index) => (
              <motion.div
                key={item.title}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 p-6 rounded-lg bg-background border border-border"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="flex items-start gap-4">
              <Info className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-medium text-foreground mb-2">How We Calculate Pricing</h4>
                <p className="text-sm text-muted-foreground">
                  Our pricing depends on: workload volume, formatting complexity, urgency level, 
                  number of corrections, delivery distance (for physical items), and special requirements. 
                  We don't use cheap "per page typing" rates because quality work deserves fair compensation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <AlertCircle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Urgent & Special Policies</h3>
                </div>
                <ul className="space-y-4">
                  {urgentPolicies.map((policy, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{policy}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-primary/5 to-card border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-6">Referral Program</h3>
                <p className="text-muted-foreground mb-6">
                  Love our work? Refer institutions, schools, or creators to us and earn rewards 
                  on successful engagements. Build partnerships that benefit everyone.
                </p>
                <ul className="space-y-3">
                  {['Referral credits on future work', 'Priority queue for referrers', 'Exclusive partner benefits', 'Annual bonus for top referrers'].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Need a <span className="gold-text">Custom Quote</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Every project is unique. Share your requirements and we'll provide 
              a tailored estimate within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gold-glow gap-2" data-testid="button-get-quote">
                  Get Custom Quote
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" data-testid="button-whatsapp-pricing">
                  Chat on WhatsApp
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
