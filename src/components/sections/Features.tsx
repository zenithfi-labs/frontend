"use client";

import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";

// ── Mini Sparkline (SVG animated line chart) ───────────────
function Sparkline() {
    const pathRef = useRef<SVGPathElement>(null);
    const ref = useRef<SVGSVGElement>(null);
    const inView = useInView(ref, { once: true, margin: "-40px" });

    useEffect(() => {
        if (!inView || !pathRef.current) return;
        const length = pathRef.current.getTotalLength();
        pathRef.current.style.strokeDasharray = `${length}`;
        pathRef.current.style.strokeDashoffset = `${length}`;
        pathRef.current.style.transition = "stroke-dashoffset 2s ease-out";
        // Trigger reflow then animate
        requestAnimationFrame(() => {
            if (pathRef.current) pathRef.current.style.strokeDashoffset = "0";
        });
    }, [inView]);

    return (
        <svg ref={ref} viewBox="0 0 200 60" className="w-full h-full" preserveAspectRatio="none">
            {/* Fill gradient area under the line */}
            <defs>
                <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#28A0F0" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#28A0F0" stopOpacity="0" />
                </linearGradient>
            </defs>
            <path
                d="M0,45 Q20,40 35,38 T60,30 T90,35 T120,22 T150,18 T175,12 T200,8"
                fill="none"
                stroke="#28A0F0"
                strokeWidth="2"
                ref={pathRef}
                strokeLinecap="round"
            />
            <path
                d="M0,45 Q20,40 35,38 T60,30 T90,35 T120,22 T150,18 T175,12 T200,8 V60 H0Z"
                fill="url(#sparkFill)"
                opacity={inView ? 1 : 0}
                style={{ transition: "opacity 2s ease-out 0.5s" }}
            />
        </svg>
    );
}

// ── Animated Progress Bar ──────────────────────────────────
function AnimatedBar({ percent, color, delay = 0 }: { percent: number; color: string; delay?: number }) {
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

export default function Features() {
    return (
        <section className="relative py-32 px-6 bg-[#050505]">
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-16"
                >
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28A0F0] mr-2 animate-pulse" />
                        <span className="font-body text-[11px] font-semibold tracking-wider text-white/70 uppercase">
                            Why Zenith
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={fadeUp}
                        className="font-body text-4xl md:text-5xl font-bold tracking-tight text-white mb-5"
                    >
                        Built Different.<br />
                        <span className="text-white/40">Performs Different.</span>
                    </motion.h2>
                </motion.div>

                {/* ── Bento Grid ──────────────────────────────────── */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {/* ── HERO CARD: Rust Engine (spans 2 cols, 2 rows) ── */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 md:row-span-2 group relative rounded-2xl border border-white/[0.07] bg-gradient-to-br from-white/[0.04] to-white/[0.01] overflow-hidden"
                    >
                        {/* Grid pattern background */}
                        <div
                            className="absolute inset-0 opacity-[0.08]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#444 1px, transparent 1px), linear-gradient(90deg, #444 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                            }}
                        />
                        {/* Blue glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 rounded-full bg-[#28A0F0] blur-[120px] opacity-[0.08] group-hover:opacity-[0.14] transition-opacity duration-700" />

                        <div className="relative z-10 p-8 md:p-10 flex flex-col justify-between h-full min-h-[360px]">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#28A0F0]/10 border border-[#28A0F0]/20 mb-6">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#28A0F0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                                    </svg>
                                    <span className="font-code text-[10px] text-[#28A0F0] uppercase tracking-wider">Arbitrum Stylus</span>
                                </div>
                                <h3 className="font-body text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                                    Rust-Powered Engine.<br />
                                    <span className="text-white/50">10x Faster Than EVM.</span>
                                </h3>
                                <p className="font-body text-sm text-white/40 max-w-md leading-relaxed">
                                    Smart contracts compiled to WASM via Rust — executing yield strategies
                                    at native speed with 94% gas savings on Arbitrum Stylus.
                                </p>
                            </div>

                            {/* Execution speed metrics */}
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="font-code text-[10px] text-white/40 uppercase tracking-wider">Zenith (Rust/WASM)</span>
                                    <span className="font-code text-[11px] text-[#28A0F0]">0.4ms</span>
                                </div>
                                <AnimatedBar percent={95} color="#28A0F0" />
                                <div className="flex items-center justify-between mt-3">
                                    <span className="font-code text-[10px] text-white/40 uppercase tracking-wider">Traditional EVM</span>
                                    <span className="font-code text-[11px] text-white/30">4.2ms</span>
                                </div>
                                <AnimatedBar percent={38} color="rgba(255,255,255,0.2)" delay={400} />
                            </div>
                        </div>
                    </motion.div>

                    {/* ── Non-Custodial ────────────────────────────────── */}
                    <motion.div
                        variants={fadeUp}
                        className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 overflow-hidden p-7"
                    >
                        {/* Gold accent glow */}
                        <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-[#FFD60A] blur-[80px] opacity-0 group-hover:opacity-[0.08] transition-opacity duration-700" />

                        <div className="relative z-10">
                            <div className="w-11 h-11 rounded-xl bg-[#FFD60A]/10 border border-[#FFD60A]/20 flex items-center justify-center mb-5">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFD60A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="11" width="18" height="11" rx="2" />
                                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                                </svg>
                            </div>
                            <h3 className="font-body text-lg font-bold text-white mb-2">Non-Custodial</h3>
                            <p className="font-body text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors">
                                Your keys, your assets. Funds flow directly to audited on-chain vaults.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Multi-Asset ──────────────────────────────────── */}
                    <motion.div
                        variants={fadeUp}
                        className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 overflow-hidden p-7"
                    >
                        <div className="relative z-10">
                            <div className="flex items-center gap-[-4px] mb-5">
                                {[
                                    { label: "T", color: "#28A0F0" },
                                    { label: "G", color: "#D4AF37" },
                                    { label: "C", color: "#26A17B" },
                                ].map((token, i) => (
                                    <div
                                        key={i}
                                        className="w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-[#0A0A0B]"
                                        style={{ background: token.color, marginLeft: i > 0 ? "-8px" : "0", zIndex: 3 - i }}
                                    >
                                        {token.label}
                                    </div>
                                ))}
                            </div>
                            <h3 className="font-body text-lg font-bold text-white mb-2">Multi-Asset</h3>
                            <p className="font-body text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors">
                                T-Bills, Gold, and Credit — all in one unified position.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Live Analytics (spans 2 cols) ────────────────── */}
                    <motion.div
                        variants={fadeUp}
                        className="md:col-span-2 group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 overflow-hidden"
                    >
                        <div className="relative z-10 p-7 pb-0">
                            <div className="flex items-start justify-between mb-2">
                                <div>
                                    <h3 className="font-body text-lg font-bold text-white mb-1">Live Analytics</h3>
                                    <p className="font-body text-sm text-white/40">
                                        Real-time P&L tracking with Chainlink oracle feeds.
                                    </p>
                                </div>
                                <div className="text-right">
                                    <div className="font-code text-xs text-[#28A0F0]">+12.84%</div>
                                    <div className="font-code text-[10px] text-white/30">30d return</div>
                                </div>
                            </div>
                        </div>
                        {/* Sparkline chart */}
                        <div className="h-24 px-7 pb-4 mt-2">
                            <Sparkline />
                        </div>
                    </motion.div>

                    {/* ── Gas Efficiency ───────────────────────────────── */}
                    <motion.div
                        variants={fadeUp}
                        className="group relative rounded-2xl border border-white/[0.07] bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-400 overflow-hidden p-7 flex flex-col justify-between"
                    >
                        <div className="relative z-10">
                            <h3 className="font-body text-lg font-bold text-white mb-2">Gas Efficiency</h3>
                            <p className="font-body text-sm text-white/40 leading-relaxed group-hover:text-white/55 transition-colors mb-5">
                                94% cheaper transactions versus standard Solidity contracts.
                            </p>
                        </div>
                        <div>
                            <div className="flex items-end justify-between mb-2">
                                <span className="font-code text-[10px] text-white/30 uppercase tracking-wider">Savings</span>
                                <span className="font-body text-2xl font-bold text-[#FFD60A]">94%</span>
                            </div>
                            <AnimatedBar percent={94} color="#FFD60A" delay={200} />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
