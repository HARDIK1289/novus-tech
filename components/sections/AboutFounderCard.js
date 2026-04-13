import TiltCard from '@/components/ui/TiltCard';
import { Coffee } from 'lucide-react';

export default function AboutFounderCard() {
  return (
    <section className="px-6 max-w-2xl mx-auto relative z-10 mb-32 perspective-1000">
      <TiltCard>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-purple-500 to-secondary z-20" />
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-secondary/20 blur-[100px] z-0 pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 blur-[100px] z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center text-center pt-8">
          <Coffee size={56} className="mb-8 text-secondary drop-shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
          <h3 className="text-4xl font-black mb-6 tracking-tight">"Code is Poetry."</h3>
          <p className="text-xl text-gray-200 italic mb-10 leading-relaxed font-light">
            "We believe that a website is the digital face of your legacy. It shouldn't be generic. It should be unique, powerful, and built to last."
          </p>
        </div>
      </TiltCard>
    </section>
  );
}
