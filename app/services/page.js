"use client";
import { useRef, useEffect } from 'react';
// FIX: Import 'animate' directly
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { 
  Code, Palette, Megaphone, ArrowRight, CheckCircle, 
  Cpu, Globe, Layout, PenTool, BarChart 
} from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const services = [
  {
    id: "dev",
    title: "Development",
    icon: Code,
    desc: "We don't just write code; we engineer systems. From simple landing pages to complex SaaS platforms, our stack is bulletproof.",
    color: "text-blue-400",
    features: ["Next.js & React Web Apps", "E-Commerce (Shopify/Stripe)", "Custom APIs & Databases", "Mobile Apps (PWA)"]
  },
  {
    id: "design",
    title: "Brand & Design",
    icon: Palette,
    desc: "Design is not just how it looks; it's how it works. We create visual identities that command authority and trust.",
    color: "text-purple-400",
    features: ["Logo & Brand Identity", "UI/UX Prototyping", "Social Media Kits", "3D Visuals & Motion"]
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    desc: "A beautiful website is useless if no one sees it. We drive targeted traffic that converts into actual paying clients.",
    color: "text-secondary",
    features: ["SEO (Rank #1 on Google)", "PPC Ads (Google/Meta)", "Content Strategy", "Email Marketing Funnels"]
  }
];

const stats = [
    { label: "Dedication", value: 100, suffix: "%" },
    { label: "Transparency", value: 100, suffix: "%" },
    { label: "Resilience", value: 100, suffix: "%" },
    { label: "Support", value: 24, suffix: "/7" }, // 24/7 Support
  ];

export default function Services() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden pb-20">
      <ParticlesBackground />
      
      {/* 1. HERO */}
      <section className="pt-40 pb-20 px-6 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          Our <span className="text-secondary">Expertise.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          We are a full-service agency. That means we handle everything from the first line of code to the final sale.
        </motion.p>
      </section>

      {/* 2. STATS COUNTER */}
      <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
        <div className="glass-card p-12 rounded-3xl border border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <div key={i}>
              <div className="text-4xl md:text-6xl font-black text-white mb-2 flex justify-center">
                <Counter value={stat.value} />
                <span>{stat.suffix}</span>
              </div>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DETAILED SERVICES */}
      <section className="px-6 max-w-7xl mx-auto space-y-32 relative z-10">
        {services.map((service, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`flex flex-col md:flex-row gap-16 items-center ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            {/* Text Side */}
            <div className="flex-1">
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-6 ${service.color}`}>
                <service.icon size={32} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h2>
              <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                {service.desc}
              </p>
              
              <ul className="space-y-4 mb-8">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-3 text-lg font-medium">
                    <CheckCircle size={20} className={service.color.replace('text-', 'text-')} /> 
                    {feat}
                  </li>
                ))}
              </ul>

              <Link href="/pricing" className="text-white border-b border-white/30 pb-1 hover:border-white transition flex items-center gap-2 w-max group">
                View Packages <ArrowRight size={18} className="group-hover:translate-x-1 transition"/>
              </Link>
            </div>

            {/* Visual Side (Glass Card) */}
            <div className="flex-1 w-full">
              <div className="glass-card p-10 rounded-3xl border border-white/10 aspect-square flex items-center justify-center relative overflow-hidden group">
                 {/* Decorative background blurs */}
                 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-current opacity-20 blur-[100px] rounded-full ${service.color}`} />
                 
                 {/* Icon Logic based on service */}
                 {service.id === 'dev' && (
                    <div className="grid grid-cols-2 gap-4 relative z-10">
                       <TechBox icon={Globe} label="Web" />
                       <TechBox icon={Cpu} label="API" />
                       <TechBox icon={Layout} label="App" />
                       <TechBox icon={Code} label="Code" />
                    </div>
                 )}
                 {service.id === 'design' && (
                    <div className="relative z-10 text-center">
                       <PenTool size={80} className="text-purple-400 mx-auto mb-4" />
                       <div className="text-2xl font-bold">Pixel Perfect</div>
                    </div>
                 )}
                 {service.id === 'marketing' && (
                    <div className="relative z-10">
                       <BarChart size={100} className="text-secondary drop-shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                    </div>
                 )}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* 4. PROCESS STEPS */}
      <section className="py-32 px-6 max-w-5xl mx-auto relative z-10 text-center">
         <h2 className="text-3xl md:text-5xl font-bold mb-16">How We <span className="text-secondary">Work</span></h2>
         <div className="grid md:grid-cols-4 gap-8">
            {['Discovery', 'Strategy', 'Build', 'Launch'].map((step, i) => (
              <div key={i} className="relative">
                 <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 border border-white/20 text-xl font-bold">
                    {i + 1}
                 </div>
                 <h3 className="text-xl font-bold mb-2">{step}</h3>
                 {i !== 3 && <div className="hidden md:block absolute top-6 left-1/2 w-full h-[1px] bg-white/10 -z-10" />}
              </div>
            ))}
         </div>
      </section>

      {/* 5. CTA */}
      <section className="py-20 text-center">
         <Link href="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-secondary hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Start Your Project
         </Link>
      </section>
    </div>
  );
}

// --- ANIMATED COUNTER COMPONENT ---
function Counter({ value }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    if (isInView) {
      // FIX: Use 'animate()' directly instead of 'motion.animate()'
      const controls = animate(count, value, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}

// Sub-component for the visual cards
function TechBox({ icon: Icon, label }) {
   return (
      <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center w-28 hover:border-blue-400 transition">
         <Icon size={24} className="mx-auto mb-2 text-blue-400" />
         <span className="text-sm font-bold text-gray-300">{label}</span>
      </div>
   )
}