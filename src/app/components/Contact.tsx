import { useState } from "react";
import { Section } from "./Section";
import { Mail, Github, Globe, Send, ArrowUpRight } from "lucide-react";
import { profile } from "../data";

function TelegramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.507 14.258l-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.641.301z" />
    </svg>
  );
}

const channels = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: TelegramIcon, label: "Telegram", value: profile.telegramHandle, href: profile.telegram },
  { icon: Github, label: "GitHub", value: profile.githubHandle, href: profile.github },
  { icon: Globe, label: "Web", value: "veranix.xyz", href: profile.website },
];

const engagementTypes = [
  "Web application penetration test",
  "Red team / adversary simulation",
  "Network & infrastructure review",
  "Secure application development",
  "AI agent / automation build",
  "Something else",
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    org: "",
    email: "",
    type: engagementTypes[0],
    message: "",
  });

  // No backend on this site — compose a mail draft the visitor can review and send.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `[${form.type}] enquiry from ${form.org || form.name}`;
    const body = [
      `Name:         ${form.name}`,
      `Organisation: ${form.org}`,
      `Reply to:     ${form.email}`,
      `Engagement:   ${form.type}`,
      "",
      form.message,
    ].join("\n");
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  const field: React.CSSProperties = {
    background: "var(--bg)",
    border: "1px solid var(--line-2)",
    borderRadius: "var(--r-sm)",
    color: "var(--text)",
    fontSize: "13px",
  };

  const labelStyle: React.CSSProperties = {
    color: "var(--text-3)",
    letterSpacing: "0.1em",
  };

  return (
    <Section
      id="contact"
      index="009"
      label="Contact"
      title="Start an engagement."
      intro={
        <>
          Send the scope you have in mind — even a rough one. I&rsquo;ll come back with a plan,
          a timeline and a fixed price.
        </>
      }
    >
      <div className="grid gap-px lg:grid-cols-12" style={{ background: "var(--line)" }}>
        {/* Channels */}
        <div className="lg:col-span-4 p-6" style={{ background: "var(--bg-1)" }}>
          <p className="mono mb-4 text-[10px]" style={labelStyle}>
            DIRECT CHANNELS
          </p>
          <div className="space-y-px" style={{ background: "var(--line)" }}>
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3 transition-colors"
                style={{ background: "var(--bg-1)" }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-1)")}
              >
                <c.icon size={14} style={{ color: "var(--text-3)" }} />
                <div className="min-w-0 flex-1">
                  <p className="mono text-[9.5px]" style={{ color: "var(--text-4)", letterSpacing: "0.08em" }}>
                    {c.label.toUpperCase()}
                  </p>
                  <p className="mono truncate text-[12px]" style={{ color: "var(--text-2)" }}>
                    {c.value}
                  </p>
                </div>
                <ArrowUpRight
                  size={12}
                  style={{ color: "var(--text-4)" }}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            ))}
          </div>

          <div className="mt-6 pt-5" style={{ borderTop: "1px solid var(--line)" }}>
            <div className="datarow mb-2">
              <span style={{ color: "var(--text-4)" }}>Location</span>
              <span className="dots" />
              <span style={{ color: "var(--text-3)" }}>Tashkent, UZ</span>
            </div>
            <div className="datarow mb-2">
              <span style={{ color: "var(--text-4)" }}>Timezone</span>
              <span className="dots" />
              <span style={{ color: "var(--text-3)" }}>UTC+5</span>
            </div>
            <div className="datarow">
              <span style={{ color: "var(--text-4)" }}>Response</span>
              <span className="dots" />
              <span style={{ color: "var(--text-3)" }}>Within 24h</span>
            </div>
          </div>

          <div
            className="mt-6 p-3"
            style={{
              border: "1px solid var(--sig-line)",
              background: "var(--sig-dim)",
              borderRadius: "var(--r-sm)",
            }}
          >
            <p className="mono text-[10px] leading-relaxed" style={{ color: "var(--sig)" }}>
              ● ACCEPTING ENGAGEMENTS
            </p>
            <p className="mt-1.5 text-[11.5px] leading-relaxed" style={{ color: "var(--text-3)" }}>
              Available for contract assessments, retainers and full-time security roles.
            </p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-8 p-6" style={{ background: "var(--bg-1)" }}>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mono mb-2 block text-[9.5px]" style={labelStyle}>
                  NAME *
                </label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-3 py-2.5 outline-none focus:border-[var(--line-3)]"
                  style={field}
                />
              </div>
              <div>
                <label className="mono mb-2 block text-[9.5px]" style={labelStyle}>
                  ORGANISATION
                </label>
                <input
                  value={form.org}
                  onChange={(e) => setForm({ ...form, org: e.target.value })}
                  className="w-full px-3 py-2.5 outline-none focus:border-[var(--line-3)]"
                  style={field}
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mono mb-2 block text-[9.5px]" style={labelStyle}>
                  EMAIL *
                </label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-3 py-2.5 outline-none focus:border-[var(--line-3)]"
                  style={field}
                />
              </div>
              <div>
                <label className="mono mb-2 block text-[9.5px]" style={labelStyle}>
                  ENGAGEMENT TYPE
                </label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="w-full px-3 py-2.5 outline-none focus:border-[var(--line-3)]"
                  style={field}
                >
                  {engagementTypes.map((t) => (
                    <option key={t} value={t} style={{ background: "var(--bg-2)" }}>
                      {t}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="mono mb-2 block text-[9.5px]" style={labelStyle}>
                SCOPE / MESSAGE *
              </label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Target systems, rough timeline, anything you already know about the environment…"
                className="w-full resize-none px-3 py-2.5 outline-none focus:border-[var(--line-3)]"
                style={field}
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <p className="mono text-[10px] leading-relaxed" style={{ color: "var(--text-4)" }}>
                Opens in your mail client — nothing is sent from this page.
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-[13px] font-medium"
                style={{ background: "var(--sig)", color: "#06210c", borderRadius: "var(--r-sm)" }}
              >
                <Send size={13} />
                Compose enquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
}
