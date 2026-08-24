import { Section, Reveal } from "./Section";
import { services } from "../data";
import { Check } from "lucide-react";

export function Services() {
  return (
    <Section
      id="services"
      index="002"
      label="Services"
      title="What I can be engaged for."
      intro={
        <>
          Scoped, authorized engagements — each one ends with a report your engineers can act on
          and a free retest once fixes land.
        </>
      }
    >
      <div className="grid gap-px" style={{ background: "var(--line)" }}>
        {services.map((s, i) => (
          <Reveal key={s.code} delay={i * 0.04}>
            <div
              className="grid gap-6 p-6 md:grid-cols-12 md:gap-8 transition-colors"
              style={{ background: "var(--bg)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-1)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg)")}
            >
              {/* Code + title */}
              <div className="md:col-span-4">
                <span className="mono text-[10px]" style={{ color: "var(--sig)", letterSpacing: "0.1em" }}>
                  {s.code}
                </span>
                <h3
                  className="mt-2 text-[15px] font-medium leading-snug"
                  style={{ color: "var(--text)" }}
                >
                  {s.title}
                </h3>
              </div>

              {/* Summary + tags */}
              <div className="md:col-span-5">
                <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-2)" }}>
                  {s.summary}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="mono px-1.5 py-0.5 text-[10px]"
                      style={{
                        border: "1px solid var(--line)",
                        borderRadius: "var(--r-sm)",
                        color: "var(--text-3)",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Deliverables */}
              <div className="md:col-span-3">
                <p
                  className="mono mb-2.5 text-[10px]"
                  style={{ color: "var(--text-4)", letterSpacing: "0.1em" }}
                >
                  DELIVERABLES
                </p>
                <ul className="space-y-1.5">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-[12px]" style={{ color: "var(--text-3)" }}>
                      <Check size={12} className="mt-0.5 flex-shrink-0" style={{ color: "var(--sig)" }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
