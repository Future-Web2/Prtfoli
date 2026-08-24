import { Section, Reveal } from "./Section";
import { profile } from "../data";

const principles = [
  {
    n: "01",
    t: "Authorization first",
    d: "No target is touched without written scope and rules of engagement. Every engagement starts on paper.",
  },
  {
    n: "02",
    t: "Impact over volume",
    d: "A report full of informational noise helps nobody. I prove real, exploitable business impact and rank it honestly.",
  },
  {
    n: "03",
    t: "Findings you can action",
    d: "Every issue ships with reproduction steps and a concrete fix — written so an engineer can act without a translator.",
  },
  {
    n: "04",
    t: "Build, then break",
    d: "I ship production software too. Knowing how systems are built is what makes the assessment of them sharper.",
  },
];

export function About() {
  return (
    <Section
      id="profile"
      index="001"
      label="Profile"
      title="Offensive security, grounded in engineering."
      intro={
        <>
          I work at the point where software gets built and where it gets broken — which is
          usually the same place.
        </>
      }
      divider={false}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Narrative */}
        <div className="lg:col-span-7 space-y-5">
          <p className="text-[0.95rem] leading-[1.75]" style={{ color: "var(--text-2)" }}>
            I&rsquo;m a penetration tester and full-stack engineer based in{" "}
            <span style={{ color: "var(--text)" }}>{profile.location}</span>, operating as{" "}
            <span style={{ color: "var(--text)" }}>Veranix Technology</span>. My training runs
            through the Red-0 and Red-1 tracks at HAAD Training Center, and I hold red team and web
            application credentials from CyberWarFare Labs.
          </p>
          <p className="text-[0.95rem] leading-[1.75]" style={{ color: "var(--text-2)" }}>
            Day to day I architect a Learning Management System used across several training centres
            in Tashkent — owning both its feature delivery and its security structure, from the
            authentication model to server hardening. That dual role is the point: I am not a
            consultant who has never shipped, nor a developer who has never been on the other side
            of an exploit.
          </p>
          <p className="text-[0.95rem] leading-[1.75]" style={{ color: "var(--text-2)" }}>
            Outside client work I publish privilege-escalation research and CTF write-ups, and I
            build <span style={{ color: "var(--text)" }}>the AI SOC Platform</span> — an
            authorization-aware system for continuous security validation with explainable,
            structured reporting.
          </p>

          {/* Languages */}
          <div className="pt-4">
            <p className="mono mb-3 text-[10px]" style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}>
              LANGUAGES
            </p>
            <div className="flex flex-wrap gap-1.5">
              {["Python", "JavaScript", "TypeScript", "C", "C#", "Java", "Kotlin", "PHP", "SQL", "Bash", "PowerShell", "Assembly"].map(
                (l) => (
                  <span
                    key={l}
                    className="mono px-2 py-1 text-[10.5px]"
                    style={{
                      border: "1px solid var(--line)",
                      borderRadius: "var(--r-sm)",
                      color: "var(--text-2)",
                    }}
                  >
                    {l}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Principles */}
        <div className="lg:col-span-5">
          <p className="mono mb-4 text-[10px]" style={{ color: "var(--text-3)", letterSpacing: "0.12em" }}>
            HOW I WORK
          </p>
          <div className="panel divide-y" style={{ borderColor: "var(--line)" }}>
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.05}>
                <div className="p-4" style={{ borderTop: i === 0 ? undefined : "1px solid var(--line)" }}>
                  <div className="flex gap-3">
                    <span
                      className="mono text-[10px] pt-0.5 flex-shrink-0"
                      style={{ color: "var(--sig)" }}
                    >
                      {p.n}
                    </span>
                    <div>
                      <p className="text-[13px] font-medium mb-1" style={{ color: "var(--text)" }}>
                        {p.t}
                      </p>
                      <p className="text-[12.5px] leading-relaxed" style={{ color: "var(--text-3)" }}>
                        {p.d}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
