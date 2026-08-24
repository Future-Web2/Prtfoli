import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data";

const navLinks = [
  { label: "Profile", href: "#profile" },
  { label: "Services", href: "#services" },
  { label: "Method", href: "#method" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Credentials", href: "#credentials" },
  { label: "Research", href: "#research" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in view.
  useEffect(() => {
    const ids = navLinks.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
      style={{
        background: scrolled ? "rgba(10,11,13,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : undefined,
        WebkitBackdropFilter: scrolled ? "blur(12px)" : undefined,
        borderBottom: `1px solid ${scrolled ? "var(--line)" : "transparent"}`,
      }}
    >
      <div className="mx-auto flex h-16 items-center justify-between px-6" style={{ maxWidth: "1120px" }}>
        {/* Identity */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
        >
          <img
            src="/yusufbek-avatar.jpg"
            alt="Veranix Technology"
            className="h-7 w-7 object-cover"
            style={{ borderRadius: "var(--r-sm)", border: "1px solid var(--line-2)" }}
          />
          <span className="text-left leading-none">
            <span
              className="block text-[13px] font-semibold tracking-tight"
              style={{ color: "var(--text)" }}
            >
              {profile.name} Miyanmalikov
            </span>
            <span
              className="mono block text-[10px] mt-0.5"
              style={{ color: "var(--text-3)", letterSpacing: "0.08em" }}
            >
              VERANIX TECHNOLOGY
            </span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <button
                key={link.label}
                onClick={() => go(link.href)}
                className="mono px-2.5 py-1.5 text-[11px] transition-colors"
                style={{
                  color: isActive ? "var(--text)" : "var(--text-3)",
                  letterSpacing: "0.05em",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = isActive ? "var(--text)" : "var(--text-3)")
                }
              >
                {link.label.toUpperCase()}
              </button>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => go("#contact")}
            className="hidden sm:inline-flex mono items-center gap-2 px-3.5 py-2 text-[11px] font-medium transition-colors"
            style={{
              color: "var(--sig)",
              border: "1px solid var(--sig-line)",
              background: "var(--sig-dim)",
              borderRadius: "var(--r-sm)",
              letterSpacing: "0.06em",
            }}
          >
            <span
              className="inline-block h-1.5 w-1.5 rounded-full"
              style={{ background: "var(--sig)" }}
            />
            AVAILABLE
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
            style={{ color: "var(--text-2)" }}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav
          className="lg:hidden"
          style={{ background: "var(--bg-1)", borderTop: "1px solid var(--line)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => go(link.href)}
              className="mono block w-full px-6 py-3.5 text-left text-[11px]"
              style={{
                color: "var(--text-2)",
                borderBottom: "1px solid var(--line)",
                letterSpacing: "0.06em",
              }}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
          <button
            onClick={() => go("#contact")}
            className="mono block w-full px-6 py-3.5 text-left text-[11px]"
            style={{ color: "var(--sig)", letterSpacing: "0.06em" }}
          >
            CONTACT →
          </button>
        </nav>
      )}
    </header>
  );
}
