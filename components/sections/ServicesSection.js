import { motion } from 'framer-motion';
import { Code, Bot, Megaphone } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
          Full-Stack <span className="text-gradient">Agency</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          We don't just write code. We build complete digital ecosystems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            icon: Code,
            title: 'Development',
            desc: 'Blazing-fast websites and apps engineered with precision. Built to scale, secure by design, and optimized for performance.',
          },
          {
            icon: Bot,
            title: 'Agentic AI',
            desc: 'Autonomous AI systems that think, decide, and act. From smart workflows to intelligent agents — we build AI that works for you 24/7.',
          },
          {
            icon: Megaphone,
            title: 'Digital Marketing',
            desc: 'Data-driven growth strategies that turn attention into revenue. We don’t chase clicks — we engineer conversions.',
          },
        ].map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="glass-card p-10 rounded-3xl border border-white/5 hover:border-secondary/30 transition duration-500 group"
          >
            <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-black transition duration-500">
              <s.icon size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
            <p className="text-gray-400 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}