"use client";

import { motion } from "framer-motion";
import { fadeUp, stagger } from "@/lib/animations";
import PillButton from "@/components/ui/PillButton";
import Link from "next/link";

export default function CtaBand() {
    return (
        <section
            className="relative py-28 px-6 overflow-hidden"
        >
            {/* Soft Background Transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-black to-[#0A0A0B] pointer-events-none z-0" />

            {/* Ambient glow */}
            <div
                className="absolute inset-0 pointer-events-none z-0"
                style={{
                    background:
                        "radial-gradient(ellipse 75% 90% at 50% 50%, rgba(40,160,240,0.07) 0%, transparent 70%)",
                }}
                aria-hidden="true"
            />

            <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className="relative z-10 max-w-xl mx-auto text-center"
            >
                <motion.h2
                    variants={fadeUp}
                    className="font-body text-4xl md:text-[3rem] font-semibold tracking-tight text-white mb-2 leading-[1.15]"
                >
                    Start earning on
                </motion.h2>
                <motion.h2
                    variants={fadeUp}
                    className="font-body text-4xl md:text-[3rem] font-semibold tracking-tight mb-8 leading-[1.15] text-transparent bg-clip-text bg-gradient-to-r from-[#28A0F0] to-[#FFD60A]"
                >
                    real-world assets.
                </motion.h2>
                <motion.p
                    variants={fadeUp}
                    className="font-body text-sm text-white/40 leading-relaxed mb-10 max-w-sm mx-auto"
                >
                    Join institutional capital already deployed across Zenith vaults.
                    No lock-ups. Full on-chain transparency.
                </motion.p>
                <motion.div variants={fadeUp} className="flex justify-center mt-6">
                    <Link href="/waitlist">
                        <PillButton variant="gold" className="px-8 py-2 scale-110">Join Waitlist</PillButton>
                    </Link>
                </motion.div>
            </motion.div>
        </section>
    );
}
