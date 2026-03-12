'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory, payment processing, and an intuitive admin dashboard.",
    image: "https://picsum.photos/seed/ecommerce/800/600",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fintech Dashboard",
    description: "A comprehensive financial dashboard providing real-time analytics, transaction history, and predictive insights.",
    image: "https://picsum.photos/seed/fintech/800/600",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description: "An AI-powered application that generates high-quality marketing copy, blog posts, and social media content.",
    image: "https://picsum.photos/seed/ai/800/600",
    tags: ["OpenAI", "Next.js", "Prisma", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Media App",
    description: "A modern social platform featuring real-time messaging, media sharing, and algorithmic feed generation.",
    image: "https://picsum.photos/seed/social/800/600",
    tags: ["React Native", "Firebase", "Redux", "Node.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 lg:py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-emerald-500 uppercase mb-4"
          >
            Portfolio
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-zinc-100"
          >
            Selected Works
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors z-10" />
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="p-8 relative z-20 bg-zinc-900">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-2xl font-display font-bold text-zinc-100 mb-3 group-hover:text-emerald-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-zinc-400 mb-8 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex items-center gap-4">
                  <a 
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-100 hover:text-emerald-400 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-sm font-semibold text-zinc-400 hover:text-zinc-100 transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
