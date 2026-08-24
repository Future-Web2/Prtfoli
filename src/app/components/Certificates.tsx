import { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "./GlassCard";
import { Award, CheckCircle, ArrowRight, Plus } from "lucide-react";
import { certificates } from "../data";
import { CertModal } from "./DetailModals";

const categories = ["All", "Security", "Development", "Cloud"];

export function Certificates() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const realCerts = certificates.filter((c) => !c.placeholder);

  const filtered =
    activeCategory === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeCategory);

  const selectedCert = realCerts.find((c) => c.id === selectedId) || null;

  return (
    <>
      <section id="certificates" className="relative py-28 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span
              className="text-amber-400 text-xs uppercase tracking-widest mb-3 block"
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
            >
              // certificates.verify()
            </span>
            <h2
              className="text-white mb-4"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                fontWeight: 700,
                letterSpacing: "-0.02em",
              }}
            >
              My{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #fbbf24, #f97316)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Certificates
              </span>
            </h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 mx-auto rounded-full mb-8" />

            {/* Filter tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className="px-4 py-2 rounded-xl text-sm transition-all duration-300"
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    background:
                      activeCategory === cat
                        ? "linear-gradient(135deg, rgba(124,58,237,0.7), rgba(6,182,212,0.7))"
                        : "rgba(255,255,255,0.05)",
                    color: activeCategory === cat ? "white" : "rgba(255,255,255,0.45)",
                    border:
                      activeCategory === cat
                        ? "1px solid rgba(124,58,237,0.4)"
                        : "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  {cat}
                  <span className="ml-2 text-xs opacity-60">
                    {cat === "All" ? realCerts.length : realCerts.filter((c) => c.category === cat).length}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Certificates grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cert, i) =>
              cert.placeholder ? (
                /* Reserved slot — for an upcoming certificate */
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="h-full"
                >
                  <div
                    className="h-full min-h-[300px] rounded-2xl border-2 border-dashed border-white/12 flex flex-col items-center justify-center text-center p-6 transition-all duration-300 hover:border-white/25"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border mb-4"
                      style={{
                        background: `#${cert.colorHex}12`,
                        borderColor: `#${cert.colorHex}30`,
                      }}
                    >
                      <Plus size={22} style={{ color: cert.color }} />
                    </div>
                    <h3
                      className="text-white/70 font-semibold text-sm mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className="text-white/30 text-xs mb-4 max-w-[15rem]"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {cert.fullTitle}
                    </p>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[10px] border border-white/10 text-white/40"
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        background: "rgba(255,255,255,0.03)",
                      }}
                    >
                      <span className="animate-pulse">●</span> Reserved · Coming soon
                    </span>
                  </div>
                </motion.div>
              ) : (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <GlassCard delay={0} glow="none" className="p-0 overflow-hidden group cursor-pointer h-full">
                  {/* Certificate image preview */}
                  <div
                    className="relative h-44 overflow-hidden"
                    style={{ background: `${cert.color}08` }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(to bottom, transparent 50%, rgba(4,4,15,0.9) 100%)`,
                      }}
                    />
                    {/* Verified badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-lg"
                      style={{ background: "rgba(4,4,15,0.75)", backdropFilter: "blur(8px)", border: "1px solid rgba(52,211,153,0.3)" }}>
                      <CheckCircle size={11} className="text-emerald-400" />
                      <span className="text-emerald-400 text-[10px]" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Verified
                      </span>
                    </div>
                    {/* Category badge */}
                    <div className="absolute top-3 left-3 px-2 py-1 rounded-lg"
                      style={{ background: `${cert.color}25`, border: `1px solid ${cert.color}50`, backdropFilter: "blur(8px)" }}>
                      <span className="text-[10px]" style={{ color: cert.color, fontFamily: "'JetBrains Mono', monospace" }}>
                        {cert.category}
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center border flex-shrink-0"
                        style={{
                          background: `#${cert.colorHex}15`,
                          borderColor: `#${cert.colorHex}30`,
                        }}
                      >
                        <Award size={16} style={{ color: cert.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className="text-white font-semibold text-sm leading-tight truncate"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {cert.title}
                        </h3>
                        <p
                          className="text-white/45 text-xs mt-0.5"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {cert.issuer}
                        </p>
                      </div>
                    </div>

                    <p
                      className="text-white/35 text-xs leading-relaxed mb-4 line-clamp-2"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {cert.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-white/8">
                      <span
                        className="text-white/30 text-xs"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      >
                        {cert.date}
                      </span>
                      <button
                        onClick={() => setSelectedId(cert.id)}
                        className="flex items-center gap-1 text-xs font-semibold transition-all hover:gap-1.5"
                        style={{ color: cert.color, fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        View <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedCert && (
        <CertModal
          cert={selectedCert}
          allCerts={realCerts}
          onClose={() => setSelectedId(null)}
          onNavigate={(id) => setSelectedId(id)}
        />
      )}
    </>
  );
}