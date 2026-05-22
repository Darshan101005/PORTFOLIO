'use client';
import { Section } from './Section';
import { DATA } from '@/lib/data';
import { motion } from 'motion/react';

export function About() {
  return (
    <Section id="services" title="what-i-do">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto pb-4">
        <table className="w-full min-w-[800px] border-collapse bg-bg-panel/50 border border-zinc-800">
          <thead>
            <tr className="border-b border-zinc-800 bg-zinc-900/50">
              <th className="p-4 text-left font-mono text-sm text-matrix-green w-1/5">PERMISSIONS</th>
              <th className="p-4 text-left font-mono text-sm text-matrix-green w-1/5">ID</th>
              <th className="p-4 text-left font-mono text-sm text-matrix-green w-2/5">DOMAIN</th>
              <th className="p-4 text-left font-mono text-sm text-matrix-green w-1/5">SIZE</th>
            </tr>
          </thead>
          <tbody>
            {DATA.services.map((service, i) => (
              <motion.tr 
                key={service.id}
                className="border-b border-zinc-800/50 hover:bg-zinc-900/30 transition-colors group"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
              >
                <td className="p-4 font-mono text-sm text-zinc-500">drwxr-xr-x</td>
                <td className="p-4 font-mono text-sm text-matrix-light">[{service.id}]</td>
                <td className="p-4">
                  <h4 className="font-mono text-zinc-200 text-lg mb-1 group-hover:text-matrix-green transition-colors">{service.category}</h4>
                  <p className="text-zinc-400 text-sm">{service.desc}</p>
                </td>
                <td className="p-4 font-mono text-sm text-zinc-500">4096B</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {DATA.services.map((service, i) => (
          <motion.div
            key={service.id}
            className="border border-zinc-800/50 bg-bg-panel/50 p-5 font-mono group rounded-md shadow-lg"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <div className="flex items-center justify-between text-xs text-zinc-500 mb-3 border-b border-zinc-800 pb-2">
              <span>drwxr-xr-x</span>
              <span>4096B</span>
            </div>
            <div className="text-matrix-light text-sm mb-2 opacity-80">[{service.id}]</div>
            <h4 className="font-mono text-zinc-200 text-lg mb-2 group-hover:text-matrix-green transition-colors">{service.category}</h4>
            <p className="text-zinc-400 text-sm leading-relaxed">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
