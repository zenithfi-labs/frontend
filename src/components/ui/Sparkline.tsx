"use client";

import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

/**
 * Animated SVG Yield Delta Chart.
 * Displays comparison between flat USDC yield and optimized Zenith yield.
 */
export default function Sparkline() {
    const zenithPathRef = useRef<SVGPathElement>(null);
    const usdcPathRef = useRef<SVGPathElement>(null);
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    useEffect(() => {
        if (!inView) return;

        const animatePath = (path: SVGPathElement | null, duration: number) => {
            if (!path) return;
            const length = path.getTotalLength();
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
            path.style.transition = `stroke-dashoffset ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`;
            requestAnimationFrame(() => {
                path.style.strokeDashoffset = "0";
            });
        };

        animatePath(zenithPathRef.current, 2.5);
        animatePath(usdcPathRef.current, 1.5);
    }, [inView]);

    const zenithCurve = "M 0 50 C 50 50, 100 45, 150 25 C 180 15, 230 5, 280 5";
    const usdcCurve = "M 0 50 L 280 45";

    return (
        <div className="w-full h-full relative font-code">
            <svg ref={ref} viewBox="0 0 280 60" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="zenithSparkFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#28A0F0" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#28A0F0" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="zenithLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#28A0F0" />
                        <stop offset="100%" stopColor="#FFD60A" />
                    </linearGradient>
                    <filter id="glowLine">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                        <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>

                {/* USDC baseline */}
                <path
                    d={usdcCurve}
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.15)"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                    ref={usdcPathRef}
                />

                {/* Zenith Yield curve */}
                <path
                    d={zenithCurve}
                    fill="none"
                    stroke="url(#zenithLineGrad)"
                    strokeWidth="2.5"
                    ref={zenithPathRef}
                    strokeLinecap="round"
                    filter="url(#glowLine)"
                />

                {/* Zenith Fill curve */}
                <path
                    d={`${zenithCurve} L 280 60 L 0 60 Z`}
                    fill="url(#zenithSparkFill)"
                    opacity={inView ? 1 : 0}
                    style={{ transition: "opacity 1.5s ease-out 1s" }}
                />

                {/* Rebalance Marker Node */}
                <circle
                    cx="150"
                    cy="25"
                    r="4"
                    fill="#FFD60A"
                    className={`transition-all duration-500 delay-[1200ms] ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
                    style={{ filter: 'drop-shadow(0 0 8px rgba(255,214,10,0.8))' }}
                />
            </svg>

            {/* Labels overlay */}
            <div className={`absolute -top-7 right-0 transform transition-all duration-1000 delay-1000 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`} >
                <div className="flex items-center justify-end gap-1.5 bg-[#FFD60A]/10 border border-[#FFD60A]/20 px-2 py-0.5 rounded-full backdrop-blur-sm -mb-0.5 w-fit ml-auto">
                    <div className="w-1 h-1 rounded-full bg-[#FFD60A] animate-pulse" />
                    <span className="text-[8px] uppercase tracking-widest text-[#FFD60A] font-bold">Auto-Rebalance</span>
                </div>
                <div className="text-[11px] text-white/90 font-bold ml-1 mt-1 text-right">Zenith Optimizer</div>
            </div>

            <div className={`absolute -bottom-1 right-0 transform transition-all duration-700 delay-500 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`} >
                <div className="text-[10px] text-white/40 font-medium tracking-wide">Hold USDC Regular</div>
            </div>
        </div>
    );
}
