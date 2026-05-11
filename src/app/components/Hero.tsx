import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Code2, ChevronDown, Github, Mail, Terminal } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.507 14.258l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.641.301z"/>
    </svg>
  );
}

const roles = [
  "Cybersecurity Specialist",
  "Red Team Analyst",
  "Full-Stack Developer",
  "Penetration Tester",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (charIndex < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex + 1));
          setCharIndex((c) => c + 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, charIndex - 1));
          setCharIndex((c) => c - 1);
        }, 35);
        return () => clearTimeout(timeout);
      } else {
        setRoleIndex((r) => (r + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [charIndex, typing, roleIndex]);

  const scrollToAbout = () => {
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      {/* Grid lines background effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Text content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-500/30 mb-6"
              style={{
                background: "rgba(124,58,237,0.12)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span
                className="text-violet-300 text-xs tracking-widest uppercase"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Cybersecurity & Development
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-white mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2.8rem, 7vw, 5rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Hi, I'm{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #a78bfa, #22d3ee, #34d399)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Yusufbek
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 mb-6 justify-center lg:justify-start"
            >
              <Terminal size={16} className="text-violet-400 flex-shrink-0" />
              <span
                className="text-cyan-300"
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
                }}
              >
                {displayed}
                <span className="animate-pulse text-violet-400">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="text-white/50 max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "1rem",
              }}
            >
              Cybersecurity specialist and full-stack developer. I break systems to make them stronger — from{" "}
              <span className="text-violet-400">penetration testing</span> and{" "}
              <span className="text-emerald-400">red teaming</span> to building{" "}
              <span className="text-cyan-400">secure web applications</span>.{" "}
              Certified in offensive security with hands-on experience
              in vulnerability assessment and threat analysis.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-10"
            >
              <button
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(124,58,237,0.5)]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(6,182,212,0.9))",
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 600,
                }}
              >
                <Code2 size={16} /> View Projects
              </button>
              <button
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="flex items-center gap-2 px-6 py-3 rounded-xl text-white/80 text-sm border border-white/15 transition-all duration-300 hover:bg-white/8 hover:text-white"
                style={{
                  backdropFilter: "blur(12px)",
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <Mail size={16} /> Contact Me
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { label: "GitHub", href: "https://github.com", el: <Github size={18} /> },
                { label: "Telegram", href: "https://t.me", el: <TelegramIcon size={18} /> },
                { label: "Email", href: "#contact", el: <Mail size={18} /> },
              ].map(({ label, href, el }) => (
                <a
                  key={label}
                  href={href}
                  onClick={(e) => {
                    if (href.startsWith("#")) {
                      e.preventDefault();
                      document
                        .querySelector(href)
                        ?.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="w-10 h-10 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-violet-400/50 transition-all duration-300 hover:bg-violet-500/10"
                  style={{ backdropFilter: "blur(12px)" }}
                  title={label}
                >
                  {el}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-shrink-0 relative"
          >
            {/* Glow ring */}
            <div
              className="absolute -inset-4 rounded-3xl opacity-40 blur-2xl"
              style={{
                background:
                  "conic-gradient(from 0deg, #7c3aed, #06b6d4, #10b981, #7c3aed)",
                animation: "spin 8s linear infinite",
              }}
            />

            <div
              className="relative w-72 h-80 rounded-3xl border border-white/15 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03))",
                backdropFilter: "blur(20px)",
                boxShadow:
                  "0 20px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.1)",
              }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1568992688065-536aad8a12f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Asilbek - Developer"
                className="w-full h-full object-cover"
              />

              {/* Overlay gradient */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to top, rgba(4,4,15,0.8) 0%, transparent 60%)",
                }}
              />

              {/* Info badge */}
              <div className="absolute bottom-4 left-4 right-4">
                <div
                  className="rounded-xl px-4 py-3 border border-white/10"
                  style={{
                    background: "rgba(4,4,15,0.7)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <p
                    className="text-white text-sm font-semibold"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Yusufbek
                  </p>
                  <p
                    className="text-white/50 text-xs"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    CyberSec & Dev · Tashkent
                  </p>
                </div>
              </div>

              {/* Corner icons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
                  <Shield size={14} className="text-violet-400" />
                </div>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center">
                  <Code2 size={14} className="text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Stats float cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2 }}
              className="absolute -left-14 top-1/4 px-3 py-2 rounded-xl border border-white/10"
              style={{
                background: "rgba(4,4,15,0.8)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-white text-xs font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>3</p>
              <p className="text-white/40 text-[10px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Security Certs</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3 }}
              className="absolute -right-14 bottom-1/4 px-3 py-2 rounded-xl border border-white/10"
              style={{
                background: "rgba(4,4,15,0.8)",
                backdropFilter: "blur(12px)",
              }}
            >
              <p className="text-white text-xs font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>5+</p>
              <p className="text-white/40 text-[10px]" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Years CyberSec</p>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/30 hover:text-white/60 transition-all"
        >
          <span className="text-xs uppercase tracking-widest" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            scroll
          </span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.button>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
}