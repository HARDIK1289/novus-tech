import { motion } from 'framer-motion';

export default function ServicesHero() {
  return (
    <section className="pt-40 pb-20 px-6 text-center relative z-10">
      <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-5xl md:text-7xl font-black mb-6">
        Our <span className="text-secondary">Expertise.</span>
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-xl text-gray-400 max-w-2xl mx-auto">
        We are a full-service agency. That means we handle everything from the first line of code to the final sale.
      </motion.p>
    </section>
  );
}
