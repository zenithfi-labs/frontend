"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import PillButton from "@/components/ui/PillButton";
import Link from "next/link";
import { fadeUp, stagger } from "@/lib/animations";
import Image from "next/image";
import arbitrumLogo from "@/app/brands/arbitrum-logo.svg";

export default function WaitlistPage() {
    const [email, setEmail] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail("");
            // In a real app, you'd send this to your backend/API
        }
    };

    return (
        <main className="min-h-screen bg-black flex flex-col relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#28A0F0] opacity-[0.05] blur-[150px] mix-blend-screen rounded-full pointer-events-none" />
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#FFD60A] opacity-[0.03] blur-[150px] mix-blend-screen rounded-full pointer-events-none" />
            </div>

            {/* Simple Navbar for Waitlist Page */}
            <nav className="relative z-50 w-full px-6 py-6 flex justify-between items-center border-b border-white/5">
                <Link href="/" className="font-display text-xl font-bold tracking-[0.32em] text-white flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#28A0F0] to-[#FFD60A] p-[1px] shadow-[0_0_15px_rgba(40,160,240,0.2)] group-hover:shadow-[0_0_25px_rgba(255,214,10,0.3)] transition-all">
                        <div className="w-full h-full bg-[#0A0A0B] rounded-lg flex items-center justify-center">
                            <span className="w-3 h-3 rounded-full bg-white group-hover:bg-[#FFD60A] transition-colors" />
                        </div>
                    </div>
                    ZENITH
                </Link>
                <Link href="/" className="font-code text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors">
                    Back to Home
                </Link>
            </nav>

            <div className="flex-1 flex items-center justify-center relative z-10 px-6 py-20">
                <motion.div
                    variants={stagger}
                    initial="hidden"
                    animate="visible"
                    className="max-w-xl w-full flex flex-col items-center text-center gap-8"
                >
                    <motion.div variants={fadeUp} className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#28A0F0]/20 to-[#FFD60A]/20 border border-white/10 flex items-center justify-center mb-4">
                        <svg className="w-8 h-8 text-[#FFD60A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                        </svg>
                    </motion.div>

                    <motion.div variants={fadeUp} className="space-y-4">
                        <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
                            Early Access Waitlist
                        </h1>
                        <p className="font-body text-[16px] text-white/60 max-w-[480px] mx-auto leading-relaxed">
                            Zenith is currently restricted to early institutional partners. Leave your email to get notified when public access opens.
                        </p>
                    </motion.div>

                    {isSubmitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full bg-[#28A0F0]/10 border border-[#28A0F0]/30 rounded-2xl p-8 flex flex-col items-center gap-4 mt-6"
                        >
                            <div className="w-12 h-12 rounded-full bg-[#28A0F0]/20 flex items-center justify-center">
                                <svg className="w-6 h-6 text-[#28A0F0]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-display text-xl text-white font-bold mb-2">You're on the list!</h3>
                                <p className="font-body text-sm text-white/60">We'll reach out when we're ready for you.</p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form
                            variants={fadeUp}
                            onSubmit={handleSubmit}
                            className="w-full max-w-md mt-6 relative"
                        >
                            <div className="relative group">
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your institutional email"
                                    className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-5 pr-36 font-body text-base text-white placeholder-white/30 focus:outline-none focus:border-[#FFD60A]/50 hover:bg-white/[0.05] transition-all shadow-[0_0_20px_rgba(0,0,0,0.5)] focus:shadow-[0_0_30px_rgba(255,214,10,0.1)]"
                                />
                                <div className="absolute right-2.5 top-1/2 -translate-y-1/2">
                                    <button type="submit" className="group relative rounded-full cursor-pointer hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(255,214,10,0.2)]" style={{ border: "0.6px solid rgba(255, 214, 10, 0.85)", padding: "1px" }}>
                                        <span aria-hidden className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-1/2 rounded-full blur-md" style={{ height: "6px", background: "rgba(255, 214, 10, 0.8)", marginTop: "-3px" }} />
                                        <span className="relative block rounded-full font-body font-bold text-[13px] leading-none text-black group-active:scale-95 transition-transform duration-200" style={{ background: "#FFD60A", padding: "12px 24px" }}>
                                            Join Now
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </motion.form>
                    )}

                    <motion.div variants={fadeUp} className="mt-8 flex items-center gap-6 opacity-40 grayscale hover:grayscale-0 transition-all duration-300">
                        <span className="font-code text-[10px] uppercase tracking-[0.2em] text-white">Backed By</span>
                        <div className="h-4 w-px bg-white/20"></div>
                        <Image src={arbitrumLogo} alt="Arbitrum" height={40} className="opacity-80" />
                    </motion.div>
                </motion.div>
            </div>
        </main>
    );
}
