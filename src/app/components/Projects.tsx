import { useState, useMemo } from "react";
import { Section, Reveal } from "./Section";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { projects, profile } from "../data";
import { ProjectModal } from "./DetailModals";

const statusStyle: Record<string, { fg: string; label: string }> = {
  Active: { fg: "var(--sig)", label: "ACTIVE" },
  Complete: { fg: "var(--text-3)", label: "SHIPPED" },
  "In Progress": { fg: "var(--sev-medium)", label: "WIP" },
  Research: { fg: "var(--sev-critical)", label: "RESEARCH" },
};

/** Buckets the flat project list into meaningful filters. */
const buckets: Record<string, (t: string) => boolean> = {
  All: () => true,
  Security: (t) => ["AI SOC Platform", "CVE Privilege Escalation"].includes(t),
  "AI & Automation": (t) => ["Astra AI Assistant", "CloseCLAW", "Puzzle AI"].includes(t),
  Platforms: (t) =>
    ["IBRAT Talim", "Pyramid Academy", "IQBOL Academy", "School №329"].includes(t),
  Apps: (t) => ["Midnight Chess", "Cyber Wardens Chat"].includes(t),
};

export function Projects() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () => projects.filter((p) => buckets[filter](p.title)),
    [filter]
  );
  const selectedProject = projects.find((p) => p.id === selectedId) || null;

  return (
    <>
      <Section
        id="work"
        index="006"
        label="Selected Work"
        title="Systems I've designed, shipped and secured."
        intro={
          <>
            Every entry links to source on GitHub. Where a build is publicly hosted, a live demo is
            linked too.
          </>
        }
      >
        {/* Filters */}
        <div className="mb-6 flex flex-wrap items-center gap-1.5">
          {Object.keys(buckets).map((k) => {
            const count = projects.filter((p) => buckets[k](p.title)).length;
            const isActive = k === filter;
            return (
              <button
                key={k}
                onClick={() => setFilter(k)}
                className="mono px-2.5 py-1.5 text-[10.5px] transition-colors"
                style={{
                  border: `1px solid ${isActive ? "var(--line-3)" : "var(--line)"}`,
                  background: isActive ? "var(--bg-2)" : "transparent",
                  color: isActive ? "var(--text)" : "var(--text-3)",
                  borderRadius: "var(--r-sm)",
                  letterSpacing: "0.05em",
                }}
              >
                {k.toUpperCase()}
                <span className="ml-1.5" style={{ color: "var(--text-4)" }}>
                  {String(count).padStart(2, "0")}
                </span>
              </button>
            );
          })}
        </div>

        {/* Table header — desktop only */}
        <div
          className="mono hidden md:grid px-4 py-2.5 text-[10px] md:grid-cols-12 gap-4"
          style={{
            color: "var(--text-4)",
            letterSpacing: "0.1em",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <span className="md:col-span-4">PROJECT</span>
          <span className="md:col-span-4">DESCRIPTION</span>
          <span className="md:col-span-2">STACK</span>
          <span className="md:col-span-2 text-right">LINKS</span>
        </div>

        {/* Rows */}
        <div>
          {filtered.map((p, i) => {
            const st = statusStyle[p.status] ?? statusStyle.Complete;
            return (
              <Reveal key={p.id} delay={Math.min(i * 0.03, 0.2)}>
                <div
                  className="grid gap-3 px-4 py-5 md:grid-cols-12 md:items-center md:gap-4 transition-colors cursor-pointer"
                  style={{ borderBottom: "1px solid var(--line)" }}
                  onClick={() => setSelectedId(p.id)}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-1)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  {/* Name + status */}
                  <div className="md:col-span-4 flex items-start gap-3">
                    <p.icon size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--text-3)" }} />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <h3 className="text-[14px] font-medium" style={{ color: "var(--text)" }}>
                          {p.title}
                        </h3>
                        <span className="mono text-[9.5px]" style={{ color: st.fg, letterSpacing: "0.08em" }}>
                          {st.label}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p
                    className="md:col-span-4 text-[12.5px] leading-relaxed"
                    style={{ color: "var(--text-3)" }}
                  >
                    {p.shortDesc}
                  </p>

                  {/* Stack */}
                  <div className="md:col-span-2 flex flex-wrap gap-1">
                    {p.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="mono px-1.5 py-0.5 text-[9.5px]"
                        style={{
                          border: "1px solid var(--line)",
                          borderRadius: "var(--r-sm)",
                          color: "var(--text-3)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                    {p.tags.length > 3 && (
                      <span className="mono text-[9.5px] self-center" style={{ color: "var(--text-4)" }}>
                        +{p.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="md:col-span-2 flex items-center gap-2 md:justify-end">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Source"
                      className="grid h-7 w-7 place-items-center transition-colors"
                      style={{ color: "var(--text-3)", border: "1px solid var(--line)", borderRadius: "var(--r-sm)" }}
                    >
                      <Github size={13} />
                    </a>
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        title="Live demo"
                        className="grid h-7 w-7 place-items-center transition-colors"
                        style={{ color: "var(--text-3)", border: "1px solid var(--line)", borderRadius: "var(--r-sm)" }}
                      >
                        <ExternalLink size={12} />
                      </a>
                    )}
                    <span
                      className="mono text-[10px] ml-1"
                      style={{ color: "var(--text-4)" }}
                    >
                      DETAILS
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mono mt-6 inline-flex items-center gap-2 text-[11px] transition-colors"
          style={{ color: "var(--text-2)" }}
        >
          <Github size={13} />
          All repositories on GitHub
          <ArrowUpRight size={12} />
        </a>
      </Section>

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
