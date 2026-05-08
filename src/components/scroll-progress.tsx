"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useTransform } from "framer-motion"

export function ScrollProgress() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const update = () => {
      const el = document.documentElement
      setScrollY(el.scrollTop / (el.scrollHeight - el.clientHeight))
    }
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  const scaleX = useSpring(scrollY, { stiffness: 200, damping: 30 })

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-purple-500 z-[60] origin-left"
      style={{ scaleX }}
    />
  )
}
