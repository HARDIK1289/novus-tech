import { motion } from 'framer-motion';
import { Award, Zap, Cpu, Heart, Globe } from 'lucide-react';
import ValueCard, { containerVariants } from '@/components/ui/ValueCard';

const values = [
  { icon: Zap, title: 'Extreme Speed', desc: 'We count milliseconds. Speed is our religion.' },
  { icon: Cpu, title: 'Modern Stack', desc: 'Next.js 15, React, and Edge Computing.' },
  { icon: Heart, title: 'Obsession', desc: 'We code because we love it, not just for profit.' },
  { icon: Globe, title: 'Global Scale', desc: 'Ready for 1 user or 1 million users.' },
];

export default function AboutStory() {
  return (
    <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-8 relative"
        >
          <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-secondary to-transparent opacity-30 hidden md:block" />
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">The <span className="text-gradient">Mission</span> to Upgrade the Web.</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The web has changed. It used to be about static documents. Now, it's about **dynamic, app-like experiences**.
          </p>
          <p className="text-gray-400 leading-relaxed text-lg">
            Most agencies are stuck in the past, using outdated drag-and-drop tools that slow down your business. We take a different approach. We hand-code our solutions using the same technology (Next.js) used by Netflix, TikTok, and Twitch.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-2 gap-4"
        >
          {values.map((item, idx) => {
            const Icon = item.icon;
            return <ValueCard key={item.title} icon={Icon} title={item.title} desc={item.desc} delay={idx * 0.1} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}
