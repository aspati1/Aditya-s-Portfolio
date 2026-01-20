"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="container px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-6 tracking-tight after:absolute after:left-0 after:-bottom-2 after:h-1 after:w-12 after:rounded-full after:bg-accent"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        viewport={{ once: true }}
        className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl"
      >
        Want to connect for internships, collaborations, or business opportunities? Feel free to reach out!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-3xl"
      >
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <Mail className="text-accent" size={20} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <a href="mailto:aditya.vairale2015@gmail.com" className="hover:text-accent transition-colors">
              aditya.vairale2015@gmail.com
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <Phone className="text-accent" size={20} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            <a href="tel:+917030698212" className="hover:text-accent transition-colors">
              +91-7030698212
            </a>
          </div>
        </div>

        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <MapPin className="text-accent" size={20} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
            <p>Pune, Maharashtra</p>
          </div>
        </div>
      </motion.div>

      <motion.a
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        viewport={{ once: true }}
        href="mailto:aditya.vairale2015@gmail.com"
        className="btn-primary"
      >
        <Mail size={18} /> Send Email
      </motion.a>
    </section>
  );
};

export default Contact;
