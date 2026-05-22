'use client';
import { Section } from './Section';
import { DATA } from '@/lib/data';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

export function Certifications() {
  return (
    <Section id="certs" title="ls -la ./certs">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {DATA.certifications.map((cert, i) => (
          <motion.a
            href={cert.url}
            target="_blank"
            key={cert.title}
            className="group p-5 flex items-center justify-between gap-4 rounded-md bg-bg-panel border border-zinc-800 hover:bg-black hover:border-matrix-green transition-colors font-mono"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            <div>
              <span className="text-matrix-green text-xs uppercase tracking-widest block mb-1">
                {cert.issuer}
              </span>
              <h4 className="text-zinc-200 text-sm group-hover:text-matrix-green transition-colors">
                {cert.title}
              </h4>
            </div>
            <div className="p-2 bg-black border border-zinc-800 group-hover:border-matrix-green rounded-sm transition-colors shrink-0">
              <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-matrix-light transition-colors" />
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
