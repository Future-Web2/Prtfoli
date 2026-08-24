import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
      >
        <div
          className="rounded-2xl px-6 py-3 flex items-center justify-between border border-white/10 transition-all duration-500"
          style={{
            background: scrolled
              ? "rgba(4,4,15,0.85)"
              : "rgba(255,255,255,0.05)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: scrolled
              ? "0 8px 32px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.08)"
              : "0 4px 24px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group"
          >
            <img
              src="/yusufbek-avatar.jpg"
              alt="Veranix Technology"
              className="w-8 h-8 rounded-lg object-cover border border-white/10 shadow-[0_0_16px_rgba(34,211,238,0.35)]"
            />
            <span
              className="text-white font-semibold text-sm tracking-wide"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Yusufbek<span className="text-violet-400">.</span>dev
            </span>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="px-4 py-2 rounded-xl text-white/60 hover:text-white text-sm transition-all duration-300 hover:bg-white/8 relative group"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {link.label}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-0.5 bg-violet-400 rounded-full transition-all duration-300" />
              </button>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleNavClick("#contact")}
              className="hidden md:block px-4 py-2 rounded-xl text-sm text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(124,58,237,0.5)]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.8), rgba(6,182,212,0.8))",
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              Hire Me
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-xl text-white/70 hover:text-white hover:bg-white/10 transition-all"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="mt-2 rounded-2xl border border-white/10 overflow-hidden"
              style={{
                background: "rgba(4,4,15,0.95)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
              }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 transition-all text-sm border-b border-white/5 last:border-0"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="w-full px-6 py-4 text-left text-sm text-violet-400 hover:bg-white/5 transition-all"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Hire Me →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}