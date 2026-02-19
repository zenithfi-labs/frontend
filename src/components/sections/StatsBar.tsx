"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import StatCounter from "@/components/ui/StatCounter";

export default function StatsBar() {
    return (
        <section className="relative z-20 -mt-16 px-6 md:px-0">
            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-[#0A0A0B]/60 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden"
            >
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
                    {/* TVL */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 px-8 relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative font-body text-xs text-white/50 tracking-[0.08em] uppercase mb-3">
                            Total Value Locked
                        </span>
                        <span className="relative font-body text-4xl md:text-5xl font-bold text-white tracking-tight">
                            $<StatCounter value={2.4} decimals={1} suffix="B" />
                        </span>
                        <span className="relative font-body text-[11px] text-white/30 mt-3 bg-white/[0.05] px-2 py-1 rounded-full border border-white/[0.05]">
                            Across all vaults
                        </span>
                    </motion.div>

                    {/* APY */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 px-8 relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-[#FFD60A]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative font-body text-xs text-[#FFD60A]/70 tracking-[0.08em] uppercase mb-3">
                            Average APY
                        </span>
                        <span className="relative font-body text-4xl md:text-5xl font-bold text-[#FFD60A] tracking-tight drop-shadow-[0_0_15px_rgba(255,214,10,0.3)]">
                            <StatCounter value={12.8} decimals={1} suffix="%" />
                        </span>
                        <span className="relative font-body text-[11px] text-[#FFD60A]/40 mt-3 bg-[#FFD60A]/[0.05] px-2 py-1 rounded-full border border-[#FFD60A]/10">
                            30-day trailing avg
                        </span>
                    </motion.div>

                    {/* Gas Efficiency */}
                    <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 px-8 relative group">
                        <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="relative font-body text-xs text-white/50 tracking-[0.08em] uppercase mb-3">
                            Gas Efficiency
                        </span>
                        <span className="relative font-body text-4xl md:text-5xl font-bold text-white tracking-tight">
                            <StatCounter value={94} suffix="%" />
                        </span>
                        <span className="relative font-body text-[11px] text-white/30 mt-3 bg-white/[0.05] px-2 py-1 rounded-full border border-white/[0.05]">
                            vs Competitors
                        </span>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
