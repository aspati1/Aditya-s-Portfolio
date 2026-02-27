"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="Engineering mindset with product ownership"
          description="I focus on shipping scalable products that are technically strong and visually polished."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Professional summary</h3>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              Full-stack developer with a strong React and Node.js foundation, delivering production-ready web applications with clean code practices and measurable performance improvements.
              I work across UI architecture, APIs, and data layers while maintaining quality through reusable components, semantic markup, and responsive design.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Experience focus</h3>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
              <li><strong>3+ years</strong> in analytics, recruiting, and digital product workflows.</li>
              <li><strong>Frontend:</strong> React ecosystems, responsive systems, motion design.</li>
              <li><strong>Backend:</strong> Node APIs, structured data models, integration readiness.</li>
              <li><strong>Quality:</strong> performance budgets, maintainability, recruiter-first structure.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
