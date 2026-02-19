"use client";

interface PillButtonProps {
    children: React.ReactNode;
    variant?: "dark" | "light";
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
