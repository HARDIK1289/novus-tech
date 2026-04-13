import { motion } from 'framer-motion';
import { User, Phone, MapPin } from 'lucide-react';

const founders = [
  {
    name: 'Hardik Chaplot',
    title: 'Co-Founder & CEO',
    description: 'Tech visionary with 8+ years in AI and full-stack development. Passionate about building scalable systems that push the boundaries of modern web technology.',
    phone: '+91 98678 16863',
    location: 'Mumbai, India'
  },
  {
    name: 'Shivam Sharma',
    title: 'Co-Founder & CTO',
    description: 'Creative strategist blending technical expertise with marketing genius. Expert in user experience, brand storytelling, and turning complex ideas into beautiful, conversion-driven solutions.',
    phone: '+91 77419 96435',
    location: 'Mumbai, India'
  }
];

export default function AboutFounders() {
  return (
    <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Meet the <span className="text-secondary">Founders</span></h2>
        <p className="text-gray-400">The visionaries driving Novus Tech forward</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {founders.map((founder, idx) => (
          <motion.div
            key={founder.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-8 rounded-3xl border border-white/10 hover:border-secondary/50 transition group"
          >
            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary/30 transition">
                <User size={40} className="text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
              <p className="text-gray-400 mb-4">{founder.title}</p>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">{founder.description}</p>
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-sm">
                  <Phone size={16} className="text-secondary" />
                  <span>{founder.phone}</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-sm">
                  <MapPin size={16} className="text-secondary" />
                  <span>{founder.location}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}