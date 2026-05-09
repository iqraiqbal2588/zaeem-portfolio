"use client"

import { useState } from "react"
import { Github, ExternalLink } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "Pay Back App",
    description: "A feature-rich money sharing and real-time chat app built with Flutter and Firebase.",
    image: "/images/project/pay_back.jpg",
    technologies: ["Flutter", "Firebase", "Firestore", "FCM", "Figma", "Dart"],
    category: "Flutter Apps",
  },
  {
    title: "Mindscript",
    description: "A 3-in-1 content creation platform with podcast, video, and script modules.",
    image: "/images/project/mindscript.png",
    technologies: ["Flutter Web", "Firebase", "Firestore", "Figma", "Dart"],
    category: "Flutter Apps",
  },
  {
    title: "Mindscript Admin Panel",
    description: "Full-featured admin dashboard for managing user-generated content across three modules.",
    image: "/images/project/mindscript_admin.png",
    technologies: ["Flutter Web", "Firebase", "Firestore", "Figma", "Dart"],
    category: "Web Projects",
  },
  {
    title: "WhereToEat",
    description: "A restaurant finder app with ratings and location-based discovery using Google Maps.",
    image: "/images/project/where_to_eat.png",
    technologies: ["Flutter", "Firebase", "Maps API", "Figma", "Dart"],
    category: "Flutter Apps",
  },
  {
    title: "Whiskey Delivery App",
    description: "A complete multi-role delivery platform for users, drivers, and shops.",
    image: "/images/project/whisky_shop.png",
    technologies: ["Flutter", "Firebase", "Firestore", "Flutter Web", "Figma"],
    category: "Flutter Apps",
  },
  {
    title: "Whiskey Admin Panel",
    description: "Admin dashboard managing inventory, orders, and real-time delivery tracking.",
    image: "/images/project/whisky_admin.jpg",
    technologies: ["Flutter Web", "Firebase", "Firestore", "Figma", "Dart"],
    category: "Web Projects",
  },
  {
    title: "Quiz Game App",
    description: "A playful, interactive mobile UI designed for a quiz game experience.",
    image: "/images/project/quiz_game.png",
    technologies: ["Figma", "UI Design", "Prototyping"],
    category: "UI/UX Design",
  },
  {
    title: "Milk Shop App",
    description: "A minimal and friendly shopping app UI for dairy products.",
    image: "/images/project/milk_shop.png",
    technologies: ["Figma", "Wireframing", "Visual Design"],
    category: "UI/UX Design",
  },
  {
    title: "Styling Suggestion App",
    description: "A fashion-oriented app offering outfit suggestions based on user preferences.",
    image: "/images/project/styling.png",
    technologies: ["Figma", "Color Theory", "Typography"],
    category: "UI/UX Design",
  },
]

const categories = ["All", "Flutter Apps", "UI/UX Design", "Web Projects"]

export function Projects() {
  const [filter, setFilter] = useState("All")
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="py-24 lg:py-32 section-bg-alt relative z-10">
      <div className="container mx-auto px-6 xl:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="section-label">Portfolio</p>
          <div className="section-divider" />
          <h2 className="section-heading mb-8">Featured Projects</h2>

          {/* Filter pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2.5 rounded-xl text-base font-semibold transition-all duration-200 ${
                  filter === cat
                    ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/25"
                    : "glass text-muted-foreground hover:text-foreground hover:border-blue-400/50 border border-border/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.94, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="glass rounded-2xl overflow-hidden group card-hover shadow-sm h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Hover overlay with buttons */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 gap-3">
                      <button className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold bg-white/20 backdrop-blur-sm text-white rounded-xl py-2.5 hover:bg-white/30 transition-colors border border-white/20">
                        <Github className="h-4 w-4" /> Code
                      </button>
                      <button className="flex-1 flex items-center justify-center gap-2 text-sm font-semibold bg-gradient-to-r from-blue-500 to-violet-500 text-white rounded-xl py-2.5 hover:opacity-90 transition-opacity">
                        <ExternalLink className="h-4 w-4" /> Demo
                      </button>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-black/55 text-white backdrop-blur-sm border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-base mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((t, j) => (
                        <span key={j} className="text-xs px-3 py-1 rounded-lg bg-muted text-muted-foreground font-medium border border-border/60">
                          {t}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="text-xs px-3 py-1 rounded-lg bg-muted text-muted-foreground font-medium border border-border/60">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
