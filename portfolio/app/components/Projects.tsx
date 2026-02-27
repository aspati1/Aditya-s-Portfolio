"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import { projects } from '../data';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeading eyebrow="Portfolio" title="Selected projects" description="Representative work demonstrating UI quality, architecture, and delivery mindset." />

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="relative h-44 overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 dark:border-indigo-800 dark:bg-indigo-950/40 dark:text-indigo-300">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-4 text-sm font-semibold">
                  <a href={project.live} target={project.live.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="inline-flex items-center gap-1 text-indigo-600 hover:text-indigo-500 dark:text-indigo-300">
                    Live <ExternalLink size={14} />
                  </a>
                  <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
                    GitHub <Github size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
