export default function TechBadge({ name, icon: Icon }) {
  return (
    <div className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 bg-black/40 backdrop-blur-md mx-6 min-w-[12rem] flex-shrink-0 justify-center shadow-[0_0_15px_rgba(0,0,0,0.5)]">
      <Icon size={20} className="text-secondary" />
      <span className="font-bold text-lg text-white whitespace-nowrap">{name}</span>
    </div>
  );
}