import { Bot } from "lucide-react";

export function Footer() {
  return (
    <footer
      className="relative border-t border-white/8 py-8 px-6"
      style={{ background: "rgba(4,4,15,0.6)", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-violet-500 to-cyan-500">
            <Bot size={13} className="text-white" />
          </div>
          <span
            className="text-white/50 text-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Yusufbek<span className="text-violet-400">.</span>dev
          </span>
        </div>
        <p
          className="text-white/25 text-xs text-center"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          © 2026 Yusufbek · Built with React, TypeScript & Vite
        </p>
        <p
          className="text-white/25 text-xs"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          &lt;/&gt; with ❤️ & ☕ in Tashkent
        </p>
      </div>
    </footer>
  );
}
