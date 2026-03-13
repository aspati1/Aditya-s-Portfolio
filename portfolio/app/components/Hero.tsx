"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Download, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative overflow-hidden pt-32">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.20),transparent_30%),linear-gradient(to_bottom,#f8fafc,#eef2ff)] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.26),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(56,189,248,0.18),transparent_35%),linear-gradient(to_bottom,#020617,#0f172a)]" />
      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-24 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-indigo-600 dark:text-indigo-300">Open to Product, Analytics & Tech Opportunities</p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-900 dark:text-white md:text-6xl">
            Aditya Vairale <span className="block text-indigo-600 dark:text-indigo-300">AI-Driven Product • Business • Finance Professional</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-600 dark:text-slate-300">
            Multi-disciplinary professional bridging business requirements with technology solutions across product workflows, analytics, and digital platforms.
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-300">
            <MapPin size={16} /> Pune, Maharashtra, India
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
              View Projects <ArrowRight size={16} />
            </a>
            <a href="/Aditya Vairale Resume 4.pdf" download className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-100">
              Download Resume <Download size={16} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="rounded-3xl border border-white/40 bg-white/70 p-8 shadow-xl backdrop-blur dark:border-slate-700/60 dark:bg-slate-900/50"
        >
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">Core strengths</p>
          <ul className="mt-4 space-y-4 text-sm text-slate-700 dark:text-slate-200">
            <li>• Product lifecycle analysis, workflow design, and feature planning</li>
            <li>• Web development using React, Node.js, Express, MongoDB, and APIs</li>
            <li>• Financial and data analysis using Excel, SQL, Python, Tableau, and Power BI</li>
            <li>• AI-assisted development and cross-functional stakeholder communication</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
