import { ReactNode, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

/**
 * Reveal-on-scroll that cannot strand content invisible.
 *
 * IntersectionObserver batches asynchronously, so a fast scroll (scrollbar drag,
 * Ctrl+End, anchor jump) can skip an element's intersecting frames entirely and
 * leave it stuck at opacity 0. A synchronous rect check on every scroll event
 * can't be skipped, and a mount timeout backstops the whole thing.
 */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;

    const check = () => {
      const el = ref.current;
      if (!el) return;
      // True once the element has reached the viewport — and stays true after
      // it has scrolled past, so nothing is ever left hidden behind us.
      if (el.getBoundingClientRect().top < window.innerHeight + 180) setShown(true);
    };

    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    const safety = window.setTimeout(() => setShown(true), 2500);

    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
      window.clearTimeout(safety);
    };
  }, [shown]);

  return { ref, shown };
}

const ease = [0.22, 0.61, 0.36, 1] as const;

interface SectionProps {
  id: string;
  index: string;
  label: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  /** Adds a hairline above the section. */
  divider?: boolean;
}

export function Section({ id, index, label, title, intro, children, divider = true }: SectionProps) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section
      id={id}
      className="relative px-6 py-20 md:py-24"
      style={{ borderTop: divider ? "1px solid var(--line)" : undefined }}
    >
      <div className="mx-auto w-full" style={{ maxWidth: "1120px" }}>
        <motion.div
          ref={ref}
          initial={false}
          animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.4, ease }}
          className="mb-10 md:mb-14"
        >
          <div className="eyebrow mb-5">
            <span style={{ color: "var(--sig)" }}>{index}</span>
            <span>{label}</span>
          </div>

          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <h2
              className="md:col-span-7"
              style={{
                fontSize: "clamp(1.65rem, 3.4vw, 2.35rem)",
                fontWeight: 600,
                letterSpacing: "-0.025em",
                lineHeight: 1.15,
                color: "var(--text)",
              }}
            >
              {title}
            </h2>
            {intro && (
              <p
                className="md:col-span-5 text-[0.9rem] leading-relaxed"
                style={{ color: "var(--text-2)" }}
              >
                {intro}
              </p>
            )}
          </div>
        </motion.div>

        {children}
      </div>
    </section>
  );
}

/** Staggered reveal wrapper for grid/list children. */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.4, delay: shown ? delay : 0, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
