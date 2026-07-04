"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-wide uppercase mb-2 bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Experience
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Where I've worked
          </h2>
        </motion.div>

        {/* Vertical timeline */}
        <div className="mt-12 relative">
          {/* Timeline line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-indigo-500/50 via-cyan-500/30 to-transparent hidden sm:block" />

          <div className="space-y-12">
            {personalInfo.experience.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
                className="relative pl-0 sm:pl-8 group"
              >
                {/* Timeline dot */}
                <div className="hidden sm:block absolute left-0 top-2 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 border-2 border-[#0f0b1a] shadow-[0_0_12px_rgba(99,102,241,0.5)]" />

                {/* Glass card */}
                <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-indigo-500/10">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-100">
                        {item.role}
                      </h3>
                      <p className="text-sm font-medium text-slate-400">
                        {item.company} &middot; {item.location}
                      </p>
                    </div>
                    <span className="text-xs font-medium text-slate-500 whitespace-nowrap bg-white/5 rounded-full px-3 py-1 border border-white/10">
                      {item.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIndex) => (
                      <li
                        key={hIndex}
                        className="text-sm sm:text-base text-slate-300 leading-relaxed pl-5 relative before:absolute before:left-0 before:top-[0.6em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-gradient-to-r before:from-indigo-400 before:to-cyan-400"
                      >
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}