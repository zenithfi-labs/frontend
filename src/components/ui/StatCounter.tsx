"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, useMotionValue, animate } from "framer-motion";

interface StatCounterProps {
    value: number;
    prefix?: string;
    suffix?: string;
    decimals?: number;
}

export default function StatCounter({
    value,
    prefix = "",
    suffix = "",
    decimals = 0,
}: StatCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-60px" });
    const mv = useMotionValue(0);
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!inView) return;
        const ctrl = animate(mv, value, {
            duration: 2.4,
            ease: "easeOut",
            onUpdate(v) {
                setDisplay(v.toFixed(decimals));
            },
        });
        return () => ctrl.stop();
    }, [inView, value, decimals, mv]);

    return (
        <span ref={ref}>
            {prefix}
            {display}
            {suffix}
        </span>
    );
}
