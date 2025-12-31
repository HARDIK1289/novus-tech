"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { Check, X, ArrowRight, Zap, Shield, Crown, Plus, HelpCircle, Clock, PenTool, Megaphone } from 'lucide-react';
import Link from 'next/link';

export default function Pricing() {
  const plans = [
    {
      name: "MVP Launch",
      price: "₹25,000",
      desc: "Perfect for validating ideas quickly. Get your startup off the ground.",
      icon: Zap,
      features: [
        "Next.js 15 Website",
        "Mobile Responsive",
        "Contact Form Integration",
        "Basic SEO Setup",
        "1 Month Support",
        "Google Analytics"
      ],
      missing: ["Database Integration", "User Authentication", "CMS Panel"],
      color: "border-white/10",
      btn: "bg-white/10 text-white hover:bg-white/20"
    },
    {
      name: "Growth Scale",
      price: "₹60,000",
      desc: "For businesses ready to dominate. Full-stack power with animations.",
      icon: Crown,
      popular: true,
      features: [
        "Everything in MVP",
        "MongoDB Database",
        "User Authentication",
        "Admin Dashboard",
        "Advanced Animations (Framer)",
        "CMS Integration",
        "3 Months Support"
      ],
      missing: [],
      color: "border-secondary shadow-[0_0_40px_rgba(6,182,212,0.15)]",
      btn: "bg-secondary text-black hover:bg-secondary/90"
    },
    {
      name: "Enterprise",
      price: "Custom",
      desc: "Complex architectures for high-traffic platforms.",
      icon: Shield,
      features: [
        "Microservices Architecture",
        "AI / ML Integration",
        "Payment Gateway (Razorpay/Stripe)",
        "Priority 24/7 Support",
        "Load Balancing",
        "Custom Security Audits"
      ],
      missing: [],
      color: "border-white/10",
      btn: "bg-white text-black hover:bg-gray-200"
    }
  ];

  const designAddons = [
    { name: "Brand Identity", price: "₹15,000", desc: "Logo, Color Palette, Typography & Guidelines." },
    { name: "Social Media Kit", price: "₹8,000", desc: "Templates for Instagram, LinkedIn & Twitter." },
    { name: "UI/UX Prototyping", price: "₹10,000", desc: "Figma wireframes and high-fidelity mockups." },
  ];

  const marketingAddons = [
    { name: "SEO Power Pack", price: "₹12,000", desc: "Keyword research, meta tags, and content strategy." },
    { name: "Google Ads Setup", price: "₹8,000", desc: "Campaign creation, audience targeting & analytics." },
    { name: "Content Writing", price: "₹5,000", desc: "Professional copy for up to 5 web pages." },
  ];

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden pb-20">
      <ParticlesBackground />
      
      {/* 1. HEADER */}
      <section className="pt-40 pb-20 px-6 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-7xl font-black mb-6"
        >
          Transparent <span className="text-secondary">Pricing.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-400 max-w-2xl mx-auto"
        >
          Web, Design, and Marketing packages tailored to your needs.
        </motion.p>
      </section>

      {/* 2. MAIN WEB PLANS */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 mb-32">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-8 rounded-3xl border flex flex-col relative ${plan.color}`}
          >
            {plan.popular && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary text-black font-bold px-4 py-1 rounded-full text-sm shadow-lg">
                Most Popular
              </div>
            )}
            
            <div className="flex justify-between items-start mb-6">
              <div className="p-3 bg-white/5 rounded-xl text-secondary">
                <plan.icon size={24} />
              </div>
              {plan.name === "Enterprise" ? (
                 <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-300">CORPORATE</span>
              ) : (
                 <span className="text-xs font-mono bg-white/10 px-2 py-1 rounded text-gray-300">STARTUP</span>
              )}
            </div>

            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-sm mb-6 h-10">{plan.desc}</p>
            <div className="text-4xl font-black mb-8">{plan.price}</div>

            <div className="space-y-4 mb-8 flex-grow">
              {plan.features.map((feat, j) => (
                <div key={j} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check size={16} className="text-secondary mt-1 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <Link href="/contact" className={`w-full py-4 rounded-xl font-bold text-center transition flex items-center justify-center gap-2 ${plan.btn}`}>
              Choose Plan <ArrowRight size={18} />
            </Link>
          </motion.div>
        ))}
      </section>

      {/* 3. A LA CARTE: DESIGN & MARKETING (NEW) */}
      <section className="px-6 max-w-6xl mx-auto mb-32 relative z-10">
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-white mb-4">Complete Your <span className="text-secondary">Ecosystem</span></h2>
           <p className="text-gray-400">Add Design or Marketing services to any plan.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Design Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <PenTool className="text-secondary" size={28} />
              <h3 className="text-2xl font-bold">Creative Essentials</h3>
            </div>
            <div className="space-y-4">
              {designAddons.map((add, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex justify-between items-center hover:bg-white/5 transition">
                  <div>
                    <h4 className="font-bold text-lg">{add.name}</h4>
                    <p className="text-sm text-gray-400">{add.desc}</p>
                  </div>
                  <div className="font-bold text-lg text-secondary">{add.price}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Marketing Column */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Megaphone className="text-secondary" size={28} />
              <h3 className="text-2xl font-bold">Growth Boosters</h3>
            </div>
            <div className="space-y-4">
              {marketingAddons.map((add, i) => (
                <div key={i} className="glass-card p-6 rounded-2xl border border-white/5 flex justify-between items-center hover:bg-white/5 transition">
                  <div>
                    <h4 className="font-bold text-lg">{add.name}</h4>
                    <p className="text-sm text-gray-400">{add.desc}</p>
                  </div>
                  <div className="font-bold text-lg text-secondary">{add.price}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. FAQ SECTION */}
      <section className="py-20 px-6 max-w-4xl mx-auto relative z-10 border-t border-white/10">
        <h2 className="text-3xl font-bold mb-12 text-center">Common Questions</h2>
        <div className="grid gap-6">
           <div className="glass-card p-8 rounded-2xl border border-white/5">
             <div className="flex items-center gap-3 mb-3 text-white">
                <HelpCircle className="text-secondary" size={20}/>
                <h3 className="font-bold text-lg">Can I just buy a Logo?</h3>
             </div>
             <p className="text-gray-400 pl-8">Yes! You don't need to buy a website to use our design or marketing services. We are happy to work on standalone creative projects.</p>
           </div>
           
           <div className="glass-card p-8 rounded-2xl border border-white/5">
             <div className="flex items-center gap-3 mb-3 text-white">
                <Clock className="text-secondary" size={20}/>
                <h3 className="font-bold text-lg">Do you run the ads for us?</h3>
             </div>
             <p className="text-gray-400 pl-8">We handle the *setup* and *strategy* in our packages. If you need ongoing ad management (monthly optimization), we can create a custom retainer plan for you.</p>
           </div>

           <div className="glass-card p-8 rounded-2xl border border-white/5">
             <div className="flex items-center gap-3 mb-3 text-white">
                <Zap className="text-secondary" size={20}/>
                <h3 className="font-bold text-lg">Do I own the designs?</h3>
             </div>
             <p className="text-gray-400 pl-8">100%. Once payment is complete, you own all rights to your logo, brand assets, and website code.</p>
           </div>
        </div>
      </section>
    </div>
  );
}