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

        {/* ── Cinematic Vignette (Focus center, dark edges) ── */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: "radial-gradient(circle at center, transparent 0%, #0A0A0B 95%)",
          }}
          aria-hidden="true"
        />

        {/* ── Top Scrim (Protect Navbar) ── */}
        <div
          className="absolute top-0 left-0 right-0 h-40 pointer-events-none z-10"
          style={{
            background: "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)",
          }}
          aria-hidden="true"
        />

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
          className="relative z-10 flex flex-col items-center text-center px-6 pt-[180px] md:pt-[240px] pb-[120px] gap-8"
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
            <span className="text-white">Q3 2026</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeUp}
            className="font-body font-bold tracking-tight leading-[1.1] max-w-[800px] mb-4"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              backgroundImage: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.7) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Institutional Yield for<br />Real-World Assets
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="font-body font-normal text-[15px] text-white/70 max-w-[600px] leading-relaxed -mt-2"
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

      {/* ══ STATS BAR (Premium Glass Panel) ══════════════════ */}
      <section className="relative z-20 -mt-16 px-6 md:px-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="max-w-5xl mx-auto rounded-3xl border border-white/10 bg-[#0A0A0B]/60 backdrop-blur-md shadow-2xl shadow-black/50 overflow-hidden"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/5">
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 px-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative font-body text-xs text-white/50 tracking-[0.08em] uppercase mb-3">
                Total Value Locked
              </span>
              <span className="relative font-body text-4xl md:text-5xl font-bold text-white tracking-tight">
                $<StatCounter value={2.4} decimals={1} suffix="B" />
              </span>
              <span className="relative font-body text-[11px] text-white/30 mt-3 bg-white/[0.05] px-2 py-1 rounded-full border border-white/[0.05]">
                Across all vaults
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 px-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FFD60A]/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative font-body text-xs text-[#FFD60A]/70 tracking-[0.08em] uppercase mb-3">
                Average APY
              </span>
              <span className="relative font-body text-4xl md:text-5xl font-bold text-[#FFD60A] tracking-tight drop-shadow-[0_0_15px_rgba(255,214,10,0.3)]">
                <StatCounter value={12.8} decimals={1} suffix="%" />
              </span>
              <span className="relative font-body text-[11px] text-[#FFD60A]/40 mt-3 bg-[#FFD60A]/[0.05] px-2 py-1 rounded-full border border-[#FFD60A]/10">
                30-day trailing avg
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col items-center text-center py-10 px-8 relative group">
              <div className="absolute inset-0 bg-gradient-to-b from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative font-body text-xs text-white/50 tracking-[0.08em] uppercase mb-3">
                Gas Efficiency
              </span>
              <span className="relative font-body text-4xl md:text-5xl font-bold text-white tracking-tight">
                <StatCounter value={94} suffix="%" />
              </span>
              <span className="relative font-body text-[11px] text-white/30 mt-3 bg-white/[0.05] px-2 py-1 rounded-full border border-white/[0.05]">
                vs Competitors
              </span>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ══ HOW IT WORKS (With Ambient BG) ══════════════════ */}
      <section className="relative py-40 px-6 overflow-hidden">
        {/* Glow Blob - Blue Left */}
        <div className="glow-blob glow-blue top-20 -left-64" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-24"
          >
            <motion.div variants={fadeUp} className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#28A0F0] mr-2 animate-pulse" />
              <span className="font-body text-[11px] font-semibold tracking-wider text-white/70 uppercase">
                Automated Yield
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="font-body text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
              Institutional Grade.<br /><span className="text-white/40">Zero Complexity.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-12 relative"
          >
            {/* Connector Line (Desktop) - behind everything */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent z-0 pointer-events-none border-t border-dashed border-white/10" />

            {[
              {
                icon: <IconDeposit />,
                num: "01",
                title: "Deposit",
                desc: "Deposit USDC or USDT. Receive zTokens that accrue yield real-time.",
              },
              {
                icon: <IconAllocation />,
                num: "02",
                title: "Smart Allocate",
                desc: "Rust engine evaluates risk across T-Bills & Gold instantly.",
              },
              {
                icon: <IconRebalance />,
                num: "03",
                title: "Auto Rebalance",
                desc: "Yields shift, Zenith moves capital. 94% cheaper gas via Stylus.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex flex-col items-center text-center relative z-10 group"
              >
                {/* Huge Watermark Number */}
                <span
                  className="absolute -top-14 left-1/2 -translate-x-1/2 text-[120px] font-bold select-none pointer-events-none font-body z-0 opacity-20"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "2px rgba(255,255,255,1)",
                    lineHeight: "100px",
                  }}
                >
                  {step.num}
                </span>

                {/* Glass Icon Box */}
                <div className="w-20 h-20 rounded-2xl bg-[#0A0A0B] border border-white/10 flex items-center justify-center text-white shadow-xl shadow-black/50 z-10 mb-6 group-hover:border-white/20 transition-colors relative">
                  {/* Inner glow */}
                  <div className="absolute inset-0 rounded-2xl bg-white/[0.02] pointer-events-none" />
                  {step.icon}
                </div>

                <h3 className="font-body text-xl font-bold text-white mb-3 relative z-10">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-white/50 leading-relaxed max-w-[260px] relative z-10">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══ FEATURES (Dark Modern) ══════════════════════════ */}
      <section className="relative py-32 px-6 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-body text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                Built on <span className="text-[#28A0F0]">Arbitrum Stylus.</span><br />
                Powered by Rust.
              </h2>
              <p className="font-body text-lg text-white/50 max-w-lg mb-8">
                Experience execution speeds 10x faster than EVM at a fraction of the cost.
                Enterprise-grade reliability meets DeFi composability.
              </p>
              <PillButton variant="light">Read Technical Whitepaper</PillButton>
            </motion.div>
            {/* Feature Abstract Visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#111] to-black"
            >
              {/* Abstract grid lines simulation */}
              <div className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-[#28A0F0] blur-[100px] opacity-20 animate-pulse"></div>
              </div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase">Execution</span>
                    <span className="text-[10px] font-mono text-[#28A0F0]">0.4ms</span>
                  </div>
                  <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                    <div className="h-full bg-[#28A0F0] w-[95%]"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Secondary Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Non-Custodial", desc: "You hold the keys. Funds flow directly to audited vaults.", icon: <IconVault /> },
              { title: "Multi-Asset", desc: "T-Bills, Gold, Credit. All in one unified position.", icon: <IconMultiAsset /> },
              { title: "Live Analytics", desc: "Real-time P&L tracking powered by Chainlink.", icon: <IconDashboard /> },
            ].map((f, i) => (
              <div key={i} className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-white/5 text-white/80 group-hover:text-white transition-colors">
                    {f.icon}
                  </div>
                  <h3 className="font-body text-base font-bold text-white">{f.title}</h3>
                </div>
                <p className="font-body text-sm text-white/40 group-hover:text-white/60 transition-colors pl-[3.25rem]">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ ECOSYSTEM (Assets) ══════════════════════════════ */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Glow Blob - Gold Right */}
        <div className="glow-blob glow-gold bottom-0 -right-48 opacity-10" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-body text-3xl md:text-4xl font-bold text-white mb-12"
          >
            Unified Liquidity Layer
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              { ticker: "USDC", name: "USD Coin", bg: "#2775CA" },
              { ticker: "USDT", name: "Tether", bg: "#26A17B" },
              { ticker: "ONDO", name: "Ondo US Dollar Yield", bg: "#000", border: 'white/20' },
              { ticker: "PAXG", name: "Pax Gold", bg: "#D4AF37" },
              { ticker: "USTB", name: "US Treasuries", bg: "#333" },
            ].map((asset, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 pr-6 pl-2 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm cursor-default hover:bg-white/10 transition-colors"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold text-white`} style={{ background: asset.bg }}>
                  {asset.ticker[0]}
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white leading-none">{asset.ticker}</div>
                  <div className="text-[10px] text-white/40 leading-none mt-1">{asset.name}</div>
                </div>
              </motion.div>
            ))}
          </div>

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
              © 2026 Zenith Protocol. All rights reserved.
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
