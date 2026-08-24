import { motion } from "framer-motion";
import { ArrowRight, Github, Globe } from "lucide-react";
import { profile, certificates, projects } from "../data";

const credentials = ["CRTA", "WEB-RTA", "C3SA", "HPTC", "RED-0"];

const facts = [
  { k: "Base", v: "Tashkent, UZ" },
  { k: "Engagements", v: "Remote / On-site" },
  { k: "Focus", v: "Offensive Security" },
  { k: "Status", v: "Accepting work" },
];

export function Hero() {
  const certCount = certificates.filter((c) => !c.placeholder).length;

  return (
    <section className="relative px-6 pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="mx-auto w-full" style={{ maxWidth: "1120px" }}>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ── Left: statement ── */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono mb-7 inline-flex items-center gap-2.5 px-3 py-1.5 text-[11px]"
              style={{
                border: "1px solid var(--line-2)",
                borderRadius: "var(--r-sm)",
                color: "var(--text-2)",
                letterSpacing: "0.06em",
              }}
            >
              <span
                className="inline-block h-1.5 w-1.5 rounded-full"
                style={{ background: "var(--sig)" }}
              />
              SECURITY RESEARCHER · RED TEAM ANALYST
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.06 }}
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.1rem)",
                fontWeight: 600,
                lineHeight: 1.04,
                letterSpacing: "-0.035em",
                color: "var(--text)",
              }}
            >
              I break systems
              <br />
              so attackers
              <br />
              <span style={{ color: "var(--text-3)" }}>can&rsquo;t.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.14 }}
              className="mt-7 max-w-xl text-[0.95rem] leading-relaxed"
              style={{ color: "var(--text-2)" }}
            >
              I&rsquo;m <span style={{ color: "var(--text)" }}>Yusufbek Miyanmalikov</span>, a
              penetration tester and full-stack engineer working under{" "}
              <span style={{ color: "var(--text)" }}>Veranix Technology</span>. I run authorized
              offensive assessments against web applications and infrastructure, then help teams
              close what I find — and build the software that doesn&rsquo;t need finding.
            </motion.p>

            {/* Credential strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.24 }}
              className="mt-8 flex flex-wrap items-center gap-1.5"
            >
              {credentials.map((c) => (
                <span
                  key={c}
                  className="mono px-2 py-1 text-[10.5px]"
                  style={{
                    border: "1px solid var(--line-2)",
                    borderRadius: "var(--r-sm)",
                    color: "var(--text-2)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {c}
                </span>
              ))}
              <span className="mono text-[10.5px] ml-1" style={{ color: "var(--text-4)" }}>
                verified below
              </span>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <button
                onClick={() =>
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium transition-colors"
                style={{
                  background: "var(--sig)",
                  color: "#06210c",
                  borderRadius: "var(--r-sm)",
                }}
              >
                Request an assessment
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() =>
                  document.querySelector("#work")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] transition-colors"
                style={{
                  border: "1px solid var(--line-2)",
                  borderRadius: "var(--r-sm)",
                  color: "var(--text-2)",
                }}
              >
                View work
              </button>
              <div className="flex items-center gap-1 ml-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="grid h-9 w-9 place-items-center transition-colors"
                  style={{ color: "var(--text-3)", border: "1px solid var(--line)", borderRadius: "var(--r-sm)" }}
                >
                  <Github size={15} />
                </a>
                <a
                  href={profile.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="veranix.xyz"
                  className="grid h-9 w-9 place-items-center transition-colors"
                  style={{ color: "var(--text-3)", border: "1px solid var(--line)", borderRadius: "var(--r-sm)" }}
                >
                  <Globe size={15} />
                </a>
              </div>
            </motion.div>
          </div>

          {/* ── Right: identity card ── */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="lg:col-span-5"
          >
            <div className="panel overflow-hidden">
              {/* Card header */}
              <div
                className="flex items-center justify-between px-4 py-2.5"
                style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}
              >
                <span className="mono text-[10px]" style={{ color: "var(--text-3)", letterSpacing: "0.1em" }}>
                  OPERATOR PROFILE
                </span>
                <span className="mono text-[10px]" style={{ color: "var(--sig)" }}>
                  ● ACTIVE
                </span>
              </div>

              <div className="flex items-center gap-4 p-5" style={{ borderBottom: "1px solid var(--line)" }}>
                <img
                  src="/yusufbek-avatar.jpg"
                  alt="Veranix Technology"
                  className="h-16 w-16 object-cover flex-shrink-0"
                  style={{ borderRadius: "var(--r)", border: "1px solid var(--line-2)" }}
                />
                <div className="min-w-0">
                  <p className="text-[15px] font-semibold tracking-tight" style={{ color: "var(--text)" }}>
                    Yusufbek Miyanmalikov
                  </p>
                  <p className="mono mt-1 text-[11px]" style={{ color: "var(--text-3)" }}>
                    Penetration Tester
                  </p>
                </div>
              </div>

              {/* Facts */}
              <div className="p-5 space-y-2.5" style={{ borderBottom: "1px solid var(--line)" }}>
                {facts.map((f) => (
                  <div key={f.k} className="datarow">
                    <span style={{ color: "var(--text-3)" }}>{f.k}</span>
                    <span className="dots" />
                    <span style={{ color: "var(--text-2)" }}>{f.v}</span>
                  </div>
                ))}
              </div>

              {/* Counters */}
              <div className="grid grid-cols-3">
                {[
                  { n: String(certCount).padStart(2, "0"), l: "Certifications" },
                  { n: String(projects.length), l: "Public projects" },
                  { n: "09", l: "Languages" },
                ].map((s, i) => (
                  <div
                    key={s.l}
                    className="px-4 py-4"
                    style={{ borderLeft: i === 0 ? undefined : "1px solid var(--line)" }}
                  >
                    <p
                      className="mono text-[20px] leading-none"
                      style={{ color: "var(--text)", fontWeight: 500 }}
                    >
                      {s.n}
                    </p>
                    <p className="mt-1.5 text-[10.5px] leading-tight" style={{ color: "var(--text-3)" }}>
                      {s.l}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
