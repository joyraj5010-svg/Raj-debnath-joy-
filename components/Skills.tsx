'use client';

import { motion } from 'motion/react';

const skills = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vue.js"] },
  { category: "Backend", items: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"] },
  { category: "Design", items: ["Figma", "Adobe XD", "UI/UX", "Wireframing", "Prototyping", "Design Systems"] },
  { category: "Tools", items: ["Git", "Docker", "AWS", "Vercel", "Firebase", "Jest"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 bg-zinc-900/30 border-y border-zinc-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest text-violet-500 uppercase mb-4"
          >
            Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-zinc-100"
          >
            Technical Arsenal
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-zinc-950 border border-zinc-800 rounded-2xl p-8 hover:border-violet-500/50 transition-colors group"
            >
              <h3 className="text-xl font-display font-bold text-zinc-100 mb-6 group-hover:text-violet-400 transition-colors">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-zinc-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-violet-500/50 group-hover:bg-violet-400 transition-colors" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
