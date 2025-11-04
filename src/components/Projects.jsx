import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'FinTrack Pro',
    description:
      'A fintech superapp with biometric auth, offline-first ledger, and real-time insights using Compose + Room.',
    tags: ['Kotlin', 'Compose', 'Room', 'Hilt', 'CI/CD'],
    link: '#',
    highlight: '1M+ downloads • 4.8★ rating',
  },
  {
    title: 'HealthCoach',
    description:
      'Wear OS companion app with BLE streaming, Health Services, and smooth animations at 60fps.',
    tags: ['Wear OS', 'BLE', 'Compose', 'Coroutines'],
    link: '#',
    highlight: 'Featured on Play • 150k MAU',
  },
  {
    title: 'ShopSwift',
    description:
      'Modularized e-commerce app with UDF, GraphQL, and image caching optimized for low-end devices.',
    tags: ['UDF', 'GraphQL', 'Coil', 'Koin'],
    link: '#',
    highlight: 'Checkout time -30%',
  },
];

function Tag({ label }) {
  return (
    <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 text-xs text-white/80">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected work</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              A few highlights from recent Android projects focusing on performance, reliability, and UX.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10 md:inline-flex"
          >
            Get in touch
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target={p.link.startsWith('http') ? '_blank' : undefined}
              rel={p.link.startsWith('http') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900 to-zinc-950 p-5 shadow-xl shadow-black/20 transition hover:border-white/20"
            >
              <div className="mb-2 text-xs text-emerald-400/90">{p.highlight}</div>
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-emerald-500/5 blur-3xl transition group-hover:bg-emerald-500/10" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
