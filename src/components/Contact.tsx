"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, MapPin, ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/lib/constants";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-wide uppercase mb-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Contact
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Let's work together
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="mt-6 text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg"
        >
          I'm currently open to new opportunities and collaborations.
          Whether you have a project in mind or just want to say hello — I'd
          love to hear from you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="mt-10 space-y-4"
        >
          {/* Email */}
          <a
            href={`mailto:${personalInfo.email}`}
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-indigo-500/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 border border-white/10 group-hover:from-indigo-500/30 group-hover:to-cyan-500/30 transition-all">
              <Mail size={16} className="text-indigo-400" />
            </span>
            <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
              {personalInfo.email}
            </span>
            <ArrowUpRight
              size={14}
              className="ml-auto text-slate-500 group-hover:text-indigo-400 transition-colors"
            />
          </a>

          {/* LinkedIn */}
          <a
            href={
              personalInfo.socialLinks.find((l) => l.icon === "linkedin")?.url
            }
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-5 transition-all duration-300 hover:bg-white/[0.08] hover:border-white/20 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-white/10 group-hover:from-purple-500/30 group-hover:to-pink-500/30 transition-all">
              <ExternalLink size={16} className="text-purple-400" />
            </span>
            <span className="font-medium text-slate-200 group-hover:text-white transition-colors">
              LinkedIn
            </span>
            <ArrowUpRight
              size={14}
              className="ml-auto text-slate-500 group-hover:text-purple-400 transition-colors"
            />
          </a>

          {/* Location */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.03] backdrop-blur-lg p-5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/5">
              <MapPin size={16} className="text-slate-500" />
            </span>
            <span className="font-medium text-slate-400">
              {personalInfo.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}