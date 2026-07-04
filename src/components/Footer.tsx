import { personalInfo } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#0f0b1a]/50 backdrop-blur-sm">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 px-6 py-8">
        <p className="text-xs text-slate-500">
          &copy; {currentYear} {personalInfo.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          {personalInfo.socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-slate-500 hover:text-indigo-400 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}