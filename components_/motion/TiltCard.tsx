"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import type { ReactNode } from "react";

type TiltCardProps = {
  front: ReactNode;
  back?: ReactNode;
  expandLabel?: string;
  flipLabel?: string;
  closeLabel?: string;
  className?: string;
};

/**
 * Carte "ID" : légère inclinaison 3D au survol (desktop), et un clic
 * l'agrandit dans une superposition centrée où elle peut être retournée —
 * comportement calqué sur le site de référence (carte réduite = tilt only,
 * le contrôle de retournement n'apparaît que dans la vue agrandie).
 *
 * Le montage/démontage de la superposition est piloté directement par l'état
 * React (pas d'AnimatePresence) : l'entrée est animée, la sortie est immédiate,
 * pour garantir que le bouton de fermeture fonctionne de façon fiable.
 */
const TiltCard = ({ front, back, expandLabel = "Enlarge the card", flipLabel = "Flip the card", closeLabel = "Close", className }: TiltCardProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const [expanded, setExpanded] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const tiltRange = prefersReducedMotion ? 0 : 8;

  const springConfig = { stiffness: 150, damping: 18, mass: 0.5 };
  const tiltX = useSpring(useTransform(my, [0, 1], [tiltRange, -tiltRange]), springConfig);
  const tiltY = useSpring(useTransform(mx, [0, 1], [-tiltRange, tiltRange]), springConfig);
  const glowX = useTransform(mx, (v) => `${v * 100}%`);
  const glowY = useTransform(my, (v) => `${v * 100}%`);
  const glowBackground = useTransform(
    [glowX, glowY],
    ([x, y]) => `radial-gradient(260px circle at ${x} ${y}, rgba(134,239,201,0.18), transparent 70%)`
  );

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (prefersReducedMotion) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };

  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  const closeExpanded = () => {
    setExpanded(false);
    setFlipped(false);
  };

  useEffect(() => {
    if (!expanded) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeExpanded();
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded]);

  const faceStack = (size: "sm" | "lg") => (
    <motion.div
      style={{ transformStyle: "preserve-3d" }}
      animate={size === "lg" ? { rotateY: flipped ? 180 : 0 } : undefined}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative"
    >
      <div style={{ backfaceVisibility: "hidden" }} className="relative overflow-hidden rounded-2xl">
        {front}
      </div>
      {size === "lg" && back && (
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 overflow-hidden rounded-2xl"
        >
          {back}
        </div>
      )}
      {size === "lg" && back && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            setFlipped((f) => !f);
          }}
          aria-label={flipLabel}
          title={flipLabel}
          className="absolute -bottom-3 -right-3 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/20 bg-brand-ink text-brand-cream/70 shadow-immersive transition-colors hover:border-brand-mint/50 hover:text-brand-mint"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
            <path d="M3 12a9 9 0 0 1 15.3-6.4L21 8" />
            <path d="M21 3v5h-5" />
            <path d="M21 12a9 9 0 0 1-15.3 6.4L3 16" />
            <path d="M3 21v-5h5" />
          </svg>
        </button>
      )}
    </motion.div>
  );

  return (
    <>
      <motion.button
        ref={ref}
        type="button"
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        onClick={() => setExpanded(true)}
        aria-label={expandLabel}
        title={expandLabel}
        animate={{ opacity: expanded ? 0 : 1 }}
        transition={{ duration: 0.2 }}
        style={{
          rotateX: tiltX,
          rotateY: tiltY,
          transformStyle: "preserve-3d",
          perspective: 1100,
          pointerEvents: expanded ? "none" : "auto",
        }}
        aria-hidden={expanded}
        tabIndex={expanded ? -1 : 0}
        className={`group relative block cursor-zoom-in text-left ${className ?? ''}`}
      >
        {faceStack("sm")}
        <motion.div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glowBackground }}
        />
        {back && (
          <span className="pointer-events-none absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full border border-brand-cream/20 bg-brand-ink/60 text-brand-cream/60 opacity-0 transition-opacity group-hover:opacity-100">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M16 21h5v-5" />
            </svg>
          </span>
        )}
      </motion.button>

      {expanded && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/80 p-6 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
          onClick={closeExpanded}
        >
          <motion.div
            style={{ transformStyle: "preserve-3d" }}
            className="relative w-full max-w-xl rounded-2xl bg-card-sheen p-px shadow-immersive"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
          >
            {faceStack("lg")}
          </motion.div>

          <button
            type="button"
            onClick={closeExpanded}
            aria-label={closeLabel}
            title={closeLabel}
            className="absolute right-6 top-24 flex h-10 w-10 items-center justify-center rounded-full border border-brand-cream/20 text-brand-cream/70 transition-colors hover:border-brand-mint/50 hover:text-brand-mint"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}>
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </motion.div>
      )}
    </>
  );
};

export default TiltCard;
