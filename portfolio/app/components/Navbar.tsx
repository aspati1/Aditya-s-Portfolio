"use client";

import { motion, useScroll } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="relative font-medium text-darkBlue/90 dark:text-slate-200 hover:text-darkBlue dark:hover:text-white transition group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-accent transition-all duration-300 group-hover:w-full" />
  </a>
);

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[60]"
        style={{ scaleX: scrollYProgress }}
      />
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full fixed top-0 left-0 backdrop-blur-md border-b border-slate-200/60 dark:border-slate-800/60 bg-white/70 dark:bg-slate-950/60 z-50"
      >
        <div className="container flex items-center justify-between py-3">
          <div className="flex gap-6">
            <NavLink href="#hero">Home</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          <div className="flex items-center gap-3">
            <a aria-label="Email" href="mailto:aditya.vairale2015@gmail.com" className="opacity-80 hover:opacity-100 transition"><Mail size={18} /></a>
            <a aria-label="LinkedIn" href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition"><Linkedin size={18} /></a>
            <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition"><Github size={18} /></a>
            <ThemeToggle />
          </div>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
