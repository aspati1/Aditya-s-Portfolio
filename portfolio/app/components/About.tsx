"use client";

import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading
          eyebrow="About"
          title="Professional summary"
          description="Blending AI-assisted execution, analytics, and product thinking to deliver practical business impact."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.45 }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Who I am</h3>
            <p className="mt-4 leading-relaxed text-slate-600 dark:text-slate-300">
              I am a multi-disciplinary professional experienced in AI-driven product development, business analysis, finance analytics, and technical recruitment. I enjoy solving business problems through structured thinking, digital workflow design, and collaborative execution.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">What I deliver</h3>
            <ul className="mt-4 space-y-3 text-slate-600 dark:text-slate-300">
              <li><strong>Product:</strong> Requirement gathering, roadmap support, and process improvement.</li>
              <li><strong>Technology:</strong> Full-stack understanding across frontend, backend, APIs, and auth systems.</li>
              <li><strong>Analytics:</strong> Financial modeling, dashboards, and insight-led decision support.</li>
              <li><strong>People:</strong> Stakeholder communication, collaboration, and execution ownership.</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
