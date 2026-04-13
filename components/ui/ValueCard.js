import { motion } from 'framer-motion';

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

export const cardVariants = {
  hidden: { y: 50, opacity: 0, scale: 0.9, rotateX: -15 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotateX: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 },
  },
};

export default function ValueCard({ icon: Icon, title, desc }) {
  return (
    <motion.div variants={cardVariants} className="glass-card p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition duration-300 group">
      <Icon size={30} className="text-gray-400 group-hover:text-secondary transition duration-300 mb-4" />
      <h3 className="font-bold text-lg mb-2 text-white group-hover:text-secondary transition">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
    </motion.div>
  );
}
