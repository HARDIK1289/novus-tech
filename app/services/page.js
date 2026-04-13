"use client";
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import ServicesHero from '@/components/sections/ServicesHero';
import ServiceStatsSection from '@/components/sections/ServiceStatsSection';
import ServicesDetailSection from '@/components/sections/ServicesDetailSection';
import ProcessStepsSection from '@/components/sections/ProcessStepsSection';
import CTASection from '@/components/sections/CTASection';
import { Code, Palette, Megaphone, Cpu, Globe, Layout, PenTool, BarChart, Brain, Zap } from 'lucide-react';

const services = [
  {
    id: "dev",
    title: "Development",
    icon: Code,
    desc: "We don't just write code; we engineer systems. From simple landing pages to complex SaaS platforms, our stack is bulletproof.",
    color: "text-blue-400",
    features: ["Next.js & React Web Apps", "E-Commerce (Shopify/Stripe)", "Custom APIs & Databases", "Mobile Apps (PWA)"],
    techIcons: [Globe, Cpu, Layout, Code]
  },
  {
    id: "design",
    title: "Brand & Design",
    icon: Palette,
    desc: "Design is not just how it looks; it's how it works. We create visual identities that command authority and trust.",
    color: "text-purple-400",
    features: ["Logo & Brand Identity", "UI/UX Prototyping", "Social Media Kits", "3D Visuals & Motion"],
    featuredIcon: PenTool
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    icon: Megaphone,
    desc: "A beautiful website is useless if no one sees it. We drive targeted traffic that converts into actual paying clients.",
    color: "text-secondary",
    features: ["SEO (Rank #1 on Google)", "PPC Ads (Google/Meta)", "Content Strategy", "Email Marketing Funnels"],
    featuredIcon: BarChart
  },
  {
    id: "ai",
    title: "Agentic AI",
    icon: Brain,
    desc: "We harness the power of agentic AI to create intelligent systems that learn, adapt, and optimize your business processes.",
    color: "text-green-400",
    features: ["AI Agent Development", "Autonomous Systems", "Machine Learning Integration", "Predictive Analytics"],
    featuredIcon: Zap
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
      <ServicesHero />
      <ServiceStatsSection stats={stats} />
      <ServicesDetailSection services={services} />
      <ProcessStepsSection />
      <CTASection />
    </div>
  );
}

