"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import PillButton from "@/components/ui/PillButton";
import Navbar from "@/components/sections/Navbar";
import { HERO_VIDEO_URL } from "@/data/constants";

export default function Hero() {
    return (
        <section className="relative min-h-screen bg-black overflow-hidden">
            {/* Background video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src={HERO_VIDEO_URL} type="video/mp4" />
            </video>

            {/* Cinematic Vignette */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
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

            {/* Navbar */}
            <Navbar />

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

                {/* Heading */}
                <motion.h1
                    variants={fadeUp}
                    className="font-body font-bold tracking-tight leading-[1.1] max-w-[800px] mb-4"
                    style={{
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        backgroundImage: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                    }}
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
                <motion.div variants={fadeUp}>
                    <PillButton variant="light">Join Waitlist</PillButton>
                </motion.div>
            </motion.div>

            {/* Bottom fade */}
            <div
                className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
                style={{ background: "linear-gradient(to bottom, transparent, #0A0A0B)" }}
                aria-hidden="true"
            />

            {/* Scroll hint */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25 pointer-events-none z-20">
                <span className="font-code text-[9px] tracking-[0.4em] text-white/50 uppercase">Scroll</span>
                <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
            </div>
        </section>
    );
}
