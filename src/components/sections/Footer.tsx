"use client";

import { IconBolt } from "@/components/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

function NewsletterForm() {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [msg, setMsg] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email) return;

        setStatus("loading");

        try {
            const API_URL = process.env.NEXT_PUBLIC_API_URL;
            const res = await fetch(`${API_URL}/api/v1/waitlist`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Failed to subscribe");
            }

            setStatus("success");
            toast.success("Subscribed to updates", {
                description: "You are now on our mailing list. Watch out for our emails.",
            });
            setEmail("");

            // Revert back to idle after 3s
            setTimeout(() => {
                setStatus("idle");
            }, 3000);

        } catch (err: any) {
            setStatus("error");
            toast.error(err.message || "Failed to subscribe");

            setTimeout(() => {
                setStatus("idle");
            }, 3000);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="relative group max-w-sm">
            <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading" || status === "success"}
                placeholder="Enter your email"
                className="w-full bg-white/[0.02] border border-white/10 rounded-xl px-4 py-3.5 pr-28 font-body text-sm text-white placeholder-white/30 focus:outline-none focus:border-[#28A0F0]/50 hover:bg-white/[0.04] transition-all disabled:opacity-50"
            />
            <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-white text-black font-body font-semibold text-xs px-4 rounded-lg hover:bg-white/90 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] active:scale-95 disabled:opacity-50"
            >
                {status === "loading" ? "..." : "Subscribe"}
            </button>

        </form>
    );
}

export default function Footer() {
    return (
        <footer
            className="relative pt-24 pb-12 px-6 bg-gradient-to-b from-[#0A0A0B] to-black overflow-hidden"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
            {/* Background Glows — hidden on mobile */}
            <div className="hidden md:block absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#28A0F0] opacity-[0.03] blur-[120px] pointer-events-none rounded-full" />
            <div className="hidden md:block absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-[#FFD60A] opacity-[0.02] blur-[100px] pointer-events-none rounded-full" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col items-start">
                        <div className="font-display text-2xl font-bold tracking-[0.32em] text-white mb-5 flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#28A0F0] to-[#FFD60A] p-[1px] shadow-[0_0_15px_rgba(40,160,240,0.2)]">
                                <div className="w-full h-full bg-[#0A0A0B] rounded-lg flex items-center justify-center">
                                    <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
                                </div>
                            </div>
                            ZENITH
                        </div>
                        <p className="font-body text-sm text-white/40 leading-relaxed max-w-sm mb-8">
                            The High-Performance Yield Layer for Real-World Assets.
                            Built on Arbitrum Stylus for sub-millisecond execution and institutional-grade security.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center gap-4">
                            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter / X" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-[#28A0F0]/50 transition-all hover:shadow-[0_0_15px_rgba(40,160,240,0.2)]">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                            <a href="https://github.com/zenithfi-labs" target="_blank" rel="noopener noreferrer" aria-label="Github" className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white hover:border-white/30 transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Protocol Column */}
                    <div className="lg:col-span-2">
                        <h4 className="font-code text-xs font-semibold tracking-wider text-white uppercase mb-6">Protocol</h4>
                        <ul className="space-y-4">
                            {["Yield Vaults", "Smart Routing", "Analytics Board", "Transparency", "Risk Framework"].map(item => (
                                <li key={item}>
                                    <a href="#" className="font-body text-[14px] text-white/50 hover:text-[#28A0F0] hover:translate-x-1 transition-all inline-block">{item}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Developers Column */}
                    <div className="lg:col-span-2">
                        <h4 className="font-code text-xs font-semibold tracking-wider text-white uppercase mb-6">Developers</h4>
                        <ul className="space-y-4">
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-white/50 hover:text-[#28A0F0] hover:translate-x-1 transition-all inline-block">Documentation</a></li>
                            <li><a href="https://github.com/zenithfi-labs" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-white/50 hover:text-[#28A0F0] hover:translate-x-1 transition-all inline-block">GitHub Repo</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-white/50 hover:text-[#28A0F0] hover:translate-x-1 transition-all inline-block">Security Audits</a></li>
                            <li><a href="#" target="_blank" rel="noopener noreferrer" className="font-body text-[14px] text-white/50 hover:text-[#28A0F0] hover:translate-x-1 transition-all inline-block">Bug Bounty</a></li>
                        </ul>
                    </div>

                    {/* Newsletter Column */}
                    <div className="lg:col-span-4">
                        <h4 className="font-code text-xs font-semibold tracking-wider text-white uppercase mb-6">Stay Updated</h4>
                        <p className="font-body text-[14px] text-white/40 mb-5 max-w-sm leading-relaxed">
                            Get the latest updates on institutional yield and protocol developments.
                        </p>
                        <NewsletterForm />
                    </div>
                </div>

                {/* Vast "ZENITH" Text at Bottom Background */}
                <div className="w-full justify-center flex mt-10 mb-[-1rem] pointer-events-none select-none">
                    <span
                        className="font-display font-bold text-center leading-none"
                        style={{
                            fontSize: "14vw",
                            letterSpacing: "0.02em",
                            background: "linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
                            WebkitMaskImage: "linear-gradient(to bottom, black 70%, transparent 100%)"
                        }}
                    >
                        ZENITH
                    </span>
                </div>

                {/* Copyright Line */}
                <div
                    className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
                >
                    <div className="flex items-center gap-2">
                        <span className="font-body text-xs text-white/30">
                            © {new Date().getFullYear()} Zenith Finance. All rights reserved.
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#" className="font-body text-xs text-white/30 hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="font-body text-xs text-white/30 hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
