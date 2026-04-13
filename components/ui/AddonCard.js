export default function AddonCard({ addon }) {
  return (
    <div className="glass-card p-6 rounded-2xl border border-white/5 flex justify-between items-center hover:bg-white/5 transition">
      <div>
        <h4 className="font-bold text-lg">{addon.name}</h4>
        <p className="text-sm text-gray-400">{addon.desc}</p>
      </div>
      <div className="font-bold text-lg text-secondary">{addon.price}</div>
    </div>
  );
}
