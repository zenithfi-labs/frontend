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
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : "_self"}
                                rel="noreferrer"
                                className="font-body text-sm text-white/35 hover:text-white/70 transition-colors flex items-center gap-2"
                            >
                                {link.label === "GitHub" && (
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                    </svg>
                                )}
                                {link.label}
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
