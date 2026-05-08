"use client"

import { Smartphone, Palette, Globe, Rocket } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const features = [
  { icon: Smartphone, title: "Mobile Development", description: "Cross-platform apps with Flutter & Dart — smooth, native-like UX on Android and iOS." },
  { icon: Palette, title: "UI/UX Design", description: "Intuitive interfaces in Figma — blending creativity with functionality." },
  { icon: Globe, title: "Web Development", description: "Responsive pages using HTML, CSS, Bootstrap, and JavaScript." },
  { icon: Rocket, title: "Performance", description: "Optimized animations, fast load times, consistent across all devices." },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  viewport: { once: true },
})

export function About() {
  return (
    <section id="about" className="py-24 lg:py-32 section-bg-alt relative z-10">
      <div className="container mx-auto px-6 xl:px-16 max-w-7xl">

        <motion.div {...fadeUp()} className="text-center mb-16">
          <p className="section-label">Who I Am</p>
          <div className="section-divider" />
          <h2 className="section-heading">About Me</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl lg:text-3xl font-bold">My Journey</h3>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              With over 5+ years of hands-on experience as a Flutter Developer and UI/UX Designer, I&apos;ve built a range of mobile applications focused on performance, usability, and modern design. My journey started with a deep interest in crafting beautiful user experiences — which naturally led me into mobile development and visual design.
            </p>
            <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
              I have strong practical experience in Flutter, Dart, and Figma — creating cross-platform apps with responsive UI and smooth navigation. I also have foundational knowledge of web development including HTML, CSS, Bootstrap, and JavaScript.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl border-2 border-border font-semibold text-base hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-200"
              >
                Let&apos;s Connect
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-8 bg-gradient-to-br from-blue-500/20 to-violet-500/20 rounded-3xl blur-2xl" />
            <Image src="/images/about.png" alt="About Zaeem Khan" fill className="object-contain relative z-10" />
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div key={i} {...fadeUp(i * 0.08)}>
              <div className="glass rounded-2xl p-7 text-center card-hover h-full shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl flex items-center justify-center mx-auto mb-5 border border-blue-200/30 dark:border-blue-500/20">
                  <f.icon className="h-7 w-7 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-bold text-base mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
