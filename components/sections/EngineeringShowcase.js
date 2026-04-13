import { motion } from 'framer-motion';
import { Github, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function EngineeringShowcase({ projects }) {
  return (
    <section className="py-20 px-6 max-w-7xl mx-auto relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="flex flex-col md:flex-row justify-between items-end mb-16"
      >
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">Engineering <span className="text-gradient">Showcase</span></h2>
          <p className="text-gray-400">A glimpse into our R&D and technical capabilities.</p>
        </div>
        <Link href="/contact" className="text-secondary hover:text-white transition flex items-center gap-2 mt-4 md:mt-0">
          View Github <Github size={18} />
        </Link>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="group relative h-100 rounded-3xl overflow-hidden cursor-none"
          >
            <div className={`absolute inset-0 bg-linear-to-br ${p.color} opacity-10 group-hover:opacity-20 transition duration-500`} />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition duration-500" />
             
            <div className="absolute inset-0 p-8 flex flex-col justify-between border border-white/10 rounded-3xl group-hover:border-white/30 transition duration-500">
              <div className="flex justify-between items-start">
                <span className="text-xs font-bold uppercase tracking-widest border border-white/20 px-3 py-1 rounded-full text-white">{p.cat}</span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition duration-500">
                  <ArrowRight size={18} className="-rotate-45" />
                </div>
              </div>
              
              <div>
                <h3 className="text-3xl font-bold mb-3 text-white">{p.title}</h3>
                <p className="text-gray-400 mb-6 line-clamp-2 group-hover:text-gray-200">{p.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {p.tech.map((t, j) => (
                    <span key={j} className="text-xs text-gray-300 bg-black/50 px-2 py-1 rounded border border-white/10">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}