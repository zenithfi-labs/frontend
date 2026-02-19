import { FOOTER_LINKS } from "@/data/constants";

export default function Footer() {
    return (
        <footer
            className="py-14 px-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">
                    <div>
                        <div className="font-display text-xl font-bold tracking-[0.32em] text-white mb-1.5">
                            ZENITH
                        </div>
                        <div className="font-body text-xs text-white/30">
                            The High-Performance Yield Layer for Real-World Assets on Arbitrum
                        </div>
                    </div>

                    <nav className="flex items-center gap-8" aria-label="Footer navigation">
                        {FOOTER_LINKS.map((link) => (
                            <a
                                key={link}
                                href="#"
                                className="font-body text-sm text-white/35 hover:text-white/70 transition-colors"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>
                </div>

                <div
                    className="pt-7 flex flex-col md:flex-row items-center justify-between gap-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
                >
                    <span className="font-body text-xs text-white/25">
                        © 2026 Zenith Protocol. All rights reserved.
                    </span>
                    <span className="font-body text-xs text-white/25">
                        Built on Arbitrum · Powered by Rust
                    </span>
                </div>
            </div>
        </footer>
    );
}
