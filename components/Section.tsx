'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export function Section({ children, className, id, title }: { children: ReactNode, className?: string, id?: string, title?: string }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("py-16 md:py-24 scroll-m-12 relative", className)}
    >
      {title && (
        <motion.div 
          className="mb-10 md:mb-14 font-mono font-bold text-2xl md:text-3xl text-zinc-200 uppercase tracking-tight flex items-center gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <span className="text-matrix-green">~/</span> {title}
          <div className="flex-1 h-px bg-zinc-800 max-w-xs ml-4" />
        </motion.div>
      )}
      {children}
    </motion.section>
  );
}
