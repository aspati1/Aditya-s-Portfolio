"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const [showPhone, setShowPhone] = useState(false);
  const [formData, setFormData] = useState({
    purpose: "",
    contact: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.purpose || !formData.contact) {
      alert("Please enter your purpose and your phone or email.");
      return;
    }

    // You can later connect this to backend / email service
    setShowPhone(true);
  };

  return (
    <section id="contact" className="container px-6 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="relative text-3xl font-bold text-darkBlue dark:text-white mb-6 tracking-tight"
      >
        Contact
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-3xl"
      >
        {/* Email */}
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <Mail className="text-accent" size={20} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Email</p>
            <a
              href="mailto:aditya.vairale2015@gmail.com"
              className="hover:text-accent transition-colors"
            >
              aditya.vairale2015@gmail.com
            </a>
          </div>
        </div>

        {/* Phone (Hidden by default) */}
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <Phone className="text-accent" size={20} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Phone</p>
            {showPhone ? (
              <a
                href="tel:+917030698212"
                className="hover:text-accent transition-colors"
              >
                +91-7030698212
              </a>
            ) : (
              <p className="text-sm italic text-slate-400">
                Hidden • Please submit the form below to view
              </p>
            )}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-3 text-slate-600 dark:text-slate-300">
          <MapPin className="text-accent" size={20} />
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Location</p>
            <p>Pune, Maharashtra</p>
          </div>
        </div>
      </motion.div>

      {/* Reveal Form */}
      {!showPhone && (
        <motion.form
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="max-w-lg bg-slate-100 dark:bg-slate-800 p-6 rounded-xl shadow-md space-y-4"
        >
          <h3 className="text-lg font-semibold text-darkBlue dark:text-white">
            Request Phone Number
          </h3>

          <div>
            <label className="block text-sm mb-1">Purpose</label>
            <textarea
              className="w-full p-2 rounded-md border dark:bg-slate-700"
              placeholder="Why do you want to contact me?"
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Your Email or Phone</label>
            <input
              type="text"
              className="w-full p-2 rounded-md border dark:bg-slate-700"
              placeholder="Enter your email or phone"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              required
            />
          </div>

          <button type="submit" className="btn-primary w-full">
            Reveal Phone Number
          </button>
        </motion.form>
      )}

      {showPhone && (
        <p className="mt-6 text-green-600 font-medium">
          ✅ Thank you! The phone number is now visible above.
        </p>
      )}
    </section>
  );
};

export default Contact;

