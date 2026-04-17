import { motion } from 'framer-motion';
import { Target, Lightbulb, Users } from 'lucide-react';
import VisionCard from '@/components/ui/VisionCard';

export default function VisionSection() {
  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Our Goal is <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-purple-500">Simple</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            We believe that great software shouldn't just "work"—it should feel magic. 
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            At Novus Tech, we bridge the gap between imagination and engineering. Whether you are a startup validating an idea or a business ready to scale, we are the architects of your digital future.
          </p>
          
          <div className="flex gap-8 border-t border-white/10 pt-8">
             <div>
                <h4 className="text-3xl font-bold text-white mb-1">100%</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Transparency</p>
             </div>
             <div>
                <h4 className="text-3xl font-bold text-white mb-1">24/7</h4>
                <p className="text-sm text-gray-400 uppercase tracking-widest">Support</p>
             </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
           <VisionCard icon={Target} title="Mission" desc="To eliminate digital friction and build interfaces that users actually love to use." />
           <VisionCard icon={Lightbulb} title="Innovation" desc="We don't use templates. Every line of code is crafted to solve your specific problem." />
           <VisionCard icon={Users} title="Partnership" desc="We aren't just vendors. We act as your internal tech team, guiding you at every step." />
        </div>
      </div>
    </section>
  );
}