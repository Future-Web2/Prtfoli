import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Shield, Code2, Database, Cloud } from "lucide-react";

const skillGroups = [
  {
    icon: Shield,
    title: "Offensive Security",
    color: "violet",
    accent: "#7c3aed",
    skills: [
      { name: "Penetration Testing", level: 85 },
      { name: "Red Team Operations", level: 82 },
      { name: "Web App Hacking (OWASP)", level: 88 },
      { name: "Network Security", level: 80 },
      { name: "Vulnerability Assessment", level: 85 },
      { name: "Active Directory Attacks", level: 75 },
    ],
  },
  {
    icon: Code2,
    title: "Development",
    color: "cyan",
    accent: "#06b6d4",
    skills: [
      { name: "Python (Flask / FastAPI)", level: 88 },
      { name: "React / TypeScript", level: 85 },
      { name: "HTML / CSS / JavaScript", level: 90 },
      { name: "Node.js / Express", level: 80 },
      { name: "Telegram Bot API", level: 90 },
      { name: "REST APIs / WebSockets", level: 85 },
    ],
  },
  {
    icon: Database,
    title: "Security Tools",
    color: "emerald",
    accent: "#10b981",
    skills: [
      { name: "Burp Suite", level: 85 },
      { name: "Metasploit Framework", level: 78 },
      { name: "Nmap / Nessus", level: 82 },
      { name: "Wireshark", level: 80 },
      { name: "OWASP ZAP", level: 82 },
      { name: "Kali Linux", level: 88 },
    ],
  },
  {
    icon: Cloud,
    title: "DevOps & Infra",
    color: "pink",
    accent: "#ec4899",
    skills: [
      { name: "Docker", level: 75 },
      { name: "Linux / Bash Scripting", level: 85 },
      { name: "Git / GitHub", level: 88 },
      { name: "VPS / Server Hardening", level: 72 },
      { name: "Nginx / SSL / Let's Encrypt", level: 70 },
      { name: "CI/CD Pipelines", level: 65 },
    ],
  },
];

const techBadges = [
  "Kali Linux", "Burp Suite", "Metasploit", "Wireshark", "Nmap",
  "OWASP ZAP", "Nessus", "Hydra", "John the Ripper", "SQLMap",
  "Python", "React", "Node.js", "Docker", "Linux",
  "TypeScript", "Flask", "Telegram API", "Git", "Nginx",
];

interface SkillBarProps {
  name: string;
  level: number;
  accent: string;
  delay: number;
}

function SkillBar({ name, level, accent, delay }: SkillBarProps) {
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between">
        <span
          className="text-white/70 text-sm"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          {name}
        </span>
        <span
          className="text-white/40 text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {level}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${accent}cc, ${accent})`,
            boxShadow: `0 0 8px ${accent}80`,
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
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
            className="text-cyan-400 text-xs uppercase tracking-widest mb-3 block"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // skills.json
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
            Technical{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22d3ee, #34d399)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Skills
            </span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skill cards grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, gi) => (
            <GlassCard key={group.title} delay={gi * 0.1} glow="none" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center border"
                  style={{
                    background: `${group.accent}15`,
                    borderColor: `${group.accent}30`,
                  }}
                >
                  <group.icon size={18} style={{ color: group.accent }} />
                </div>
                <h3
                  className="text-white"
                  style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600 }}
                >
                  {group.title}
                </h3>
              </div>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    accent={group.accent}
                    delay={gi * 0.1 + si * 0.06}
                  />
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Tech badges */}
        <GlassCard delay={0.5} glow="none" className="p-6">
          <h3
            className="text-white/60 text-sm mb-4 text-center"
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            // tech_stack[ ]
          </h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {techBadges.map((badge, i) => (
              <motion.span
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03, duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg text-xs border border-white/10 text-white/60 hover:text-white hover:border-violet-400/40 transition-all duration-300 cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  fontFamily: "'JetBrains Mono', monospace",
                }}
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}