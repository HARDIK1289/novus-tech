"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';


const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    // Scroll Detection Logic
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-[#030305]/90 backdrop-blur-xl border-b border-white/10 py-4 shadow-lg' // Scrolled State
                : 'bg-transparent py-6' // Top State
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold tracking-tighter z-50 font-space">
   NOVUS<span className="text-secondary">TECH</span>
</Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            className={`text-sm font-medium transition-colors hover:text-white ${pathname === link.path ? 'text-secondary' : 'text-gray-300'
                                } ${link.name === 'Contact' ? 'hidden' : ''}`} // Hide "Contact" text link because we have the button
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Special "Start Project" Button for Desktop */}
                    <Link
                        href="/contact"
                        className={`px-6 py-2 rounded-full font-bold text-sm transition ${scrolled
                            ? 'bg-white text-black hover:bg-secondary'
                            : 'border border-white/20 text-white hover:bg-white/10'
                            }`}
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Toggle Button */}
                <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-[#030305]/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            onClick={() => setIsOpen(false)}
                            className="text-lg text-gray-300 hover:text-secondary font-medium"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
            )}
        </nav>
    );
}