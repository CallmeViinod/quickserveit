import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { 
  ArrowRight, 
  Target, 
  Heart, 
  Lightbulb, 
  Shield, 
  Rocket,
  CheckCircle2,
  Users,
  Award,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { SectionHeader } from '@/components/SectionHeader';

const values = [
  {
    icon: Shield,
    title: 'Confidentiality',
    description: 'Your sensitive data and documents are handled with bank-grade security and discretion.',
  },
  {
    icon: Target,
    title: 'Precision',
    description: 'Every deliverable meets exacting standards. We obsess over the details so you don\'t have to.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'Deadlines are promises. We show up when you need us, every single time.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Constantly improving our processes and embracing technology to serve you better.',
  },
];

const roadmap = [
  {
    phase: 'Current',
    title: 'Core Services',
    items: ['Institute documentation', 'Creative production', 'Remote digital support'],
  },
  {
    phase: 'Q2 2025',
    title: 'AI Integration',
    items: ['Smart document formatting', 'Automated workflows', 'AI-assisted content'],
  },
  {
    phase: 'Q4 2025',
    title: 'Physical Studio',
    items: ['Creator hub space', 'Equipment rental', 'On-site production'],
  },
];

const stats = [
  { value: '100+', label: 'Institutions Served' },
  { value: '500+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Support Available' },
  { value: '99%', label: 'Client Satisfaction' },
];

export default function About() {
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
            <span className="text-foreground">About </span>
            <span className="gold-text">Quickserve IT</span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Building the bridge between institutional precision and creative excellence. 
            Your trusted digital partner for documentation and production.
          </motion.p>
        </div>
      </section>

      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center p-6 rounded-lg bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Quickserve IT was born from a simple observation: educational institutions 
                  and creative professionals both struggle with the same challenge — turning 
                  ideas into polished, professional output under tight deadlines.
                </p>
                <p>
                  We started by helping local schools with exam documentation during peak 
                  seasons. Teachers were overwhelmed, principals were stressed, and deadlines 
                  were missed. We stepped in to fill that gap with precision and reliability.
                </p>
                <p>
                  As word spread, creators and businesses reached out for video editing, 
                  branding, and content strategy. We realized we could apply the same 
                  dedication to creative work that we brought to institutional services.
                </p>
                <p>
                  Today, Quickserve IT operates as a dual-mode agency: a trusted institutional 
                  partner for schools and government work, and a cinematic creative studio 
                  for brands and creators. Two worlds, one standard of excellence.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/5 to-card border-primary/20">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Our Mission</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  To reduce digital stress for institutions and amplify creative impact for 
                  brands — delivering excellence that builds trust and inspires confidence.
                </p>
                <ul className="space-y-3">
                  {['Make technology accessible', 'Protect what matters', 'Deliver on promises', 'Inspire through quality'].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
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

      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionHeader
            subtitle="What We Stand For"
            title="Our Values"
            description="The principles that guide every decision, every project, every interaction."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-6 rounded-lg bg-card border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="p-2 rounded-lg bg-primary/10 w-fit mb-4">
                  <value.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            subtitle="Looking Ahead"
            title="Future Roadmap"
            description="We're constantly evolving to serve you better. Here's what's coming."
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {roadmap.map((phase, index) => (
              <motion.div
                key={phase.phase}
                className={`p-6 rounded-lg border ${
                  index === 0 
                    ? 'bg-primary/5 border-primary/30' 
                    : 'bg-background border-border'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  {index === 0 && <Rocket className="w-4 h-4 text-primary" />}
                  <span className={`text-sm font-medium ${
                    index === 0 ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {phase.phase}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-4">{phase.title}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        index === 0 ? 'bg-primary' : 'bg-muted-foreground'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
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
              Ready to <span className="gold-text">Work Together</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Whether you're an institution seeking reliable documentation support or 
              a creator looking for premium production, we're here for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg" className="gold-glow gap-2" data-testid="button-start-conversation">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/institute-services">
                <Button size="lg" variant="outline" data-testid="button-explore-about">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
