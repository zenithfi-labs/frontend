"use client";

import PillButton from "@/components/ui/PillButton";

export default function Navbar() {
    return (
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-[7.5rem] py-5">
            {/* Wordmark */}
            <span className="font-display font-bold text-white tracking-[0.32em] text-base">
                ZENITH
            </span>

            {/* CTA */}
            <PillButton variant="dark">Join Waitlist</PillButton>
        </nav>
    );
}
