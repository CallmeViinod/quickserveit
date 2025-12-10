import { motion } from 'framer-motion';
import { Check, Zap, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { PricingTier } from '@shared/schema';
import { Link } from 'wouter';

interface PricingCardProps {
  tier: PricingTier;
  index: number;
}

export function PricingCard({ tier, index }: PricingCardProps) {
  return (
    <motion.div
      className={cn(
        'relative flex flex-col p-6 lg:p-8 rounded-lg',
        tier.highlight
          ? 'bg-gradient-to-b from-primary/10 to-card border-2 border-primary/30'
          : 'premium-card'
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      data-testid={`card-pricing-${tier.id}`}
    >
      {tier.highlight && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground border-0 px-3 py-1">
            <Star className="w-3 h-3 mr-1" />
            Recommended
          </Badge>
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          {tier.type === 'per-task' && <Zap className="w-5 h-5 text-primary" />}
          <h3 className="text-xl font-semibold text-foreground">{tier.name}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{tier.description}</p>
      </div>

      <div className="mb-6">
        <Badge 
          variant="outline" 
          className={cn(
            'text-xs',
            tier.type === 'per-task' && 'border-primary/30 text-primary',
            tier.type === 'monthly' && 'border-[#5087ff]/30 text-[#5087ff]',
            tier.type === 'annual' && 'border-green-500/30 text-green-500'
          )}
        >
          {tier.type === 'per-task' && 'Pay Per Task'}
          {tier.type === 'monthly' && 'Monthly Retainer'}
          {tier.type === 'annual' && 'Annual Partnership'}
        </Badge>
      </div>

      <ul className="flex-1 space-y-3 mb-8">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm">
            <Check className={cn(
              'w-4 h-4 mt-0.5 flex-shrink-0',
              tier.highlight ? 'text-primary' : 'text-muted-foreground'
            )} />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Link href="/contact">
        <Button 
          variant={tier.highlight ? 'default' : 'outline'}
          className={cn(
            'w-full',
            tier.highlight && 'gold-glow'
          )}
          data-testid={`button-pricing-${tier.id}`}
        >
          {tier.ctaText}
        </Button>
      </Link>
    </motion.div>
  );
}
