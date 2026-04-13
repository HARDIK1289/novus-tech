export default function AddonsCategory({ icon: Icon, title, addons }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-8">
        <Icon className="text-secondary" size={28} />
        <h3 className="text-2xl font-bold">{title}</h3>
      </div>
      <div className="space-y-4">
        {addons.map((add) => (
          <div key={add.name} className="glass-card p-6 rounded-2xl border border-white/5 hover:bg-white/5 transition">
            <h4 className="font-bold text-lg mb-2">{add.name}</h4>
            <p className="text-sm text-gray-400">{add.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}