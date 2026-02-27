"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something impactful"
          description="Open to full-time opportunities and high-quality product collaborations."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <input type="text" placeholder="Your name" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800" />
            <input type="email" placeholder="Your email" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800" />
            <textarea rows={5} placeholder="Project details" className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-indigo-400 dark:border-slate-700 dark:bg-slate-800" />
            <button type="submit" className="rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
              Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06, duration: 0.4 }}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900"
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">Prefer direct contact?</p>
            <a href="mailto:aditya.vairale2015@gmail.com" className="mt-2 block text-lg font-semibold text-slate-900 hover:text-indigo-600 dark:text-white">aditya.vairale2015@gmail.com</a>
            <div className="mt-6 flex items-center gap-3">
              <a className="rounded-xl border border-slate-300 p-3 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700" href="https://github.com/aspati1" target="_blank" rel="noreferrer"><Github size={18} /></a>
              <a className="rounded-xl border border-slate-300 p-3 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700" href="https://www.linkedin.com" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
              <a className="rounded-xl border border-slate-300 p-3 transition hover:-translate-y-0.5 hover:border-indigo-400 dark:border-slate-700" href="mailto:aditya.vairale2015@gmail.com"><Mail size={18} /></a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
