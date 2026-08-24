import { Github, Globe } from "lucide-react";
import { profile } from "../data";

export function Footer() {
  return (
    <footer
      className="relative border-t border-white/8 py-8 px-6"
      style={{ background: "rgba(4,4,15,0.6)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href={profile.website}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 group"
        >
          <img
            src="/yusufbek-avatar.jpg"
            alt="Veranix Technology"
            className="w-7 h-7 rounded-lg object-cover border border-white/10"
          />
          <span
            className="text-white/50 group-hover:text-white text-sm transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Yusufbek<span className="text-violet-400">.</span>dev
          </span>
        </a>
        <p
          className="text-white/25 text-xs text-center"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          © 2026 Yusufbek · Veranix Technology · Built with React & Vite
        </p>
        <div className="flex items-center gap-3">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-violet-400/50 transition-all"
          >
            <Github size={15} />
          </a>
          <a
            href={profile.website}
            target="_blank"
            rel="noopener noreferrer"
            title="veranix.xyz"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-cyan-400/50 transition-all"
          >
            <Globe size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
