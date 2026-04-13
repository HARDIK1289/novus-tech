export default function PricingFAQItem({ icon: Icon, question, answer }) {
  return (
    <div className="glass-card p-8 rounded-2xl border border-white/5">
      <div className="flex items-center gap-3 mb-3 text-white">
        <Icon className="text-secondary" size={20} />
        <h3 className="font-bold text-lg">{question}</h3>
      </div>
      <p className="text-gray-400 pl-8">{answer}</p>
    </div>
  );
}