"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { certifications, education } from '../data';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic journey & certifications"
          description="A blend of finance, analytics, and practical business-focused learning."
        />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="grid gap-4 md:grid-cols-2"
        >
          {education.map((item) => (
            <div key={item.degree} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.institute}</p>
              <p className="mt-3 text-sm font-medium text-indigo-600 dark:text-indigo-300">{item.period} • {item.score}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
        >
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Certifications</h3>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {certifications.map((cert) => (
              <p key={cert} className="rounded-xl bg-slate-100 px-4 py-2 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{cert}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
