'use client';
import { motion } from 'motion/react';
import { DATA } from '@/lib/data';
import { Github, Linkedin, Mail, MapPin, Terminal, Phone, ChevronDown, Lock, Check } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export function Hero() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(DATA.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 pb-12">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-matrix-dark/20 via-bg-base to-transparent"></div>
      
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <motion.div 
          className="flex-1 space-y-6 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="hidden md:inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-matrix-dark/30 border border-matrix-green/30 text-sm font-mono text-matrix-light">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-sm bg-matrix-light opacity-75"></span>
              <span className="relative inline-flex rounded-sm h-2 w-2 bg-matrix-green"></span>
            </span>
            SYSTEM BOOT: Initializing profile...
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-mono font-bold tracking-tight text-white leading-[1.1] flex flex-wrap items-center">
            <span className="text-matrix-green mr-2 md:mr-6">&gt;_</span>
            {DATA.name.split(' ').map((word, i) => (
              <span key={i} className={word === 'V' ? 'text-matrix-light ml-4 md:ml-6' : ''}>
                {word}{' '}
              </span>
            ))}
          </h1>
          
          <div className="text-xl md:text-2xl text-zinc-400 font-mono space-y-2">
            <p><span className="text-matrix-green">&gt;</span> Developer | Security Researcher | AI Engineer</p>
            <p><span className="text-matrix-green">&gt;</span> Shipping Web & Mobile Applications</p>
            <p><span className="text-matrix-green">&gt;</span> Building secure, data-driven systems</p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 font-mono">
            <Link href="#contact" className="px-6 py-3 rounded-sm bg-matrix-green hover:bg-matrix-light text-black font-bold transition-colors flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Initialize Contact
            </Link>
            <Link href="#projects" className="px-6 py-3 rounded-sm bg-bg-panel border border-matrix-green/50 hover:border-matrix-green text-matrix-light font-medium transition-colors flex items-center gap-2">
              <Lock className="w-4 h-4" />
              cat projects.log
            </Link>
          </div>

          <div className="flex items-center gap-6 pt-6 text-zinc-500">
            <Link href={DATA.contact.github} target="_blank" className="hover:text-matrix-light transition-colors">
              <span className="sr-only">GitHub</span>
              <Github className="w-6 h-6" />
            </Link>
            <Link href={DATA.contact.linkedin} target="_blank" className="hover:text-matrix-light transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-6 h-6" />
            </Link>
            <a href={`mailto:${DATA.contact.email}`} className="hover:text-matrix-light transition-colors">
              <span className="sr-only">Email</span>
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 w-full max-w-md lg:ml-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className="rounded-md overflow-hidden bg-bg-panel border border-zinc-800 shadow-2xl flex flex-col">
            <div className="bg-black px-4 py-2 flex items-center gap-2 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              <span className="ml-2 font-mono text-xs text-zinc-500">root@darshan:~</span>
            </div>
            
            <div className="p-4 md:p-6 font-mono text-sm space-y-6">
              <div>
                <span className="text-matrix-green">darshan@root</span><span className="text-zinc-500">:~#</span> <span className="text-matrix-light">cat profile.txt</span>
              </div>
              
              <div className="text-zinc-300 space-y-3">
                <div className="flex gap-3 md:gap-4">
                  <span className="text-matrix-green shrink-0 w-16">NAME</span>
                  <span className="text-zinc-500 shrink-0">::</span>
                  <span>{DATA.name}</span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <span className="text-matrix-green shrink-0 w-16">ROLE</span>
                  <span className="text-zinc-500 shrink-0">::</span>
                  <span>{DATA.role}</span>
                </div>
                <div className="flex gap-3 md:gap-4">
                  <span className="text-matrix-green shrink-0 w-16">STATUS</span>
                  <span className="text-zinc-500 shrink-0">::</span>
                  <span>{DATA.contact.status}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-800/50 space-y-3">
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="w-4 h-4 text-matrix-green flex-shrink-0" />
                  <span className="break-words">{DATA.contact.location}</span>
                </div>
                <div className="flex items-center gap-3 text-zinc-400">
                  <Phone className="w-4 h-4 text-matrix-green flex-shrink-0" />
                  <span className="break-words">{DATA.contact.phone}</span>
                </div>
                <div 
                  onClick={handleCopy}
                  className="flex items-center gap-3 text-zinc-400 cursor-pointer hover:text-matrix-light transition-colors group"
                  title="Click to copy"
                >
                  {copied ? <Check className="w-4 h-4 text-matrix-green flex-shrink-0" /> : <Mail className="w-4 h-4 text-matrix-green flex-shrink-0" />}
                  <span className="truncate">{copied ? "COPIED TO CLIPBOARD" : DATA.contact.email}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-zinc-500 hidden md:block"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <Link href="#services">
          <ChevronDown className="w-6 h-6 hover:text-matrix-light transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
