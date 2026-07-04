"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="relative py-20 md:py-28 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="text-sm font-medium tracking-wide uppercase mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Education
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100">
            Academic background
          </h2>
        </motion.div>

        <div className="mt-12 space-y-6">
          {personalInfo.education.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.1 * index, ease: "easeOut" }}
              className="group"
            >
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.08] hover:border-white/20 hover:shadow-lg hover:shadow-purple-500/10">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-100">
                    {item.degree}
                  </h3>
                  <span className="text-xs font-medium text-slate-500 whitespace-nowrap bg-white/5 rounded-full px-3 py-1 border border-white/10">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-400">
                  {item.institution} &middot; {item.location}
                </p>
                {item.details && (
                  <p className="mt-2 text-sm text-slate-500 leading-relaxed">
                    {item.details}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}