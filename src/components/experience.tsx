"use client"

import { Calendar, MapPin, Building2, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const experiences = [
  {
    title: "Flutter Developer & UI/UX Designer",
    company: "Solution Soul",
    location: "Lahore, Pakistan",
    period: "2023 – Present",
    type: "Full-time",
    description: "End-to-end app development from wireframes to deployment — building cross-platform mobile apps and designing intuitive UI/UX for service-based clients.",
    technologies: ["Flutter", "Dart", "Figma", "Firebase", "Firestore", "Provider", "GetX"],
    achievements: [
      "Designed and developed multiple mobile apps with clean architecture",
      "Turned stakeholder ideas into polished Figma mockups",
      "Implemented real-time Firebase integration and authentication",
    ],
    gradient: "from-blue-500 to-violet-500",
    iconBg: "bg-gradient-to-br from-blue-500 to-violet-500",
  },
  {
    title: "Project Manager & Flutter Developer",
    company: "MARIANT TECHNOLOGIES",
    location: "Lahore, Pakistan",
    period: "Jan 2025 – Present",
    type: "Part-time",
    description: "Overseeing mobile app projects from concept to deployment while actively contributing as a Flutter Developer — managing timelines, cross-functional collaboration, and QA.",
    technologies: ["Flutter", "Dart", "Firebase", "Figma", "Trello", "GitHub"],
    achievements: [
      "Led cross-platform Flutter projects within budget and timeline",
      "Managed communication across clients, designers, devs, and QA",
      "Balanced technical development with project planning",
    ],
    gradient: "from-cyan-500 to-blue-500",
    iconBg: "bg-gradient-to-br from-cyan-500 to-blue-500",
  },
  {
    title: "Flutter Developer",
    company: "SYNTHGLIDE",
    location: "Islamabad, Pakistan (Remote)",
    period: "Feb 2024 – Oct 2024",
    type: "Remote",
    description: "Worked remotely building cross-platform UIs and integrating backend services using Flutter and Dart.",
    technologies: ["Flutter", "Dart", "Firebase", "GetX", "Provider", "Git", "Figma"],
    achievements: [
      "Developed clean, responsive UIs for Android and iOS",
      "Implemented Firebase Auth and Firestore for real-time features",
      "Collaborated with remote teams via Figma and Git",
    ],
    gradient: "from-violet-500 to-purple-500",
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
  },
  {
    title: "Flutter Developer & UI/UX Designer",
    company: "Freelance / Remote Projects",
    location: "Remote",
    period: "2023 – Present",
    type: "Freelance",
    description: "Designing and developing cross-platform mobile apps and clean user interfaces for diverse clients worldwide.",
    technologies: ["Flutter", "Dart", "Figma", "Firebase", "GetX", "HTML5", "CSS3", "Bootstrap"],
    achievements: [
      "Built and launched cross-platform mobile apps for remote clients",
      "Translated Figma mockups into production-ready Flutter code",
      "Created responsive landing pages with HTML, CSS, and Bootstrap",
    ],
    gradient: "from-purple-500 to-pink-500",
    iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 lg:py-32 relative z-10">
      <div className="container mx-auto px-6 xl:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">Career</p>
          <div className="section-divider" />
          <h2 className="section-heading">Professional Journey</h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-2xl mx-auto mt-4">
            A track record of delivering high-quality mobile apps and design solutions across companies and clients.
          </p>
        </motion.div>

        {/* 2×2 Grid */}
        <div className="grid md:grid-cols-2 gap-6 xl:gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-7 xl:p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col hover:-translate-y-1">

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-2xl ${exp.iconBg} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base lg:text-lg leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                    </div>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1.5 rounded-full bg-gradient-to-r ${exp.gradient} text-white shadow-sm flex-shrink-0 whitespace-nowrap`}>
                    {exp.type}
                  </span>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 flex-shrink-0" />{exp.period}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 flex-shrink-0" />{exp.location}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2 mb-5 flex-1">
                  {exp.achievements.map((a, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0 text-blue-500" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border/50">
                  {exp.technologies.map((t, j) => (
                    <span key={j} className="text-xs px-2.5 py-1 rounded-lg bg-muted text-muted-foreground font-medium border border-border/60">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
