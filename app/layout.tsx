import type {Metadata} from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const space = Space_Grotesk({ subsets: ['latin'], variable: '--font-display' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  title: 'Darshan V | Portfolio',
  description: 'AI & Data Analytics Student and Full-Stack Developer',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${space.variable} ${mono.variable} font-sans antialiased text-zinc-300 bg-zinc-950 selection:bg-cyan-500/30 selection:text-cyan-100`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
