"use client";

import { motion, useScroll } from 'framer-motion';
import { Linkedin, Mail, Menu, X } from 'lucide-react';
import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { navItems } from '../data';

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-indigo-500 to-sky-400" style={{ scaleX: scrollYProgress }} />
      <header className="fixed top-0 z-50 w-full border-b border-slate-200/60 bg-white/80 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8" aria-label="Main navigation">
          <a href="#hero" className="text-lg font-semibold tracking-tight text-slate-900 dark:text-white">Aditya Vairale</a>

          <div className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-300">
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a href="mailto:aditya.vairale2015@gmail.com" aria-label="Email"><Mail size={18} /></a>
            <a href="https://www.linkedin.com/in/aditya-vairale2609/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
            <ThemeToggle />
          </div>

          <button className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>

        {open && (
          <div className="border-t border-slate-200 px-4 py-4 dark:border-slate-800 md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-4">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm font-medium text-slate-700 dark:text-slate-200">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
