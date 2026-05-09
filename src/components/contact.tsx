"use client"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle2, XCircle, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useState, useRef } from "react"

const contactInfo = [
  { icon: Mail, title: "Email", value: "Kzaeemkhan833@gmail.com", href: "mailto:Kzaeemkhan833@gmail.com", sub: "Drop me a line anytime" },
  { icon: Phone, title: "Phone", value: "+447979161690", href: "tel:+447979161690", sub: "Call or WhatsApp" },
  { icon: MapPin, title: "Location", value: "London, United Kingdom", sub: "Open to remote work" },
]

const whyMe = [
  { icon: "✦", title: "Quality First", desc: "Clean, maintainable code with best practices" },
  { icon: "⚡", title: "On-Time Delivery", desc: "Reliable project completion within deadlines" },
  { icon: "💬", title: "Clear Communication", desc: "Regular updates and transparent collaboration" },
  { icon: "🛡", title: "Post-Launch Support", desc: "Ongoing maintenance and feature updates" },
]

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setMessage("")
    if (!formRef.current) return
    const formData = new FormData(formRef.current)
    try {
      const res = await fetch("https://formsubmit.co/ajax/Kzaeemkhan833@gmail.com", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      })
      if (res.ok) {
        setStatus("success")
        setMessage("Your message has been sent!")
        formRef.current.reset()
      } else {
        throw new Error("Something went wrong.")
      }
    } catch (err: unknown) {
      setStatus("error")
      setMessage(err instanceof Error ? err.message : "Something went wrong.")
    }
  }

  return (
    <section id="contact" className="py-24 lg:py-32 section-bg-alt relative z-10">
      <div className="container mx-auto px-6 xl:px-16 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">Contact</p>
          <div className="section-divider" />
          <h2 className="section-heading">Let&apos;s Work Together</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mt-5 text-base lg:text-lg">
            Ready to bring your ideas to life? Let&apos;s create something incredible together.
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-3 gap-5 mb-14">
          {contactInfo.map((info, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
            >
              <div className="glass rounded-2xl p-7 text-center card-hover shadow-sm">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500/10 to-violet-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-blue-200/30 dark:border-blue-500/20">
                  <info.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mb-2">{info.title}</p>
                {info.href ? (
                  <a href={info.href} className="font-bold text-base text-blue-600 hover:underline block mb-1">{info.value}</a>
                ) : (
                  <p className="font-bold text-base mb-1">{info.value}</p>
                )}
                <p className="text-sm text-muted-foreground">{info.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-10 h-full shadow-sm">
              <h3 className="text-2xl font-bold mb-2">Why Work With Me?</h3>
              <p className="text-muted-foreground text-base mb-8">I bring dedication, clarity, and craft to every project.</p>
              <div className="space-y-6">
                {whyMe.map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-500/10 to-violet-500/10 border border-blue-200/30 dark:border-blue-500/20 flex items-center justify-center flex-shrink-0 text-xl">
                      {item.icon}
                    </div>
                    <div>
                      <p className="font-bold text-base">{item.title}</p>
                      <p className="text-muted-foreground text-sm mt-0.5">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="mt-10 pt-8 border-t border-border/60">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)}
                </div>
                <p className="text-base text-muted-foreground italic leading-relaxed">
                  &ldquo;Zaeem delivered a stunning Flutter app on time with excellent communication throughout the project.&rdquo;
                </p>
                <p className="text-sm font-semibold mt-3 text-muted-foreground">— Client, Solution Soul</p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once: true }}
          >
            <div className="glass rounded-2xl p-10 shadow-sm">
              <h3 className="text-2xl font-bold mb-1">Send a Message</h3>
              <p className="text-muted-foreground text-base mb-8">I&apos;ll get back to you within 24 hours.</p>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="box" />
                <div>
                  <label className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2 block">Your Name</label>
                  <Input name="name" required placeholder="John Doe" className="h-12 rounded-xl border-border/60 bg-background/50 text-base" />
                </div>
                <div>
                  <label className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2 block">Email Address</label>
                  <Input name="email" type="email" required placeholder="john@example.com" className="h-12 rounded-xl border-border/60 bg-background/50 text-base" />
                </div>
                <div>
                  <label className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2 block">Project Details</label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    className="min-h-[130px] resize-none rounded-xl border-border/60 bg-background/50 text-base"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-bold text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                  {status === "loading" ? "Sending..." : "Send Message"}
                </button>
                {message && (
                  <div className={`flex items-center gap-2 text-base font-medium ${status === "success" ? "text-emerald-600" : "text-red-500"}`}>
                    {status === "success" ? <CheckCircle2 className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                    {message}
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
