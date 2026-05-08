"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skillCategories = [
  {
    title: "Mobile Development",
    color: "from-blue-500 to-violet-500",
    skills: [
      { name: "Flutter", level: 95 },
      { name: "Dart", level: 90 },
      { name: "GetX", level: 85 },
      { name: "Provider", level: 80 },
      { name: "Firebase Auth", level: 85 },
      { name: "Firestore", level: 80 },
    ],
  },
  {
    title: "UI/UX & Design",
    color: "from-violet-500 to-purple-500",
    skills: [
      { name: "Figma", level: 92 },
      { name: "Canva", level: 90 },
      { name: "Wireframing", level: 88 },
      { name: "Prototyping", level: 85 },
      { name: "User Research", level: 75 },
      { name: "Color & Typography", level: 88 },
    ],
  },
  {
    title: "Web Basics",
    color: "from-cyan-500 to-blue-500",
    skills: [
      { name: "HTML5", level: 80 },
      { name: "CSS3", level: 78 },
      { name: "Bootstrap", level: 75 },
      { name: "JavaScript", level: 70 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    title: "Tools & Platforms",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git/GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Firebase", level: 85 },
      { name: "Netlify", level: 75 },
      { name: "Vercel", level: 75 },
    ],
  },
]

const technologies = [
  "Flutter", "Dart", "Firebase", "Firestore", "GetX", "Provider",
  "Figma", "Canva", "Wireframing", "Prototyping", "User-Centered Design",
  "HTML5", "CSS3", "Bootstrap", "JavaScript", "Flutter Web",
  "GitHub", "VS Code", "Netlify", "Vercel", "Firebase Auth",
]

function AnimatedBar({ level, color }: { level: number; color: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="h-2 w-full bg-muted rounded-full overflow-hidden">
      <motion.div
        className={`h-full rounded-full bg-gradient-to-r ${color}`}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${level}%` : 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
      />
    </div>
  )
}

export function Skills() {
  return (
    <section id="skills" className="py-24 lg:py-32 section-bg-alt relative z-10">
      <div className="container mx-auto px-6 xl:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">Expertise</p>
          <div className="section-divider" />
          <h2 className="section-heading">Skills & Technologies</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-7 xl:p-8 h-full shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-1.5 h-7 rounded-full bg-gradient-to-b ${cat.color}`} />
                  <h3 className="font-bold text-lg">{cat.title}</h3>
                </div>
                <div className="space-y-5">
                  {cat.skills.map((skill, j) => (
                    <div key={j}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-base font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground tabular-nums font-semibold">{skill.level}%</span>
                      </div>
                      <AnimatedBar level={skill.level} color={cat.color} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="section-label mb-7">Technologies I Work With</p>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.025 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="text-sm lg:text-base px-4 lg:px-5 py-2 rounded-xl glass border border-border/60 font-medium text-muted-foreground hover:text-blue-600 hover:border-blue-400/50 transition-colors cursor-default shadow-sm"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
