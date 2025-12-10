import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ExternalLink, Tag } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import type { PortfolioItem } from '@shared/schema';

interface PortfolioCardProps {
  item: PortfolioItem;
  index: number;
}

export function PortfolioCard({ item, index }: PortfolioCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-portfolio-${item.id}`}
    >
      <div 
        className="absolute inset-0 bg-gradient-to-br from-card to-background"
        style={{
          backgroundImage: `url(${item.thumbnail})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-[#5087ff]/20 to-primary/10 opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-hidden="true"
      />

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
        }}
        aria-hidden="true"
      />

      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        <motion.div
          initial={false}
          animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <Badge 
            variant="secondary" 
            className="mb-2 bg-[#5087ff]/20 text-[#5087ff] border-[#5087ff]/30"
          >
            {item.category}
          </Badge>
        </motion.div>

        <h3 className="text-lg font-semibold text-white mb-1">
          {item.title}
        </h3>

        <motion.p
          className="text-sm text-white/70 line-clamp-2"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {item.description}
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-1 mt-3"
          initial={false}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 10 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          {item.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="text-xs text-white/50 bg-white/10 px-2 py-0.5 rounded"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute top-4 right-4 flex gap-2"
        initial={false}
        animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
        transition={{ duration: 0.2 }}
      >
        <button
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors"
          aria-label="View project"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </motion.div>

      <div 
        className={cn(
          'absolute inset-0 border rounded-lg transition-all duration-300',
          isHovered 
            ? 'border-[#5087ff]/40 shadow-[0_0_30px_rgba(80,135,255,0.2)]' 
            : 'border-white/10'
        )}
        aria-hidden="true"
      />
    </motion.div>
  );
}
