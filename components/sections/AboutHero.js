import { motion } from 'framer-motion';
import AnimatedTitle from '@/components/ui/AnimatedTitle';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { Terminal } from 'lucide-react';

export default function AboutHero() {
  return (
    <section className="pt-40 pb-20 px-6 text-center relative z-10">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
        className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
      >
        <Terminal size={48} className="text-secondary" />
      </motion.div>

      <AnimatedTitle text="Engineers at Heart" className="text-4xl sm:text-5xl md:text-7xl font-black mb-6" />

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        Novus Tech wasn't started by salesmen. It was started by developers who were tired of seeing slow, ugly, and expensive websites cluttering the internet.
      </motion.p>
    </section>
  );
}
