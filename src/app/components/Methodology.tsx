import { Section, Reveal } from "./Section";
import { methodology } from "../data";
import { ShieldCheck, FileText, Repeat } from "lucide-react";

const guarantees = [
  { icon: ShieldCheck, t: "Written authorization", d: "Scope and rules of engagement signed before any testing begins." },
  { icon: FileText, t: "Reproducible findings", d: "Every issue includes evidence and step-by-step reproduction." },
  { icon: Repeat, t: "Retest included", d: "Once remediation lands, affected findings are verified again at no cost." },
];

export function Methodology() {
  return (
    <Section
      id="method"
      index="003"
      label="Methodology"
      title="A repeatable engagement, start to finish."
      intro={
        <>
          The same six phases run on every assessment, so you always know where the work is and
          what lands on your desk at the end.
        </>
      }
    >
      {/* Phase grid */}
      <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--line)" }}>
        {methodology.map((m, i) => (
          <Reveal key={m.phase} delay={i * 0.05}>
            <div
              className="relative h-full p-6 transition-colors"
              style={{ background: "var(--bg)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
            >
              <div className="mb-4 flex items-baseline gap-3">
                <span
                  className="mono text-[26px] leading-none"
                  style={{ color: "var(--line-3)", fontWeight: 500 }}
                >
                  {m.phase}
                </span>
                <span
                  className="h-px flex-1"
                  style={{ background: "var(--line-2)" }}
                />
              </div>
              <h3 className="mb-2 text-[14px] font-medium" style={{ color: "var(--text)" }}>
                {m.title}
              </h3>
              <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--text-3)" }}>
                {m.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Guarantees */}
      <div className="mt-10 grid gap-px sm:grid-cols-3" style={{ background: "var(--line)" }}>
        {guarantees.map((g, i) => (
          <Reveal key={g.t} delay={0.1 + i * 0.05}>
            <div className="flex h-full items-start gap-3 p-5" style={{ background: "var(--bg-1)" }}>
              <g.icon size={15} className="mt-0.5 flex-shrink-0" style={{ color: "var(--sig)" }} />
              <div>
                <p className="text-[12.5px] font-medium" style={{ color: "var(--text)" }}>
                  {g.t}
                </p>
                <p className="mt-1 text-[12px] leading-relaxed" style={{ color: "var(--text-3)" }}>
                  {g.d}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
