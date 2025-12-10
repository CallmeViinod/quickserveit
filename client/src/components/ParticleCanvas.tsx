import { useEffect, useRef, useCallback, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  baseOpacity: number;
}

interface ParticleCanvasProps {
  mode?: 'corporate' | 'cinematic';
  density?: number;
}

export function ParticleCanvas({ mode = 'corporate', density = 50 }: ParticleCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>(0);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 768;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    if (prefersReducedMotion || (isMobile && isTouchDevice)) {
      setShouldRender(false);
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (e: MediaQueryListEvent) => {
      setShouldRender(!e.matches);
    };
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const initParticles = useCallback((width: number, height: number) => {
    const isMobile = width < 768;
    const particleCount = isMobile ? Math.floor(density * 0.3) : density;
    const particles: Particle[] = [];

    for (let i = 0; i < particleCount; i++) {
      const baseOpacity = mode === 'cinematic' 
        ? 0.3 + Math.random() * 0.4 
        : 0.15 + Math.random() * 0.25;
      
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * (mode === 'cinematic' ? 0.8 : 0.3),
        vy: (Math.random() - 0.5) * (mode === 'cinematic' ? 0.8 : 0.3),
        radius: mode === 'cinematic' 
          ? 1.5 + Math.random() * 2.5 
          : 1 + Math.random() * 1.5,
        opacity: baseOpacity,
        baseOpacity,
      });
    }

    particlesRef.current = particles;
  }, [mode, density]);

  const animate = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height);

    const mouse = mouseRef.current;
    const repelRadius = mode === 'cinematic' ? 150 : 100;
    const repelStrength = mode === 'cinematic' ? 0.08 : 0.04;

    particlesRef.current.forEach((particle) => {
      const dx = mouse.x - particle.x;
      const dy = mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < repelRadius && distance > 0) {
        const force = (repelRadius - distance) / repelRadius;
        const angle = Math.atan2(dy, dx);
        particle.vx -= Math.cos(angle) * force * repelStrength;
        particle.vy -= Math.sin(angle) * force * repelStrength;
        particle.opacity = Math.min(particle.baseOpacity + 0.3, 0.9);
      } else {
        particle.opacity += (particle.baseOpacity - particle.opacity) * 0.05;
      }

      particle.vx *= 0.98;
      particle.vy *= 0.98;

      particle.vx += (Math.random() - 0.5) * 0.02;
      particle.vy += (Math.random() - 0.5) * 0.02;

      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;
      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      
      if (mode === 'cinematic') {
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.radius * 2
        );
        gradient.addColorStop(0, `rgba(80, 135, 255, ${particle.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 213, 65, ${particle.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(255, 213, 65, 0)');
        ctx.fillStyle = gradient;
      } else {
        ctx.fillStyle = `rgba(255, 213, 65, ${particle.opacity})`;
      }
      
      ctx.fill();
    });

    if (mode === 'cinematic') {
      particlesRef.current.forEach((p1, i) => {
        particlesRef.current.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(80, 135, 255, ${0.1 * (1 - distance / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });
    }

    animationRef.current = requestAnimationFrame(animate);
  }, [mode]);

  useEffect(() => {
    if (!shouldRender) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationRef.current);
    };
  }, [animate, initParticles, shouldRender]);

  if (!shouldRender) {
    return null;
  }

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
      aria-hidden="true"
    />
  );
}
