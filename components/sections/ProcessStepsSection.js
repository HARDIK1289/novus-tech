import { useState } from 'react';
import { Search, Target, Wrench, Rocket } from 'lucide-react';

export default function ProcessStepsSection() {
  const [active, setActive] = useState(null);

  const steps = [
    {
      title: 'Discovery',
      detail:
        'We understand your goals, audience, and market to uncover real opportunities.',
      icon: Search,
    },
    {
      title: 'Strategy',
      detail:
        'We craft a focused, data-driven plan that ensures every move has impact.',
      icon: Target,
    },
    {
      title: 'Build',
      detail:
        'We develop scalable, high-performance solutions with precision.',
      icon: Wrench,
    },
    {
      title: 'Launch',
      detail:
        'We deploy, optimize, and scale your product for long-term growth.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-32 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-6xl font-bold mb-24 text-center text-white">
        How We <span className="text-gradient">Work</span>
      </h2>

      <div className="relative">
        {/* Line */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-[1px] bg-white/10" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 text-center">
          {steps.map((step, i) => {
            const isActive = active === i;

            return (
              <div
                key={i}
                className="relative flex flex-col items-center"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)} // mobile
              >
                {/* Tooltip ABOVE */}
                <div
                  className={`absolute bottom-full mb-2 w-64 px-4 py-3 rounded-xl bg-black/90 border border-white/10 text-sm text-gray-300 transition-all duration-300 ${
                    isActive
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-2 pointer-events-none'
                  }`}
                >
                  {step.detail}
                </div>

                {/* Circle Node */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-300 ${
                    isActive
                      ? 'bg-secondary text-black border-secondary scale-110'
                      : 'bg-black border-white/20 text-white'
                  }`}
                >
                  <step.icon size={22} />
                </div>

                {/* Label BELOW */}
                <p className="mt-4 text-sm font-medium text-gray-300">
                  {step.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}