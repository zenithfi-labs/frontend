"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import { IconDeposit, IconAllocation, IconRebalance } from "@/components/icons";

const STEPS = [
    {
        icon: <IconDeposit />,
        num: "01",
        title: "Deposit",
        desc: "Deposit USDC or USDT. Receive zTokens that accrue yield real-time.",
    },
    {
        icon: <IconAllocation />,
        num: "02",
        title: "Smart Allocate",
        desc: "Rust engine evaluates risk across T-Bills & Gold instantly.",
    },
    {
        icon: <IconRebalance />,
        num: "03",
        title: "Auto Rebalance",
        desc: "Yields shift, Zenith moves capital. 94% cheaper gas via Stylus.",
    },
];

export default function HowItWorks() {
    return (
        <section className="relative py-40 px-6 overflow-hidden">
            {/* Glow Blob - Blue Left */}
            <div className="glow-blob glow-blue top-20 -left-64" />

            <div className="max-w-5xl mx-auto relative z-10">
                {/* Section Header */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="text-center mb-24"
                >
                    <motion.div
                        variants={fadeUp}
                        className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6"
                    >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#28A0F0] mr-2 animate-pulse" />
                        <span className="font-body text-[11px] font-semibold tracking-wider text-white/70 uppercase">
                            Automated Yield
                        </span>
                    </motion.div>
                    <motion.h2
                        variants={fadeUp}
                        className="font-body text-4xl md:text-5xl font-bold tracking-tight text-white mb-6"
                    >
                        Institutional Grade.<br />
                        <span className="text-white/40">Zero Complexity.</span>
                    </motion.h2>
                </motion.div>

                {/* Steps Grid */}
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-60px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
                >
                    {/* Connector Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none border-t border-dashed border-white/10" />

                    {STEPS.map((step, i) => (
                        <motion.div
                            key={i}
                            variants={fadeUp}
                            className="flex flex-col items-center text-center relative z-10 group"
                        >
                            {/* Watermark Number */}
                            <span
                                className="absolute -top-14 left-1/2 -translate-x-1/2 text-[120px] font-bold select-none pointer-events-none font-body z-0 opacity-20"
                                style={{
                                    color: "transparent",
                                    WebkitTextStroke: "2px rgba(255,255,255,1)",
                                    lineHeight: "100px",
                                }}
                            >
                                {step.num}
                            </span>

                            {/* Glass Icon Box */}
                            <div className="w-20 h-20 rounded-2xl bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-white shadow-xl shadow-black/50 z-10 mb-6 group-hover:border-white/20 transition-colors relative">
                                <div className="absolute inset-0 rounded-2xl bg-white/[0.02] pointer-events-none" />
                                {step.icon}
                            </div>

                            <h3 className="font-body text-xl font-bold text-white mb-3 relative z-10">
                                {step.title}
                            </h3>
                            <p className="font-body text-sm text-white/50 leading-relaxed max-w-[260px] relative z-10">
                                {step.desc}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
