"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { IconBolt, IconLock } from "@/components/icons";
import Sparkline from "@/components/ui/Sparkline";
import AnimatedBar from "@/components/ui/AnimatedBar";
import { useRef, useState } from "react";
import Image from "next/image";
import usdcLogo from "@/app/brands/usdc.svg";
import ondoLogo from "@/app/brands/ondo.svg";
import mountainLogo from "@/app/brands/mountain-protocol.svg";
import blackrockLogo from "@/app/brands/blackrock.svg";
import paxgLogo from "@/app/brands/paxg.svg";

// Futuristic Spotlight Card Wrapper
function FeatureCard({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    return (
        <motion.div variants={fadeUp} className={`flex flex-col h-full ${className}`}>
            <div
                ref={divRef}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setOpacity(1)}
                onMouseLeave={() => setOpacity(0)}
                className="group relative h-full rounded-[24px] border border-white/[0.08] bg-white/[0.01] backdrop-blur-md overflow-hidden transition-colors duration-500 hover:border-white/[0.15] hover:bg-white/[0.03]"
            >
                {/* Mouse Spotlight Glow */}
                <div
                    className="pointer-events-none absolute -inset-px z-0 transition-opacity duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(800px circle at ${position.x}px ${position.y}px, rgba(40,160,240,0.08), transparent 40%)`,
                    }}
                />
                {/* Top edge inner highlight for glass effect */}
                <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-b from-white/[0.05] to-transparent opacity-50" />

                <div className="relative z-10 h-full flex flex-col">
                    {children}
                </div>
            </div>
        </motion.div>
    );
}

export default function Features() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Soft Background Transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0A0A0B] pointer-events-none z-0" />

            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#28A0F0] opacity-[0.15] blur-[120px] pointer-events-none rounded-full mix-blend-screen z-0" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#FFD60A] opacity-[0.08] blur-[150px] pointer-events-none rounded-full mix-blend-screen" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-20"
                >
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6 shadow-[0_0_30px_rgba(40,160,240,0.15)]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28A0F0] mr-2 animate-pulse shadow-[0_0_10px_#28A0F0]" />
                        <span className="font-body text-[11px] font-semibold tracking-wider text-white/80 uppercase">
                            Why Zenith
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={fadeUp}
                        className="font-body text-4xl md:text-5xl font-bold tracking-tight text-white mb-5"
                    >
                        Built Different.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A0F0] to-[#FFD60A]">Performs Different.</span>
                    </motion.h2>
                </motion.div>

                {/* ── Bento Grid ──────────────────────────────────── */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                    {/* ── HERO CARD: Rust Engine ── */}
                    <FeatureCard className="md:col-span-2 md:row-span-2">
                        {/* Grid pattern background */}
                        <div
                            className="absolute inset-0 opacity-[0.1]"
                            style={{
                                backgroundImage:
                                    "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                                backgroundSize: "32px 32px",
                                maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)",
                                WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)"
                            }}
                        />
                        {/* Blue glow core */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-[#28A0F0] blur-[100px] opacity-[0.15] group-hover:opacity-[0.25] transition-opacity duration-700" />

                        <div className="relative p-8 md:p-10 flex flex-col justify-between h-full min-h-[380px]">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#28A0F0]/10 border border-[#28A0F0]/30 mb-6 shadow-[0_0_20px_rgba(40,160,240,0.1)]">
                                    <span className="text-[#28A0F0]"><IconBolt /></span>
                                    <span className="font-code text-[10px] text-[#28A0F0] uppercase tracking-wider font-semibold">Arbitrum Stylus</span>
                                </div>
                                <h3 className="font-body text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                                    Rust-Powered Engine.<br />
                                    <span className="text-white/40">10x Faster Than EVM.</span>
                                </h3>
                                <p className="font-body text-[15px] text-white/50 max-w-md leading-relaxed">
                                    Smart contracts compiled to WASM via Rust — executing yield strategies
                                    at native speed with 94% gas savings on Arbitrum. Sub-millisecond latency enables hyper-efficient rebalancing that is cost-prohibitive on standard EVM.
                                </p>
                            </div>

                            {/* Execution speed metrics */}
                            <div className="mt-10 space-y-5 lg:pl-4 lg:border-l lg:border-white/10">
                                <div className="relative">
                                    <div className="absolute -top-4 -left-4 w-32 h-16 bg-[#28A0F0]/10 blur-xl pointer-events-none rounded-full" />
                                    <div className="flex items-center justify-between mb-2 relative z-10">
                                        <span className="font-code text-[11px] text-white/50 uppercase tracking-widest font-medium">Zenith (Rust)</span>
                                        <span className="font-code text-xs text-[#28A0F0] font-bold drop-shadow-[0_0_8px_rgba(40,160,240,0.5)]">0.4ms</span>
                                    </div>
                                    <AnimatedBar percent={95} color="#28A0F0" />
                                </div>
                                <div className="relative">
                                    <div className="flex items-center justify-between mb-2 mt-4 relative z-10">
                                        <span className="font-code text-[11px] text-white/40 uppercase tracking-widest font-medium">Standard EVM</span>
                                        <span className="font-code text-xs text-white/30">4.2ms</span>
                                    </div>
                                    <AnimatedBar percent={38} color="rgba(255,255,255,0.15)" delay={400} />
                                </div>
                            </div>
                        </div>
                    </FeatureCard>

                    {/* ── Non-Custodial ── */}
                    <FeatureCard>
                        {/* Gold accent glow */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#FFD60A] blur-[80px] opacity-0 group-hover:opacity-[0.15] transition-opacity duration-700" />

                        <div className="p-8">
                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FFD60A]/20 to-[#FFD60A]/5 border border-[#FFD60A]/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(255,214,10,0.1)]">
                                <span className="text-[#FFD60A] text-xl"><IconLock /></span>
                            </div>
                            <h3 className="font-body text-xl font-bold text-white mb-3">Non-Custodial</h3>
                            <p className="font-body text-[15px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                Your keys, your assets. Funds flow directly to audited on-chain vaults.
                            </p>
                        </div>
                    </FeatureCard>

                    {/* ── Multi-Asset ── */}
                    <FeatureCard>
                        <div className="p-8">
                            <div className="flex items-center mb-6">
                                {[usdcLogo, ondoLogo, paxgLogo, mountainLogo, blackrockLogo].map((logo, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full flex items-center justify-center border-[3px] border-[#0A0A0B] shadow-lg overflow-hidden bg-white/5 relative bg-black"
                                        style={{ marginLeft: i > 0 ? "-12px" : "0", zIndex: 5 - i }}
                                    >
                                        <Image src={logo} alt={`Token ${i}`} width={40} height={40} className="w-full h-full object-cover scale-110" />
                                    </div>
                                ))}
                            </div>
                            <h3 className="font-body text-xl font-bold text-white mb-3">Multi-Asset</h3>
                            <p className="font-body text-[15px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors">
                                T-Bills, Gold, and Credit — auto-routed to the highest yield across DeFi.
                            </p>
                        </div>
                    </FeatureCard>

                    {/* ── Live Analytics (spans 2 cols) ── */}
                    <FeatureCard className="md:col-span-2">
                        <div className="p-8 pb-0 flex flex-col md:flex-row md:items-start justify-between mb-4">
                            <div className="mb-4 md:mb-0">
                                <h3 className="font-body text-xl font-bold text-white mb-2">Live Analytics</h3>
                                <p className="font-body text-[15px] text-white/50 max-w-sm mb-4">
                                    Real-time P&L tracking backed by Chainlink verifiable oracle feeds.
                                </p>
                                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#375BD2]/10 border border-[#375BD2]/20">
                                    <div className="w-3 h-3 text-[#375BD2]">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.88-5.744L16.48 9.9c.28-.278.28-.73 0-1.008l-.713-.706c-.28-.278-.734-.278-1.014 0l-5.632 5.584-2.583-2.56c-.28-.278-.734-.278-1.013 0l-.713.706c-.28.278-.28.73 0 1.008l3.805 3.77c.28.278.734.278 1.013 0z" />
                                        </svg>
                                    </div>
                                    <span className="font-code text-[9px] text-[#375BD2] uppercase font-bold tracking-widest">Powered by Chainlink</span>
                                </div>
                            </div>
                            <div className="text-left md:text-right bg-white/[0.03] border border-white/10 px-4 py-2 rounded-xl">
                                <div className="font-code text-lg text-[#28A0F0] font-bold">+12.84%</div>
                                <div className="font-code text-[11px] text-white/40 tracking-wider uppercase mt-1">30d APY</div>
                            </div>
                        </div>
                        {/* Sparkline chart */}
                        <div className="h-28 px-8 pb-6 mt-2">
                            <Sparkline />
                        </div>
                    </FeatureCard>

                    {/* ── Gas Efficiency ── */}
                    <FeatureCard>
                        <div className="p-8 flex flex-col h-full justify-between">
                            <div>
                                <h3 className="font-body text-xl font-bold text-white mb-3">Gas Efficiency</h3>
                                <p className="font-body text-[15px] text-white/50 leading-relaxed group-hover:text-white/70 transition-colors mb-6">
                                    Pennies per transaction. Institutional yield execution without Ethereum mainnet fees.
                                </p>
                            </div>
                            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
                                <div className="flex items-end justify-between mb-3">
                                    <span className="font-code text-[11px] text-white/40 uppercase tracking-widest">Savings</span>
                                    <span className="font-code text-2xl font-bold text-[#FFD60A] drop-shadow-[0_0_10px_rgba(255,214,10,0.3)]">94%</span>
                                </div>
                                <AnimatedBar percent={94} color="#FFD60A" delay={200} />
                            </div>
                        </div>
                    </FeatureCard>
                </motion.div>
            </div>
        </section>
    );
}

