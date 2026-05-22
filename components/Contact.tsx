'use client';
import { Section } from './Section';
import { DATA } from '@/lib/data';
import { Github, Linkedin, Mail, Send } from 'lucide-react';

export function Contact() {
  return (
    <Section id="contact" title="init_contact_protocol">
      <div className="max-w-3xl mx-auto text-center space-y-8 bg-bg-panel border border-zinc-800 p-8 rounded-md shadow-2xl">
        <h2 className="text-3xl md:text-4xl font-mono font-bold text-zinc-100 tracking-tight">
          <span className="text-matrix-green">&gt; </span>
          Let's Build Something Great<span className="text-matrix-green animate-pulse">_</span>
        </h2>
        <p className="text-zinc-400 font-mono text-sm md:text-base">
          Open to Freelance Projects · Collaborations · Security Research
        </p>
        
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4 font-mono">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-sm bg-matrix-green border border-matrix-green hover:bg-matrix-dark hover:border-matrix-light text-black hover:text-matrix-light font-bold transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            MAIL_TO
          </a>
          <a
            href={DATA.contact.github}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-sm bg-black hover:bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-matrix-green transition-colors"
          >
            <Github className="w-4 h-4" />
            GITHUB
          </a>
          <a
            href={DATA.contact.telegram}
            target="_blank"
            className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 rounded-sm bg-black hover:bg-zinc-900 text-zinc-200 border border-zinc-800 hover:border-matrix-green transition-colors"
          >
            <Send className="w-4 h-4" />
            TELEGRAM
          </a>
        </div>
      </div>
    </Section>
  );
}
