"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function ParticleBackground() {
  const ref = useRef<HTMLDivElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const isDark = resolvedTheme === "dark"
    el.style.setProperty("--orb1", isDark ? "rgba(99,102,241,0.18)" : "rgba(99,102,241,0.10)")
    el.style.setProperty("--orb2", isDark ? "rgba(139,92,246,0.14)" : "rgba(139,92,246,0.08)")
    el.style.setProperty("--orb3", isDark ? "rgba(59,130,246,0.12)" : "rgba(59,130,246,0.07)")
  }, [resolvedTheme])

  return (
    <div ref={ref} className="fixed inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden>
      {/* Orb 1 */}
      <div
        className="animate-float-slow absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-[120px]"
        style={{ background: "var(--orb1, rgba(99,102,241,0.12))" }}
      />
      {/* Orb 2 */}
      <div
        className="animate-float-medium absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full blur-[100px]"
        style={{ background: "var(--orb2, rgba(139,92,246,0.10))" }}
      />
      {/* Orb 3 */}
      <div
        className="animate-float-slow absolute -bottom-40 left-1/3 w-[450px] h-[450px] rounded-full blur-[110px]"
        style={{ background: "var(--orb3, rgba(59,130,246,0.08))" }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(99,102,241,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  )
}
