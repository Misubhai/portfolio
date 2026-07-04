export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  tagline: string;
  bio: string[];
  email: string;
  location: string;
  socialLinks: SocialLink[];
  skills: SkillCategory[];
  experience: ExperienceItem[];
  education: EducationItem[];
}

export const personalInfo: PersonalInfo = {
  name: "Alex Chen",
  tagline: "Full-Stack Developer & UI/UX Designer",
  bio: [
    "I craft digital experiences that live at the intersection of thoughtful design and robust engineering. With over six years of experience, I specialise in building products that are as delightful to use as they are reliable.",
    "My approach is rooted in simplicity — clean interfaces, performant code, and meaningful interactions. I believe the best solutions emerge when design thinking meets technical excellence.",
  ],
  email: "alex@example.com",
  location: "San Francisco, CA",
  socialLinks: [
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/alexchen",
      icon: "linkedin",
    },
    {
      label: "GitHub",
      url: "https://github.com/alexchen",
      icon: "github",
    },
    {
      label: "Email",
      url: "mailto:alex@example.com",
      icon: "mail",
    },
  ],
  skills: [
    {
      title: "Frontend",
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "GraphQL", "REST APIs"],
    },
    {
      title: "Design",
      skills: ["Figma", "UI/UX Design", "Design Systems", "Prototyping"],
    },
    {
      title: "Tools",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Vercel"],
    },
  ],
  experience: [
    {
      id: "exp-1",
      role: "Senior Frontend Engineer",
      company: "Stripe",
      location: "San Francisco, CA",
      period: "2022 — Present",
      highlights: [
        "Led the redesign of the dashboard interface, improving user satisfaction by 34%",
        "Architected a component library used by 12 product teams across the organisation",
        "Mentored 4 junior engineers through structured code reviews and pair programming",
      ],
    },
    {
      id: "exp-2",
      role: "Full-Stack Developer",
      company: "Vercel",
      location: "Remote",
      period: "2020 — 2022",
      highlights: [
        "Built and maintained core features for the Vercel dashboard serving 1M+ users",
        "Developed real-time deployment monitoring tools using WebSockets and Server-Sent Events",
        "Contributed to open-source Next.js documentation and community resources",
      ],
    },
    {
      id: "exp-3",
      role: "Frontend Developer",
      company: "Linear",
      location: "San Francisco, CA",
      period: "2018 — 2020",
      highlights: [
        "Developed the initial version of the issue tracking board with drag-and-drop interactions",
        "Implemented keyboard-first navigation patterns for power users",
        "Reduced bundle size by 45% through code splitting and lazy loading strategies",
      ],
    },
  ],
  education: [
    {
      id: "edu-1",
      degree: "B.S. in Computer Science",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 — 2018",
      details: "Graduated with honours. Focus on Human-Computer Interaction.",
    },
    {
      id: "edu-2",
      degree: "Interaction Design Specialisation",
      institution: "Stanford University (Online)",
      location: "Remote",
      period: "2019",
      details: "Completed the HCI and Design Thinking track.",
    },
  ],
};