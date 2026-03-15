"use client";

import { GlowingEffect } from "./glowing-effect";

export default function GlowingCard({ className = "", style = {}, children, ...props }) {
    return (
        <div
            className={`ahic-card ${className}`}
            style={{ position: "relative", ...style }}
            {...props}
        >
            <GlowingEffect
                spread={30}
                glow={false}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
                borderWidth={1}
            />
            {children}
        </div>
    );
}
