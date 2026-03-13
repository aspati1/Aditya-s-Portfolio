"use client";

import { motion } from 'framer-motion';
import { Linkedin, Mail, Phone } from 'lucide-react';
import SectionHeading from './SectionHeading';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s connect"
          description="Open to full-time roles in product, analytics, business analysis, and technology-enabled operations."
        />

        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="space-y-4 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="text-slate-600 dark:text-slate-300">If you have an opportunity where product thinking, analysis, and execution matter, I would love to discuss.</p>
            <a href="mailto:aditya.vairale2015@gmail.com" className="inline-flex items-center gap-2 text-slate-900 hover:text-indigo-600 dark:text-white">
              <Mail size={18} /> aditya.vairale2015@gmail.com
            </a>
            <a href="tel:+917030698212" className="inline-flex items-center gap-2 text-slate-900 hover:text-indigo-600 dark:text-white">
              <Phone size={18} /> +91-7030698212
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.06, duration: 0.4 }}
            className="rounded-3xl border border-slate-200 bg-gradient-to-br from-indigo-50 to-sky-50 p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:to-slate-900"
          >
            <p className="text-sm text-slate-600 dark:text-slate-300">Professional profile</p>
            <a href="https://www.linkedin.com/in/aditya-vairale2609/" target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-2 text-lg font-semibold text-slate-900 hover:text-indigo-600 dark:text-white">
              <Linkedin size={18} /> linkedin.com/in/aditya-vairale2609
            </a>
            <p className="mt-6 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Portfolio: <a className="font-semibold text-indigo-600 hover:underline dark:text-indigo-300" href="https://adityavairale.vercel.app/" target="_blank" rel="noreferrer">adityavairale.vercel.app</a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
