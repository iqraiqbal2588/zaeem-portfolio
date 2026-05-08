"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"

const navItems = ["About", "Skills", "Services", "Projects", "Contact"]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 50)
      const found = navItems.map((i) => i.toLowerCase()).find((s) => {
        const el = document.getElementById(s)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= 140 && r.bottom >= 140
      })
      if (found) setActiveSection(found)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <>
      <motion.header
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 dark:bg-background/90 backdrop-blur-2xl border-b border-border/60 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* ── Logo ── */}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-extrabold gradient-text tracking-tight select-none flex-shrink-0"
            >
              {"<DevZaeem />"}
            </button>

            {/* ── Center pill nav (desktop) ── */}
            <nav className="hidden md:flex items-center">
              <div className={`flex items-center gap-1 px-2 py-1.5 rounded-2xl transition-all duration-300 ${
                isScrolled
                  ? "bg-muted/60 dark:bg-white/[0.06]"
                  : "bg-white/50 dark:bg-white/[0.05] backdrop-blur-xl border border-white/40 dark:border-white/[0.08] shadow-sm"
              }`}>
                {navItems.map((item) => {
                  const active = activeSection === item.toLowerCase()
                  return (
                    <button
                      key={item}
                      onClick={() => go(item.toLowerCase())}
                      className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-200 ${
                        active
                          ? "text-white"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-violet-600 rounded-xl shadow-md shadow-blue-500/30"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative z-10">{item}</span>
                    </button>
                  )
                })}
              </div>
            </nav>

            {/* ── Right controls ── */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {/* Theme toggle */}
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                aria-label="Toggle theme"
              >
                <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </button>

              {/* Hire me CTA — desktop only */}
              <button
                onClick={() => go("contact")}
                className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-bold shadow-md shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
              >
                Let's Work
              </button>

              {/* Mobile hamburger */}
              <button
                className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/70 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile drawer ── */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-72 bg-background/95 backdrop-blur-2xl border-l border-border shadow-2xl md:hidden flex flex-col"
            >
              <div className="flex items-center justify-between px-6 h-16 border-b border-border/60">
                <span className="text-lg font-extrabold gradient-text">{"<DevZaeem />"}</span>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navItems.map((item) => {
                  const active = activeSection === item.toLowerCase()
                  return (
                    <button
                      key={item}
                      onClick={() => go(item.toLowerCase())}
                      className={`text-left px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                        active
                          ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-blue-500/20"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}
              </nav>

              <div className="p-4 border-t border-border/60">
                <button
                  onClick={() => go("contact")}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-base shadow-md shadow-blue-500/25 hover:opacity-90 transition-opacity"
                >
                  Let's Work
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
