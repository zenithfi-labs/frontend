"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_ASSETS } from "@/data/constants";

export default function Ecosystem() {
    // We create a robust array of items for each track to ensure the screen is filled.
    const row1 = [...ECOSYSTEM_ASSETS, ...ECOSYSTEM_ASSETS, ...ECOSYSTEM_ASSETS, ...ECOSYSTEM_ASSETS];
    const row2Base = [...ECOSYSTEM_ASSETS].reverse();
    const row2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

    return (
        <section className="relative py-32 overflow-hidden bg-black">
            {/* Glow Blob - Gold Right */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-[#FFD60A] opacity-[0.05] blur-[150px] pointer-events-none rounded-full mix-blend-screen" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#28A0F0] opacity-[0.03] blur-[120px] pointer-events-none rounded-full mix-blend-screen" />

            <div className="max-w-6xl mx-auto relative z-10 px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] animate-pulse shadow-[0_0_10px_#FFD60A]" />
                            <span className="font-code text-[10px] text-white/50 uppercase tracking-widest font-semibold">Integrations</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                            className="font-body text-3xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/30">Liquidity Layer</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6 py-4">
                {/* Edge fade masks - Increased z-index and width to ensure clean cutoffs */}
                <div className="absolute top-0 left-0 w-24 md:w-56 h-full bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 md:w-56 h-full bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none" />

                {/* The Scrolling Track 1 (Right to Left) */}
                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    {/* Render exact duplicates of row1 to satisfy translateX(-50%) seamless loop */}
                    {[...row1, ...row1].map((asset, i) => (
                        <div
                            key={`t1-${i}`}
                            className="mx-3 flex-shrink-0 group flex items-center gap-4 pr-8 pl-2.5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md cursor-default hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            <div
                                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                                style={{ background: asset.bg }}
                            >
                                {asset.ticker[0]}
                            </div>
                            <div className="text-left">
                                <div className="text-[15px] font-bold text-white leading-none tracking-wide">{asset.ticker}</div>
                                <div className="text-xs text-white/50 leading-none mt-1.5">{asset.name}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* The Scrolling Track 2 (Left to Right) */}
                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                    {[...row2, ...row2].map((asset, i) => (
                        <div
                            key={`t2-${i}`}
                            className="mx-3 flex-shrink-0 group flex items-center gap-4 pr-8 pl-2.5 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md cursor-default hover:bg-white/10 hover:border-white/20 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <div
                                className="w-11 h-11 rounded-full flex items-center justify-center text-sm font-bold text-white shadow-xl saturate-50 group-hover:saturate-100 transition-all duration-300 group-hover:scale-110"
                                style={{ background: asset.bg }}
                            >
                                {asset.ticker[0]}
                            </div>
                            <div className="text-left">
                                <div className="text-[15px] font-bold text-white leading-none tracking-wide">{asset.ticker}</div>
                                <div className="text-xs text-white/40 leading-none mt-1.5">{asset.name}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
