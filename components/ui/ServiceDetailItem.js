import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import TechBox from './TechBox';

export default function ServiceDetailItem({ service, index }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row gap-16 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
    >
      <div className="flex-1">
        <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${service.color}`}>
          <service.icon size={32} />
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
        <p className="text-xl text-gray-400 mb-8 leading-relaxed">{service.desc}</p>

        <ul className="space-y-4 mb-8">
          {service.features.map((feat, j) => (
            <li key={j} className="flex items-center gap-3 text-lg font-medium">
              <CheckCircle size={20} className={service.color.replace('text-', 'text-')} />
              {feat}
            </li>
          ))}
        </ul>

        <Link href="/pricing" className="text-white border-b border-white/30 pb-1 hover:border-white transition flex items-center gap-2 w-max group">
          View Packages <span className="group-hover:translate-x-1 transition inline-flex">→</span>
        </Link>
      </div>

      <div className="flex-1 w-full">
        <div className="glass-card p-10 rounded-3xl border border-white/10 aspect-square flex items-center justify-center relative overflow-hidden group">
          <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-current opacity-20 blur-[100px] rounded-full ${service.color}`} />
          {service.id === 'dev' && (
            <div className="grid grid-cols-2 gap-4 relative z-10">
              <TechBox icon={service.techIcons[0]} label="Web" />
              <TechBox icon={service.techIcons[1]} label="API" />
              <TechBox icon={service.techIcons[2]} label="App" />
              <TechBox icon={service.techIcons[3]} label="Code" />
            </div>
          )}

          {service.id === 'design' && (
            <div className="relative z-10 text-center">
              <service.featuredIcon size={80} className="text-purple-400 mx-auto mb-4" />
              <div className="text-2xl font-bold">Pixel Perfect</div>
            </div>
          )}

          {service.id === 'marketing' && (
            <div className="relative z-10">
              <service.featuredIcon size={100} className="text-secondary drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
            </div>
          )}

          {service.id === 'ai' && (
            <div className="relative z-10">
              <service.featuredIcon size={100} className="text-green-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
