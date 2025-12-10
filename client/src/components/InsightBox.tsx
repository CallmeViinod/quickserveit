import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Lightbulb, Zap } from 'lucide-react';
import type { InsightQuote } from '@shared/schema';

const insights: InsightQuote[] = [
  { text: "Precision in execution builds institutional trust.", category: 'business' },
  { text: "Every deadline is a promise. We keep ours.", category: 'business' },
  { text: "Confidentiality isn't a feature—it's the foundation.", category: 'business' },
  { text: "Great design is invisible. It just works.", category: 'creative' },
  { text: "Stories move people. Motion graphics amplify stories.", category: 'creative' },
  { text: "Your brand is what people remember when you're not in the room.", category: 'creative' },
  { text: "Technology should reduce stress, not create it.", category: 'tech' },
  { text: "Automation is the art of making complexity invisible.", category: 'tech' },
  { text: "Security and speed are not opposites—they're partners.", category: 'tech' },
  { text: "Innovation starts where comfort zones end.", category: 'business' },
  { text: "Quality documentation is the backbone of every institution.", category: 'business' },
  { text: "Cinema-grade production for every creator's vision.", category: 'creative' },
];

const categoryIcons = {
  business: Lightbulb,
  creative: Sparkles,
  tech: Zap,
};

interface InsightBoxProps {
  className?: string;
  mode?: 'corporate' | 'cinematic';
}

export function InsightBox({ className = '', mode = 'corporate' }: InsightBoxProps) {
  const [insight, setInsight] = useState<InsightQuote | null>(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * insights.length);
    setInsight(insights[randomIndex]);
  }, []);

  if (!insight) return null;

  const Icon = categoryIcons[insight.category];
  const accentColor = mode === 'cinematic' ? '#5087ff' : undefined;

  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
    >
      <div className="glass-panel rounded-lg p-4 max-w-md">
        <div className="flex items-start gap-3">
          <div 
            className="flex-shrink-0 p-2 rounded-md"
            style={{ 
              backgroundColor: mode === 'cinematic' ? 'rgba(80, 135, 255, 0.1)' : 'rgba(255, 213, 65, 0.1)' 
            }}
          >
            <Icon 
              className="w-4 h-4" 
              style={{ color: accentColor }}
              aria-hidden="true" 
            />
          </div>
          <div>
            <p className="text-sm text-foreground/90 leading-relaxed italic">
              "{insight.text}"
            </p>
            <span className="text-xs text-muted-foreground mt-2 block capitalize">
              — Quickserve IT Wisdom
            </span>
          </div>
        </div>
      </div>
      <div 
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          background: mode === 'cinematic' 
            ? 'radial-gradient(ellipse at center, rgba(80, 135, 255, 0.05) 0%, transparent 70%)'
            : 'radial-gradient(ellipse at center, rgba(255, 213, 65, 0.05) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
