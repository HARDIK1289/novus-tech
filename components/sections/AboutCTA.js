import Link from 'next/link';

export default function AboutCTA() {
  return (
    <section className='py-20 text-center relative z-10'>
      <h2 className='text-4xl font-bold mb-8'>Ready to work with real engineers?</h2>
      <Link href='/contact' className='inline-block bg-white text-black px-12 py-5 rounded-full text-xl font-bold hover:bg-secondary hover:scale-105 transition shadow-[0_0_40px_rgba(255,255,255,0.3)]'>
        Let's Talk Code
      </Link>
    </section>
  );
}
