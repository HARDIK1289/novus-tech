import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import SplitText from '@/components/ui/SplitText';

export default function HeroSection() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="h-screen flex flex-col justify-center items-center text-center px-4 relative z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/20 blur-[180px] rounded-full -z-10 animate-pulse" />
      
      <SplitText 
        text="NOVUS TECH" 
        className="text-5xl sm:text-7xl md:text-9xl font-black mb-6 tracking-tighter text-white drop-shadow-2xl" 
      />
      
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1, duration: 1 }}
         className="mb-12"
      >
        <p className="text-gray-300 text-lg md:text-2xl font-light tracking-[0.2em] uppercase">
          Design. Develop. <span className="text-secondary font-bold">Dominate.</span>
        </p>
      </motion.div>
      
      <motion.div 
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        className="flex gap-6"
      >
        <Link href="/contact" className="group bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition transform flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          Start Project <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
        </Link>
      </motion.div>
    </section>
  );
}