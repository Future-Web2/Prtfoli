import {
  Bot,
  ShieldAlert,
  Terminal,
  Bug,
  GraduationCap,
  BookOpen,
  School,
  Landmark,
  Gamepad2,
  MessagesSquare,
  Puzzle,
} from "lucide-react";

// ─── Profile / links ─────────────────────────────────────────────────────────
export const profile = {
  name: "Yusufbek",
  brand: "Veranix Technology",
  location: "Tashkent, Uzbekistan",
  github: "https://github.com/Future-Web2",
  githubHandle: "Future-Web2",
  website: "https://veranix.xyz",
  telegram: "https://t.me/veranix1",
  telegramHandle: "@veranix1",
  email: "hello@veranix.xyz",
};

// ─── Projects (pulled from github.com/Future-Web2) ───────────────────────────
export const projects = [
  {
    id: 1,
    icon: Bot,
    title: "Astra AI Assistant",
    shortDesc:
      "Voice-first, multi-platform AGI assistant — Windows, Android, Web & Telegram.",
    description:
      "Astra is a voice-native personal AGI assistant that lives across your devices — a Windows Electron desktop client with a glass HUD overlay, a native Android app, a web prototype, and a Telegram bot, all powered by a Python engine. It runs DeepSeek R1 via io.net, speaks with Edge TTS, listens for a wake word, and can generate documents, control smart-home hardware, and remember context through a knowledge graph.",
    tags: ["Python", "Electron", "Android", "Flask", "DeepSeek R1", "Edge TTS"],
    color: "#7c3aed",
    glow: "purple" as const,
    github: "https://github.com/Future-Web2/Astra-AI-Assistent-Preview",
    demo: "https://future-web2.github.io/Astra-AI-Assistent-Preview/",
    status: "Active",
    highlights: [
      "Voice-first interface with wake-word detection",
      "Cross-device: Windows (Electron) + Android + Web + Telegram",
      "DeepSeek R1 reasoning via io.net cloud",
      "Document generation & smart-home automation",
      "Knowledge-graph memory for proactive context",
    ],
  },
  {
    id: 2,
    icon: ShieldAlert,
    title: "AI SOC Platform",
    shortDesc:
      "Authorization-aware SOC platform — continuous validation & AI pentesting.",
    description:
      "An enterprise, authorization-aware Security Operations Center platform focused on continuous security validation. It performs AI-assisted penetration testing, correlates threat intelligence, and produces explainable, structured PEN-100 reports — strictly for authorized, defensive security use. This repository is the public preview / landing site of the platform.",
    tags: ["Python", "Recon", "Threat Intel", "Reporting", "SOC"],
    color: "#10b981",
    glow: "emerald" as const,
    github: "https://github.com/Future-Web2/SOC-APP",
    demo: "https://future-web2.github.io/SOC-APP/",
    status: "Active",
    highlights: [
      "Continuous, authorization-aware security validation",
      "AI-assisted penetration testing workflows",
      "Threat-intelligence correlation engine",
      "Explainable, structured PEN-100 reports",
      "Deployable via Docker / static preview",
    ],
  },
  {
    id: 3,
    icon: Terminal,
    title: "CloseCLAW",
    shortDesc:
      "AI-powered Telegram bot commander for your Linux servers.",
    description:
      "CloseCLAW is a master Telegram bot that gives you full natural-language control over your own Linux server. It intelligently routes tasks between a local AI layer (Ollama) for sensitive OS-level commands and a cloud AI layer (io.net) for complex reasoning and code generation — and it can spawn, manage, and kill child bots, making it a true Bot Commander.",
    tags: ["Python", "Telegram", "Ollama", "io.net", "Linux", "Bash"],
    color: "#06b6d4",
    glow: "cyan" as const,
    github: "https://github.com/Future-Web2/Close-Claw",
    demo: "",
    status: "Active",
    highlights: [
      "Natural-language Linux server control",
      "Local (Ollama) + cloud (io.net) AI routing",
      "Spawns and manages child bots",
      "Security-first command confirmation",
      "Runs from any Telegram chat",
    ],
  },
  {
    id: 4,
    icon: Bug,
    title: "CVE Privilege Escalation",
    shortDesc:
      "In-memory privilege-escalation research PoC for authorized testing.",
    description:
      "A security-research proof-of-concept exploring an in-memory privilege-escalation automation technique (2026). Intended strictly for authorized testing and educational purposes — it demonstrates how a process resident in RAM can automate privilege elevation to obtain a root shell in a controlled lab environment.",
    tags: ["Python", "PrivEsc", "Linux", "PoC", "Research"],
    color: "#ef4444",
    glow: "none" as const,
    github: "https://github.com/Future-Web2/CVE-Privilage-Escalation",
    demo: "",
    status: "Research",
    highlights: [
      "In-memory privilege-escalation automation",
      "Root-shell PoC in a controlled lab",
      "Authorized / educational use only",
      "Written in Python",
      "Documented usage & setup",
    ],
  },
  {
    id: 5,
    icon: GraduationCap,
    title: "IBRAT Talim",
    shortDesc:
      "Modern educational-center website with immersive animations.",
    description:
      "A visually immersive landing site for the IBRAT Talim educational center. Built with React, TypeScript and Vite, it features 3D tilt card animations, glassmorphism effects, an animated particle hero, statistics counters, testimonials, and full dark/light mode — optimized for every device.",
    tags: ["React", "TypeScript", "Vite", "Tailwind", "Framer Motion"],
    color: "#ec4899",
    glow: "pink" as const,
    github: "https://github.com/Future-Web2/Ibrt-Tlm",
    demo: "https://future-web2.github.io/Ibrt-Tlm/",
    status: "Complete",
    highlights: [
      "3D tilt card animations",
      "Glassmorphism UI design",
      "Animated particle hero",
      "Statistics & testimonials",
      "Responsive dark/light mode",
    ],
  },
  {
    id: 6,
    icon: BookOpen,
    title: "Pyramid Academy",
    shortDesc:
      "LMS demos & design systems for an education platform.",
    description:
      "Interactive website variants and design-system demos for Pyramid Academy — an education platform I'm helping architect. The repository showcases classic and glassmorphism design directions in Uzbek, exploring the look and feel of a full Learning Management System.",
    tags: ["HTML", "CSS", "JavaScript", "LMS", "Design Systems"],
    color: "#f59e0b",
    glow: "none" as const,
    github: "https://github.com/Future-Web2/Pyramid-Academy",
    demo: "https://future-web2.github.io/Pyramid-Academy/",
    status: "Active",
    highlights: [
      "Classic & glassmorphism design variants",
      "Foundations for a full LMS",
      "Interactive, animated demos",
      "Uzbek-language interface",
      "Reusable design tokens",
    ],
  },
  {
    id: 7,
    icon: School,
    title: "IQBOL Academy",
    shortDesc:
      "Learning-center website for IQBOL Academy, Tashkent.",
    description:
      "A modern learning-center website for IQBOL Academy in Tashkent. Built on React, TypeScript and Vite with a clean, responsive interface presenting courses, teachers, and enrollment information for prospective students.",
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    color: "#06b6d4",
    glow: "cyan" as const,
    github: "https://github.com/Future-Web2/Iqbol-LC",
    demo: "",
    status: "Complete",
    highlights: [
      "Course & teacher showcase",
      "Responsive modern layout",
      "React + TypeScript + Vite stack",
      "Enrollment call-to-actions",
      "Optimized performance",
    ],
  },
  {
    id: 8,
    icon: Landmark,
    title: "School №329",
    shortDesc:
      "Premium multi-page website for School №329, Tashkent.",
    description:
      "A high-end multi-page website for the 329th school in Tashkent. Built with pure HTML/CSS/JS, it features exclusive entrance animations, scroll-triggered effects, and glassmorphism UI patterns that set it apart from a typical school website.",
    tags: ["HTML", "CSS", "JavaScript", "Animations"],
    color: "#f59e0b",
    glow: "none" as const,
    github: "https://github.com/Future-Web2/MKT",
    demo: "https://future-web2.github.io/MKT/",
    status: "Complete",
    highlights: [
      "Multi-page architecture",
      "Entrance & scroll animations",
      "Glassmorphism UI components",
      "Mobile-responsive design",
      "Optimized performance",
    ],
  },
  {
    id: 9,
    icon: Gamepad2,
    title: "Midnight Chess",
    shortDesc: "Real-time multiplayer chess with a midnight-glass UI.",
    description:
      "A real-time multiplayer chess game wrapped in a sleek midnight-glass interface. Play against another person online with move validation, turn handling, and a focused, distraction-free board.",
    tags: ["HTML", "CSS", "JavaScript", "Multiplayer"],
    color: "#7c3aed",
    glow: "purple" as const,
    github: "https://github.com/Future-Web2/Chess-Game-v0.1",
    demo: "https://future-web2.github.io/Chess-Game-v0.1/",
    status: "In Progress",
    highlights: [
      "Real-time multiplayer gameplay",
      "Move validation & turn handling",
      "Midnight-glass board UI",
      "Lightweight, no framework",
      "Responsive board layout",
    ],
  },
  {
    id: 10,
    icon: MessagesSquare,
    title: "Cyber Wardens Chat",
    shortDesc: "Real-time, hacker-themed chat application.",
    description:
      "A real-time chat application with a 'Cyber Wardens' hacker aesthetic — terminal-style theming, live messaging, and a fast, minimal interface built for quick, secure-feeling conversations.",
    tags: ["HTML", "CSS", "JavaScript", "Realtime"],
    color: "#06b6d4",
    glow: "cyan" as const,
    github: "https://github.com/Future-Web2/Chat-v1.1",
    demo: "https://future-web2.github.io/Chat-v1.1/",
    status: "Complete",
    highlights: [
      "Live real-time messaging",
      "Hacker / terminal theming",
      "Fast, minimal interface",
      "Responsive chat layout",
      "Community-starred project",
    ],
  },
  {
    id: 11,
    icon: Puzzle,
    title: "Puzzle AI",
    shortDesc: "AI-driven hand-gesture puzzle built with Next.js.",
    description:
      "An experimental AI-driven hand puzzle built on Next.js 16 and React 19. It combines a modern animated interface with gesture-based interaction, exploring how AI can drive playful, responsive puzzle mechanics.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Framer Motion"],
    color: "#ec4899",
    glow: "pink" as const,
    github: "https://github.com/Future-Web2/Puzzle-AI",
    demo: "",
    status: "In Progress",
    highlights: [
      "Gesture-based puzzle interaction",
      "Next.js 16 + React 19 stack",
      "Animated, modern UI",
      "AI-driven mechanics",
      "Type-safe codebase",
    ],
  },
];

// ─── Certificates ────────────────────────────────────────────────────────────
export const certificates = [
  {
    id: 1,
    title: "C3SA",
    fullTitle: "Certified Cyber Security Analyst (C3SA)",
    issuer: "CyberWarFare Labs",
    date: "2025",
    category: "Security",
    color: "#7c3aed",
    colorHex: "7c3aed",
    credentialId: "695cc7ed350a0624a438f51b",
    verified: true,
    placeholder: false,
    image: "/certificates/C3SA.png",
    description:
      "Validates foundational and practical cybersecurity skills including network security, vulnerability assessment, and ethical hacking fundamentals. Issued by CyberWarFare Labs.",
    skills: ["Network Security", "Vulnerability Assessment", "Ethical Hacking", "Security Tools"],
  },
  {
    id: 2,
    title: "CRTA",
    fullTitle: "Certified Red Team Analyst (CRTA)",
    issuer: "CyberWarFare Labs",
    date: "2025",
    category: "Security",
    color: "#ef4444",
    colorHex: "ef4444",
    credentialId: "69319e94524427687607006b",
    verified: true,
    placeholder: false,
    image: "/certificates/CRTA.png",
    description:
      "Advanced certification in Red Team operations, adversarial simulation, and offensive security techniques. Covers penetration testing methodologies, Active Directory attacks, and real-world attack simulation.",
    skills: ["Red Teaming", "Penetration Testing", "Active Directory", "Offensive Security"],
  },
  {
    id: 3,
    title: "WEB-RTA",
    fullTitle: "Web Red Team Analyst (WEB-RTA)",
    issuer: "CyberWarFare Labs",
    date: "2025",
    category: "Security",
    color: "#06b6d4",
    colorHex: "06b6d4",
    credentialId: "695a456a4195311706846ca4",
    verified: true,
    placeholder: false,
    image: "/certificates/WEB-RTA.png",
    description:
      "Specialized certification focused on web application red teaming. Covers OWASP Top 10, advanced XSS/SQLi techniques, API security testing, and web vulnerability exploitation in real-world environments.",
    skills: ["Web App Hacking", "OWASP Top 10", "API Security", "XSS/SQLi"],
  },
  {
    id: 4,
    title: "HPTC",
    fullTitle: "Haad Penetration Tester Certificate (HPTC)",
    issuer: "Haad Security Training Center",
    date: "2026",
    category: "Security",
    color: "#a855f7",
    colorHex: "a855f7",
    credentialId: "B941993215",
    verified: true,
    placeholder: false,
    image: "/certificates/HPTC.png",
    description:
      "Awarded for completing the RED-1 Penetration Testing Course, demonstrating outstanding proficiency in offensive cybersecurity. Covers advanced penetration testing tools, methodologies and techniques for identifying vulnerabilities and securing complex systems.",
    skills: ["Penetration Testing", "Offensive Security", "Exploitation", "Vulnerability Analysis"],
  },
  {
    id: 5,
    title: "Red-0",
    fullTitle: "Red-0 — Fundamentals of Penetration Testing",
    issuer: "Haad Learning Center",
    date: "2026",
    category: "Security",
    color: "#22d3ee",
    colorHex: "22d3ee",
    credentialId: "RED-0 · 2026-01-20",
    verified: true,
    placeholder: false,
    image: "/certificates/RED-0.png",
    description:
      "Foundational penetration-testing certification demonstrating a solid understanding of basic penetration testing techniques, network security, and ethical hacking principles. Issued by Haad Learning Center.",
    skills: ["Pentest Fundamentals", "Network Security", "Ethical Hacking", "Recon"],
  },
];

// ─── Services ────────────────────────────────────────────────────────────────
export const services = [
  {
    code: "SVC-01",
    title: "Web Application Penetration Testing",
    summary:
      "Authenticated and unauthenticated assessment of web apps and APIs against the OWASP Top 10 and business-logic abuse.",
    deliverables: ["Findings by CVSS severity", "Reproduction steps", "Remediation guidance", "Retest"],
    tags: ["OWASP Top 10", "API Security", "AuthN/AuthZ", "XSS / SQLi"],
  },
  {
    code: "SVC-02",
    title: "Red Team & Adversary Simulation",
    summary:
      "Goal-oriented simulation of a real attacker: initial access, lateral movement, Active Directory abuse and post-exploitation.",
    deliverables: ["Attack narrative", "MITRE ATT&CK mapping", "Detection gaps", "Executive debrief"],
    tags: ["Active Directory", "Lateral Movement", "Evasion", "C2"],
  },
  {
    code: "SVC-03",
    title: "Network & Infrastructure Review",
    summary:
      "External and internal infrastructure assessment with hardening review for Linux and Windows Server estates.",
    deliverables: ["Exposure inventory", "Hardening checklist", "Segmentation review", "Priority fix list"],
    tags: ["Linux", "Windows Server", "IDS/IPS", "TCP/IP · DNS · TLS"],
  },
  {
    code: "SVC-04",
    title: "Secure Application Development",
    summary:
      "Full-stack delivery with security built in from the first commit — threat modelling, secure defaults and hardened deployment.",
    deliverables: ["Production application", "Threat model", "Hardened deployment", "Handover docs"],
    tags: ["React / TypeScript", "Node.js", "Python", "Docker"],
  },
  {
    code: "SVC-05",
    title: "AI Agents & Automation",
    summary:
      "Design and delivery of AI assistants and automation pipelines, with an authorization-aware boundary around every privileged action.",
    deliverables: ["Agent implementation", "Guardrail design", "Integration", "Runbook"],
    tags: ["AI Agents", "Telegram Bot API", "Prompt Engineering", "Automation"],
  },
];

// ─── Engagement methodology ──────────────────────────────────────────────────
export const methodology = [
  {
    phase: "01",
    title: "Scoping & Authorization",
    body: "Define targets, rules of engagement, testing windows and escalation contacts. Nothing is touched before written authorization is in place.",
  },
  {
    phase: "02",
    title: "Reconnaissance",
    body: "Passive and active intelligence gathering: attack-surface mapping, subdomain and asset discovery, technology fingerprinting.",
  },
  {
    phase: "03",
    title: "Enumeration & Analysis",
    body: "Service, endpoint and parameter enumeration. Authentication and authorization flows are mapped, then analysed for logic flaws.",
  },
  {
    phase: "04",
    title: "Exploitation",
    body: "Controlled, evidence-driven exploitation to prove real impact — never destructive, always within the agreed scope.",
  },
  {
    phase: "05",
    title: "Post-Exploitation",
    body: "Privilege escalation, lateral movement and data-access assessment to establish the true blast radius of an initial foothold.",
  },
  {
    phase: "06",
    title: "Reporting & Retest",
    body: "Findings ranked by severity with reproduction steps, an executive summary for stakeholders, and a free retest once fixes land.",
  },
];

// ─── Experience ──────────────────────────────────────────────────────────────
export const experience = [
  {
    role: "Full-Stack & Security Developer",
    org: "Iqro LC · Pyramid Academy · Iqbol LC",
    location: "Tashkent, Uzbekistan",
    period: "Feb 2026 — Present",
    current: true,
    points: [
      "Architecting a full Learning Management System — an automated education platform serving multiple training centres.",
      "Designing the platform's cybersecurity structure, authentication model and server hardening.",
      "Integrating AI agents and automating financial calculation workflows.",
    ],
    stack: ["Node.js", "Python", "React", "Linux", "Docker", "AI Agents"],
  },
  {
    role: "Security Researcher",
    org: "Veranix Technology",
    location: "Tashkent · Remote",
    period: "2025 — Present",
    current: true,
    points: [
      "Web application and red team assessments against authorized targets.",
      "Privilege-escalation and CVE research, published as proof-of-concept write-ups.",
      "Building the AI SOC Platform — authorization-aware continuous security validation with explainable reporting.",
    ],
    stack: ["Kali Linux", "Burp Suite", "Nmap", "Wireshark", "Python", "Bash"],
  },
];

// ─── Education ───────────────────────────────────────────────────────────────
export const education = [
  {
    school: "HAAD Training Center",
    location: "Tashkent · Yunusobod",
    field: "Cyber Security",
    period: "Aug 2025 — May 2026",
    detail: "Red-0: Cyber Security Fundamentals · Red-1: Junior Cyber Security Penetration Tester",
  },
  {
    school: "Mars IT School",
    location: "Tashkent · M. Ulugbek",
    field: "Front-End Development",
    period: "Feb 2023 — Jul 2025",
    detail: "Vanilla JavaScript, React and modern web development.",
  },
  {
    school: "Muallim Talim",
    location: "Tashkent · Sergeli",
    field: "IT Foundation",
    period: "Jun 2023 — Aug 2023",
    detail: "Computer science foundations.",
  },
];

// ─── Research & write-ups ────────────────────────────────────────────────────
export const research = [
  {
    severity: "High",
    title: "In-Memory Privilege Escalation PoC",
    year: "2026",
    summary:
      "Proof-of-concept demonstrating automated privilege elevation from a RAM-resident process to a root shell, documented for authorized lab use.",
    link: "https://github.com/Future-Web2/CVE-Privilage-Escalation",
    linkLabel: "Read the research",
  },
  {
    severity: "Info",
    title: "Haad Academy CTF — Full Write-up",
    year: "2026",
    summary:
      "End-to-end write-up of the Haad Academy capture-the-flag: reconnaissance, foothold, escalation paths and the reasoning behind each step.",
    link: "https://future-web2.github.io/DarkRoad-Report/",
    linkLabel: "Read the write-up",
  },
  {
    severity: "Medium",
    title: "PEN-100 Reporting Standard",
    year: "2026",
    summary:
      "A structured, explainable penetration-test reporting format built into the AI SOC Platform, designed so non-technical stakeholders can act on findings.",
    link: "https://future-web2.github.io/SOC-APP/",
    linkLabel: "View the platform",
  },
];
