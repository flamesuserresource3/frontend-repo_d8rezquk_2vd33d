import React from 'react';
import { Rocket, Star, Smartphone, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';

const reasons = [
  {
    icon: <Smartphone className="h-5 w-5 text-emerald-400" />,
    title: 'Android Native Expert',
    desc: '10+ years building Kotlin-first apps with Compose, Coroutines, and modern Jetpack.',
  },
  {
    icon: <Code2 className="h-5 w-5 text-emerald-400" />,
    title: 'Clean Architecture',
    desc: 'MVVM + UDF, modularization, DI (Hilt/Koin), and rock-solid unit/UI testing.',
  },
  {
    icon: <Rocket className="h-5 w-5 text-emerald-400" />,
    title: 'Performance & Scale',
    desc: 'Optimize cold starts, memory, and rendering; deliver smooth 60fps experiences.',
  },
  {
    icon: <Star className="h-5 w-5 text-emerald-400" />,
    title: 'Product Mindset',
    desc: 'Metrics-driven, user-centered design, and A/B testing to ship what matters.',
  },
];

export default function WhyMe() {
  return (
    <section id="why" className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Why work with me</h2>
          <p className="mt-3 max-w-2xl text-white/70">
            A proven track record of shipping top-rated apps and leading teams through complex, high-impact releases.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition hover:border-white/20 hover:bg-white/10"
            >
              <div className="mb-3 inline-flex items-center justify-center rounded-md bg-emerald-500/10 p-2">
                {r.icon}
              </div>
              <h3 className="text-lg font-medium">{r.title}</h3>
              <p className="mt-2 text-sm text-white/70">{r.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-500/10 blur-2xl transition group-hover:bg-emerald-500/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
