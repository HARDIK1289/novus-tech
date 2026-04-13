"use client";
import { useState, useEffect } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import Link from 'next/link';
import HeroSection from '@/components/sections/HeroSection';
import InfiniteTechScroll from '@/components/sections/InfiniteTechScroll';
import ServicesSection from '@/components/sections/ServicesSection';
import VisionSection from '@/components/sections/VisionSection';
import ComparisonSection from '@/components/sections/ComparisonSection';
import EngineeringShowcase from '@/components/sections/EngineeringShowcase';
import WhyNovusSection from '@/components/sections/WhyNovusSection';
import FAQSection from '@/components/sections/FAQSection';
import CTASection from '@/components/sections/CTASection';
import FooterSection from '@/components/sections/FooterSection';

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
      <HeroSection />

      {/* 2. INFINITE TECH SCROLL */}
      <InfiniteTechScroll />

      {/* 3. THE TRIAD (SERVICES) */}
      <ServicesSection />

      {/* 4. THE VISION / GOAL (RESTORED) */}
      <VisionSection />

      {/* 5. COMPARISON SECTION */}
      <ComparisonSection />

      {/* 6. ENGINEERING SHOWCASE */}
      {/* <EngineeringShowcase projects={projects} /> */}
      {/* 7. WHY NOVUS (SCROLL - WITH 5TH CARD ADDED) */}
      <WhyNovusSection />

      {/* 8. FAQ */}
      <FAQSection faqs={faqs} />

      {/* 9. CTA */}
      <CTASection />
    </div>
  );
}