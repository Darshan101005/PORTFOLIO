import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Certifications } from '@/components/Certifications';
import { SecurityResearch } from '@/components/SecurityResearch';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/80 bg-black/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <div className="font-mono font-bold text-lg text-zinc-100 tracking-wider">
            root@darshan<span className="text-matrix-green">:~#</span>
          </div>
          <nav className="hidden md:flex gap-4 lg:gap-6 text-xs lg:text-sm font-mono text-zinc-400 overflow-x-auto">
            <a href="#services" className="hover:text-matrix-green transition-colors">./what-i-do</a>
            <a href="#skills" className="hover:text-matrix-green transition-colors">stack.conf</a>
            <a href="#projects" className="hover:text-matrix-green transition-colors">/projects</a>
            <a href="#certs" className="hover:text-matrix-green transition-colors">/certs</a>
            <a href="#research" className="hover:text-matrix-green transition-colors">research.log</a>
            <a href="#contact" className="hover:text-matrix-green transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-16">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <SecurityResearch />
        <Contact />
      </main>

      <footer className="border-t border-zinc-900 mt-20 py-10 bg-black text-center">
        <p className="text-zinc-600 text-sm font-mono flex items-center justify-center gap-2">
          &lt;System Check: OK /&gt; 
          <span className="inline-block w-2 h-2 rounded-[1px] bg-matrix-green animate-pulse"></span>
          2026.DARSHAN_V
        </p>
      </footer>
    </div>
  );
}
