import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Mail, Github, Send, MapPin, MessageSquare, CheckCircle, Globe } from "lucide-react";
import { profile } from "../data";

// Telegram SVG icon (lucide doesn't have it)
function TelegramIcon({ size = 16, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.507 14.258l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.641.301z"/>
    </svg>
  );
}

const socialLinks = [
  { icon: Github, label: "GitHub", handle: profile.githubHandle, href: profile.github, color: "#ffffff", isSvg: false },
  { icon: Globe, label: "Website", handle: "veranix.xyz", href: profile.website, color: "#22d3ee", isSvg: false },
  { icon: TelegramIcon, label: "Telegram", handle: profile.telegramHandle, href: profile.telegram, color: "#2AABEE", isSvg: true },
  { icon: Mail, label: "Email", handle: profile.email, href: `mailto:${profile.email}`, color: "#7c3aed", isSvg: false },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 px-6 pb-40">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-pink-400 text-xs uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // contact.init()
          </span>
          <h2
            className="text-white mb-4"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "clamp(2rem, 5vw, 3rem)",
              fontWeight: 700,
              letterSpacing: "-0.02em",
            }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f472b6, #a78bfa)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Touch
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-pink-500 to-violet-500 mx-auto rounded-full mb-4" />
          <p
            className="text-white/40 max-w-md mx-auto"
            style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}
          >
            Need a security audit, penetration test, or want to discuss a project? I'm always open to cybersecurity and development opportunities.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: Info */}
          <div className="lg:col-span-2 space-y-5">
            <GlassCard delay={0.1} glow="purple" className="p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                  <MessageSquare size={18} className="text-violet-400" />
                </div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Let's Talk
                </h3>
              </div>
              <div className="space-y-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center border border-white/10 transition-all group-hover:border-white/25"
                      style={{
                        background: `${social.color}12`,
                      }}
                    >
                      <social.icon size={16} color={social.color} />
                    </div>
                    <div>
                      <p
                        className="text-white/40 text-xs"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {social.label}
                      </p>
                      <p
                        className="text-white/70 text-sm group-hover:text-white transition-colors"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {social.handle}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </GlassCard>

            <GlassCard delay={0.2} glow="cyan" className="p-5">
              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-cyan-400 flex-shrink-0" />
                <div>
                  <p
                    className="text-white/40 text-xs"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Location
                  </p>
                  <p
                    className="text-white/70 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Tashkent, Uzbekistan · Remote OK
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.3} glow="none" className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <p
                  className="text-emerald-400 text-sm"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  Open to opportunities
                </p>
              </div>
              <p
                className="text-white/40 text-xs leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Looking for cybersecurity roles, penetration testing gigs, freelance security audits, or development collaborations.
              </p>
            </GlassCard>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            <GlassCard delay={0.15} glow="pink" className="p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center mb-4">
                    <CheckCircle size={32} className="text-emerald-400" />
                  </div>
                  <h3
                    className="text-white mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                  >
                    Message Sent!
                  </h3>
                  <p
                    className="text-white/45 text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Thanks for reaching out. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-6 px-4 py-2 rounded-xl text-sm text-white/60 border border-white/10 hover:text-white transition-all"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-white/50 text-xs mb-2 uppercase tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Name
                      </label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 border border-white/10 focus:border-violet-400/50 focus:outline-none transition-all"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          backdropFilter: "blur(8px)",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      />
                    </div>
                    <div>
                      <label
                        className="block text-white/50 text-xs mb-2 uppercase tracking-wider"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        Email
                      </label>
                      <input
                        required
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 border border-white/10 focus:border-violet-400/50 focus:outline-none transition-all"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          backdropFilter: "blur(8px)",
                          fontFamily: "'Space Grotesk', sans-serif",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      className="block text-white/50 text-xs mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Subject
                    </label>
                    <input
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="Project / Collaboration / Job opportunity..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 border border-white/10 focus:border-violet-400/50 focus:outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(8px)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      className="block text-white/50 text-xs mb-2 uppercase tracking-wider"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell me about your project or idea..."
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/25 border border-white/10 focus:border-violet-400/50 focus:outline-none transition-all resize-none"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(8px)",
                        fontFamily: "'Space Grotesk', sans-serif",
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-white text-sm font-semibold transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] disabled:opacity-60 disabled:cursor-not-allowed"
                    style={{
                      background: loading
                        ? "rgba(124,58,237,0.4)"
                        : "linear-gradient(135deg, rgba(124,58,237,0.85), rgba(6,182,212,0.85))",
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}