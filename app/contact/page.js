"use client";
import { useState } from 'react';
import { motion } from 'framer-motion'; // Added Animation
import ParticlesBackground from '@/components/ui/ParticlesBackground';
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', phone: '', message: '' });
        setErrorMessage('');
      } else {
        const errorData = await res.json().catch(() => ({ error: 'Something went wrong' }));
        setErrorMessage(errorData.error || 'Something went wrong');
        setStatus('error');
      }
    } catch (error) {
      setErrorMessage('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden pt-32 pb-20">
      <ParticlesBackground />
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT: INFO (Slide from Left) */}
        <motion.div 
           initial={{ opacity: 0, x: -50 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-black mb-8">Let's <span className="text-secondary">Talk</span></h1>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            Have a project in mind? Or just want to discuss the future of tech? 
            We are always open to new ideas and challenges.
          </p>

          <div className="space-y-8">
            <ContactItem icon={Mail} title="Email Us" value="novustech07@gmail.com" />
            <ContactItem icon={Phone} title="Call Us" value="+91 98678 16863" />
            <ContactItem icon={MapPin} title="Visit Us" value="Mumbai, India" />
          </div>
        </motion.div>

        {/* RIGHT: FORM (Slide Up + Glass Effect) */}
        <motion.div 
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8, delay: 0.2 }}
           className="glass-card p-10 rounded-3xl border border-white/10 shadow-2xl"
        >
          {status === 'success' ? (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-20"
            >
              <CheckCircle size={80} className="text-green-500 mx-auto mb-6" />
              <h3 className="text-3xl font-bold mb-2">Message Sent!</h3>
              <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              <button 
                onClick={() => setStatus('idle')}
                className="mt-8 text-secondary hover:underline"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-secondary focus:outline-none transition"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>
              
              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-secondary focus:outline-none transition"
                  placeholder="Enter your email Id"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-secondary focus:outline-none transition"
                  placeholder="+91 123 456 7890"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-400 mb-2">Message</label>
                <textarea 
                  rows="4"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-white focus:border-secondary focus:outline-none transition"
                  placeholder="Tell us about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-secondary transition flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <><Loader2 className="animate-spin" /> Sending...</>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center"
              >
                <p className="text-red-400 font-medium">{errorMessage}</p>
              </motion.div>
            )}
            </>
          )}
        </motion.div>

      </div>
    </div>
  );
}

function ContactItem({ icon: Icon, title, value }) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10 text-secondary">
        <Icon size={20} />
      </div>
      <div>
        <h4 className="font-bold text-gray-300">{title}</h4>
        <p className="text-white text-lg font-medium">{value}</p>
      </div>
    </div>
  );
}