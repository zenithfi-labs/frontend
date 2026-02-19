"use client";

import { useRef, useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";

// ── Animation variants ─────────────────────────────────────
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const fadeUp: any = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const stagger: any = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
};

// ── Counter that animates when scrolled into view ──────────
function StatCounter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (!inView) return;
    const ctrl = animate(mv, value, {
      duration: 2.4,
      ease: "easeOut",
      onUpdate(v) {
        setDisplay(v.toFixed(decimals));
      },
    });
    return () => ctrl.stop();
  }, [inView, value, decimals, mv]);

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

// ── SVG Icons ──────────────────────────────────────────────
function IconVault() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M12 8.5V7M12 17v-1.5M7 12H5.5M18.5 12H17" />
      <path d="M9.17 9.17L8.1 8.1M15.9 15.9l-1.07-1.07M14.83 9.17l1.07-1.07M8.1 15.9l1.07-1.07" />
    </svg>
  );
}

function IconRust() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

function IconMultiAsset() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="8.5" cy="7.5" r="4" />
      <circle cx="15.5" cy="7.5" r="4" />
      <circle cx="12" cy="15.5" r="4" />
    </svg>
  );
}

function IconDashboard() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function IconDeposit() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v13M6 10l6 6 6-6" />
      <path d="M4 20h16" />
    </svg>
  );
}

// Fixed: was identical to IconDashboard before
function IconAllocation() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3h7v3H3zM14 3h7v5h-7zM14 12h7v9h-7zM3 10h7v12H3z" />
    </svg>
  );
}

function IconRebalance() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
    </svg>
  );
}


function IconMenu() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
      <path d="M18 6L6 18M6 6l12 12" />
    </svg>
  );
}

function IconChevronDown() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// ── Layered pill button (outer border + inner pill + top glow streak) ──
function PillButton({
  children,
  variant = "dark",
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  variant?: "dark" | "light";
  className?: string;
  onClick?: () => void;
}) {
  const isDark = variant === "dark";
  return (
    <button
      onClick={onClick}
      className={`relative rounded-full cursor-pointer hover:opacity-90 transition-opacity ${className}`}
      style={{ border: "0.6px solid rgba(255,255,255,0.85)", padding: "1px" }}
    >
      {/* Top-edge glow streak */}
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-1/2 rounded-full blur-md"
        style={{ height: "6px", background: "rgba(255,255,255,0.55)", marginTop: "-3px" }}
      />
      {/* Inner pill */}
      <span
        className="relative block rounded-full font-body font-medium text-sm leading-none"
        style={{
          background: isDark ? "#000000" : "#ffffff",
          color: isDark ? "#ffffff" : "#000000",
          padding: "11px 29px",
        }}
      >
        {children}
      </span>
    </button>
  );
}

// ── Main page ──────────────────────────────────────────────
export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#0A0A0B] text-white overflow-x-hidden">

      {/* ══ HERO — full-screen video background ══════════════ */}
      <section className="relative min-h-screen bg-black overflow-hidden">

        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
            type="video/mp4"
          />
        </video>

        {/* 50% black overlay for readability */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* ── NAVBAR (floats over video) ─────────────────── */}
        <nav className="relative z-20 flex items-center justify-between px-6 md:px-[7.5rem] py-5">

          {/* Left: wordmark + nav links */}
          <div className="flex items-center gap-[30px]">
            <span className="font-display font-bold text-white tracking-[0.32em] text-base">
              ZENITH
            </span>
            <div className="hidden md:flex items-center gap-[30px]">
              {["Protocol", "Developers", "Assets", "Docs"].map((link) => (
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

        {/* ── MOBILE MENU ─────────────────────────────────── */}
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
              {["Protocol", "Developers", "Assets", "Docs"].map((link) => (
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

        {/* ── HERO CONTENT ────────────────────────────────── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 flex flex-col items-center text-center px-6 pt-[200px] md:pt-[280px] pb-[102px] gap-10"
        >
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2.5 px-4 py-2 font-body font-medium text-[13px]"
            style={{
              borderRadius: "20px",
              background: "rgba(255,255,255,0.10)",
              border: "1px solid rgba(255,255,255,0.20)",
            }}
          >
            <span className="w-1 h-1 rounded-full bg-white shrink-0" />
            <span className="text-white/60">Early access available from</span>
            <span className="text-white">Q3 2025</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-body font-medium leading-[1.28] max-w-[613px]"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
              background: "linear-gradient(144.5deg, #ffffff 28%, rgba(0,0,0,0) 115%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Institutional Yield for Real-World Assets
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body font-normal text-[15px] text-white/70 max-w-[640px] leading-relaxed -mt-4"
          >
            Institutional-grade yield optimization on tokenized real-world assets.
            Your capital automatically routed to the highest-yielding T-Bills, Gold,
            and Credit — at Rust-speed on Arbitrum.
          </motion.p>

          {/* CTA */}
          <motion.div variants={fadeUp}>
            <PillButton variant="light">Join Waitlist</PillButton>
          </motion.div>
        </motion.div>

        {/* Bottom fade — blends hero into the page below */}
        <div
          className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none z-10"
          style={{ background: "linear-gradient(to bottom, transparent, #0A0A0B)" }}
          aria-hidden="true"
        />

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25 pointer-events-none z-20">
          <span className="font-code text-[9px] tracking-[0.4em] text-white/50 uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* ══ STATS BAR ══════════════════════════════════════ */}
      <section className="border-b border-white/[0.05] bg-white/[0.014]">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/[0.05]"
        >
          <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 md:py-12 px-8">
            <span className="font-body text-xs text-white/40 tracking-[0.08em] mb-4">
              Total Value Locked
            </span>
            <span className="font-body text-[2.7rem] font-semibold text-white leading-none">
              $<StatCounter value={2.4} decimals={1} suffix="B+" />
            </span>
            <span className="font-body text-xs text-white/30 mt-2">
              Across all vaults
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 md:py-12 px-8">
            <span className="font-body text-xs text-white/40 tracking-[0.08em] mb-4">
              Average APY
            </span>
            <span className="font-body text-[2.7rem] font-semibold text-[#FFD60A] leading-none">
              <StatCounter value={12.8} decimals={1} suffix="%" />
            </span>
            <span className="font-body text-xs text-white/30 mt-2">
              30-day trailing average
            </span>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 md:py-12 px-8">
            <span className="font-body text-xs text-white/40 tracking-[0.08em] mb-4">
              Gas Saved vs Competitors
            </span>
            <span className="font-body text-[2.7rem] font-semibold text-white leading-none">
              <StatCounter value={94} suffix="%" />
            </span>
            <span className="font-body text-xs text-white/30 mt-2">
              Arbitrum Stylus efficiency
            </span>
          </motion.div>
        </motion.div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-24"
          >
            <motion.span variants={fadeUp} className="font-body text-xs text-white/45 tracking-[0.15em] uppercase block mb-4">
              Process
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-body text-3xl md:text-4xl font-semibold tracking-tight text-white">
              How It Works
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 relative"
          >
            {/* Connector — properly centered between the three icon circles */}
            <div
              className="hidden md:block absolute top-[3.2rem] h-px"
              style={{
                left: "calc(16.67% + 52px)",
                right: "calc(16.67% + 52px)",
                background: "linear-gradient(90deg, rgba(40,160,240,0.4), rgba(255,214,10,0.4), rgba(40,160,240,0.4))",
              }}
              aria-hidden="true"
            />

            {[
              {
                icon: <IconDeposit />,
                num: "01",
                numBg: "#28A0F0",
                numColor: "text-white",
                title: "Deposit Stablecoin",
                desc: "Deposit USDC or USDT into Zenith vaults. Receive zTokens that accrue yield in real-time from every RWA position.",
              },
              {
                icon: <IconAllocation />,
                num: "02",
                numBg: "#FFD60A",
                numColor: "text-[#0A0A0B]",
                title: "Smart Allocation",
                desc: "Our Rust engine on Arbitrum Stylus evaluates yield and risk across T-Bills, Gold, and Credit in real-time — routing capital to the optimal mix.",
              },
              {
                icon: <IconRebalance />,
                num: "03",
                numBg: "#28A0F0",
                numColor: "text-white",
                title: "Auto Rebalancing",
                desc: "When yields shift, Zenith rebalances automatically. No manual effort. 94% cheaper than competitors.",
              },
            ].map((step) => (
              <motion.div
                key={step.num}
                variants={fadeUp}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-7">
                  <div className="w-[6.5rem] h-[6.5rem] rounded-full border border-white/[0.08] bg-white/[0.022] flex items-center justify-center text-white/65">
                    {step.icon}
                  </div>
                  <div
                    className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full flex items-center justify-center"
                    style={{ background: step.numBg }}
                  >
                    <span className={`font-body text-[9px] font-semibold ${step.numColor}`}>{step.num}</span>
                  </div>
                </div>
                <h3 className="font-body text-sm font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-xs text-white/40 leading-relaxed max-w-[15rem]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURES ════════════════════════════════════════ */}
      <section className="py-32 px-6" style={{ background: "rgba(255,255,255,0.012)" }}>
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-20"
          >
            <motion.span variants={fadeUp} className="font-body text-xs text-white/45 tracking-[0.15em] uppercase block mb-4">
              Infrastructure
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-body text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Built for Institutions
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {[
              {
                icon: <IconVault />,
                iconColor: "#28A0F0",
                title: "Smart RWA Vaults",
                desc: "Non-custodial, diversified exposure to tokenized T-Bills, institutional gold, and premium yield instruments — from a single unified vault position.",
              },
              {
                icon: <IconRust />,
                iconColor: "#FFD60A",
                title: "Rust-Powered Engine",
                desc: "Sub-millisecond execution via Arbitrum Stylus. Enterprise-grade reliability with zero runtime overhead, 10× faster and 50× cheaper than EVM-only alternatives.",
              },
              {
                icon: <IconMultiAsset />,
                iconColor: "#FFD60A",
                title: "Multi-Asset Exposure",
                desc: "Access 10+ real-world asset classes through a single interface — stablecoins, precious metals, government securities, and tokenized credit.",
              },
              {
                icon: <IconDashboard />,
                iconColor: "#28A0F0",
                title: "Real-Time Dashboard",
                desc: "Institutional analytics with live P&L tracking, yield attribution, and risk exposure breakdowns — powered by Chainlink feeds, updated every block.",
              },
            ].map((card) => {
              const isBlue = card.iconColor === "#28A0F0";
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="glass-card p-8 group cursor-default"
                  style={{
                    transition: "border-color 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = isBlue
                      ? "rgba(40,160,240,0.25)"
                      : "rgba(255,214,10,0.2)";
                    (e.currentTarget as HTMLElement).style.boxShadow = isBlue
                      ? "0 8px 48px rgba(40,160,240,0.08)"
                      : "0 8px 48px rgba(255,214,10,0.06)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "";
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-7 transition-all duration-300"
                    style={{
                      border: `1px solid ${card.iconColor}30`,
                      background: `${card.iconColor}0d`,
                      color: card.iconColor,
                    }}
                  >
                    {card.icon}
                  </div>
                  <h3 className="font-body text-sm font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="font-body text-sm text-white/40 leading-relaxed">
                    {card.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ══ SUPPORTED ASSETS ════════════════════════════════ */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.span variants={fadeUp} className="font-body text-xs text-white/45 tracking-[0.15em] uppercase block mb-4">
              Ecosystem
            </motion.span>
            <motion.h2 variants={fadeUp} className="font-body text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
              Supported Assets
            </motion.h2>
            <motion.p variants={fadeUp} className="font-body text-sm text-white/40">
              Deposit once. Earn across the entire real-world asset landscape.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { ticker: "USDC", name: "USD Coin", symbol: "$", bg: "#2775CA", text: "text-white" },
              { ticker: "USDT", name: "Tether USD", symbol: "₮", bg: "#26A17B", text: "text-white" },
              { ticker: "ONDO", name: "Ondo Finance", symbol: "O", bg: "rgba(255,255,255,0.06)", text: "text-white", border: "border border-white/12" },
              { ticker: "PAXG", name: "Pax Gold", symbol: "Au", bg: "rgba(255,214,10,0.12)", text: "text-[#FFD60A]", border: "border border-[#FFD60A]/30" },
              { ticker: "T-BILLS", name: "US Treasuries", symbol: "T", bg: "rgba(255,255,255,0.06)", text: "text-white", border: "border border-white/12" },
            ].map((asset) => (
              <motion.div
                key={asset.ticker}
                variants={fadeUp}
                whileHover={{ y: -3, borderColor: "rgba(255,255,255,0.18)" }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="glass-card flex items-center gap-3.5 px-5 py-3.5 cursor-default"
              >
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${asset.border ?? ""}`}
                  style={{ background: asset.bg }}
                >
                  <span className={`font-body text-sm font-semibold ${asset.text}`}>{asset.symbol}</span>
                </div>
                <div>
                  <div className="font-body text-xs font-semibold text-white">{asset.ticker}</div>
                  <div className="font-body text-[10px] text-white/35 mt-0.5">{asset.name}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex items-center justify-center gap-3"
          >
            <div className="w-6 h-px bg-white/15" />
            <span className="font-body text-[11px] text-white/35">
              All vaults independently audited
            </span>
            <div className="w-6 h-px bg-white/15" />
          </motion.div>
        </div>
      </section>

      {/* ══ CTA BAND ════════════════════════════════════════ */}
      <section
        className="relative py-28 px-6 overflow-hidden"
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
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
            className="font-body text-4xl md:text-[3rem] font-semibold tracking-tight text-white/60 mb-8 leading-[1.15]"
          >
            real-world assets.
          </motion.h2>
          <motion.p variants={fadeUp} className="font-body text-sm text-white/40 leading-relaxed mb-10 max-w-sm mx-auto">
            Join institutional capital already deployed across Zenith vaults.
            No lock-ups. Full on-chain transparency.
          </motion.p>
          <motion.div variants={fadeUp} className="flex justify-center">
            <PillButton variant="light">Join Waitlist</PillButton>
          </motion.div>
        </motion.div>
      </section>

      {/* ══ FOOTER ══════════════════════════════════════════ */}
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
              {["Docs", "GitHub", "Twitter / X"].map((link) => (
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
              © 2025 Zenith Protocol. All rights reserved.
            </span>
            <span className="font-body text-xs text-white/25">
              Built on Arbitrum · Powered by Rust
            </span>
          </div>
        </div>
      </footer>

    </main>
  );
}
