/**
 * Static, low-noise backdrop: a faint blueprint grid with a soft vignette.
 * Deliberately not animated — motion in the background reads as decoration,
 * and this site should read as a document.
 */
export function Background() {
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
      {/* Blueprint grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.028) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.028) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 100% 70% at 50% 0%, #000 35%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 100% 70% at 50% 0%, #000 35%, transparent 100%)",
        }}
      />
      {/* A single, very restrained accent wash near the top */}
      <div
        className="absolute inset-x-0 top-0 h-[520px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 100% at 50% 0%, rgba(63,185,80,0.055), transparent 70%)",
        }}
      />
    </div>
  );
}
