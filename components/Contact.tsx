'use client';

import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 lg:py-32 bg-zinc-900/30 border-t border-zinc-800/50 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <div className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4">
              Get In Touch
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-zinc-100">
              Let&apos;s work together.
            </h2>
            <p className="text-zinc-400 text-lg mb-12 max-w-md">
              Whether you have a project in mind, a question, or just want to say hi, 
              I&apos;ll try my best to get back to you!
            </p>
            
            <div className="space-y-8">
              <ContactInfo 
                icon={<Mail className="w-6 h-6 text-cyan-400" />}
                title="Email"
                value="hello@rajdebnathjoy.com"
                href="mailto:hello@rajdebnathjoy.com"
              />
              <ContactInfo 
                icon={<Phone className="w-6 h-6 text-violet-400" />}
                title="Phone"
                value="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              <ContactInfo 
                icon={<MapPin className="w-6 h-6 text-emerald-400" />}
                title="Location"
                value="San Francisco, CA"
                href="#"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <form className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 lg:p-12 shadow-2xl">
              <h3 className="text-2xl font-display font-bold text-zinc-100 mb-8">Send a Message</h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-zinc-400">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                
                <button 
                  type="button"
                  className="w-full group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-zinc-950 font-semibold rounded-xl overflow-hidden transition-all hover:scale-[1.02]"
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                  <span className="relative">Send Message</span>
                  <Send className="relative w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({ icon, title, value, href }: { icon: React.ReactNode; title: string; value: string; href: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h4 className="text-zinc-400 text-sm font-medium mb-1">{title}</h4>
        <a href={href} className="text-zinc-100 font-semibold hover:text-cyan-400 transition-colors">
          {value}
        </a>
      </div>
    </div>
  );
}
