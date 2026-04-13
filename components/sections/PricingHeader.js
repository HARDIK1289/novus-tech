import { motion } from 'framer-motion';

export default function PricingHeader() {
  return (
    <section className="pt-40 pb-20 px-6 text-center relative z-10">
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-black mb-6"
      >
        Flexible <span className="text-secondary">Engagements.</span>
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-xl text-gray-400 max-w-2xl mx-auto"
      >
        Web, Design, Marketing and AI solutions built around your goals. No fixed price tags, just clarity.
      </motion.p>
    </section>
  );
}
