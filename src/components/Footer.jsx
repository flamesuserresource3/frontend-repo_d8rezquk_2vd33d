import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-zinc-950 py-12 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <h3 className="text-lg font-semibold">Let’s build something great</h3>
            <p className="mt-1 text-sm text-white/70">
              I’m available for senior Android roles, consulting, and audits.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="mailto:hello@example.com"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" /> Email
            </a>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-6 text-center text-xs text-white/50">
          © {new Date().getFullYear()} Senior Android Engineer — Built with care.
        </div>
      </div>
    </footer>
  );
}
