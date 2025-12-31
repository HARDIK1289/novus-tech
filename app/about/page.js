"use client";
import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { Terminal, Cpu, Zap, Globe, Heart, Coffee, Award } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden pb-20 cursor-default">
      <ParticlesBackground />
      
      {/* 1. HERO SECTION - ANIMATED TITLE */}
      <section className="pt-40 pb-20 px-6 text-center relative z-10">
        <motion.div
           initial={{ scale: 0, rotate: -180 }}
           animate={{ scale: 1, rotate: 0 }}
           transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.2 }}
           className="w-24 h-24 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.2)]"
        >
            <Terminal size={48} className="text-secondary" />
        </motion.div>

        <AnimatedTitle text="Engineers at Heart." className="text-5xl md:text-7xl font-black mb-6" />

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
        >
          Novus Tech wasn't started by salesmen. It was started by developers who were tired of seeing slow, ugly, and expensive websites cluttering the internet.
        </motion.p>
      </section>

      {/* 2. THE STORY & VALUES - STAGGERED ENTRANCE */}
      <section className="px-6 max-w-7xl mx-auto mb-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, margin: "-100px" }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="space-y-8 relative"
            >
               {/* Decorative line */}
               <div className="absolute -left-8 top-0 h-full w-1 bg-gradient-to-b from-secondary to-transparent opacity-30 hidden md:block" />
               
               <h2 className="text-4xl md:text-5xl font-bold leading-tight">The <span className="text-gradient">Mission</span> to Upgrade the Web.</h2>
               <p className="text-gray-300 text-lg leading-relaxed">
                  The web has changed. It used to be about static documents. Now, it's about **dynamic, app-like experiences**. 
               </p>
               <p className="text-gray-400 leading-relaxed text-lg">
                  Most agencies are stuck in the past, using outdated drag-and-drop tools that slow down your business. We take a different approach. We hand-code our solutions using the same technology (Next.js) used by Netflix, TikTok, and Twitch.
               </p>
               <div className="flex items-center gap-3 font-bold text-white pt-4">
                  <Award className="text-secondary" /> Silicon Valley Grade Engineering.
               </div>
            </motion.div>

            {/* Right: Animated Grid */}
            <motion.div 
               variants={containerVariants}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, margin: "-100px" }}
               className="grid grid-cols-2 gap-4"
            >
               <ValueCard icon={Zap} title="Extreme Speed" desc="We count milliseconds. Speed is our religion." delay={0} />
               <ValueCard icon={Cpu} title="Modern Stack" desc="Next.js 15, React, and Edge Computing." delay={0.1} />
               <ValueCard icon={Heart} title="Obsession" desc="We code because we love it, not just for profit." delay={0.2} />
               <ValueCard icon={Globe} title="Global Scale" desc="Ready for 1 user or 1 million users." delay={0.3} />
            </motion.div>

        </div>
      </section>

      {/* 3. THE FOUNDER CARD (3D TILT INTERACTION) */}
      <section className="px-6 max-w-3xl mx-auto relative z-10 mb-32 perspective-1000">
        <TiltCard>
           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-purple-500 to-secondary z-20" />
           <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/20 blur-[100px] z-0 pointer-events-none" />
           <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 blur-[100px] z-0 pointer-events-none" />
           
           <div className="relative z-10 flex flex-col items-center text-center">
              <Coffee size={56} className="mb-8 text-secondary drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
              
              <h3 className="text-4xl font-black mb-6 tracking-tight">"Code is Poetry."</h3>
              <p className="text-xl text-gray-200 italic mb-10 leading-relaxed font-light">
                 "We believe that a website is the digital face of your legacy. It shouldn't be generic. It should be unique, powerful, and built to last."
              </p>
              
              <div className="flex items-center justify-center gap-5 border-t border-white/10 pt-8 w-full">
                 <div className="w-14 h-14 bg-gray-700 rounded-full overflow-hidden ring-2 ring-secondary/50">
                    {/* Placeholder for your avatar */}
                    <div className="w-full h-full bg-linear-to-br from-secondary to-purple-600 animate-pulse" />
                 </div>
                 <div className="text-left">
                    <div className="font-bold text-white text-lg">The Founder</div>
                    <div className="text-sm text-secondary font-mono">Novus Tech Lead Engineer</div>
                 </div>
              </div>
           </div>
        </TiltCard>
      </section>

      {/* 4. CTA */}
      <section className="py-20 text-center relative z-10">
         <h2 className="text-4xl font-bold mb-8">Ready to work with real engineers?</h2>
         <Link href="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-secondary hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            Let's Talk Code
         </Link>
      </section>
    </div>
  );
}

// --- ANIMATION VARIANTS ---
const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: {
       staggerChildren: 0.15, // Stagger the cards
     },
   },
 };
 
 const cardVariants = {
   hidden: { y: 50, opacity: 0, scale: 0.9, rotateX: -15 },
   visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      rotateX: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
   },
 };

// --- SUB-COMPONENTS ---

// 1. Animated Title (Character by Character)
function AnimatedTitle({ text, className }) {
   const letters = Array.from(text);
   const container = {
     hidden: { opacity: 0 },
     visible: (i = 1) => ({
       opacity: 1,
       transition: { staggerChildren: 0.05, delayChildren: 0.3 * i },
     }),
   };
   const child = {
     visible: {
       opacity: 1,
       y: 0,
       transition: { type: "spring", damping: 12, stiffness: 100 },
     },
     hidden: { opacity: 0, y: 20 },
   };
 
   return (
     <motion.h1
       className={className}
       variants={container}
       initial="hidden"
       animate="visible"
     >
       {letters.map((letter, index) => (
         <motion.span key={index} variants={child} className="inline-block">
           {letter === " " ? "\u00A0" : letter}
         </motion.span>
       ))}
     </motion.h1>
   );
 }

// 2. Springy Value Card
function ValueCard({ icon: Icon, title, desc }) {
    return (
        <motion.div 
           variants={cardVariants}
           className="glass-card p-6 rounded-2xl border border-white/10 hover:border-secondary/50 transition duration-300 group"
        >
            <Icon size={30} className="text-gray-400 group-hover:text-secondary transition duration-300 mb-4" />
            <h3 className="font-bold text-lg mb-2 text-white group-hover:text-secondary transition">{title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed">{desc}</p>
        </motion.div>
    )
}

// 3. The 3D Tilt Card Component (The star of the show)
function TiltCard({ children }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
  
    // Smooth springs for fluid movement
    const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });
  
    // Map mouse movement to rotation degrees
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect(); // Use currentTarget to be safe
      const width = rect.width;
      const height = rect.height;
      
      // Calculate mouse position relative to the card center
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    };
  
    const handleMouseLeave = () => {
      // Snap back to center when mouse leaves
      x.set(0);
      y.set(0);
    };
  
    return (
      // FIX: Added this outer div with "perspective" style
      <div style={{ perspective: "1000px" }} className="w-full"> 
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateY,
            rotateX,
            transformStyle: "preserve-3d",
          }}
          className="relative glass-card p-10 md:p-16 rounded-[40px] border border-white/20 shadow-2xl shadow-black/50"
        >
          <div
            style={{
              transform: "translateZ(50px)", // Pushes text forward
              transformStyle: "preserve-3d",
            }}
          >
            {children}
          </div>
        </motion.div>
      </div>
    );
  }