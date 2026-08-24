import { Github, Globe } from "lucide-react";
import { profile } from "../data";

export function Footer() {
  return (
    <footer className="px-6 py-10" style={{ borderTop: "1px solid var(--line)" }}>
      <div
        className="mx-auto flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"
        style={{ maxWidth: "1120px" }}
      >
        <div className="flex items-center gap-3">
          <img
            src="/yusufbek-avatar.jpg"
            alt="Veranix Technology"
            className="h-8 w-8 object-cover"
            style={{ borderRadius: "var(--r-sm)", border: "1px solid var(--line-2)" }}
          />
          <div>
            <p className="text-[13px] font-medium" style={{ color: "var(--text-2)" }}>
              Yusufbek Miyanmalikov
            </p>
            <p className="mono text-[10px]" style={{ color: "var(--text-4)", letterSpacing: "0.08em" }}>
              VERANIX TECHNOLOGY · TASHKENT
            </p>
          </div>
        </div>

        <p className="mono text-[10.5px]" style={{ color: "var(--text-4)" }}>
          © {new Date().getFullYear()} · Built with React, TypeScript &amp; Vite
        </p>

        <div className="flex items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="grid h-8 w-8 place-items-center"
            style={{ color: "var(--text-3)", border: "1px solid var(--line)", borderRadius: "var(--r-sm)" }}
          >
            <Github size={14} />
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            title="veranix.xyz"
            className="grid h-8 w-8 place-items-center"
            style={{ color: "var(--text-3)", border: "1px solid var(--line)", borderRadius: "var(--r-sm)" }}
          >
            <Globe size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
