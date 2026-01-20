"use client";

import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="container px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-8 tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:rounded-full after:bg-accent"
      >
        Education
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        <div className="rounded-xl border p-5 bg-white/50 dark:bg-slate-900/40 shadow-soft">
          <h3 className="font-semibold text-lg text-darkBlue dark:text-white">Post Graduate Diploma in Management (PGDM)</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Specialization: Finance & Analytics | 2023 - 2025</p>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Core Competencies: Financial Modeling, Valuation Techniques, Credit Risk Analysis, Business Research, Strategic Management, Data Analytics</p>
        </div>
        
        <div className="rounded-xl border p-5 bg-white/50 dark:bg-slate-900/40 shadow-soft">
          <h3 className="font-semibold text-lg text-darkBlue dark:text-white">Bachelor of Science (Hons.) in Agriculture</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">2019 - 2023</p>
          <p className="text-slate-600 dark:text-slate-300 mt-2">Foundation in agricultural economics, agribusiness management, and rural development strategies</p>
        </div>
        
        <div className="rounded-xl border p-5 bg-white/50 dark:bg-slate-900/40 shadow-soft">
          <h3 className="font-semibold text-lg text-darkBlue dark:text-white">Higher Secondary Certificate (HSC)</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Commerce Stream | 2019</p>
        </div>
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-darkBlue dark:text-white mt-12 mb-6"
      >
        Professional Certifications
      </motion.h3>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="rounded-xl border p-4 bg-white/50 dark:bg-slate-900/40 shadow-soft">
          <h4 className="font-semibold text-darkBlue dark:text-white">SAP FICO Certification</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Financial Accounting & Controlling</p>
        </div>
        
        <div className="rounded-xl border p-4 bg-white/50 dark:bg-slate-900/40 shadow-soft">
          <h4 className="font-semibold text-darkBlue dark:text-white">Python & SQL Certification</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm">HackerRank</p>
        </div>
        
        <div className="rounded-xl border p-4 bg-white/50 dark:bg-slate-900/40 shadow-soft">
          <h4 className="font-semibold text-darkBlue dark:text-white">Advanced Excel Certification</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Financial Modeling & Data Analysis</p>
        </div>
        
        <div className="rounded-xl border p-4 bg-white/50 dark:bg-slate-900/40 shadow-soft">
          <h4 className="font-semibold text-darkBlue dark:text-white">Global Finance & Business Management</h4>
          <p className="text-slate-500 dark:text-slate-400 text-sm">TCS iON</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
