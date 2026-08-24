import { useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, ShieldCheck, ArrowUpRight } from "lucide-react";

/* ── Shared shell ─────────────────────────────────────────────────────────── */

function ModalShell({
  eyebrow,
  title,
  subtitle,
  onClose,
  children,
}: {
  eyebrow: ReactNode;
  title: string;
  subtitle: ReactNode;
  onClose: () => void;
  children: ReactNode;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18 }}
        className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto p-4 sm:p-8"
        style={{ background: "rgba(6,7,9,0.86)", backdropFilter: "blur(6px)" }}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.22, ease: [0.22, 0.61, 0.36, 1] }}
          className="w-full my-auto"
          style={{
            maxWidth: "760px",
            background: "var(--bg-1)",
            border: "1px solid var(--line-2)",
            borderRadius: "var(--r)",
          }}
        >
          <div
            className="sticky top-0 z-10 flex items-start justify-between gap-4 px-6 py-4"
            style={{ background: "var(--bg-2)", borderBottom: "1px solid var(--line)" }}
          >
            <div className="min-w-0">
              <div className="mono mb-1.5 text-[10px]" style={{ letterSpacing: "0.1em" }}>
                {eyebrow}
              </div>
              <h2 className="text-[17px] font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                {title}
              </h2>
              <div className="mono mt-1 text-[11px]" style={{ color: "var(--text-3)" }}>
                {subtitle}
              </div>
            </div>
            <button
              onClick={onClose}
              aria-label="Close"
              className="grid h-8 w-8 flex-shrink-0 place-items-center"
              style={{ color: "var(--text-3)", border: "1px solid var(--line-2)", borderRadius: "var(--r-sm)" }}
            >
              <X size={15} />
            </button>
          </div>

          <div className="px-6 py-6">{children}</div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function Block({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div>
      <p className="mono mb-3 text-[10px]" style={{ color: "var(--text-4)", letterSpacing: "0.12em" }}>
        {label}
      </p>
      {children}
    </div>
  );
}

/* ── Project modal ────────────────────────────────────────────────────────── */

interface ProjectDetailProps {
  project: {
    id: number;
    icon: React.ElementType;
    title: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    status: string;
    highlights: string[];
  };
  allProjects: ProjectDetailProps["project"][];
  onClose: () => void;
  onNavigate: (id: number) => void;
}

const statusFg: Record<string, string> = {
  Active: "var(--sig)",
  Complete: "var(--text-3)",
  "In Progress": "var(--sev-medium)",
  Research: "var(--sev-critical)",
};

export function ProjectModal({ project, allProjects, onClose, onNavigate }: ProjectDetailProps) {
  const others = allProjects.filter((p) => p.id !== project.id).slice(0, 6);
  const repo = project.github.replace("https://github.com/", "");

  return (
    <ModalShell
      eyebrow={
        <span style={{ color: statusFg[project.status] ?? "var(--text-3)" }}>
          ● {project.status.toUpperCase()}
        </span>
      }
      title={project.title}
      subtitle={repo}
      onClose={onClose}
    >
      <div className="space-y-7">
        <p className="text-[13.5px] leading-[1.75]" style={{ color: "var(--text-2)" }}>
          {project.description}
        </p>

        <Block label="KEY CAPABILITIES">
          <ul className="space-y-2">
            {project.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2.5 text-[12.5px] leading-relaxed"
                style={{ color: "var(--text-3)" }}
              >
                <span
                  className="mt-[7px] inline-block h-1 w-1 flex-shrink-0"
                  style={{ background: "var(--sig)" }}
                />
                {h}
              </li>
            ))}
          </ul>
        </Block>

        <Block label="STACK">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <span
                key={t}
                className="mono px-2 py-1 text-[10.5px]"
                style={{
                  border: "1px solid var(--line-2)",
                  borderRadius: "var(--r-sm)",
                  color: "var(--text-2)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </Block>

        <div className="flex flex-wrap gap-2 pt-1">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 text-[12.5px]"
            style={{
              border: "1px solid var(--line-2)",
              borderRadius: "var(--r-sm)",
              color: "var(--text-2)",
            }}
          >
            <Github size={14} /> View source
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 text-[12.5px] font-medium"
              style={{ background: "var(--sig)", color: "#06210c", borderRadius: "var(--r-sm)" }}
            >
              <ExternalLink size={13} /> Open live demo
            </a>
          )}
        </div>

        {others.length > 0 && (
          <Block label="OTHER WORK">
            <div className="grid gap-px sm:grid-cols-2" style={{ background: "var(--line)" }}>
              {others.map((p) => {
                const PIcon = p.icon;
                return (
                  <button
                    key={p.id}
                    onClick={() => onNavigate(p.id)}
                    className="flex items-center gap-3 p-3 text-left transition-colors"
                    style={{ background: "var(--bg-1)" }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-1)")}
                  >
                    <PIcon size={14} style={{ color: "var(--text-3)" }} />
                    <span className="flex-1 truncate text-[12.5px]" style={{ color: "var(--text-2)" }}>
                      {p.title}
                    </span>
                    <ArrowUpRight size={12} style={{ color: "var(--text-4)" }} />
                  </button>
                );
              })}
            </div>
          </Block>
        )}
      </div>
    </ModalShell>
  );
}

/* ── Certificate modal ────────────────────────────────────────────────────── */

interface CertDetailProps {
  cert: {
    id: number;
    title: string;
    fullTitle: string;
    issuer: string;
    date: string;
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
  const others = allCerts.filter((c) => c.id !== cert.id);

  return (
    <ModalShell
      eyebrow={
        <span style={{ color: "var(--sig)" }}>
          <ShieldCheck size={11} className="mr-1 inline align-[-1px]" />
          VERIFIED CREDENTIAL
        </span>
      }
      title={cert.fullTitle}
      subtitle={cert.issuer}
      onClose={onClose}
    >
      <div className="space-y-7">
        <div style={{ border: "1px solid var(--line)", borderRadius: "var(--r-sm)", overflow: "hidden" }}>
          <img src={cert.image} alt={cert.fullTitle} className="block h-auto w-full" />
        </div>

        <div className="grid gap-px sm:grid-cols-3" style={{ background: "var(--line)" }}>
          {[
            { k: "Issuer", v: cert.issuer },
            { k: "Issued", v: cert.date },
            { k: "Credential ID", v: cert.credentialId },
          ].map((m) => (
            <div key={m.k} className="p-3.5" style={{ background: "var(--bg-2)" }}>
              <p className="mono text-[9.5px]" style={{ color: "var(--text-4)", letterSpacing: "0.1em" }}>
                {m.k.toUpperCase()}
              </p>
              <p className="mono mt-1.5 break-all text-[11.5px]" style={{ color: "var(--text-2)" }}>
                {m.v}
              </p>
            </div>
          ))}
        </div>

        <p className="text-[13px] leading-[1.75]" style={{ color: "var(--text-2)" }}>
          {cert.description}
        </p>

        <Block label="SKILLS VALIDATED">
          <div className="flex flex-wrap gap-1.5">
            {cert.skills.map((s) => (
              <span
                key={s}
                className="mono px-2 py-1 text-[10.5px]"
                style={{
                  border: "1px solid var(--line-2)",
                  borderRadius: "var(--r-sm)",
                  color: "var(--text-2)",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </Block>

        {others.length > 0 && (
          <Block label="OTHER CREDENTIALS">
            <div className="flex flex-wrap gap-1.5">
              {others.map((c) => (
                <button
                  key={c.id}
                  onClick={() => onNavigate(c.id)}
                  className="mono px-2.5 py-1.5 text-[11px] transition-colors"
                  style={{
                    border: "1px solid var(--line-2)",
                    borderRadius: "var(--r-sm)",
                    color: "var(--text-3)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-3)")}
                >
                  {c.title}
                </button>
              ))}
            </div>
          </Block>
        )}
      </div>
    </ModalShell>
  );
}
