'use client';

import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Twitter } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900/50 border border-zinc-800 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for new opportunities
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display tracking-tight mb-6 text-balance">
              Hi, I&apos;m <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500">
                Raj Debnath Joy
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto lg:mx-0 text-balance">
              A passionate Full-Stack Developer & UI/UX Designer crafting beautiful, 
              functional, and user-centered digital experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-cyan-500 text-zinc-950 font-semibold rounded-full overflow-hidden transition-all hover:scale-105"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
                <span className="relative">Contact Me</span>
                <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-zinc-900 text-zinc-100 font-semibold rounded-full border border-zinc-800 hover:bg-zinc-800 hover:border-zinc-700 transition-all"
              >
                View Work
              </a>
            </div>

            <div className="mt-12 flex items-center justify-center lg:justify-start gap-6">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
              <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
              <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="flex-1 relative max-w-md lg:max-w-none w-full"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-zinc-800/50 bg-zinc-900/50 backdrop-blur-sm p-2">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-violet-500/10" />
              <Image 
                src="https://picsum.photos/seed/rajdebnath/800/1000" 
                alt="Raj Debnath Joy" 
                fill
                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
                priority
              />
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-violet-500/20 rounded-full blur-2xl" />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-6 lg:-right-12 bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-xl backdrop-blur-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                  <span className="font-display font-bold text-xl">5+</span>
                </div>
                <div>
                  <p className="text-sm text-zinc-400">Years of</p>
                  <p className="font-bold text-zinc-100">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      aria-label={label}
      className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all"
    >
      {icon}
    </a>
  );
}
