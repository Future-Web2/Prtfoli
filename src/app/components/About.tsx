import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Shield, Code2, Award, Zap } from "lucide-react";

const stats = [
  { icon: Shield, value: "3", label: "Security Certs", color: "text-violet-400", bg: "bg-violet-500/10", border: "border-violet-500/20" },
  { icon: Code2, value: "6+", label: "Projects", color: "text-cyan-400", bg: "bg-cyan-500/10", border: "border-cyan-500/20" },
  { icon: Award, value: "CRTA", label: "Red Team Certified", color: "text-emerald-400", bg: "bg-emerald-500/10", border: "border-emerald-500/20" },
  { icon: Zap, value: "5+", label: "Years CyberSec", color: "text-pink-400", bg: "bg-pink-500/10", border: "border-pink-500/20" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="text-violet-400 text-xs uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // about_me.exe
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
            Who Am{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #22d3ee)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              I?
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Story card */}
          <GlassCard delay={0.1} glow="purple" className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-violet-500/15 border border-violet-500/25 flex items-center justify-center">
                <Shield size={20} className="text-violet-400" />
              </div>
              <h3
                className="text-white"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                My Story
              </h3>
            </div>
            <div className="space-y-4">
              <p
                className="text-white/55 leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}
              >
                I'm <span className="text-violet-300">Yusufbek</span> — a cybersecurity specialist from{" "}
                <span className="text-violet-300">Tashkent, Uzbekistan</span>. My journey started
                with curiosity about how systems can be broken — and quickly turned into a passion
                for offensive security, red teaming, and building secure applications.
              </p>
              <p
                className="text-white/55 leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}
              >
                I hold certifications in{" "}
                <span className="text-violet-300">Red Team operations (CRTA)</span>,{" "}
                <span className="text-emerald-300">Web Application Hacking (WEB-RTA)</span>, and{" "}
                <span className="text-cyan-300">Cybersecurity fundamentals (C3SA)</span>{" "}
                from CyberWarFare Labs. I combine offensive security skills with
                full-stack development to build software that's secure by design.
              </p>
              <p
                className="text-white/55 leading-relaxed"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "0.95rem" }}
              >
                Beyond security, I also develop AI-powered Telegram bots, smart IoT dashboards, and
                automated vulnerability scanning platforms — always with security at the core.
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Red Teamer", "Pentester", "OWASP Top 10", "Secure Coding", "CTF Player", "Full-Stack Dev"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs border border-white/10 text-white/50"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    fontFamily: "'JetBrains Mono', monospace",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </GlassCard>

          {/* Right side */}
          <div className="space-y-6">
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <GlassCard key={stat.label} delay={0.2 + i * 0.1} glow="none" className="p-5">
                  <div className={`w-10 h-10 rounded-xl ${stat.bg} border ${stat.border} flex items-center justify-center mb-3`}>
                    <stat.icon size={18} className={stat.color} />
                  </div>
                  <p
                    className="text-white text-2xl font-bold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-white/40 text-xs"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </GlassCard>
              ))}
            </div>

            {/* Tools card */}
            <GlassCard delay={0.5} glow="cyan" className="p-6">
              <h3
                className="text-white mb-4"
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
              >
                Favourite Tools
              </h3>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { name: "Python", color: "#4f46e5" },
                  { name: "Node.js", color: "#0891b2" },
                  { name: "React", color: "#7c3aed" },
                  { name: "VS Code", color: "#0e7490" },
                  { name: "Docker", color: "#1d4ed8" },
                  { name: "Kali Linux", color: "#4f46e5" },
                  { name: "Burp Suite", color: "#0891b2" },
                  { name: "Wireshark", color: "#7c3aed" },
                  { name: "Metasploit", color: "#059669" },
                  { name: "Telegram API", color: "#059669" },
                ].map((tool) => (
                  <div
                    key={tool.name}
                    className="px-3 py-2 rounded-lg text-center text-xs text-white/60 border border-white/8 transition-all duration-300 hover:text-white hover:border-white/20"
                    style={{
                      background: `${tool.color}15`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tool.name}
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}