import { Github, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';

export default function FooterSection() {
  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur-xl pt-12 pb-6 relative z-10">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        
        {/* Left Section */}
        <div className="col-span-1 md:col-span-2">
          <h3 className="text-xl font-black text-white mb-4 tracking-tighter">
            NOVUS TECH
          </h3>

          <p className="text-gray-400 max-w-md mb-6 text-sm">
            We engineer digital experiences that define the future. Mumbai based, globally connected.
          </p>

          <div className="flex gap-3">
            {/* GitHub */}
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition"
            >
              <Github size={18} />
            </a>

            {/* Email */}
            <a
              href="mailto:novustech@gmail.com?subject=Project%20Inquiry&body=Hi%20Novus%20Tech,"
              aria-label="Send Email"
              className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-black transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm">
            Quick Links
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <Link href="/services" className="hover:text-secondary transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-secondary transition">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* System Status */}
        <div>
          <h4 className="font-semibold text-white mb-4 text-sm">
            System Status
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>Operational</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin size={14} className="text-secondary" />
              <span>Mumbai, India</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Clock size={14} className="text-secondary" />
              <span>IST (GMT+5:30)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="text-center text-gray-600 text-xs border-t border-white/5 pt-6">
        © 2024 Novus Tech. Engineered for Excellence.
      </div>

    </footer>
  );
}