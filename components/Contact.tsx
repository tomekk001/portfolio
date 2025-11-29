import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Simulation of a backend call (since this is a browser preview)
      // In production, this would point to your Node.js endpoint: /api/contact
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      /* 
      // Real implementation code:
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!response.ok) throw new Error('Failed');
      */

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 px-6 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-24">
        
        {/* Left Side: Info */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white">Let's work <br /> together.</h2>
          <p className="text-zinc-400 text-lg">
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and ideas.
          </p>
          
          <div className="pt-8">
            <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Email</h4>
            <a href="mailto:hello@example.com" className="text-xl text-white hover:underline decoration-zinc-700 underline-offset-4">
              tomekczyz001@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">Socials</h4>
            <div className="flex gap-4">
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-zinc-900/30 p-8 rounded-2xl border border-zinc-800">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                placeholder="Tomasz Czyż"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                placeholder="tomekczyz001@gmail.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`w-full flex items-center justify-center gap-2 py-3 rounded-lg font-semibold transition-all ${
                status === 'success' 
                  ? 'bg-green-500 text-black' 
                  : 'bg-white text-black hover:bg-zinc-200'
              } disabled:opacity-70 disabled:cursor-not-allowed`}
            >
              {status === 'loading' ? (
                <span className="w-5 h-5 border-2 border-zinc-800 border-t-transparent rounded-full animate-spin"></span>
              ) : status === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  Message Sent
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
            
            {status === 'error' && (
              <div className="flex items-center gap-2 text-red-400 text-sm mt-2">
                <AlertCircle size={16} />
                <span>Something went wrong. Please try again.</span>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;