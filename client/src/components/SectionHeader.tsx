import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: 'left' | 'center';
  mode?: 'corporate' | 'cinematic';
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  description,
  align = 'center',
  mode = 'corporate',
  className = '',
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {subtitle && (
        <motion.span
          className={cn(
            'inline-block text-sm font-medium tracking-wide uppercase mb-3',
            mode === 'cinematic' ? 'text-[#5087ff]' : 'text-primary'
          )}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.span>
      )}

      <h2 
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4',
          mode === 'cinematic' && 'tracking-wide'
        )}
      >
        {title}
      </h2>

      {description && (
        <motion.p
          className="text-muted-foreground text-base md:text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
