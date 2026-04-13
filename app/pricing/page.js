"use client";
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { Zap, Shield, Crown, Brain } from 'lucide-react';
import PricingHeader from '@/components/sections/PricingHeader';
import PricingPlans from '@/components/sections/PricingPlans';
import AddonsSection from '@/components/sections/AddonsSection';
import PricingFAQSection from '@/components/sections/PricingFAQSection';


export default function Pricing() {
  const plans = [
    {
      name: "MVP Launch",
      price: "Custom Quote",
      desc: "Perfect for validating ideas quickly. Get your startup off the ground.",
      icon: Zap,
      features: [
        "Next.js 15 Website",
        "Mobile Responsive",
        "Contact Form Integration",
        "Basic SEO Setup",
        "AI-Enhanced Conversion Guidance",
        "Google Analytics"
      ],
      missing: ["Database Integration", "User Authentication", "CMS Panel"],
      color: "border-white/10",
      btn: "bg-white/10 text-white hover:bg-white/20"
    },
    {
      name: "Growth Scale",
      price: "Custom Quote",
      desc: "For businesses ready to dominate. Full-stack power with animations.",
      icon: Crown,
      popular: true,
      features: [
        "Everything in MVP",
        "MongoDB Database",
        "User Authentication",
        "Admin Dashboard",
        "Advanced Animations (Framer)",
        "Predictive Agentic AI Workflows",
        "CMS Integration"
      ],
      missing: [],
      color: "border-secondary shadow-[0_0_40px_rgba(6,182,212,0.15)]",
      btn: "bg-secondary text-black hover:bg-secondary/90"
    },
    {
      name: "Enterprise",
      price: "Tailored Engagement",
      desc: "Complex architectures for high-traffic platforms.",
      icon: Shield,
      features: [
        "Microservices Architecture",
        "Custom Agentic AI Systems",
        "Payment Gateway (Razorpay/Stripe)",
        "Priority 24/7 Support",
        "Load Balancing",
        "Security Audits"
      ],
      missing: [],
      color: "border-white/10",
      btn: "bg-white text-black hover:bg-gray-200"
    }
  ];

  const designAddons = [
    { name: "Brand Identity", desc: "Logo, color palette, typography and identity guidelines." },
    { name: "Social Media Kit", desc: "Templates for Instagram, LinkedIn and Twitter that keep your brand consistent." },
    { name: "UI/UX Prototyping", desc: "Figma wireframes and high-fidelity UX flows." },
  ];

  const marketingAddons = [
    { name: "SEO Power Pack", desc: "Keyword research, meta tags, and content strategy aligned to your goals." },
    { name: "Ads Growth Setup", desc: "Campaign creation, targeting and analytics for high-conversion traffic." },
    { name: "Content Strategy", desc: "Professional copy and messaging for your website and funnels." },
  ];

  const aiAddons = [
    { name: "Agentic AI Systems", desc: "Autonomous AI workflows that automate tasks, personalize experiences and optimize growth." },
    { name: "AI Assistant Integration", desc: "Smart agents for customer support, lead qualification and scheduling." },
    { name: "Predictive Intelligence", desc: "Data-driven insights and automation that help your business move faster." },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden pb-20">
      <ParticlesBackground />
      <PricingHeader />
      <PricingPlans plans={plans} />
      <AddonsSection designAddons={designAddons} marketingAddons={marketingAddons} aiAddons={aiAddons} />
      <PricingFAQSection />
    </div>
  );
}