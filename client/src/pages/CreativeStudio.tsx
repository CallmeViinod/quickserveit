import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { useRef } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  Video, 
  Palette, 
  Wand2, 
  TrendingUp,
  Play,
  Film,
  Layers
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ParticleCanvas } from '@/components/ParticleCanvas';
import { TypewriterText } from '@/components/TypewriterText';
import { creativeServices } from '@/lib/data';

const sceneIcons = {
  'video-editing': Video,
  'branding': Palette,
  'motion-vfx': Wand2,
  'content-strategy': TrendingUp,
};

function CreativeScene({ 
  service, 
  index 
}: { 
  service: typeof creativeServices[0]; 
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.95, 1, 1, 0.95]);

  const Icon = sceneIcons[service.id as keyof typeof sceneIcons] || Sparkles;
  const isEven = index % 2 === 0;

  return (
    <motion.section
      ref={ref}
      className="relative min-h-[80vh] flex items-center py-20"
      style={{ opacity }}
    >
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: index === 0 
            ? 'radial-gradient(ellipse at 30% 50%, rgba(80, 135, 255, 0.08) 0%, transparent 50%)'
            : index === 1
            ? 'radial-gradient(ellipse at 70% 50%, rgba(255, 213, 65, 0.05) 0%, transparent 50%)'
            : index === 2
            ? 'radial-gradient(ellipse at 30% 50%, rgba(80, 135, 255, 0.06) 0%, transparent 50%)'
            : 'radial-gradient(ellipse at 70% 50%, rgba(255, 213, 65, 0.04) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}
          style={{ scale, y }}
        >
          <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
            <motion.div
              initial={{ opacity: 0, x: isEven ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Badge 
                className="mb-4 bg-[#5087ff]/10 text-[#5087ff] border-[#5087ff]/30"
              >
                <Film className="w-3 h-3 mr-1" />
                Scene {String(index + 1).padStart(2, '0')}
              </Badge>

              <h2 className="scene-title text-foreground mb-6">
                {service.title}
              </h2>

              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.05 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[#5087ff]" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <Link href="/contact">
                <Button 
                  variant="outline" 
                  className="gap-2 border-[#5087ff]/30 text-[#5087ff] hover:bg-[#5087ff]/10"
                  data-testid={`button-scene-${service.id}`}
                >
                  Initiate Production
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
            <motion.div
              className="relative aspect-video rounded-lg overflow-hidden cinematic-card p-1"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-full h-full rounded-md bg-gradient-to-br from-[#5087ff]/10 to-primary/5 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-[#5087ff]/10 border border-[#5087ff]/30 flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    <Icon className="w-8 h-8 text-[#5087ff]" />
                  </motion.div>
                  <p className="text-sm text-muted-foreground">Preview Area</p>
                </div>
              </div>

              <div 
                className="absolute inset-0 rounded-md pointer-events-none"
                style={{
                  background: 'linear-gradient(45deg, transparent 40%, rgba(80, 135, 255, 0.1) 50%, transparent 60%)',
                  backgroundSize: '200% 200%',
                  animation: 'shimmer 3s infinite',
                }}
                aria-hidden="true"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default function CreativeStudio() {
  return (
    <div className="relative min-h-screen cinematic-mode">
      <ParticleCanvas mode="cinematic" density={70} />

      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Badge 
              className="mb-6 bg-[#5087ff]/10 text-[#5087ff] border-[#5087ff]/30"
            >
              <Sparkles className="w-3 h-3 mr-1" />
              Cinematic AI Studio Mode
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <span className="text-foreground">Creative </span>
            <span 
              className="bg-gradient-to-r from-[#5087ff] to-primary bg-clip-text text-transparent"
            >
              Studio
            </span>
          </motion.h1>

          <motion.div
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <TypewriterText 
              text="Where imagination meets precision engineering."
              speed={35}
              delay={600}
            />
          </motion.div>

          <motion.p
            className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Cinema-grade video editing, stunning motion graphics, powerful branding, 
            and strategic content that commands attention.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href="/contact">
              <Button 
                size="lg" 
                className="gap-2 bg-gradient-to-r from-[#5087ff] to-primary text-black ai-blue-glow"
                data-testid="button-open-studio"
              >
                <Play className="w-4 h-4" />
                Open Studio Channel
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 border-[#5087ff]/30"
                data-testid="button-view-portfolio"
              >
                <Layers className="w-4 h-4" />
                View Portfolio
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ 
            opacity: { duration: 0.6, delay: 1 },
            y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
          }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-[#5087ff]/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-[#5087ff] rounded-full" />
          </div>
        </motion.div>
      </section>

      {creativeServices.map((service, index) => (
        <CreativeScene key={service.id} service={service} index={index} />
      ))}

      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(80, 135, 255, 0.1) 0%, transparent 60%)',
          }}
          aria-hidden="true"
        />

        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-primary/10 text-primary border-0">
              Coming Soon
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Future Tech Advertisements
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">
              AI commercial visuals, 2D/3D motion ads, political micro-campaigns, 
              and festival digital advertisements. Currently in development.
            </p>

            <Badge className="mb-6 bg-[#5087ff]/10 text-[#5087ff] border-0">
              Physical Studio Coming Soon
            </Badge>
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Creator Hub / Studio Space
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto text-sm">
              DSLR + condenser mic rental, green screen studio, podcast setup, 
              and creator workspace. After testing phase.
            </p>
          </motion.div>
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
              Ready to <span className="bg-gradient-to-r from-[#5087ff] to-primary bg-clip-text text-transparent">Create</span> Something Extraordinary?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Submit your creative brief and let's bring your vision to life.
            </p>
            <Link href="/contact">
              <Button 
                size="lg" 
                className="gap-2 bg-gradient-to-r from-[#5087ff] to-primary text-black ai-blue-glow"
                data-testid="button-submit-brief"
              >
                Submit Creative Brief
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}
