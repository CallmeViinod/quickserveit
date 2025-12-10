import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Shield, Clock, Building2, CheckCircle2, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { SectionHeader } from '@/components/SectionHeader';
import { ServiceCard } from '@/components/ServiceCard';
import { TrustBadges } from '@/components/TrustBadges';
import { instituteServices } from '@/lib/data';

const processSteps = [
  {
    step: 1,
    title: 'Share Content',
    description: 'Send your documents via WhatsApp, email, or secure upload.',
  },
  {
    step: 2,
    title: 'We Process',
    description: 'Professional formatting, typing, and quality checks.',
  },
  {
    step: 3,
    title: 'Review & Approve',
    description: 'Preview the work and request any corrections.',
  },
  {
    step: 4,
    title: 'Secure Delivery',
    description: 'Receive your completed work via your preferred channel.',
  },
];

export default function InstituteServices() {
  return (
    <div className="relative min-h-screen">
      <ParticleCanvas mode="corporate" density={40} />

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-6 text-primary border-primary/30">
              <Building2 className="w-3 h-3 mr-1" />
              Corporate Command Mode
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-foreground">Institute </span>
            <span className="gold-text">Services</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Government-grade documentation, portal management, and digital support 
            for educational institutions. Confidential. Precise. Always ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TrustBadges variant="full" className="justify-center" />
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            subtitle="Our Services"
            title="Comprehensive Institutional Support"
            description="Every service designed for accuracy, confidentiality, and institutional requirements."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {instituteServices.map((service, index) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                index={index}
                mode="corporate"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            subtitle="How We Work"
            title="Simple, Secure Process"
            description="From document submission to delivery, every step is designed for your convenience."
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-4">
                  <span className="text-primary font-bold">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>

                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-0.5 bg-border" aria-hidden="true" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-card border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <AlertTriangle className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Urgent Support</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Exams involve unpredictable urgency. We handle sudden corrections, 
                  last-minute changes, and same-day requirements with priority processing.
                </p>
                <ul className="space-y-3">
                  {['Same-day turnaround available', 'Off-hour processing', 'Priority queue access', 'Direct communication channel'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-muted-foreground/60 mt-6">
                  Note: Urgent work is accepted with additional charges based on effort and time window.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-muted">
                    <Shield className="w-5 h-5 text-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Quality Assurance</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Every document undergoes a rigorous verification process before delivery. 
                  We ensure accuracy, proper formatting, and confidentiality at every step.
                </p>
                <ul className="space-y-3">
                  {['Structure verification', 'Pagination check', 'Subject clarity', 'Correction implementation', 'Confidentiality handling'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0" />
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
            <Badge className="mb-6 bg-primary/10 text-primary border-0">
              Coming Soon
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              AI & Institutional Automation Tools
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Smart document structuring, automatic formatting, digital compliance assistants, 
              and scheduled automation workflows. Currently in development.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Streamline Your <span className="gold-text">Documentation</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Reduce workload, improve accuracy, and protect confidentiality during examinations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gold-glow gap-2" data-testid="button-contact-partner">
                  Contact Documentation Partner
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button size="lg" variant="outline" data-testid="button-view-pricing">
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
