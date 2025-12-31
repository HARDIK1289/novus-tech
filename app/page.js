"use client";
import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, AnimatePresence } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { 
  ArrowRight, Code, PenTool, TrendingUp, Diamond, Zap, Rocket, Heart, 
  Cpu, Globe, Database, Layers, ChevronDown, Github, Check, X, 
  MapPin, Mail, Clock, Target, Lightbulb, Users, Palette, Megaphone, Globe2
} from 'lucide-react';
import Link from 'next/link';

// --- DATA ---
const faqs = [
  { q: "Do you handle Branding & Design?", a: "Yes. We have a dedicated design team for Logos, UI/UX, and Social Media assets. We ensure your brand looks as good as it works." },
  { q: "Can you help with Marketing?", a: "Absolutely. We don't just build the car; we provide the fuel. We offer SEO, Google Ads, and Social Media Marketing strategies." },
  { q: "What is your pricing model?", a: "We offer project-based pricing. No hidden fees. You get a quote upfront, and that's exactly what you pay." },
  { q: "Do you work with startups?", a: "Yes. We specialize in taking startups from 'Zero' to 'Launch'—covering Tech, Design, and Marketing in one go." },
];

const projects = [
  {
    title: "GroundTruth",
    cat: "AI Misinformation Detection",
    desc: "An AI-powered engine that analyzes viral patterns to detect fake news in real-time.",
    tech: ["Python", "Next.js", "ML"],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Aarogya Link",
    cat: "Healthcare Platform",
    desc: "Connecting rural patients with ASHA workers through a seamless PWA interface.",
    tech: ["React", "MongoDB", "Node.js"],
    color: "from-emerald-500 to-green-500"
  },
  {
    title: "Novus Commerce",
    cat: "E-Commerce Engine",
    desc: "A headless e-commerce solution built for extreme speed and conversion optimization.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    color: "from-purple-500 to-pink-500"
  }
];

export default function Home() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  // Adjusted to -80% to accommodate the 5th card perfectly
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  // --- CUSTOM CURSOR LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const updateMouse = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", updateMouse);
    return () => window.removeEventListener("mousemove", updateMouse);
  }, [mouseX, mouseY]);

  return (
    <div className="relative w-full bg-transparent cursor-none"> 
      <ParticlesBackground />

      {/* CUSTOM CURSOR */}
      <motion.div 
        className="fixed top-0 left-0 w-8 h-8 bg-white rounded-full pointer-events-none mix-blend-difference z-[9999]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />
      <motion.div 
        className="fixed top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] pointer-events-none z-[9998]"
        style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
      />

      {/* 1. HERO SECTION */}
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

      {/* 2. INFINITE TECH SCROLL */}
      <section className="py-12 border-y border-white/5 bg-black/30 backdrop-blur-sm overflow-hidden relative z-20">
        <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-black to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-black to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
          >
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center">
                 <TechBadge name="Next.js" icon={Globe} />
                 <TechBadge name="React" icon={Code} />
                 <TechBadge name="UI/UX" icon={Palette} />
                 <TechBadge name="SEO" icon={TrendingUp} />
                 <TechBadge name="Branding" icon={PenTool} />
                 <TechBadge name="Ads" icon={Megaphone} />
                 <TechBadge name="MongoDB" icon={Database} />
                 <TechBadge name="AWS" icon={Layers} />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 3. THE TRIAD (SERVICES) */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">Full-Stack <span className="text-gradient">Agency</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We don't just write code. We build complete digital ecosystems.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Code, title: 'Development', desc: 'High-performance websites and apps built with Next.js. Fast, secure, and scalable.' },
            { icon: Palette, title: 'Graphic Design', desc: 'Logos, Branding, and UI/UX. We craft visual identities that stick in people\'s minds.' },
            { icon: Megaphone, title: 'Digital Marketing', desc: 'SEO, Social Media, and Ads. We drive traffic that actually converts into revenue.' },
          ].map((s, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-3xl border border-white/5 hover:border-secondary/30 transition duration-500 group"
            >
              <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-black transition duration-500">
                <s.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{s.title}</h3>
              <p className="text-gray-400 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. THE VISION / GOAL (RESTORED) */}
      <section className="py-32 px-6 max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
              Our Goal is <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-secondary to-purple-500">Simple.</span>
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

      {/* 5. COMPARISON SECTION */}
      <section className="py-20 px-6 max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">The <span className="text-gradient">Difference</span></h2>
          <p className="text-gray-400">Why businesses choose Novus over freelancers.</p>
        </div>
        
        <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
          <div className="grid grid-cols-3 bg-white/5 p-6 border-b border-white/10 font-bold text-lg">
            <div className="text-gray-400">Factor</div>
            <div className="text-center text-red-400 opacity-50">Others</div>
            <div className="text-center text-secondary">Novus Tech</div>
          </div>
          {[
            { feat: "Technology", bad: "Slow WordPress", good: "Fast Next.js" },
            { feat: "Design", bad: "Generic Templates", good: "Custom Branding" },
            { feat: "Marketing", bad: "Zero Strategy", good: "Data-Driven SEO" },
            { feat: "Support", bad: "Ghosted after launch", good: "Long-term Partner" }
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 items-center hover:bg-white/5 transition">
              <div className="text-gray-300 font-medium">{row.feat}</div>
              <div className="text-center text-gray-500 flex justify-center gap-2"><X size={18} /> {row.bad}</div>
              <div className="text-center text-white font-bold flex justify-center gap-2 items-center"><Check size={18} className="text-secondary" /> {row.good}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ENGINEERING SHOWCASE */}
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

      {/* 7. WHY NOVUS (SCROLL - WITH 5TH CARD ADDED) */}
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

      {/* 8. FAQ */}
      <section className="py-32 px-6 max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-white">Frequently Asked <span className="text-gradient">Questions</span></h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* 9. CTA */}
      <section className="py-40 text-center relative overflow-hidden z-10">
         <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none" />
         <h2 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">LET'S BUILD</h2>
         <Link href="/contact" className="inline-block bg-white text-black px-16 py-6 rounded-full text-2xl font-bold hover:bg-secondary hover:scale-105 transition duration-300 shadow-[0_0_60px_rgba(255,255,255,0.3)]">
            Start Now
         </Link>
      </section>

      {/* 10. FOOTER */}
      <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl pt-20 pb-10 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-black text-white mb-6 tracking-tighter">NOVUS TECH</h3>
            <p className="text-gray-400 max-w-md mb-8">We engineer digital experiences that define the future. Mumbai based, globally connected.</p>
            <div className="flex gap-4">
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition cursor-pointer"><Github size={20}/></div>
               <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition cursor-pointer"><Mail size={20}/></div>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-secondary cursor-pointer transition">Work</li>
              <li className="hover:text-secondary cursor-pointer transition">Services</li>
              <li className="hover:text-secondary cursor-pointer transition">Pricing</li>
              <li className="hover:text-secondary cursor-pointer transition">Contact</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">System Status</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>Operational</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} className="text-secondary" />
                <span>Mumbai, India</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Clock size={16} className="text-secondary" />
                <span>IST (GMT+5:30)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 text-sm border-t border-white/5 pt-8">
          © 2024 Novus Tech. Engineered for Excellence.
        </div>
      </footer>
    </div>
  );
}

// --- SUB-COMPONENTS ---

function SplitText({ text, className }) {
  return (
    <motion.h1 
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        visible: { transition: { staggerChildren: 0.1 } }
      }}
    >
      {text.split('').map((char, i) => (
        <motion.span 
          key={i} 
          variants={{
            hidden: { y: 50, opacity: 0 },
            visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } }
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </motion.h1>
  );
}

function TechBadge({ name, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mx-6 min-w-45 justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <Icon size={20} className="text-secondary" />
      <span className="font-bold text-lg text-white">{name}</span>
    </div>
  );
}

function VisionCard({ icon: Icon, title, desc }) {
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

function FAQItem({ q, a }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-xl font-medium text-gray-200 group-hover:text-secondary transition">{q}</span>
        <ChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : 'text-gray-500'}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}