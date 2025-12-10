import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Filter, Layers, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { PortfolioCard } from '@/components/PortfolioCard';
import { portfolioItems } from '@/lib/data';

const categories = ['All', 'Video Editing', 'Branding', 'Motion Graphics', 'Institute Service', 'Content Strategy'];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className="relative min-h-screen cinematic-mode">
      <ParticleCanvas mode="cinematic" density={50} />

      <section className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge 
              className="mb-6 bg-[#5087ff]/10 text-[#5087ff] border-[#5087ff]/30"
            >
              <Lock className="w-3 h-3 mr-1" />
              Classified Vault
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-foreground">Portfolio </span>
            <span className="bg-gradient-to-r from-[#5087ff] to-primary bg-clip-text text-transparent">
              Vault
            </span>
          </motion.h1>

          <motion.p
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A curated collection of our finest work. Each project represents 
            our commitment to excellence and creative precision.
          </motion.p>

          <motion.p
            className="text-muted-foreground/60 text-sm max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Eye className="w-4 h-4 inline mr-1" />
            Note: Client names and sensitive data are protected for confidentiality.
          </motion.p>
        </div>
      </section>

      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="flex flex-wrap items-center justify-center gap-2 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={
                  activeCategory === category 
                    ? 'bg-[#5087ff] text-white' 
                    : 'border-[#5087ff]/30 text-muted-foreground hover:text-foreground hover:border-[#5087ff]/50'
                }
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
              >
                {category === 'All' && <Layers className="w-3 h-3 mr-1" />}
                {category}
              </Button>
            ))}
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {filteredItems.map((item, index) => (
                <PortfolioCard key={item.id} item={item} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredItems.length === 0 && (
            <motion.div
              className="text-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-muted-foreground">No projects found in this category.</p>
            </motion.div>
          )}
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
              Want to <span className="bg-gradient-to-r from-[#5087ff] to-primary bg-clip-text text-transparent">Join</span> This Collection?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Let's create something remarkable together. Your project could be next.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="gap-2 bg-gradient-to-r from-[#5087ff] to-primary text-black ai-blue-glow"
                  data-testid="button-start-project"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="/creative-studio">
                <Button size="lg" variant="outline" className="border-[#5087ff]/30" data-testid="button-explore-services">
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
