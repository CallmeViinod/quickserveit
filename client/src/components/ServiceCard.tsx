import { motion } from 'framer-motion';
import { 
  FileText, 
  GraduationCap, 
  Database, 
  Building2, 
  Headphones,
  Video,
  Palette,
  Sparkles,
  TrendingUp,
  Wand2,
  type LucideIcon
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ServiceItem } from '@shared/schema';

const iconMap: Record<string, LucideIcon> = {
  'file-text': FileText,
  'graduation-cap': GraduationCap,
  'database': Database,
  'building-2': Building2,
  'headphones': Headphones,
  'video': Video,
  'palette': Palette,
  'sparkles': Sparkles,
  'trending-up': TrendingUp,
  'wand-2': Wand2,
};

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
  mode?: 'corporate' | 'cinematic';
}

export function ServiceCard({ service, index, mode = 'corporate' }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || FileText;

  return (
    <motion.div
      className={cn(
        'group relative p-6 rounded-lg',
        mode === 'cinematic' ? 'cinematic-card' : 'premium-card'
      )}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      data-testid={`card-service-${service.id}`}
    >
      <div className="flex items-start gap-4">
        <div 
          className={cn(
            'flex-shrink-0 p-3 rounded-lg',
            mode === 'cinematic' 
              ? 'bg-[#5087ff]/10 border border-[#5087ff]/20' 
              : 'bg-primary/10 border border-primary/20'
          )}
        >
          <Icon 
            className={cn(
              'w-6 h-6',
              mode === 'cinematic' ? 'text-[#5087ff]' : 'text-primary'
            )} 
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {service.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {service.description}
          </p>

          <ul className="space-y-2">
            {service.features.slice(0, 4).map((feature, i) => (
              <li 
                key={i}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <span 
                  className={cn(
                    'w-1.5 h-1.5 rounded-full flex-shrink-0',
                    mode === 'cinematic' ? 'bg-[#5087ff]' : 'bg-primary'
                  )}
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {mode === 'cinematic' && (
        <div 
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(80, 135, 255, 0.05) 0%, transparent 70%)',
          }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}
