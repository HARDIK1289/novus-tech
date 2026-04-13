import { Check, X } from 'lucide-react';

export default function ComparisonSection() {
  return (
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
  );
}