"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { IconChevronDown, IconMenu, IconClose } from "@/components/icons";
import PillButton from "@/components/ui/PillButton";
import { NAV_LINKS } from "@/data/constants";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* ── Desktop / Mobile Navbar ──────────────────────── */}
            <nav className="relative z-20 flex items-center justify-between px-6 md:px-[7.5rem] py-5">
                {/* Left: wordmark + nav links */}
                <div className="flex items-center gap-[30px]">
                    <span className="font-display font-bold text-white tracking-[0.32em] text-base">
                        ZENITH
                    </span>
                    <div className="hidden md:flex items-center gap-[30px]">
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link}
                                className="flex items-center gap-[6px] text-white text-sm font-body font-medium hover:text-white/70 transition-colors"
                            >
                                {link}
                                <IconChevronDown />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: pill button + mobile hamburger */}
                <div className="flex items-center gap-3">
                    <PillButton variant="dark">Join Waitlist</PillButton>
                    <button
                        className="md:hidden p-2 text-white/60 hover:text-white transition-colors"
                        onClick={() => setMenuOpen((v) => !v)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <IconClose /> : <IconMenu />}
                    </button>
                </div>
            </nav>

            {/* ── Mobile Menu (AnimatePresence) ────────────────── */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22 }}
                        className="absolute top-[65px] left-0 right-0 z-30 bg-black/90 backdrop-blur-xl px-6 py-6 flex flex-col gap-5"
                    >
                        {NAV_LINKS.map((link) => (
                            <button
                                key={link}
                                onClick={() => setMenuOpen(false)}
                                className="text-left font-body text-sm text-white/60 hover:text-white transition-colors"
                            >
                                {link}
                            </button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
