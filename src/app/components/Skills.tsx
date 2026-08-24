import { useState } from "react";
import { Section, Reveal } from "./Section";

const domains = [
  {
    id: "offensive",
    label: "Offensive Security",
    blurb: "Authorized assessment of applications, networks and identity infrastructure.",
    groups: [
      {
        title: "Application",
        items: ["OWASP Top 10", "Authentication & session flaws", "Business-logic abuse", "API security testing", "XSS / SQLi / SSRF", "File-upload & deserialization"],
      },
      {
        title: "Infrastructure",
        items: ["Network penetration testing", "Active Directory attacks", "Privilege escalation", "Lateral movement", "Post-exploitation", "Vulnerability assessment"],
      },
      {
        title: "Tooling",
        items: ["Burp Suite", "Nmap", "Metasploit", "Wireshark", "SQLMap", "Kali Linux"],
      },
    ],
  },
  {
    id: "defensive",
    label: "Defensive & Infra",
    blurb: "Hardening, monitoring and the operational side of keeping systems standing.",
    groups: [
      {
        title: "Systems",
        items: ["Linux administration", "Windows Server 2012–2022", "Server hardening", "Docker", "Nginx / TLS", "Railway deployment"],
      },
      {
        title: "Network",
        items: ["OSI model", "TCP/IP", "DNS", "HTTP / HTTPS", "SSL/TLS", "Domain & DNS management"],
      },
      {
        title: "Blue team",
        items: ["IDS / IPS fundamentals", "Log analysis", "Threat-intel correlation", "Detection gap review", "Incident triage", "Security reporting"],
      },
    ],
  },
  {
    id: "engineering",
    label: "Engineering",
    blurb: "Production software delivery — the discipline that keeps assessments realistic.",
    groups: [
      {
        title: "Front-end",
        items: ["React", "TypeScript", "Vite", "Tailwind CSS", "Responsive web", "EJS"],
      },
      {
        title: "Back-end",
        items: ["Node.js", "Python", "Flask", "Express", "REST APIs", "WebSockets"],
      },
      {
        title: "AI & automation",
        items: ["AI agents", "Prompt engineering", "Telegram Bot API", "Telegraf.js", "Automation routines", "Android development"],
      },
    ],
  },
];

export function Skills() {
  const [active, setActive] = useState(domains[0].id);
  const domain = domains.find((d) => d.id === active)!;

  return (
    <Section
      id="expertise"
      index="004"
      label="Expertise"
      title="Depth across attack, defence and delivery."
      intro={<>The three areas I work in — and the specific capabilities inside each.</>}
    >
      {/* Domain switcher */}
      <div className="mb-8 flex flex-wrap gap-px" style={{ background: "var(--line)" }}>
        {domains.map((d) => {
          const isActive = d.id === active;
          return (
            <button
              key={d.id}
              onClick={() => setActive(d.id)}
              className="mono flex-1 px-4 py-3 text-[11px] transition-colors"
              style={{
                minWidth: "150px",
                background: isActive ? "var(--bg-2)" : "var(--bg)",
                color: isActive ? "var(--text)" : "var(--text-3)",
                letterSpacing: "0.06em",
                borderTop: `2px solid ${isActive ? "var(--sig)" : "transparent"}`,
              }}
            >
              {d.label.toUpperCase()}
            </button>
          );
        })}
      </div>

      <p className="mb-6 text-[13px]" style={{ color: "var(--text-3)" }}>
        {domain.blurb}
      </p>

      <div className="grid gap-px md:grid-cols-3" style={{ background: "var(--line)" }}>
        {domain.groups.map((g, i) => (
          <Reveal key={`${domain.id}-${g.title}`} delay={i * 0.05}>
            <div className="h-full p-5" style={{ background: "var(--bg-1)" }}>
              <p
                className="mono mb-3.5 text-[10px]"
                style={{ color: "var(--text-4)", letterSpacing: "0.12em" }}
              >
                {g.title.toUpperCase()}
              </p>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-baseline gap-2.5 text-[12.5px]"
                    style={{ color: "var(--text-2)" }}
                  >
                    <span
                      className="inline-block h-1 w-1 flex-shrink-0 translate-y-[-2px]"
                      style={{ background: "var(--line-3)" }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
