import { Linkedin, Instagram, Mail, Code } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/50 py-12 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">NOVUS<span className="text-secondary">TECH</span></h2>
          <p className="text-gray-400 text-sm">Forging the future of digital experiences with code, creativity, and strategy.</p>
        </div>
        
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Brand Strategy</li>
            <li>UI/UX Design</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Connect</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-2 glass-card rounded-full hover:bg-secondary/20 transition"><Linkedin size={18} /></a>
            <a href="#" className="p-2 glass-card rounded-full hover:bg-secondary/20 transition"><Instagram size={18} /></a>
            <a href="mailto:hello@novustech.com" className="p-2 glass-card rounded-full hover:bg-secondary/20 transition"><Mail size={18} /></a>
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-xs mt-12">
        © {new Date().getFullYear()} Novus Tech. All rights reserved.
      </div>
    </footer>
  );
}