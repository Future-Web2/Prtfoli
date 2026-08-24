import { Section, Reveal } from "./Section";
import { research } from "../data";
import { ArrowUpRight } from "lucide-react";

const severityColor: Record<string, string> = {
  Critical: "var(--sev-critical)",
  High: "var(--sev-high)",
  Medium: "var(--sev-medium)",
  Low: "var(--sev-low)",
  Info: "var(--sev-info)",
};

export function Research() {
  return (
    <Section
      id="research"
      index="008"
      label="Research"
      title="Published research and write-ups."
      intro={
        <>
          Proof-of-concept work and full engagement write-ups — all against authorized or
          intentionally vulnerable targets.
        </>
      }
    >
      <div className="grid gap-px" style={{ background: "var(--line)" }}>
        {research.map((r, i) => (
          <Reveal key={r.title} delay={i * 0.05}>
            <a
              href={r.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group grid gap-4 p-6 md:grid-cols-12 md:items-center md:gap-8 transition-colors"
              style={{ background: "var(--bg)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
            >
              {/* Severity + year */}
              <div className="flex items-center gap-3 md:col-span-2">
                <span
                  className="mono px-1.5 py-0.5 text-[10px]"
                  style={{
                    color: severityColor[r.severity] ?? "var(--text-3)",
                    border: `1px solid ${severityColor[r.severity] ?? "var(--line-2)"}40`,
                    background: `${severityColor[r.severity] ?? "#fff"}12`,
                    borderRadius: "var(--r-sm)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {r.severity.toUpperCase()}
                </span>
                <span className="mono text-[11px]" style={{ color: "var(--text-4)" }}>
                  {r.year}
                </span>
              </div>

              {/* Title + summary */}
              <div className="md:col-span-8">
                <h3 className="text-[14.5px] font-medium" style={{ color: "var(--text)" }}>
                  {r.title}
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed" style={{ color: "var(--text-3)" }}>
                  {r.summary}
                </p>
              </div>

              {/* Link */}
              <div className="md:col-span-2 md:text-right">
                <span
                  className="mono inline-flex items-center gap-1.5 text-[11px]"
                  style={{ color: "var(--sig)" }}
                >
                  {r.linkLabel}
                  <ArrowUpRight
                    size={12}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <p className="mono mt-6 text-[11px] leading-relaxed" style={{ color: "var(--text-4)" }}>
        All research is conducted against systems I own or am explicitly authorized to test.
      </p>
    </Section>
  );
}
