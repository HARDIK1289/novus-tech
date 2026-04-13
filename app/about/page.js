"use client";
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import AboutHero from '@/components/sections/AboutHero';
import AboutStory from '@/components/sections/AboutStory';
import AboutFounderCard from '@/components/sections/AboutFounderCard';
import AboutFounders from '@/components/sections/AboutFounders';
import AboutCTA from '@/components/sections/AboutCTA';

export default function About() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden pb-20 cursor-default">
      <ParticlesBackground />

      <AboutHero />

      <AboutStory />

      <AboutFounderCard />

      <AboutFounders />

      <AboutCTA />
    </div>
  );
}



