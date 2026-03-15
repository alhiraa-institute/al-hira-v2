"use client";
import { useEffect } from "react";

export default function GlowCards() {
  useEffect(() => {
    const ON = "1";
    const OFF = "0";

    const handleMove = (e) => {
      document.querySelectorAll(".ahic-card").forEach((el) => {
        const rect = el.getBoundingClientRect();
        const px = e.clientX - rect.left;
        const py = e.clientY - rect.top;

        const inside =
          px > -80 && px < rect.width + 80 &&
          py > -80 && py < rect.height + 80;

        if (!inside) {
          el.style.setProperty("--glow-opacity", OFF);
          return;
        }

        el.style.setProperty("--glow-x", px + "px");
        el.style.setProperty("--glow-y", py + "px");
        el.style.setProperty("--glow-opacity", ON);
      });
    };

    document.body.addEventListener("pointermove", handleMove, { passive: true });
    return () => document.body.removeEventListener("pointermove", handleMove);
  }, []);

  return null;
}
