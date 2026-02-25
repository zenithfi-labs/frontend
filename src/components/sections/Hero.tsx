"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import PillButton from "@/components/ui/PillButton";
import Particles from "@/components/ui/Particles";

export default function Hero() {
    const { scrollY } = useScroll();
    const scrollOpacity = useTransform(scrollY, [0, 100], [0.6, 0]);

    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            {/* Background video (700KB compressed) — poster shows instantly while video loads */}
            <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-poster.webp"
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/hero-bg.mp4" type="video/mp4" />
            </video>

            {/* Floating particles overlay — only on desktop */}
            <div className="hidden md:block">
                <Particles />
            </div>

            {/* Cinematic Vignette */}
            <div
                className="absolute inset-0 pointer-events-none z-[2]"
                style={{
                    background: "radial-gradient(circle at center, transparent 0%, #0A0A0B 95%)",
                }}
                aria-hidden="true"
            />

            {/* Top Scrim (Protect Navbar) */}
            <div
                className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
                style={{
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
                }}
                aria-hidden="true"
            />

            {/* Hero Content */}
            <motion.div
                variants={stagger}
                initial="hidden"
                animate="visible"
                className="relative z-10 flex flex-col items-center text-center px-6 pt-[180px] md:pt-[240px] pb-[120px] gap-8"
            >
                {/* Badge */}
                <motion.div
                    variants={fadeUp}
                    className="flex items-center gap-2.5 px-4 py-2 font-body font-medium text-[13px]"
                    style={{
                        borderRadius: "20px",
                        background: "rgba(255,255,255,0.10)",
                        border: "1px solid rgba(255,255,255,0.20)",
                    }}
                >
                    <span className="w-1 h-1 rounded-full bg-white shrink-0" />
                    <span className="text-white/60">Early access available from</span>
                    <span className="text-white">Q3 2026</span>
                </motion.div>

                {/* Heading — animated gradient */}
                <motion.h1
                    variants={fadeUp}
                    className="zenith-gradient font-body font-bold tracking-tight leading-[1.1] max-w-[800px] mb-4"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
                >
                    Institutional Yield for<br />Real-World Assets
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    variants={fadeUp}
                    className="font-body font-normal text-[15px] text-white/70 max-w-[600px] leading-relaxed -mt-2"
                >
                    Institutional-grade yield optimization on tokenized real-world assets.
                    Your capital automatically routed to the highest-yielding T-Bills, Gold,
                    and Credit — at Rust-speed on Arbitrum.
                </motion.p>

                {/* CTA */}
                <motion.div variants={fadeUp} className="flex flex-col items-center gap-2">
                    <PillButton variant="gold">Join Waitlist</PillButton>
                    <div className="font-body text-[12px] text-white/50 tracking-wide mt-2">
                        Limited access for early institutional partners.
                    </div>
                </motion.div>

                {/* Proof of Security Badge */}
                <motion.div variants={fadeUp} className="mt-8 flex flex-col md:flex-row items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                    <div className="w-6 h-6 rounded-full bg-[#2A5ADA]/20 flex items-center justify-center border border-[#2A5ADA]/40">
                        <svg className="w-3 h-3 text-[#2A5ADA]" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L3 6v6.5c0 5.05 3.81 9.85 9 11.5 5.19-1.65 9-6.45 9-11.5V6l-9-4zm0 18.9c-3.8-1.54-6.5-5.32-6.5-9.4V7.54l6.5-2.89 6.5 2.89v6.96c0 4.08-2.7 7.86-6.5 9.4zM12 11c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                    </div>
                    <span className="font-body text-xs text-white/70">
                        <strong className="text-white font-medium">Non-Custodial Architecture.</strong> Real-time Proof of Reserves via Chainlink.
                    </span>
                </motion.div>
            </motion.div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
                style={{ background: "linear-gradient(to bottom, transparent, #0A0A0B)" }}
                aria-hidden="true"
            />

            {/* Scroll hint */}
            <motion.div
                style={{ opacity: scrollOpacity }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-30"
            >
                <span className="font-code text-[9px] tracking-[0.4em] text-white/70 uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
