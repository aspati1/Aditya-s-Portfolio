"use client";

import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="container px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-8 tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:rounded-full after:bg-accent"
      >
        Experience
      </motion.h2>

      {/* Experience 1 - Current */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-6 rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border-l-4 border-l-accent"
      >
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
            Technical Recruiter — Aptino Technologies
          </h3>
          <span className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">Current</span>
        </div>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Oct 2025 — Present | Fulltime</p>
        <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Source and screen IT professionals through job portals, social media, and networking platforms for various technical roles across multiple domains</li>
          <li>Coordinate end-to-end recruitment process including candidate screening, interview scheduling, salary negotiations, and seamless onboarding for US clients</li>
          <li>Manage complex hiring models including W2, C2C, and 1099 arrangements, ensuring full compliance with client requirements and visa regulations</li>
          <li>Collaborate closely with hiring managers and account teams to understand technical job requirements and deliver quality candidates within strict deadlines</li>
          <li>Maintain strong candidate pipelines and build lasting relationships with IT professionals for current and future opportunities</li>
        </ul>
      </motion.div>

      {/* Experience 2 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-6 rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
          Sales Executive (Admission Counselor) — Upgrad Edutech Pvt Ltd
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">July 2025 — Sep 2025 | Fulltime</p>
        <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Specialized in counseling prospective students for finance-related courses, including investment banking, financial modeling, and analytics programs</li>
          <li>Guided students through course selection based on their career goals, educational background, and financial aspirations</li>
          <li>Developed deep understanding of various finance domains to provide tailored, consultative advice aligned with student objectives</li>
          <li>Successfully drove course enrollments by effectively articulating the value proposition and ROI of finance education programs</li>
          <li>Contributed to company growth through consistent achievement of sales targets and positive student feedback ratings</li>
        </ul>
      </motion.div>

      {/* Experience 3 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-6 rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
          Business Analyst Intern — Gramdev Tech Pvt Ltd
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">May 2024 — July 2024 | Fulltime</p>
        <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Conducted comprehensive investment analysis for 10+ agri-tech companies, evaluating market positioning, growth potential, and competitive advantages</li>
          <li>Analyzed secondary market financial data to identify sector trends and investment opportunities, contributing to strategic portfolio recommendations</li>
          <li>Performed quantitative risk-return assessments for equity investments using financial modeling techniques, resulting in data-backed investment proposals</li>
          <li>Collaborated with cross-functional teams to evaluate business models and financial viability of emerging agricultural technology ventures</li>
        </ul>
      </motion.div>

      {/* Experience 4 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
          HR & Recruitment Intern — FirstCry.com
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm">Dec 2023 — Jan 2024 | Fulltime</p>
        <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Optimized talent acquisition strategies across 5+ locations, improving candidate pipeline efficiency and reducing time-to-hire metrics</li>
          <li>Conducted market research and competitive analysis to design data-driven salary structures and compensation packages aligned with industry benchmarks</li>
          <li>Managed end-to-end recruitment lifecycle including candidate screening, interview coordination, and stakeholder communication for multiple open positions</li>
          <li>Developed recruitment analytics dashboards to track key hiring metrics and provide actionable insights to HR leadership</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Experience;
