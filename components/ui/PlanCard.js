import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export default function PlanCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`glass-card p-8 rounded-3xl border flex flex-col relative ${plan.color}`}    
    >
      {plan.popular && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg">
          Most Popular
        </div>
      )}
      
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 bg-white/5 rounded-xl text-secondary">
          <plan.icon size={24} />
        </div>
        <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-300">
          {plan.name === 'Enterprise' ? 'CORPORATE' : 'STARTUP'}
        </span>
      </div>

      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
      <div className="text-xl font-semibold text-secondary mb-8">{plan.price}</div>

      <div className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feat, j) => (
          <div key={j} className="flex items-start gap-3 text-sm text-gray-300">
            <Check size={16} className="text-secondary mt-1 shrink-0" />
            <span>{feat}</span>
          </div>
        ))}
      </div>

      <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition flex items-center justify-center gap-2 ${plan.btn}`}>
        Choose Plan <ArrowRight size={18} />
      </Link>
    </motion.div>
  );
}
