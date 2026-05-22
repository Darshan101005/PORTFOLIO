'use client';
import { Section } from './Section';
import { DATA } from '@/lib/data';
import { motion } from 'motion/react';
import { ShieldAlert, CheckCircle2 } from 'lucide-react';

export function SecurityResearch() {
  return (
    <Section id="research" title="cat research.log">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Platforms */}
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-panel border border-zinc-800 rounded-md p-6 font-mono"
        >
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                <ShieldAlert className="w-5 h-5 text-matrix-green" />
                <h3 className="text-zinc-200 uppercase tracking-widest text-sm">Security Platforms</h3>
            </div>
            <ul className="space-y-4">
                {DATA.research.map((res, i) => (
                    <li key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <span className="text-zinc-300 flex items-center gap-2">
                          <span className="text-matrix-green opacity-50">&gt;</span> {res.platform}
                        </span>
                        <a href={res.url} target="_blank" className="text-matrix-green hover:text-matrix-light text-xs sm:text-sm pl-4 md:pl-0">
                            {res.url.replace('https://', '')}
                        </a>
                    </li>
                ))}
            </ul>
        </motion.div>

        {/* Disclosures & Hall of Fame */}
        <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-bg-panel border border-zinc-800 rounded-md p-6 font-mono"
        >
            <div className="flex items-center gap-2 mb-6 border-b border-zinc-800 pb-4">
                <CheckCircle2 className="w-5 h-5 text-matrix-green" />
                <h3 className="text-zinc-200 uppercase tracking-widest text-sm">Verified Disclosures</h3>
            </div>
            <ul className="space-y-4">
                {DATA.disclosures.map((company, i) => (
                    <li key={i} className="flex items-center gap-3">
                        <span className="text-matrix-green opacity-50">&gt;</span>
                        <span className="text-matrix-light font-bold">{company}</span>
                        <span className="text-xs text-zinc-500 px-2 py-0.5 border border-zinc-800 bg-black ml-auto">RESOLVED</span>
                    </li>
                ))}
            </ul>
        </motion.div>

      </div>
    </Section>
  );
}
