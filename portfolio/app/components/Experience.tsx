"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { experience } from '../data';

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-50 py-20 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading eyebrow="Career" title="Experience timeline" />

        <div className="relative ml-3 border-l border-slate-300 pl-8 dark:border-slate-700">
          {experience.map((item, index) => (
            <motion.article
              key={`${item.role}-${item.company}`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
              className="relative mb-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="absolute -left-[43px] top-8 h-3.5 w-3.5 rounded-full bg-indigo-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{item.period}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">{item.role}</h3>
              <p className="text-sm font-medium text-indigo-600 dark:text-indigo-300">{item.company}</p>
              <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {item.points.map((point) => (
                  <li key={point}>• {point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
