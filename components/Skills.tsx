'use client';
import { Section } from './Section';
import { DATA } from '@/lib/data';
import { motion } from 'motion/react';

export function Skills() {
  return (
    <Section id="skills" title="cat stack.conf">
      <div className="bg-bg-panel border border-zinc-800 rounded-md overflow-hidden font-mono shadow-xl relative">
        <div className="bg-black/50 px-4 py-2 border-b border-zinc-800 flex items-center justify-between">
            <span className="text-zinc-500 text-sm">stack.conf</span>
            <span className="text-matrix-green text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-matrix-green animate-pulse"></span>
                ACTIVE
            </span>
        </div>
        <div className="p-6 md:p-8 space-y-10 relative">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-9xl font-bold select-none pointer-events-none text-white">CONF</div>
          {Object.entries(DATA.stack).map(([key, items], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="h-px bg-zinc-800 flex-1"></div>
                <h3 className="text-matrix-green text-sm uppercase tracking-widest bg-black px-4 py-1 border border-zinc-800">
                  {key.replace('_', ' & ')}
                </h3>
                <div className="h-px bg-zinc-800 flex-1"></div>
              </div>
              <div className="flex justify-center flex-wrap gap-3">
                {items.map(item => (
                  <span 
                    key={item} 
                    className="px-4 py-2 bg-black border border-zinc-800 hover:border-matrix-green text-zinc-300 hover:text-matrix-light text-sm transition-colors cursor-default select-none"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
