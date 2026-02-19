"use client";

import { motion } from "framer-motion";
import { ECOSYSTEM_ASSETS } from "@/data/constants";

export default function Ecosystem() {
    return (
        <section className="relative py-32 px-6 overflow-hidden">
            {/* Glow Blob - Gold Right */}
            <div className="glow-blob glow-gold bottom-0 -right-48 opacity-10" />

            <div className="max-w-4xl mx-auto relative z-10 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="font-body text-3xl md:text-4xl font-bold text-white mb-12"
                >
                    Unified Liquidity Layer
                </motion.h2>

                <div className="flex flex-wrap justify-center gap-4">
                    {ECOSYSTEM_ASSETS.map((asset, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="flex items-center gap-3 pr-6 pl-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm cursor-default hover:bg-white/10 transition-colors"
                        >
                            <div
                                className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                                style={{ background: asset.bg }}
                            >
                                {asset.ticker[0]}
                            </div>
                            <div className="text-left">
                                <div className="text-xs font-bold text-white leading-none">{asset.ticker}</div>
                                <div className="text-[10px] text-white/40 leading-none mt-1">{asset.name}</div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
