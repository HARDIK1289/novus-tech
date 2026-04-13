import { motion } from 'framer-motion';

export default function VisionCard({ icon: Icon, title, desc }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white/5 border border-white/10 p-6 rounded-2xl"
    >
      <div className="bg-secondary/20 w-12 h-12 rounded-full flex items-center justify-center mb-4 text-secondary">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}