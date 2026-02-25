"use client";

import { useRef, useEffect } from "react";

const PARTICLE_COUNT_DESKTOP = 40;
const PARTICLE_COUNT_MOBILE = 18;

interface Particle {
    x: number;
    y: number;
    r: number;
    vx: number;
    vy: number;
    opacity: number;
}

/**
 * Canvas-based floating particle overlay for the Hero section.
 * Pauses when offscreen to save CPU/GPU. Reduced particles on mobile.
 */
export default function Particles() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationId: number;
        let isVisible = true;
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        const isMobile = window.matchMedia("(max-width: 768px)").matches;
        const count = isMobile ? PARTICLE_COUNT_MOBILE : PARTICLE_COUNT_DESKTOP;

        const resize = () => {
            canvas.width = canvas.offsetWidth * dpr;
            canvas.height = canvas.offsetHeight * dpr;
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        };
        resize();
        window.addEventListener("resize", resize);

        const particles: Particle[] = Array.from({ length: count }, () => ({
            x: Math.random() * canvas.offsetWidth,
            y: Math.random() * canvas.offsetHeight,
            r: Math.random() * 1.5 + 0.5,
            vx: (Math.random() - 0.5) * 0.3,
            vy: (Math.random() - 0.5) * 0.3 - 0.15,
            opacity: Math.random() * 0.4 + 0.1,
        }));

        const animate = () => {
            if (!isVisible) return;

            const w = canvas.offsetWidth;
            const h = canvas.offsetHeight;
            ctx.clearRect(0, 0, w, h);

            for (const p of particles) {
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.fill();
            }

            animationId = requestAnimationFrame(animate);
        };

        // Pause animation when canvas is not visible
        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
                if (isVisible) {
                    animationId = requestAnimationFrame(animate);
                } else {
                    cancelAnimationFrame(animationId);
                }
            },
            { threshold: 0 }
        );
        observer.observe(canvas);

        animate();

        return () => {
            cancelAnimationFrame(animationId);
            observer.disconnect();
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
            aria-hidden="true"
        />
    );
}
