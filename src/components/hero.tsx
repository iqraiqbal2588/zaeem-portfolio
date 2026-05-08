"use client"

import { Mail, ArrowDown, Sparkles } from "lucide-react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import Image from "next/image"

const socialLinks = [
  { icon: Mail, href: "mailto:Kzaeemkhan833@gmail.com", label: "Email" },
]

const stats = [
  { value: "5+", label: "Years Exp." },
  { value: "24+", label: "Projects" },
  { value: "16+", label: "Clients" },
]

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
})

export function Hero() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 px-6 z-10">
      <div className="container mx-auto px-6 xl:px-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ── Left ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2.5 glass text-blue-600 dark:text-blue-400 text-sm font-semibold px-5 py-2.5 rounded-full mb-8 shadow-sm">
              <Sparkles className="h-4 w-4" />
              Available for new opportunities
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            </motion.div>

            {/* Name */}
            <motion.h1 {...fadeUp(0.2)} className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight leading-[1.02] mb-6">
              Hi, I&apos;m{" "}
              <span className="gradient-text">Zaeem Khan</span>
            </motion.h1>

            {/* Type animation */}
            <motion.div {...fadeUp(0.32)} className="text-xl sm:text-2xl text-muted-foreground mb-6 h-9 font-medium">
              <TypeAnimation
                sequence={["Flutter Developer", 2200, "UI/UX Designer", 2200, "Mobile App Developer", 2200, "Cross-Platform Expert", 2200]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
              />
            </motion.div>

            {/* Description */}
            <motion.p {...fadeUp(0.42)} className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              Passionate about building beautiful, high-performance mobile apps with Flutter and crafting seamless user experiences with Figma.
            </motion.p>

            {/* CTA buttons */}
            <motion.div {...fadeUp(0.52)} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <button
                onClick={() => go("projects")}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-base shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                View My Work
              </button>

            </motion.div>

            {/* Social icons */}
            <motion.div {...fadeUp(0.62)} className="flex justify-center lg:justify-start gap-3">
              {socialLinks.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -3 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-400/60 transition-colors shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* ── Right ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex flex-col items-center gap-8"
          >
            {/* Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-violet-500 to-purple-600 rounded-full blur-3xl opacity-25 scale-110" />
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[360px] lg:h-[360px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden ring-4 ring-white/30 dark:ring-white/10 shadow-2xl">
                <Image src="/images/Zaeem-khan.jpeg" alt="Zaeem Khan" fill className="object-cover" priority />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 glass rounded-2xl px-5 py-3 shadow-xl text-base font-bold"
              >
                ✦ 5+ Yrs Exp.
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="flex gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                  className="glass rounded-2xl px-6 py-4 text-center shadow-sm min-w-[90px]"
                >
                  <p className="text-2xl font-extrabold gradient-text leading-none">{s.value}</p>
                  <p className="text-sm text-muted-foreground mt-1.5 font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex justify-center mt-20"
        >
          <motion.button
            onClick={() => go("about")}
            animate={{ y: [0, 9, 0] }}
            transition={{ repeat: Infinity, duration: 2.2 }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-blue-500 transition-colors"
            aria-label="Scroll down"
          >
            <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
            <ArrowDown className="h-5 w-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
