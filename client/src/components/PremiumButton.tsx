import { forwardRef } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PremiumButtonProps extends Omit<HTMLMotionProps<'button'>, 'ref'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'cinematic';
  size?: 'default' | 'sm' | 'lg';
  glowIntensity?: 'subtle' | 'medium' | 'intense';
  children: React.ReactNode;
}

export const PremiumButton = forwardRef<HTMLButtonElement, PremiumButtonProps>(
  ({ 
    variant = 'primary', 
    size = 'default', 
    glowIntensity = 'subtle',
    className, 
    children, 
    disabled,
    ...props 
  }, ref) => {
    const baseStyles = cn(
      'relative inline-flex items-center justify-center font-medium rounded-md',
      'transition-all duration-200 ease-out',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
      'disabled:opacity-50 disabled:pointer-events-none',
      'overflow-hidden'
    );

    const variantStyles = {
      primary: cn(
        'bg-primary text-primary-foreground',
        'border border-primary-border',
        glowIntensity === 'subtle' && 'shadow-[0_0_15px_rgba(255,213,65,0.2)]',
        glowIntensity === 'medium' && 'shadow-[0_0_25px_rgba(255,213,65,0.3)]',
        glowIntensity === 'intense' && 'shadow-[0_0_35px_rgba(255,213,65,0.4)]'
      ),
      secondary: cn(
        'bg-transparent text-primary',
        'border border-primary/40',
        'hover:bg-primary/10 hover:border-primary/60'
      ),
      ghost: cn(
        'bg-transparent text-foreground',
        'hover:bg-muted/50'
      ),
      cinematic: cn(
        'bg-gradient-to-r from-[#5087ff]/20 to-primary/20 text-foreground',
        'border border-[#5087ff]/30',
        'shadow-[0_0_25px_rgba(80,135,255,0.3),0_0_15px_rgba(255,213,65,0.2)]',
        'hover:shadow-[0_0_35px_rgba(80,135,255,0.4),0_0_25px_rgba(255,213,65,0.3)]'
      ),
    };

    const sizeStyles = {
      sm: 'px-4 py-2 text-sm gap-2',
      default: 'px-6 py-3 text-base gap-2',
      lg: 'px-8 py-4 text-lg gap-3',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
        whileHover={disabled ? {} : { scale: 1.03 }}
        whileTap={disabled ? {} : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        disabled={disabled}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
        
        {variant === 'primary' && (
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            initial={false}
            whileHover={{ translateX: '200%' }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            aria-hidden="true"
          />
        )}
      </motion.button>
    );
  }
);

PremiumButton.displayName = 'PremiumButton';
