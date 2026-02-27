"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import { skillCategories } from '../data';

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-50 py-20 dark:bg-slate-950/50">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading eyebrow="Capabilities" title="Technology stack" description="Organized to reflect real-world full-stack delivery ownership." />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, index) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm transition hover:shadow-lg dark:border-indigo-900/50 dark:bg-slate-900"
            >
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{category.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                {category.items.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200/80 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-800">{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
