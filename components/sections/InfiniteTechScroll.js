import { motion } from 'framer-motion';
import { Globe, Code, Palette, TrendingUp, PenTool, Bot, Database, Layers } from 'lucide-react';
import TechBadge from '@/components/ui/TechBadge';

export default function InfiniteTechScroll() {
  const techItems = [
    { name: 'Next.js', icon: Globe, tagline: 'Server-side performance' },
    { name: 'React', icon: Code, tagline: 'Interactive UI' },
    { name: 'UI/UX', icon: Palette, tagline: 'Beautiful interfaces' },
    { name: 'SEO', icon: TrendingUp, tagline: 'Search-ready content' },
    { name: 'Branding', icon: PenTool, tagline: 'Distinct digital identity' },
    { name: 'Agentic AI', icon: Bot, tagline: 'Future-ready automation' },
    { name: 'MongoDB', icon: Database, tagline: 'Modern data layer' },
    { name: 'AWS', icon: Layers, tagline: 'Scale with confidence' },
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-black/30 backdrop-blur-sm relative z-20">
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10" />

      <div className="flex overflow-hidden">
        <motion.div 
          className="flex"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ repeat: Infinity, ease: 'linear', duration: 25 }}
        >
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-6">
              <TechBadge name="Next.js" icon={Globe} />
              <TechBadge name="React" icon={Code} />
              <TechBadge name="UI/UX" icon={Palette} />
              <TechBadge name="SEO" icon={TrendingUp} />
              <TechBadge name="Branding" icon={PenTool} />
              <TechBadge name="Agentic AI" icon={Bot} />
              <TechBadge name="MongoDB" icon={Database} />
              <TechBadge name="AWS" icon={Layers} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}