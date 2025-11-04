import React from 'react';
import Hero from './components/Hero';
import WhyMe from './components/WhyMe';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-[Inter] text-white">
      <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#" className="text-sm font-semibold tracking-tight">
            <span className="text-emerald-400">//</span> Android Engineer
          </a>
          <nav className="hidden items-center gap-6 text-sm text-white/80 sm:flex">
            <a href="#why" className="transition hover:text-white">Why</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <WhyMe />
        <Projects />
      </main>

      <Footer />
    </div>
  );
}
