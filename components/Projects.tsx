'use client';
import { Section } from './Section';
import { DATA } from '@/lib/data';
import { motion } from 'motion/react';
import { FolderGit2 } from 'lucide-react';

export function Projects() {
  return (
    <Section id="projects" title="ls -la ./projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {DATA.projects.map((project, index) => (
          <motion.a
            href={project.url}
            target="_blank"
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col justify-between p-6 rounded-md bg-bg-panel border border-zinc-800 hover:bg-black hover:border-matrix-green transition-all duration-300 overflow-hidden block"
          >
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity">
              <FolderGit2 className="w-24 h-24 text-matrix-green group-hover:text-matrix-light transition-colors duration-500 rotate-12" />
            </div>
            
            <div className="relative z-10 flex flex-col h-full font-mono">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-zinc-100 group-hover:text-matrix-green transition-colors mb-2 flex items-center gap-2">
                  <span className="text-matrix-green text-sm opacity-50">&gt;</span>
                  {project.title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.description}
                </p>
              </div>
              
              <div className="mt-auto pt-6 flex flex-wrap gap-2 border-t border-zinc-800/50">
                {project.tags.map(tag => (
                  <span 
                    key={tag}
                    className="text-xs font-mono text-matrix-green bg-matrix-dark/30 border border-matrix-green/30 px-2.5 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.a>
        ))}
      </div>
      
      <div className="mt-12 text-center font-mono">
        <a 
          href={DATA.contact.github} 
          target="_blank" 
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-matrix-light transition-colors"
        >
          <span className="text-matrix-green">./github</span> --show-all
        </a>
      </div>
    </Section>
  );
}
