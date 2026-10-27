"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useMotionValue, useMotionValueEvent, useTransform } from "framer-motion";

type CountUpProps = {
  value: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

const CountUp = ({ value, suffix = "", duration = 1.6, className }: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));
  const [display, setDisplay] = useState(0);

  useMotionValueEvent(rounded, "change", (v) => setDisplay(v));

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, value, { duration, ease: [0.22, 1, 0.36, 1] });
    return () => controls.stop();
  }, [inView, value, duration, count]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
