"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";
import mountainLogo from "@/app/brands/mountain-protocol.svg";
import blackrockLogo from "@/app/brands/blackrock.svg";
import ondoLogo from "@/app/brands/ondo.svg";
import paxgLogo from "@/app/brands/paxg.svg";
import usdcLogo from "@/app/brands/usdc.svg";
import usdtLogo from "@/app/brands/usdt.svg";

export default function IntelligenceLayer() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Soft Background Transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0B] via-black/80 to-black pointer-events-none z-0" />

            {/* Glow Blob - Center — hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#28A0F0] opacity-[0.03] blur-[100px] pointer-events-none rounded-full z-0" />

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
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6 shadow-[0_0_20px_rgba(40,160,240,0.1)]"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28A0F0] mr-2 animate-pulse" />
                        <span className="font-body text-[11px] font-semibold tracking-wider text-white/70 uppercase">
                            The Engine
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={fadeUp}
                        className="font-body text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A0F0] to-[#FFD60A]">Intelligence Layer</span>
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="font-body text-[15px] font-normal text-white/50 max-w-[600px] mx-auto leading-relaxed"
                    >
                        We don't just store assets. The Zenith Rust Engine continuously optimizes routing across tier-1 yield sources in real-time, executing at sub-millisecond speeds.
                    </motion.p>
                </motion.div>

                {/* The Brain / Routing Flow Diagram */}
                <motion.div variants={fadeUp} className="relative w-full max-w-4xl mx-auto h-[400px] hidden md:flex items-center justify-between">
                    {/* Background SVG for Paths */}
                    <svg viewBox="0 0 896 400" className="absolute inset-0 w-full h-full z-0 pointer-events-none">
                        <defs>
                            <linearGradient id="flow-grad" x1="120" y1="0" x2="750" y2="0" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stopColor="#28A0F0" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#28A0F0" stopOpacity="0.8" />
                                <stop offset="100%" stopColor="#FFD60A" stopOpacity="0.8" />
                            </linearGradient>
                        </defs>

                        {/* 1. Base Static Lines (Extremely subtle track) */}
                        {/* USDC -> Engine */}
                        <path d="M 200 80 C 324 80, 324 200, 448 200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                        {/* USDT -> Engine */}
                        <path d="M 200 200 C 324 200, 324 200, 448 200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                        {/* PAXG -> Engine */}
                        <path d="M 200 320 C 324 320, 324 200, 448 200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                        {/* Engine -> Ondo */}
                        <path d="M 448 200 C 572 200, 572 80, 696 80" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                        {/* Engine -> Mountain */}
                        <path d="M 448 200 C 572 200, 572 200, 696 200" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />
                        {/* Engine -> BlackRock */}
                        <path d="M 448 200 C 572 200, 572 320, 696 320" stroke="rgba(255,255,255,0.05)" strokeWidth="1" fill="none" />

                        {/* 2. Pulsing Glow Base layer (Breathing gradient track) */}
                        <path d="M 200 80 C 324 80, 324 200, 448 200" stroke="url(#flow-grad)" strokeWidth="1.5" fill="none" className="animate-[flow-pulse_3s_ease-in-out_infinite]" />
                        <path d="M 200 200 C 324 200, 324 200, 448 200" stroke="url(#flow-grad)" strokeWidth="1.5" fill="none" className="animate-[flow-pulse_3s_ease-in-out_infinite_0.5s]" />
                        <path d="M 200 320 C 324 320, 324 200, 448 200" stroke="url(#flow-grad)" strokeWidth="1.5" fill="none" className="animate-[flow-pulse_3s_ease-in-out_infinite_1s]" />
                        <path d="M 448 200 C 572 200, 572 80, 696 80" stroke="url(#flow-grad)" strokeWidth="1.5" fill="none" className="animate-[flow-pulse_3s_ease-in-out_infinite_1s]" />
                        <path d="M 448 200 C 572 200, 572 200, 696 200" stroke="url(#flow-grad)" strokeWidth="1.5" fill="none" className="animate-[flow-pulse_3s_ease-in-out_infinite_1.5s]" />
                        <path d="M 448 200 C 572 200, 572 320, 696 320" stroke="url(#flow-grad)" strokeWidth="1.5" fill="none" className="animate-[flow-pulse_3s_ease-in-out_infinite_2s]" />

                        {/* 3. Fast Data Packets / Streaks (Solid Color with Dasharray offset) */}
                        {/* Left Side (Input) - Blue Data */}
                        <path d="M 200 80 C 324 80, 324 200, 448 200" stroke="#28A0F0" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="30 1170" className="animate-[flow-fast_3s_linear_infinite]" opacity="0.9" />
                        <path d="M 200 200 C 324 200, 324 200, 448 200" stroke="#28A0F0" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="30 1170" className="animate-[flow-fast_3.2s_linear_infinite_0.5s]" opacity="0.9" />
                        <path d="M 200 320 C 324 320, 324 200, 448 200" stroke="#28A0F0" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="30 1170" className="animate-[flow-fast_2.9s_linear_infinite_1s]" opacity="0.9" />

                        {/* Right Side (Output) - Gold Yields */}
                        <path d="M 448 200 C 572 200, 572 80, 696 80" stroke="#FFD60A" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="30 1170" className="animate-[flow-fast_2.8s_linear_infinite_1s]" opacity="0.9" />
                        <path d="M 448 200 C 572 200, 572 200, 696 200" stroke="#FFD60A" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="30 1170" className="animate-[flow-fast_3.1s_linear_infinite_0.2s]" opacity="0.9" />
                        <path d="M 448 200 C 572 200, 572 320, 696 320" stroke="#FFD60A" strokeWidth="3" strokeLinecap="round" fill="none" strokeDasharray="30 1170" className="animate-[flow-fast_2.9s_linear_infinite_1.5s]" opacity="0.9" />
                    </svg>

                    {/* Left nodes: Inputs */}
                    <div className="flex flex-col gap-14 relative z-10 w-52">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(39,117,202,0.1)] hover:border-[#28A0F0]/30 transition-colors cursor-default">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shadow-lg overflow-hidden">
                                <Image src={usdcLogo} alt="USDC" width={24} height={24} className="w-full h-full object-contain rounded-full scale-105" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-body text-[13px] font-bold text-white leading-tight">USD Coin</div>
                                <div className="font-code text-[9px] text-[#28A0F0] tracking-wider mt-0.5">STABLECOIN</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(38,161,123,0.1)] hover:border-[#26A17B]/30 transition-colors cursor-default">
                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shadow-lg overflow-hidden">
                                <Image src={usdtLogo} alt="USDT" width={24} height={24} className="w-full h-full object-contain rounded-full scale-105" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-body text-[13px] font-bold text-white leading-tight">Tether</div>
                                <div className="font-code text-[9px] text-[#26A17B] tracking-wider mt-0.5">STABLECOIN</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,214,10,0.1)] hover:border-[#FFD60A]/30 transition-colors cursor-default">
                            <div className="w-8 h-8 rounded-full bg-black border border-white/10 flex items-center justify-center shadow-lg overflow-hidden">
                                <Image src={paxgLogo} alt="PAXG" width={24} height={24} className="w-full h-full object-contain rounded-full scale-110" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-body text-[13px] font-bold text-white leading-tight">PAX Gold</div>
                                <div className="font-code text-[9px] text-[#FFD60A] tracking-wider mt-0.5">RWA ASSET</div>
                            </div>
                        </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center z-10">
                        <div className="w-48 h-48 rounded-full border border-[#28A0F0]/30 bg-[#0A0A0B] flex items-center justify-center relative shadow-[0_0_50px_rgba(40,160,240,0.2)]">
                            <div className="absolute inset-0 rounded-full border border-[#28A0F0] animate-[ping_3s_ease-in-out_infinite]" />
                            <div className="absolute inset-0 rounded-full border border-[#28A0F0]/50 animate-[spin_10s_linear_infinite]" style={{ borderTopColor: 'transparent', borderBottomColor: 'transparent' }} />
                            <div className="absolute w-32 h-32 bg-[#28A0F0] blur-[40px] opacity-20" />
                            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                                <div className="font-code text-[10px] text-[#28A0F0] uppercase tracking-widest font-bold mb-1">The Brain</div>
                                <div className="font-body text-xl text-white font-bold leading-tight">Zenith Rust<br />Engine</div>
                            </div>
                        </div>
                    </div>

                    {/* Right Nodes: Platforms */}
                    <div className="flex flex-col gap-14 relative z-10 w-52">
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,214,10,0.1)] hover:border-[#FFD60A]/30 transition-colors">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white/5">
                                <Image src={ondoLogo} alt="Ondo" width={1000} height={1000} className="w-full h-full object-cover rounded-full scale-105" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-body text-[13px] font-bold text-white leading-tight">Ondo Finance</div>
                                <div className="font-code text-[9px] text-[#FFD60A] tracking-wider mt-0.5">T-BILLS YIELD</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,214,10,0.1)] hover:border-[#FFD60A]/30 transition-colors">
                            <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white/5">
                                <Image src={mountainLogo} alt="Mountain Protocol" width={1000} height={1000} className="w-full h-full object-cover rounded-full scale-105" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-body text-[13px] font-bold text-white leading-tight">Mountain Prot.</div>
                                <div className="font-code text-[9px] text-[#FFD60A] tracking-wider mt-0.5">TREASURE YIELD</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md shadow-[0_0_15px_rgba(255,214,10,0.1)] hover:border-[#FFD60A]/30 transition-colors">
                            <div className="w-8 h-8 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-lg text-white font-bold text-[10px] overflow-hidden">
                                <Image src={blackrockLogo} alt="Mountain Protocol" width={1000} height={1000} className="w-full h-full object-cover rounded-full scale-105" />
                            </div>
                            <div className="flex flex-col">
                                <div className="font-body text-[13px] font-bold text-white leading-tight">BlackRock BUIDL</div>
                                <div className="font-code text-[9px] text-[#FFD60A] tracking-wider mt-0.5">INSTITUTIONAL</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile Version: Vertical Flow Stack */}
                <motion.div variants={fadeUp} className="flex flex-col items-center md:hidden mt-12 relative w-full">
                    {/* Input Nodes */}
                    <div className="flex flex-wrap gap-3 w-full justify-center relative z-10">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0f1114] border border-white/10 shadow-[0_0_15px_rgba(39,117,202,0.2)]">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                                <Image src={usdcLogo} alt="USDC" width={18} height={18} className="w-full h-full object-contain rounded-full" />
                            </div>
                            <div className="font-body text-[11px] font-bold text-white">USDC</div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0f1114] border border-white/10 shadow-[0_0_15px_rgba(38,161,123,0.2)]">
                            <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center overflow-hidden">
                                <Image src={usdtLogo} alt="USDT" width={18} height={18} className="w-full h-full object-contain rounded-full" />
                            </div>
                            <div className="font-body text-[11px] font-bold text-white">USDT</div>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-[#0f1114] border border-white/10 shadow-[0_0_15px_rgba(255,214,10,0.2)]">
                            <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center overflow-hidden">
                                <Image src={paxgLogo} alt="PAXG" width={18} height={18} className="w-full h-full object-contain rounded-full scale-110" />
                            </div>
                            <div className="font-body text-[11px] font-bold text-white">PAXG</div>
                        </div>
                    </div>

                    {/* Connecting Line Down */}
                    <div className="w-px h-10 bg-gradient-to-b from-white/20 to-[#28A0F0] my-2 relative z-0 animate-pulse" />

                    {/* The Brain (mobile — simplified, no expensive animations) */}
                    <div className="w-32 h-32 rounded-full border border-[#28A0F0]/30 bg-[#0A0A0B] flex items-center justify-center relative shadow-[0_0_30px_rgba(40,160,240,0.2)] z-10">
                        <div className="absolute inset-0 rounded-full border border-[#28A0F0]/40" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center">
                            <div className="font-code text-[8px] text-[#28A0F0] uppercase tracking-widest font-bold mb-0.5">Brain</div>
                            <div className="font-body text-sm text-white font-bold leading-tight">Rust<br />Engine</div>
                        </div>
                    </div>

                    {/* Connecting Line Down */}
                    <div className="w-px h-10 bg-gradient-to-b from-[#28A0F0] to-[#FFD60A] my-2 relative z-0 animate-pulse" />

                    {/* Output Nodes */}
                    <div className="flex flex-col gap-3 w-full items-center relative z-10">
                        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#0f1114] border border-white/10 w-[220px]">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white/5">
                                    <Image src={ondoLogo} alt="Ondo" width={24} height={24} className="w-full h-full object-cover rounded-full scale-105" />
                                </div>
                                <div className="font-body text-[11px] font-bold text-white leading-tight">Ondo Finance</div>
                            </div>
                            <div className="font-code text-[8px] text-[#FFD60A] tracking-wider">T-BILLS</div>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#0f1114] border border-white/10 w-[220px]">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg overflow-hidden bg-white/5">
                                    <Image src={mountainLogo} alt="Mountain" width={24} height={24} className="w-full h-full object-cover rounded-full scale-105" />
                                </div>
                                <div className="font-body text-[11px] font-bold text-white leading-tight">Mountain Prot.</div>
                            </div>
                            <div className="font-code text-[8px] text-[#FFD60A] tracking-wider">TREASURE</div>
                        </div>
                        <div className="flex items-center justify-between px-3 py-2 rounded-xl bg-[#0f1114] border border-white/10 w-[220px]">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#111] border border-white/10 flex items-center justify-center shadow-lg text-white font-bold text-[10px] overflow-hidden">
                                    <Image src={blackrockLogo} alt="Blackrock" width={24} height={24} className="w-full h-full object-cover rounded-full scale-105" />
                                </div>
                                <div className="font-body text-[11px] font-bold text-white leading-tight">BlackRock BUIDL</div>
                            </div>
                            <div className="font-code text-[8px] text-[#FFD60A] tracking-wider">INSTITUTIONAL</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
