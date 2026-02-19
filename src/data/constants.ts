// ── Footer ─────────────────────────────────────────────
export const FOOTER_LINKS = ["Docs", "GitHub", "Twitter / X"] as const;

// ── Hero ───────────────────────────────────────────────
export const HERO_VIDEO_URL =
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4";

// ── Ecosystem Assets ───────────────────────────────────
export interface AssetData {
    ticker: string;
    name: string;
    bg: string;
}

export const ECOSYSTEM_ASSETS: AssetData[] = [
    { ticker: "USDC", name: "USD Coin", bg: "#2775CA" },
    { ticker: "USDT", name: "Tether", bg: "#26A17B" },
    { ticker: "ONDO", name: "Ondo US Dollar Yield", bg: "#000" },
    { ticker: "PAXG", name: "Pax Gold", bg: "#D4AF37" },
    { ticker: "USTB", name: "US Treasuries", bg: "#333" },
];

// ── Features: Multi-Asset Token Badges ─────────────────
export const TOKEN_BADGES = [
    { label: "T", color: "#28A0F0" },
    { label: "G", color: "#D4AF37" },
    { label: "C", color: "#26A17B" },
] as const;
