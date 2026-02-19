"use client";

import { motion } from "framer-motion";
import PillButton from "@/components/ui/PillButton";
import { IconVault, IconMultiAsset, IconDashboard } from "@/components/icons";

const FEATURE_CARDS = [
    {
        title: "Non-Custodial",
        desc: "You hold the keys. Funds flow directly to audited vaults.",
        icon: <IconVault />,
    },
    {
        title: "Multi-Asset",
        desc: "T-Bills, Gold, Credit. All in one unified position.",
        icon: <IconMultiAsset />,
    },
    {
        title: "Live Analytics",
        desc: "Real-time P&L tracking powered by Chainlink.",
        icon: <IconDashboard />,
    },
];

export default function Features() {
    return (
        <section className="relative py-32 px-6 bg-[#050505]">
            <div className="max-w-6xl mx-auto">
                {/* Hero Feature Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-body text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                            Built on <span className="text-[#28A0F0]">Arbitrum Stylus.</span><br />
                            Powered by Rust.
                        </h2>
                        <p className="font-body text-lg text-white/50 max-w-lg mb-8">
                            Experience execution speeds 10x faster than EVM at a fraction of the cost.
                            Enterprise-grade reliability meets DeFi composability.
                        </p>
                        <PillButton variant="light">Read Technical Whitepaper</PillButton>
                    </motion.div>

                    {/* Abstract Visual */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#111] to-black"
                    >
                        {/* Grid lines */}
                        <div
                            className="absolute inset-0 opacity-20"
                            style={{
                                backgroundImage:
                                    "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
                                backgroundSize: "40px 40px",
                            }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 rounded-full bg-[#28A0F0] blur-[100px] opacity-20 animate-pulse" />
                        </div>
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-[10px] font-mono text-white/40 uppercase">Execution</span>
                                    <span className="text-[10px] font-mono text-[#28A0F0]">0.4ms</span>
                                </div>
                                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                                    <div className="h-full bg-[#28A0F0] w-[95%]" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Secondary Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {FEATURE_CARDS.map((f, i) => (
                        <div
                            key={i}
                            className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
                        >
                            <div className="flex items-center gap-4 mb-3">
                                <div className="p-2 rounded-lg bg-white/5 text-white/80 group-hover:text-white transition-colors">
                                    {f.icon}
                                </div>
                                <h3 className="font-body text-base font-bold text-white">{f.title}</h3>
                            </div>
                            <p className="font-body text-sm text-white/40 group-hover:text-white/60 transition-colors pl-[3.25rem]">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
