import Counter from '@/components/ui/Counter';

export default function ServiceStatsSection({ stats }) {
  return (
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
  );
}
