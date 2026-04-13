export default function TechBox({ icon: Icon, label }) {
  return (
    <div className="bg-black/40 backdrop-blur-md p-6 rounded-xl border border-white/10 text-center w-28 hover:border-blue-400 transition">
      <Icon size={24} className="mx-auto mb-2 text-blue-400" />
      <span className="text-sm font-bold text-gray-300">{label}</span>
    </div>
  );
}
