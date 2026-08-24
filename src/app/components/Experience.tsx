import { Section, Reveal } from "./Section";
import { experience, education } from "../data";

export function Experience() {
  return (
    <Section
      id="experience"
      index="005"
      label="Experience & Education"
      title="Where the practice comes from."
      intro={<>Current engagements, and the training track behind them.</>}
    >
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        {/* Experience timeline */}
        <div className="lg:col-span-7">
          <p className="mono mb-5 text-[10px]" style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}>
            PROFESSIONAL
          </p>

          <div style={{ borderLeft: "1px solid var(--line-2)" }}>
            {experience.map((e, i) => (
              <Reveal key={e.role} delay={i * 0.06}>
                <div className="relative pl-6 pb-9">
                  {/* Node */}
                  <span
                    className="absolute left-0 top-1.5 h-1.5 w-1.5 -translate-x-[3.5px]"
                    style={{
                      background: e.current ? "var(--sig)" : "var(--line-3)",
                      borderRadius: "50%",
                    }}
                  />

                  <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-[15px] font-medium" style={{ color: "var(--text)" }}>
                      {e.role}
                    </h3>
                    {e.current && (
                      <span
                        className="mono px-1.5 py-0.5 text-[9.5px]"
                        style={{
                          color: "var(--sig)",
                          border: "1px solid var(--sig-line)",
                          background: "var(--sig-dim)",
                          borderRadius: "var(--r-sm)",
                          letterSpacing: "0.08em",
                        }}
                      >
                        CURRENT
                      </span>
                    )}
                  </div>

                  <p className="text-[13px]" style={{ color: "var(--text-2)" }}>
                    {e.org}
                  </p>
                  <p className="mono mt-1 text-[11px]" style={{ color: "var(--text-4)" }}>
                    {e.period} · {e.location}
                  </p>

                  <ul className="mt-3.5 space-y-2">
                    {e.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-start gap-2.5 text-[12.5px] leading-relaxed"
                        style={{ color: "var(--text-3)" }}
                      >
                        <span
                          className="mt-[7px] inline-block h-1 w-1 flex-shrink-0"
                          style={{ background: "var(--line-3)" }}
                        />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-3.5 flex flex-wrap gap-1.5">
                    {e.stack.map((s) => (
                      <span
                        key={s}
                        className="mono px-1.5 py-0.5 text-[10px]"
                        style={{
                          border: "1px solid var(--line)",
                          borderRadius: "var(--r-sm)",
                          color: "var(--text-3)",
                        }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="lg:col-span-5">
          <p className="mono mb-5 text-[10px]" style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}>
            EDUCATION
          </p>

          <div className="panel">
            {education.map((ed, i) => (
              <Reveal key={ed.school} delay={i * 0.06}>
                <div
                  className="p-5"
                  style={{ borderTop: i === 0 ? undefined : "1px solid var(--line)" }}
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-[13.5px] font-medium" style={{ color: "var(--text)" }}>
                      {ed.school}
                    </h3>
                    <span className="mono flex-shrink-0 text-[10px]" style={{ color: "var(--text-4)" }}>
                      {ed.period}
                    </span>
                  </div>
                  <p className="mono mt-1.5 text-[11px]" style={{ color: "var(--sig)" }}>
                    {ed.field}
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed" style={{ color: "var(--text-3)" }}>
                    {ed.detail}
                  </p>
                  <p className="mono mt-2 text-[10px]" style={{ color: "var(--text-4)" }}>
                    {ed.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
