"use client"

import { Smartphone, Palette, Database, Globe, Cloud, Zap } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Smartphone,
    title: "Cross-Platform App Development",
    description: "Beautiful, scalable mobile applications for Android, iOS, and Web using Flutter.",
    features: ["Flutter & Dart", "Firebase Integration", "Real-time Chat & Notifications", "Cross-Platform Codebase"],
    gradient: "from-blue-500 to-violet-500",
    shadow: "hover:shadow-blue-500/15",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Clean, intuitive interfaces with a focus on visual clarity and user experience.",
    features: ["Figma Wireframes & Prototypes", "User Flow & Navigation Design", "Pixel-Perfect Flutter UI", "Color Theory & Typography"],
    gradient: "from-violet-500 to-purple-500",
    shadow: "hover:shadow-violet-500/15",
  },
  {
    icon: Database,
    title: "Firebase Backend Integration",
    description: "Powerful backend solutions using Firebase for real-time functionality.",
    features: ["Firebase Auth & Firestore", "Cloud Storage & FCM", "Realtime Database", "Secure Login Systems"],
    gradient: "from-orange-500 to-pink-500",
    shadow: "hover:shadow-orange-500/15",
  },
  {
    icon: Globe,
    title: "Basic Web Development",
    description: "Responsive landing pages and portfolios using modern web tools.",
    features: ["HTML5 & CSS3", "Bootstrap Layouts", "JavaScript Fundamentals", "Responsive Design"],
    gradient: "from-emerald-500 to-cyan-500",
    shadow: "hover:shadow-emerald-500/15",
  },
  {
    icon: Cloud,
    title: "App Deployment & Handoff",
    description: "Deploy apps or hand off design + code smoothly using modern tools.",
    features: ["Git & GitHub Collaboration", "Play Store / App Store Readiness", "Netlify / Vercel for Web", "Clean Code Export"],
    gradient: "from-cyan-500 to-blue-500",
    shadow: "hover:shadow-cyan-500/15",
  },
  {
    icon: Zap,
    title: "Performance-Focused UI",
    description: "Apps that look great and run smoothly across all screen sizes.",
    features: ["Optimized Animations", "Smooth Scrolling & Responsiveness", "Device Compatibility Testing", "Lightweight Asset Management"],
    gradient: "from-pink-500 to-rose-500",
    shadow: "hover:shadow-pink-500/15",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 relative z-10">
      <div className="container mx-auto px-6 xl:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">What I Do</p>
          <div className="section-divider" />
          <h2 className="section-heading">Services I Offer</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-5 text-base lg:text-lg">
            End-to-end mobile and design services to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
              viewport={{ once: true }}
            >
              <div className={`group glass rounded-2xl p-7 xl:p-8 h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${s.shadow} shadow-sm flex flex-col`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-6 shadow-md`}>
                  <s.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="font-bold text-base lg:text-lg mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.description}</p>
                <div className={`h-px bg-gradient-to-r ${s.gradient} opacity-30 mb-5`} />
                <ul className="space-y-2.5 flex-1">
                  {s.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-muted-foreground">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.gradient} flex-shrink-0`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
