import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { projects, profile } from "../data";
import { ProjectModal } from "./DetailModals";

const statusColors: Record<string, string> = {
  Active: "text-emerald-400 bg-emerald-400/10 border-emerald-400/25",
  Complete: "text-cyan-400 bg-cyan-400/10 border-cyan-400/25",
  "In Progress": "text-amber-400 bg-amber-400/10 border-amber-400/25",
  Research: "text-rose-400 bg-rose-400/10 border-rose-400/25",
};

export function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId) || null;

  return (
    <>
      <section id="projects" className="relative py-28 px-6">
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
              className="text-emerald-400 text-xs uppercase tracking-widest mb-3 block"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // projects.ls -la
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
              Featured{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #34d399, #22d3ee)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Projects
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <GlassCard key={project.id} delay={i * 0.08} glow={project.glow} className="p-6 flex flex-col group cursor-pointer">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center border"
                    style={{
                      background: `${project.color}15`,
                      borderColor: `${project.color}30`,
                    }}
                  >
                    <project.icon size={20} style={{ color: project.color }} />
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-lg border ${statusColors[project.status]}`}
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title & description */}
                <h3
                  className="text-white mb-2"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                  }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/45 text-sm leading-relaxed flex-1 mb-5"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {project.shortDesc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-xs text-white/50 border border-white/8"
                      style={{
                        background: `${project.color}0d`,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-0.5 rounded text-xs text-white/30 border border-white/8"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/8">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs transition-colors"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    <Github size={14} /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1.5 text-white/40 hover:text-white text-xs transition-colors"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <ExternalLink size={14} /> Demo
                    </a>
                  )}
                  <button
                    onClick={() => setSelectedId(project.id)}
                    className="ml-auto flex items-center gap-1.5 text-xs font-semibold transition-all hover:gap-2"
                    style={{ color: project.color, fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Details <ArrowRight size={13} />
                  </button>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* View more */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="text-center mt-10"
          >
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-white/60 border border-white/10 hover:text-white hover:border-white/25 transition-all duration-300"
              style={{
                backdropFilter: "blur(12px)",
                background: "rgba(255,255,255,0.04)",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              <Github size={16} /> View all on GitHub
            </a>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          allProjects={projects}
          onClose={() => setSelectedId(null)}
          onNavigate={(id) => setSelectedId(id)}
        />
      )}
    </>
  );
}