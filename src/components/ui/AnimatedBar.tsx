"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";

interface AnimatedBarProps {
    /** Fill percentage (0–100) */
    percent: number;
    /** Bar fill color */
    color: string;
    /** Delay in ms before animation starts */
    delay?: number;
}

/**
 * A progress bar that animates from 0% to target width on scroll-into-view.
 * Used in Features bento grid (Rust Engine + Gas Efficiency cards).
 */
export default function AnimatedBar({ percent, color, delay = 0 }: AnimatedBarProps) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    return (
        <div ref={ref} className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
            <div
                className="h-full rounded-full transition-all duration-[2000ms] ease-out"
                style={{
                    width: inView ? `${percent}%` : "0%",
                    background: color,
                    transitionDelay: `${delay}ms`,
                }}
            />
        </div>
    );
}
