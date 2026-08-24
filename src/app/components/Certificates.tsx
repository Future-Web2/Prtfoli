import { useState } from "react";
import { Section, Reveal } from "./Section";
import { ShieldCheck, Plus } from "lucide-react";
import { certificates } from "../data";
import { CertModal } from "./DetailModals";

export function Certificates() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const realCerts = certificates.filter((c) => !c.placeholder);
  const selectedCert = realCerts.find((c) => c.id === selectedId) || null;

  return (
    <>
      <Section
        id="credentials"
        index="007"
        label="Credentials"
        title="Verified certifications."
        intro={
          <>
            Each certificate is listed with its issuing body and credential identifier — open one
            to view the document itself.
          </>
        }
      >
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "var(--line)" }}>
          {certificates.map((cert, i) =>
            cert.placeholder ? (
              <Reveal key={cert.id} delay={i * 0.04}>
                <div
                  className="flex h-full min-h-[210px] flex-col items-center justify-center p-6 text-center"
                  style={{ background: "var(--bg)" }}
                >
                  <Plus size={16} style={{ color: "var(--text-4)" }} />
                  <p className="mt-3 text-[13px]" style={{ color: "var(--text-3)" }}>
                    {cert.title}
                  </p>
                  <p className="mono mt-1.5 text-[10px]" style={{ color: "var(--text-4)" }}>
                    RESERVED
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal key={cert.id} delay={i * 0.04}>
                <button
                  onClick={() => setSelectedId(cert.id)}
                  className="group flex h-full w-full flex-col text-left transition-colors"
                  style={{ background: "var(--bg-1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "var(--bg-2)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "var(--bg-1)")}
                >
                  {/* Document preview */}
                  <div
                    className="relative h-32 overflow-hidden"
                    style={{ borderBottom: "1px solid var(--line)", background: "var(--bg-2)" }}
                  >
                    <img
                      src={cert.image}
                      alt={cert.fullTitle}
                      loading="lazy"
                      className="h-full w-full object-cover object-top opacity-70 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to bottom, transparent 40%, var(--bg-1) 100%)",
                      }}
                    />
                  </div>

                  {/* Meta */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-[15px] font-semibold" style={{ color: "var(--text)" }}>
                        {cert.title}
                      </h3>
                      <span
                        className="mono inline-flex flex-shrink-0 items-center gap-1 text-[9.5px]"
                        style={{ color: "var(--sig)", letterSpacing: "0.06em" }}
                      >
                        <ShieldCheck size={11} />
                        VERIFIED
                      </span>
                    </div>

                    <p className="mt-1.5 text-[12px]" style={{ color: "var(--text-2)" }}>
                      {cert.issuer}
                    </p>

                    <div className="mt-4 space-y-1.5 pt-3" style={{ borderTop: "1px solid var(--line)" }}>
                      <div className="datarow">
                        <span style={{ color: "var(--text-4)" }}>Issued</span>
                        <span className="dots" />
                        <span style={{ color: "var(--text-3)" }}>{cert.date}</span>
                      </div>
                      <div className="datarow">
                        <span style={{ color: "var(--text-4)" }}>ID</span>
                        <span className="dots" />
                        <span
                          className="truncate"
                          style={{ color: "var(--text-3)", maxWidth: "11rem" }}
                          title={cert.credentialId}
                        >
                          {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  </div>
                </button>
              </Reveal>
            )
          )}
        </div>
      </Section>

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
