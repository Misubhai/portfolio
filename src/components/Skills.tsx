"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-wide uppercase mb-2 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Skills
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Tools & technologies
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {personalInfo.skills.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 * catIndex, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-cyan-500/10"
            >
              <h3 className="text-xs font-semibold tracking-wide uppercase text-slate-500 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-4 py-1.5 text-sm font-medium text-slate-300 transition-all duration-200 hover:bg-white/10 hover:border-indigo-400/30 hover:text-white hover:shadow-sm hover:shadow-indigo-500/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}