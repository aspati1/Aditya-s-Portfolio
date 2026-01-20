"use client";

import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id="projects" className="container px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-8 tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:rounded-full after:bg-accent"
      >
        Projects
      </motion.h2>

      {/* Project 1 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-6 rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
          Financial Data Analysis — Ashok Leyland Ltd.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Comprehensive Financial Modeling & Strategic Analysis</p>
        <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Developed comprehensive financial models analyzing 5 years of historical data from annual reports, incorporating revenue streams, cost structures, and profitability metrics</li>
          <li>Conducted trend analysis to identify growth patterns, operational efficiency indicators, and capital budgeting requirements for strategic planning</li>
          <li>Performed detailed company valuation using DCF and comparable company analysis, assessing potential M&A scenarios and acquisition impact on shareholder value</li>
          <li>Generated executive summary reports with actionable insights and financial projections for strategic decision-making</li>
        </ul>
      </motion.div>

      {/* Project 2 */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        className="rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      >
        <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
          Investment Analysis: Agri-Tech Sector Evaluation
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Cost-Benefit Analysis & Strategic Investment Assessment</p>
        <ul className="list-disc ml-6 mt-2 text-slate-600 dark:text-slate-300 space-y-1">
          <li>Conducted comprehensive investment research and due diligence on 15+ agricultural technology companies, analyzing business models, revenue projections, and market positioning</li>
          <li>Performed quantitative cost-benefit analysis evaluating the risk-reward profile of tech-driven agriculture investments across various sub-sectors (precision farming, supply chain tech, agri-fintech)</li>
          <li>Assessed financial implications including capital requirements, ROI projections, and scalability potential for strategic investment decisions</li>
          <li>Delivered detailed investment recommendations with financial modeling, sector analysis, and strategic insights for portfolio allocation</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Projects;
