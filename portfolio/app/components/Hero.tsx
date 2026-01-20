"use client";

import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10"
      />
      <div className="container px-6">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-accent dark:from-white dark:to-blue-400"
        >
          I’m Aditya.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-xl text-slate-600 dark:text-slate-300 mt-3"
        >
          Technical Recruiter | Business Analyst | Finance & Analytics Professional
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-slate-600 dark:text-slate-300/90 mt-4 max-w-2xl"
        >
          Results-driven professional with expertise spanning technical recruitment, financial analysis, and business intelligence. Currently excelling in IT talent acquisition for US clients while maintaining strong competencies in investment analysis, risk assessment, and financial modeling. Passionate about leveraging analytical skills to drive strategic decision-making and organizational growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          <a href="/Aditya Vairale Resume 4.pdf" download className="btn-primary">
            <Download size={18} /> Download Resume
          </a>

          <a href="mailto:aditya.vairale2015@gmail.com" className="btn-secondary">
            <Mail size={18} /> Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
