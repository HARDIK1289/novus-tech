import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-40 text-center relative overflow-hidden z-10">
       <div className="absolute inset-0 bg-linear-to-t from-primary/20 to-transparent pointer-events-none" />
       <h2 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter">LET'S BUILD</h2>
       <Link href="/contact" className="inline-block bg-white text-black px-16 py-6 rounded-full text-2xl font-bold hover:bg-secondary hover:scale-105 transition duration-300 shadow-[0_0_60px_rgba(255,255,255,0.3)]">
        Start Now
       </Link>
    </section>
  );
}