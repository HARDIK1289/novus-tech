import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Diamond, Zap, Rocket, Heart, Globe2 } from 'lucide-react';

export default function WhyNovusSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Adjusted to -80% to accommodate the 5th card perfectly
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-transparent">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="relative z-20 text-center mb-16 px-4">
          <h2 className="text-5xl md:text-8xl font-black text-white mb-4 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)]">
            WHY <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-purple-600">NOVUS?</span>
          </h2>
        </div>
        <div className="relative w-full pl-6 md:pl-20">
          <motion.div style={{ x }} className="flex gap-8 items-center w-max">
            {[
              { id: "01", icon: Diamond, title: "Pixel Perfection", desc: "Every interaction is polished to a shine." },
              { id: "02", icon: Zap, title: "Extreme Speed", desc: "Optimized for sub-second load times." },
              { id: "03", icon: Rocket, title: "Scalable Tech", desc: "Built on Next.js, ready for millions." },
              { id: "04", icon: Heart, title: "Founder Mindset", desc: "We build it like it's our own startup." },
              { id: "05", icon: Globe2, title: "Global Standard", desc: "World-class code quality that competes internationally." },
            ].map((item, i) => (
              <div key={i} className="w-[85vw] md:w-120 h-[50vh] glass-card p-10 rounded-[30px] border border-white/10 flex flex-col justify-center shrink-0 bg-[#0a0a0a]/80 backdrop-blur-xl hover:border-secondary/50 transition duration-500 relative overflow-hidden group cursor-none">
                <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:opacity-20 transition duration-500 transform group-hover:scale-110">
                   <item.icon size={200} />
                </div>
                <h3 className="text-6xl font-black text-white/10 mb-6 group-hover:text-white/20 transition">{item.id}</h3>
                <div className="mb-4 text-secondary"><item.icon size={40} /></div>
                <h4 className="text-3xl font-bold mb-4 text-white group-hover:text-secondary transition">{item.title}</h4>
                <p className="text-lg text-gray-300 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}