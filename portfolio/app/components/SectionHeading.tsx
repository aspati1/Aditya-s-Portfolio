"use client";

import { motion } from 'framer-motion';

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45 }}
      className="mb-10"
    >
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600 dark:text-indigo-300">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{description}</p>}
    </motion.div>
  );
};

export default SectionHeading;
