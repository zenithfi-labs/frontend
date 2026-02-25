"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import arbitrumLogo from "@/app/brands/arbitrum-logo.svg";
import chainlinkLogo from "@/app/brands/chainlink-logo.svg";
import mountainLogo from "@/app/brands/mountain-protocol.svg";
import ondoLogo from "@/app/brands/ondo.svg";
import usdcLogo from "@/app/brands/usdc.svg";
import usdtLogo from "@/app/brands/usdt.svg";

export default function Ecosystem() {
    const infraPartners = [
        { name: "Arbitrum", logo: arbitrumLogo, desc: "L2 Execution Engine" },
        { name: "Chainlink", logo: chainlinkLogo, desc: "Data Feeds & CCIP" },
    ];

    const yieldSources = [
        { name: "Ondo Finance", logo: ondoLogo, desc: "Tokenized T-Bills" },
        { name: "Mountain Protocol", logo: mountainLogo, desc: "Regulated Treasuries" },
        { name: "USD Coin", logo: usdcLogo, desc: "Stablecoin Deep Liquidity" },
        { name: "Tether", logo: usdtLogo, desc: "Stablecoin Deep Liquidity" },
    ];

    const row1 = [...infraPartners, ...infraPartners, ...infraPartners, ...infraPartners];
    const row2Base = [...yieldSources];
    const row2 = [...row2Base, ...row2Base, ...row2Base, ...row2Base];

    return (
        <section className="relative py-32 overflow-hidden bg-black">
            {/* Glow Blob - Gold Right */}
            <div className="absolute bottom-0 right-0 w-[800px] h-[500px] bg-[#FFD60A] opacity-[0.05] blur-[150px] pointer-events-none rounded-full mix-blend-screen" />
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#28A0F0] opacity-[0.03] blur-[120px] pointer-events-none rounded-full mix-blend-screen" />

            <div className="max-w-6xl mx-auto relative z-10 px-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 shadow-[0_0_20px_rgba(255,214,10,0.1)]"
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD60A] animate-pulse shadow-[0_0_10px_#FFD60A]" />
                            <span className="font-code text-[10px] text-white/50 uppercase tracking-widest font-semibold">Integrations</span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 }}
                            className="font-body text-3xl md:text-5xl font-bold text-white tracking-tight"
                        >
                            Unified <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#28A0F0] to-[#FFD60A]">Liquidity Layer</span>
                        </motion.h2>
                    </div>
                </div>
            </div>

            {/* Infinite Marquee Container */}
            <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6 py-4">
                {/* Edge fade masks - Increased z-index and width to ensure clean cutoffs */}
                <div className="absolute top-0 left-0 w-24 md:w-56 h-full bg-gradient-to-r from-black via-black/90 to-transparent z-20 pointer-events-none" />
                <div className="absolute top-0 right-0 w-24 md:w-56 h-full bg-gradient-to-l from-black via-black/90 to-transparent z-20 pointer-events-none" />

                {/* The Scrolling Track 1: Infra Partners (Right to Left) */}
                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]">
                    {[...row1, ...row1].map((partner, i) => (
                        <div
                            key={`t1-${i}`}
                            className="mx-3 flex-shrink-0 group flex items-center gap-4 pr-8 pl-4 py-3 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md cursor-default hover:bg-white/10 hover:border-white/30 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.02)]"
                        >
                            <div className="w-10 h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                                <Image src={partner.logo} alt={partner.name} width={40} height={40} className="w-full h-full object-contain" />
                            </div>
                            <div className="text-left">
                                <div className="text-[15px] font-bold text-white leading-none tracking-wide">{partner.name}</div>
                                <div className="text-xs text-white/50 leading-none mt-1.5">{partner.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* The Scrolling Track 2: Yield Sources (Left to Right) */}
                <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused]" style={{ animationDirection: 'reverse' }}>
                    {[...row2, ...row2].map((source, i) => (
                        <div
                            key={`t2-${i}`}
                            className="mx-3 flex-shrink-0 group flex items-center gap-4 pr-8 pl-3 py-2.5 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md cursor-default hover:bg-white/10 hover:border-[#FFD60A]/30 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center p-1 transition-transform duration-300 group-hover:scale-110 shadow-xl saturate-50 group-hover:saturate-100 overflow-hidden">
                                <Image src={source.logo} alt={source.name} width={32} height={32} className="w-full h-full object-cover rounded-full scale-[1.10]" />
                            </div>
                            <div className="text-left">
                                <div className="text-[15px] font-bold text-white leading-none tracking-wide">{source.name}</div>
                                <div className="text-xs text-[#FFD60A]/60 leading-none mt-1.5 font-code uppercase tracking-wider">{source.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
