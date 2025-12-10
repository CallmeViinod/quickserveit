import { motion } from 'framer-motion';
import { Shield, Clock, Building2, Lock, Zap, Award } from 'lucide-react';

const badges = [
  {
    icon: Shield,
    label: 'Confidential',
    description: 'Secure document handling',
  },
  {
    icon: Clock,
    label: '24/7 Ready',
    description: 'Emergency support available',
  },
  {
    icon: Building2,
    label: 'On-Campus',
    description: 'Institution-friendly service',
  },
  {
    icon: Lock,
    label: 'Secure',
    description: 'Data protection guaranteed',
  },
  {
    icon: Zap,
    label: 'Urgent Ready',
    description: 'Fast turnaround times',
  },
  {
    icon: Award,
    label: 'Trusted',
    description: 'Proven track record',
  },
];

interface TrustBadgesProps {
  variant?: 'minimal' | 'full';
  className?: string;
}

export function TrustBadges({ variant = 'minimal', className = '' }: TrustBadgesProps) {
  const displayBadges = variant === 'minimal' ? badges.slice(0, 3) : badges;

  return (
    <motion.div 
      className={`flex flex-wrap gap-3 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      {displayBadges.map((badge, index) => (
        <motion.div
          key={badge.label}
          className="trust-badge"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
          data-testid={`badge-trust-${badge.label.toLowerCase().replace(/\s+/g, '-')}`}
        >
          <badge.icon className="w-4 h-4" aria-hidden="true" />
          <span>{badge.label}</span>
        </motion.div>
      ))}
    </motion.div>
  );
}
