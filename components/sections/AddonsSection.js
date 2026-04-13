import { PenTool, Megaphone, Brain } from 'lucide-react';
import AddonsCategory from '@/components/ui/AddonsCategory';

export default function AddonsSection({ designAddons, marketingAddons, aiAddons }) {
  return (
    <section className="px-6 max-w-6xl mx-auto mb-32 relative z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white mb-4">Complete Your <span className="text-secondary">Ecosystem</span></h2>
        <p className="text-gray-400">Add Design, Marketing, or Agentic AI services to any engagement.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-12">
        <AddonsCategory icon={PenTool} title="Creative Essentials" addons={designAddons} />
        <AddonsCategory icon={Megaphone} title="Growth Boosters" addons={marketingAddons} />
        <AddonsCategory icon={Brain} title="Agentic AI" addons={aiAddons} />
      </div>
    </section>
  );
}
