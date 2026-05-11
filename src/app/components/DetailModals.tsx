import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink, Github, CheckCircle, Award, Zap } from "lucide-react";
import { GlassCard } from "./GlassCard";

interface ProjectDetailProps {
  project: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    tags: string[];
    color: string;
    github: string;
    demo: string;
    status: string;
    highlights: string[];
  };
  allProjects: ProjectDetailProps["project"][];
  onClose: () => void;
  onNavigate: (id: number) => void;
}

export function ProjectModal({ project, allProjects, onClose, onNavigate }: ProjectDetailProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const Icon = project.icon;
  const others = allProjects.filter((p) => p.id !== project.id);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const scrollCarousel = (dir: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    }
  };

  const statusColors: Record<string, string> = {
    Active: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
    Complete: "text-cyan-400 bg-cyan-400/10 border-cyan-400/25",
    "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/25",
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(4,4,15,0.85)", backdropFilter: "blur(16px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/12"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            backdropFilter: "blur(24px)",
            boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 60px ${project.color}25, inset 0 1px 0 rgba(255,255,255,0.1)`,
          }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 border-b border-white/8"
            style={{ background: "rgba(4,4,15,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                style={{ background: `${project.color}20`, borderColor: `${project.color}40` }}
              >
                <Icon size={22} style={{ color: project.color }} />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {project.title}
                </h2>
                <span
                  className={`text-xs px-2 py-0.5 rounded-lg border ${statusColors[project.status]}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  {project.status}
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-8 space-y-8">
            {/* Description */}
            <div>
              <p
                className="text-white/65 leading-relaxed text-[0.95rem]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {project.description}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h3
                className="text-white/40 text-xs uppercase tracking-widest mb-4"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Key Features
              </h3>
              <div className="space-y-2.5">
                {project.highlights.map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-5 h-5 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ background: `${project.color}20`, border: `1px solid ${project.color}40` }}
                    >
                      <Zap size={11} style={{ color: project.color }} />
                    </div>
                    <span
                      className="text-white/65 text-sm"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {h}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3
                className="text-white/40 text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs border border-white/10 text-white/60"
                    style={{
                      background: `${project.color}12`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-2">
              <a
                href={project.github}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-white/70 border border-white/10 hover:text-white hover:border-white/25 transition-all"
                style={{ fontFamily: "'Space Grotesk', sans-serif", background: "rgba(255,255,255,0.04)" }}
              >
                <Github size={16} /> View Code
              </a>
              <a
                href={project.demo}
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl text-sm text-white font-semibold transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${project.color}cc, ${project.color})`,
                  fontFamily: "'Space Grotesk', sans-serif",
                }}
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>

            {/* Other projects carousel */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3
                  className="text-white/40 text-xs uppercase tracking-widest"
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                >
                  Other Projects
                </h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => scrollCarousel("left")}
                    className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all"
                  >
                    <ChevronLeft size={14} />
                  </button>
                  <button
                    onClick={() => scrollCarousel("right")}
                    className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/25 transition-all"
                  >
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
              <div
                ref={carouselRef}
                className="flex gap-3 overflow-x-auto pb-2"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                {others.map((p) => {
                  const PIcon = p.icon;
                  return (
                    <motion.button
                      key={p.id}
                      whileHover={{ scale: 1.03, y: -2 }}
                      onClick={() => onNavigate(p.id)}
                      className="flex-shrink-0 w-48 p-4 rounded-2xl border border-white/8 text-left transition-all hover:border-white/20"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border mb-3"
                        style={{ background: `${p.color}15`, borderColor: `${p.color}30` }}
                      >
                        <PIcon size={16} style={{ color: p.color }} />
                      </div>
                      <p
                        className="text-white text-xs font-semibold mb-1 leading-snug"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {p.title}
                      </p>
                      <p
                        className="text-white/40 text-[10px] leading-relaxed"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {p.tags.slice(0, 2).join(" · ")}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

// ─── Certificate Modal ───────────────────────────────────────────────────────

interface CertDetailProps {
  cert: {
    id: number;
    title: string;
    fullTitle: string;
    issuer: string;
    date: string;
    category: string;
    color: string;
    credentialId: string;
    image: string;
    description: string;
    skills: string[];
  };
  allCerts: CertDetailProps["cert"][];
  onClose: () => void;
  onNavigate: (id: number) => void;
}

export function CertModal({ cert, allCerts, onClose, onNavigate }: CertDetailProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const others = allCerts.filter((c) => c.id !== cert.id);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const scrollCarousel = (dir: "left" | "right") => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: dir === "right" ? 300 : -300, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        style={{ background: "rgba(4,4,15,0.85)", backdropFilter: "blur(16px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 30 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/12"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02))",
            backdropFilter: "blur(24px)",
            boxShadow: `0 30px 80px rgba(0,0,0,0.6), 0 0 60px ${cert.color}25, inset 0 1px 0 rgba(255,255,255,0.1)`,
          }}
        >
          {/* Header */}
          <div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 border-b border-white/8"
            style={{ background: "rgba(4,4,15,0.7)", backdropFilter: "blur(20px)" }}>
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center border"
                style={{ background: `${cert.color}20`, borderColor: `${cert.color}40` }}
              >
                <Award size={22} style={{ color: cert.color }} />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {cert.title}
                </h2>
                <div className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle size={12} />
                  <span className="text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>Verified · {cert.issuer}</span>
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-xl border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/25 transition-all"
            >
              <X size={18} />
            </button>
          </div>

          <div className="p-8 space-y-8">
            {/* Certificate image */}
            <div
              className="rounded-2xl overflow-hidden border border-white/10"
              style={{ boxShadow: `0 10px 40px ${cert.color}25` }}
            >
              <img
                src={cert.image}
                alt={cert.fullTitle}
                className="w-full h-auto object-contain"
                style={{ background: "rgba(255,255,255,0.02)" }}
              />
            </div>

            {/* Full title & meta */}
            <div
              className="rounded-2xl p-5 border border-white/8"
              style={{ background: `${cert.color}0c` }}
            >
              <p
                className="text-white font-semibold mb-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {cert.fullTitle}
              </p>
              <div className="flex gap-4 text-white/40 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                <span>Issued: {cert.date}</span>
                <span>·</span>
                <span>ID: {cert.credentialId}</span>
              </div>
            </div>

            {/* Description */}
            <p
              className="text-white/60 leading-relaxed text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {cert.description}
            </p>

            {/* Skills */}
            <div>
              <h3
                className="text-white/40 text-xs uppercase tracking-widest mb-3"
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
              >
                Skills Validated
              </h3>
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 rounded-lg text-xs border text-white/70"
                    style={{
                      background: `${cert.color}15`,
                      borderColor: `${cert.color}35`,
                      fontFamily: "'JetBrains Mono', monospace",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other certs carousel */}
            {others.length > 0 && (
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-white/40 text-xs uppercase tracking-widest"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Other Certificates
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={() => scrollCarousel("left")}
                      className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
                    >
                      <ChevronLeft size={14} />
                    </button>
                    <button
                      onClick={() => scrollCarousel("right")}
                      className="w-7 h-7 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white transition-all"
                    >
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
                <div
                  ref={carouselRef}
                  className="flex gap-3 overflow-x-auto pb-2"
                  style={{ scrollbarWidth: "none" }}
                >
                  {others.map((c) => (
                    <motion.button
                      key={c.id}
                      whileHover={{ scale: 1.03, y: -2 }}
                      onClick={() => onNavigate(c.id)}
                      className="flex-shrink-0 w-52 rounded-2xl border border-white/8 overflow-hidden text-left hover:border-white/20 transition-all"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <img
                        src={c.image}
                        alt={c.title}
                        className="w-full h-28 object-cover"
                        style={{ objectPosition: "top" }}
                      />
                      <div className="p-3">
                        <p
                          className="text-white text-xs font-semibold"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {c.title}
                        </p>
                        <p
                          className="text-white/40 text-[10px]"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {c.issuer}
                        </p>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
