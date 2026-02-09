"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

/* ---------------- BikeWithMe Data ---------------- */

const screenshots = [
  /public/bikewithme-1.png.png,
  /public/bikewithme-2.png.png,
  /public/bikewithme-3.png.png,
  /public/bikewithme-4.png.png,
  /public/bikewithme-5.png.png,
];

const techStack = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "JWT Authentication",
  "Google Maps API",
  "Razorpay",
  "Vercel",
  "Render",
];

const Projects = () => {
  const [activeImage, setActiveImage] = useState(screenshots[0]);

  return (
    <section id="projects" className="container px-6 py-24">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-10 tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:rounded-full after:bg-accent"
      >
        Projects
      </motion.h2>

      {/* ================= Previous Project 1 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-6 rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg transition-all"
      >
        <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
          Financial Data Analysis — Ashok Leyland Ltd.
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Comprehensive Financial Modeling & Strategic Analysis
        </p>
        <ul className="list-disc ml-6 mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-1">
          <li>
            Built financial models using 5 years of historical data from annual
            reports, covering revenue, cost structure, and profitability.
          </li>
          <li>
            Conducted trend and ratio analysis to evaluate operational efficiency
            and growth patterns.
          </li>
          <li>
            Performed DCF and comparable company valuation to assess investment
            attractiveness and M&A scenarios.
          </li>
          <li>
            Delivered executive-ready insights and financial projections for
            strategic decision-making.
          </li>
        </ul>
      </motion.div>

      {/* ================= Previous Project 2 ================= */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="mb-12 rounded-xl border p-6 bg-white/50 dark:bg-slate-900/40 shadow-soft hover:shadow-lg transition-all"
      >
        <h3 className="font-semibold text-lg text-darkBlue dark:text-white">
          Investment Analysis — Agri-Tech Sector
        </h3>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
          Cost-Benefit Analysis & Strategic Investment Evaluation
        </p>
        <ul className="list-disc ml-6 mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-1">
          <li>
            Conducted investment research on 15+ agri-tech startups across
            precision farming, supply chain, and agri-fintech.
          </li>
          <li>
            Evaluated financial viability, scalability, and ROI using
            quantitative cost-benefit analysis.
          </li>
          <li>
            Assessed capital requirements, risk exposure, and long-term growth
            potential.
          </li>
          <li>
            Presented data-driven investment recommendations and sector insights.
          </li>
        </ul>
      </motion.div>

      {/* ================= Featured Project: BikeWithMe ================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl border p-6 bg-white/60 dark:bg-slate-900/40 shadow-soft"
      >
        {/* LEFT: Screenshots */}
        <div>
          <div className="relative w-full h-[260px] md:h-[320px] rounded-xl overflow-hidden border bg-slate-100 dark:bg-slate-800">
            <Image
              src={activeImage}
              alt="BikeWithMe Screenshot"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="flex gap-3 mt-3">
            {screenshots.map((img) => (
              <button
                key={img}
                onClick={() => setActiveImage(img)}
                className={`relative w-20 h-14 rounded-lg overflow-hidden border ${
                  activeImage === img
                    ? "border-accent"
                    : "border-transparent opacity-70 hover:opacity-100"
                }`}
              >
                <Image src={img} alt="Preview" fill className="object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: Description */}
        <div>
          <h3 className="text-xl font-semibold text-darkBlue dark:text-white">
            BikeWithMe — Bike Pooling Platform
          </h3>

          <p className="text-slate-600 dark:text-slate-300 mt-3 text-sm leading-relaxed">
            BikeWithMe is a full-stack bike pooling and ride-sharing platform
            designed to enable safe, affordable, and eco-friendly commuting.
            The platform supports real-time ride discovery, secure payments,
            location tracking, and admin-level controls.
          </p>

          <ul className="list-disc ml-5 mt-4 text-sm text-slate-600 dark:text-slate-300 space-y-1">
            <li>User authentication with protected routes</li>
            <li>Ride creation, matching, and booking</li>
            <li>Live GPS tracking and safety confirmation</li>
            <li>Online payments via Razorpay</li>
            <li>Admin dashboard and monitoring tools</li>
          </ul>

          {/* Tech Stack */}
          <div className="mt-5">
            <p className="text-sm font-semibold text-darkBlue dark:text-white mb-2">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent dark:bg-accent/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-6 flex gap-5">
            <a
              href="https://bikewithme.vercel.app"
              target="_blank"
              className="text-sm font-medium text-accent hover:underline"
            >
              Live Demo →
            </a>
            <a
              href="https://github.com/your-repo-link"
              target="_blank"
              className="text-sm font-medium text-slate-500 hover:text-accent"
            >
              Source Code
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
