"use client"

import { Mail, ArrowUp } from "lucide-react"
import { motion } from "framer-motion"

const socialLinks = [
  { icon: Mail, href: "mailto:Kzaeemkhan833@gmail.com", label: "Email" },
]

const navLinks = ["About", "Skills", "Services", "Projects", "Contact"]

export function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="relative z-10">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />

      <div className="container mx-auto px-6 xl:px-16 max-w-7xl py-16">
        <div className="grid sm:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold gradient-text mb-4">{"<DevZaeem />"}</div>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xs">
              Flutter Developer & UI/UX Designer crafting beautiful, high-performance mobile experiences.
            </p>
            <div className="flex gap-3 mt-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.12, y: -2 }}
                  whileTap={{ scale: 0.93 }}
                  className="w-11 h-11 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-400/50 transition-colors shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">Navigation</p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => go(link.toLowerCase())}
                    className="text-base text-muted-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-5">Get In Touch</p>
            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Have a project in mind? I&apos;d love to hear about it.
            </p>
            <button
              onClick={() => go("contact")}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-base shadow-md shadow-blue-500/20 hover:shadow-blue-500/35 hover:scale-[1.02] transition-all duration-200"
            >
              Start a Project
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-border/60">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Zaeem Khan. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-2xl glass flex items-center justify-center text-muted-foreground hover:text-blue-600 hover:border-blue-400/50 transition-colors shadow-sm"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  )
}
