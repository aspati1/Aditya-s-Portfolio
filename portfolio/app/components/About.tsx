"use client";

import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-6 tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:rounded-full after:bg-accent"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl"
      >
        I'm Aditya Vairale, a versatile professional based in Pune, Maharashtra, currently serving as a Technical Recruiter at Aptino Technologies. With a unique career trajectory spanning technical recruitment, financial analysis, and business intelligence, I bring a multifaceted perspective to talent acquisition and organizational growth. My background in finance and analytics, combined with my current role in IT recruitment, enables me to understand both the technical requirements of roles and the strategic business implications of talent decisions.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-slate-600 dark:text-slate-300 leading-relaxed mt-4 max-w-3xl"
      >
        My educational foundation includes a PGDM in Finance & Analytics (CGPA: 6.52) and a B.Sc (Hons.) in Agriculture (CGPA: 8.37), providing me with strong analytical capabilities and domain knowledge in agribusiness. My professional journey includes diverse roles: currently managing end-to-end IT recruitment for US clients at Aptino Technologies (W2, C2C, 1099 models), previously driving finance course enrollments at Upgrad Edutech, conducting investment analysis at Gramdev Tech, and optimizing recruitment strategies at FirstCry.com. I leverage technical skills in SAP FICO, SQL, Python, Power BI, and Tableau to deliver data-driven insights across all functions.
      </motion.p>
    </section>
  );
};

export default About;
