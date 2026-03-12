'use client';

import { motion } from 'motion/react';
import { Code2, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative"
          >
            <div className="text-sm font-bold tracking-widest text-cyan-500 uppercase mb-4">
              About Me
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-zinc-100">
              Crafting digital experiences with purpose.
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                I&apos;m Raj Debnath Joy, a multidisciplinary developer and designer based in the digital realm. 
                With a strong foundation in both engineering and aesthetics, I bridge the gap between 
                complex functionality and intuitive design.
              </p>
              <p>
                My journey started with a fascination for how things work on the web. Today, I build 
                scalable applications, design seamless user interfaces, and help brands establish their 
                digital presence with cutting-edge technologies.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Feature 
                icon={<Code2 className="w-6 h-6 text-cyan-400" />}
                title="Clean Code"
                description="Writing maintainable, scalable, and efficient code."
              />
              <Feature 
                icon={<Palette className="w-6 h-6 text-violet-400" />}
                title="Modern Design"
                description="Creating visually stunning and user-centric interfaces."
              />
              <Feature 
                icon={<Zap className="w-6 h-6 text-emerald-400" />}
                title="Fast Performance"
                description="Optimizing applications for speed and reliability."
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
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 rounded-3xl transform rotate-6" />
              <div className="absolute inset-0 bg-zinc-900 border border-zinc-800 rounded-3xl transform -rotate-3 overflow-hidden">
                <div className="p-8 h-full flex flex-col justify-center">
                  <div className="space-y-8">
                    <Stat number="50+" label="Projects Completed" />
                    <div className="h-px bg-zinc-800 w-full" />
                    <Stat number="30+" label="Happy Clients" />
                    <div className="h-px bg-zinc-800 w-full" />
                    <Stat number="5+" label="Years Experience" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Feature({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-zinc-100 font-semibold mb-1">{title}</h3>
        <p className="text-sm text-zinc-500">{description}</p>
      </div>
    </div>
  );
}

function Stat({ number, label }: { number: string; label: string }) {
  return (
    <div>
      <div className="text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-500 mb-2">
        {number}
      </div>
      <div className="text-zinc-400 font-medium tracking-wide uppercase text-sm">
        {label}
      </div>
    </div>
  );
}
