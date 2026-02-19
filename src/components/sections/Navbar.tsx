"use client";

import { useEffect, useState } from "react";
import PillButton from "@/components/ui/PillButton";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[7.5rem] py-4 transition-all duration-500 ${scrolled
                    ? "bg-[#0A0A0B]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
                    : "bg-transparent border-b border-transparent"
                }`}
        >
            {/* Wordmark */}
            <span className="font-display font-bold text-white tracking-[0.32em] text-base">
                ZENITH
            </span>

            {/* CTA */}
            <PillButton variant="dark">Join Waitlist</PillButton>
        </nav>
    );
}
