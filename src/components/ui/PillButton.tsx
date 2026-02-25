"use client";

interface PillButtonProps {
    children: React.ReactNode;
    variant?: "dark" | "light" | "gold";
    className?: string;
    onClick?: () => void;
}

export default function PillButton({
    children,
    variant = "dark",
    className = "",
    onClick,
}: PillButtonProps) {
    const isDark = variant === "dark";
    const isGold = variant === "gold";

    const getBgColor = () => {
        if (isGold) return "#FFD60A";
        return isDark ? "#000000" : "#ffffff";
    };

    const getTextColor = () => {
        if (isGold) return "#000000";
        return isDark ? "#ffffff" : "#000000";
    };

    const getGlowColor = () => {
        if (isGold) return "rgba(255, 214, 10, 0.8)";
        return "rgba(255,255,255,0.55)";
    };

    const getBorderColor = () => {
        if (isGold) return "0.6px solid rgba(255, 214, 10, 0.85)";
        return "0.6px solid rgba(255,255,255,0.85)";
    };

    return (
        <button
            onClick={onClick}
            className={`group relative rounded-full cursor-pointer hover:opacity-90 transition-opacity ${className} ${isGold ? "shadow-[0_0_20px_rgba(255,214,10,0.2)]" : ""}`}
            style={{ border: getBorderColor(), padding: "1px" }}
        >
            {/* Top-edge glow streak */}
            <span
                aria-hidden
                className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-0 w-1/2 rounded-full blur-md"
                style={{ height: "6px", background: getGlowColor(), marginTop: "-3px" }}
            />
            {/* Inner pill */}
            <span
                className={`relative block rounded-full font-body ${isGold ? "font-bold" : "font-medium"} text-sm leading-none group-active:scale-95 transition-transform duration-200`}
                style={{
                    background: getBgColor(),
                    color: getTextColor(),
                    padding: "11px 29px",
                }}
            >
                {children}
            </span>
        </button>
    );
}
