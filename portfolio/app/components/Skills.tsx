"use client";

import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="container px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-8 tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:rounded-full after:bg-accent"
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="font-semibold text-lg text-darkBlue dark:text-white mb-2">Technical Skills</h3>
          <ul className="text-slate-600 dark:text-slate-300 space-y-1">
            <li>SAP FICO (Certified)</li>
            <li>SQL (Advanced Queries & Database Management)</li>
            <li>Python (Data Analysis, Pandas, NumPy)</li>
            <li>Power BI & Tableau (Data Visualization)</li>
            <li>Advanced Excel (Financial Modeling, VBA, Pivot Tables)</li>
            <li>MS Office Suite (Word, PowerPoint, Access)</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="font-semibold text-lg text-darkBlue dark:text-white mb-2">Domain Expertise</h3>
          <ul className="text-slate-600 dark:text-slate-300 space-y-1">
            <li>IT Recruitment & Talent Acquisition (US Staffing)</li>
            <li>W2, C2C & 1099 Hiring Models</li>
            <li>Financial Accounting & Reporting</li>
            <li>Credit Risk Analysis & Assessment</li>
            <li>Valuation & Financial Modeling</li>
            <li>Investment Analysis & Portfolio Management</li>
            <li>Business Research & Competitive Intelligence</li>
            <li>Admissions Counseling & Sales</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        >
          <h3 className="font-semibold text-lg text-darkBlue dark:text-white mb-2">Professional Skills</h3>
          <ul className="text-slate-600 dark:text-slate-300 space-y-1">
            <li>Strategic Communication & Stakeholder Management</li>
            <li>Cross-Functional Collaboration & Team Leadership</li>
            <li>Adaptability & Change Management</li>
            <li>Analytical Problem-Solving & Critical Thinking</li>
            <li>Project Management & Time Optimization</li>
            <li>Presentation & Executive Reporting</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
