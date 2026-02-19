"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

/**
 * Animated SVG sparkline chart that draws on scroll-into-view.
 * Used in the Features bento grid (Live Analytics card).
 */
export default function Sparkline() {
    const pathRef = useRef<SVGPathElement>(null);
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    useEffect(() => {
        if (!inView || !pathRef.current) return;
        const length = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDasharray = `${length}`;
        pathRef.current.style.strokeDashoffset = `${length}`;
        pathRef.current.style.transition = "stroke-dashoffset 2s ease-out";
        requestAnimationFrame(() => {
            if (pathRef.current) pathRef.current.style.strokeDashoffset = "0";
        });
    }, [inView]);

    const curvePath = "M0,45 Q20,40 35,38 T60,30 T90,35 T120,22 T150,18 T175,12 T200,8";

    return (
        <svg ref={ref} viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
            <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#28A0F0" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#28A0F0" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path
                d={curvePath}
                fill="none"
                stroke="#28A0F0"
                strokeWidth="2"
                ref={pathRef}
                strokeLinecap="round"
            />
            <path
                d={`${curvePath} V60 H0Z`}
                fill="url(#sparkFill)"
                opacity={inView ? 1 : 0}
                style={{ transition: "opacity 2s ease-out 0.5s" }}
            />
        </svg>
    );
}
