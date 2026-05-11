import { ReactNode } from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glow?: "purple" | "cyan" | "emerald" | "pink" | "none";
  delay?: number;
}

const glowColors = {
  purple: "hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]",
  cyan: "hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]",
  emerald: "hover:shadow-[0_0_40px_rgba(16,185,129,0.3)]",
  pink: "hover:shadow-[0_0_40px_rgba(236,72,153,0.3)]",
  none: "",
};

export function GlassCard({
  children,
  className = "",
  hover = true,
  glow = "purple",
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`
        relative rounded-2xl overflow-hidden
        border border-white/10
        shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.08)]
        transition-all duration-500
        ${hover ? `cursor-pointer ${glowColors[glow]}` : ""}
        ${className}
      `}
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.03) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      {/* Inner glass sheen */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 60%)",
        }}
      />
      {children}
    </motion.div>
  );
}