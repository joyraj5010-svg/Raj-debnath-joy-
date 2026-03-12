'use client';

import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800/50 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="text-2xl font-display font-bold tracking-tighter text-zinc-100 mb-2">
              RD<span className="text-cyan-500">J</span>
            </a>
            <p className="text-zinc-500 text-sm">
              &copy; {new Date().getFullYear()} Raj Debnath Joy. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <SocialLink href="#" icon={<Github className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="#" icon={<Linkedin className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="#" icon={<Twitter className="w-5 h-5" />} label="Twitter" />
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a 
      href={href}
      aria-label={label}
      className="text-zinc-500 hover:text-cyan-400 transition-colors"
    >
      {icon}
    </a>
  );
}
