import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { TimeGreeting } from '@shared/schema';

const greetings: TimeGreeting[] = [
  {
    period: 'morning',
    greeting: 'Good morning',
    message: "Let's build something powerful today.",
  },
  {
    period: 'afternoon',
    greeting: 'Good afternoon',
    message: 'Ready to upgrade your workflow?',
  },
  {
    period: 'evening',
    greeting: 'Good evening',
    message: 'Excellence awaits your command.',
  },
  {
    period: 'late-night',
    greeting: 'Working late?',
    message: 'Quickserve IT is always ready.',
  },
];

function getGreetingForTime(): TimeGreeting {
  const hour = new Date().getHours();
  
  if (hour >= 5 && hour < 12) {
    return greetings[0];
  } else if (hour >= 12 && hour < 17) {
    return greetings[1];
  } else if (hour >= 17 && hour < 22) {
    return greetings[2];
  } else {
    return greetings[3];
  }
}

interface DynamicGreetingProps {
  className?: string;
}

export function DynamicGreeting({ className = '' }: DynamicGreetingProps) {
  const [greeting, setGreeting] = useState<TimeGreeting | null>(null);

  useEffect(() => {
    setGreeting(getGreetingForTime());
  }, []);

  if (!greeting) return null;

  return (
    <motion.div
      className={`flex flex-col gap-1 ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <span className="text-sm font-medium text-primary tracking-wide uppercase">
        {greeting.greeting}
      </span>
      <span className="text-muted-foreground text-sm">
        {greeting.message}
      </span>
    </motion.div>
  );
}
