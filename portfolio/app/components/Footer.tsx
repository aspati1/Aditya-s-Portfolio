"use client";

import { motion } from "framer-motion";
import { Linkedin, Github, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/50 mt-20">
      <div className="container px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-bold text-lg text-darkBlue dark:text-white mb-3">
              Aditya Vairale
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              Business Analyst specializing in Finance, Strategy, and Analytics. Passionate about data-driven decision making.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg text-darkBlue dark:text-white mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-accent dark:hover:text-accent transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg text-darkBlue dark:text-white mb-3">
              Connect
            </h3>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Email"
                href="mailto:aditya.vairale2015@gmail.com"
                className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white dark:hover:bg-accent transition"
              >
                <Mail size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="LinkedIn"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white dark:hover:bg-accent transition"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="GitHub"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-accent hover:text-white dark:hover:bg-accent transition"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-400">
          <p>
            © {new Date().getFullYear()} Aditya Vairale. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            Built with <Heart size={14} className="text-red-500 fill-current" aria-hidden="true" /> using Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
