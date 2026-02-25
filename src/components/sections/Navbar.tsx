"use client";

import { useRef, useEffect, useState } from "react";
import PillButton from "@/components/ui/PillButton";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const sentinel = sentinelRef.current;
        if (!sentinel) return;

        const observer = new IntersectionObserver(
            ([entry]) => setScrolled(!entry.isIntersecting),
            { threshold: 0 }
        );
        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            {/* Invisible sentinel — when it scrolls out of view, navbar gets background */}
            <div ref={sentinelRef} className="absolute top-0 left-0 w-full h-10" />

            <nav
                className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-[7.5rem] transition-all duration-500 ${scrolled
                    ? "py-4 bg-[#0A0A0B]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
                    : "pt-6 pb-4 bg-transparent border-b border-transparent"
                    }`}
            >
                {/* Wordmark */}
                <span className="font-display font-bold text-white tracking-[0.32em] text-base">
                    ZENITH
                </span>

                {/* CTA */}
                <PillButton variant="dark">Join Waitlist</PillButton>
            </nav>
        </>
    );
}
