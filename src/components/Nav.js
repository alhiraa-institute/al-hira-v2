"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [openAt, setOpenAt] = useState(null);
    const pathname = usePathname();
    const open = openAt === pathname;

    useEffect(() => {
        const fn = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", fn);
        return () => window.removeEventListener("scroll", fn);
    }, []);

    const links = [
        { label: "Home", href: "/" },
        { label: "About", href: "/about" },
        { label: "Courses", href: "/courses" },
        { label: "Our Story", href: "/journey" },
    ];

    const linkStyle = (active) => ({
        fontFamily: "var(--font-body)",
        fontSize: "0.72rem",
        fontWeight: 500,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color: active ? "var(--gold)" : "var(--text-body)",
        textDecoration: "none",
        transition: "color 0.2s",
        borderBottom: active ? "1px solid var(--gold)" : "1px solid transparent",
        paddingBottom: "2px",
    });

    return (
        <nav
            style={{
                position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
                padding: "0 2rem",
                height: "72px",
                display: "flex", alignItems: "center", justifyContent: "space-between",
                background: scrolled ? "rgba(8,8,8,0.96)" : "rgba(8,8,8,0.6)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: scrolled
                    ? "1px solid rgba(201,168,76,0.22)"
                    : "1px dashed rgba(201,168,76,0.12)",
                transition: "all 0.4s ease",
            }}
        >
            {/* Logo */}
            <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
                <Image src="/Al-hiraa.png" alt="Al Hiraa Logo" width={80} height={56} style={{ objectFit: "contain" }} />
            </Link>

            {/* Desktop links */}
            <ul className="hidden md:flex" style={{ gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
                {links.map((l) => {
                    const active = pathname === l.href;
                    return (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                style={linkStyle(active)}
                                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = "var(--gold)"; }}
                                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = "var(--text-body)"; }}
                            >
                                {l.label}
                            </Link>
                        </li>
                    );
                })}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden md:flex" style={{ gap: "0.6rem" }}>
                <a
                    href="https://alhiralms.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                        fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        color: "var(--text-body)", background: "transparent",
                        padding: "0.55rem 1.25rem", borderRadius: "2px",
                        border: "1px solid rgba(255,255,255,0.1)",
                        textDecoration: "none", transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)"; e.currentTarget.style.color = "var(--gold)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "var(--text-body)"; }}
                >
                    Login
                </a>
                <Link
                    href="/join"
                    style={{
                        fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600,
                        letterSpacing: "0.08em", textTransform: "uppercase",
                        color: "var(--gold-light)", background: "transparent",
                        padding: "0.55rem 1.25rem", borderRadius: "2px",
                        border: "1px solid rgba(201,168,76,0.35)",
                        textDecoration: "none", transition: "border-color 0.2s, background 0.2s",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.background = "rgba(201,168,76,0.07)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(201,168,76,0.35)"; e.currentTarget.style.background = "transparent"; }}
                >
                    Enroll
                </Link>
            </div>

            {/* Mobile hamburger */}
            <button
                className="md:hidden"
                onClick={() => setOpenAt(open ? null : pathname)}
                aria-label={open ? "Close Menu" : "Open Menu"}
                style={{
                    background: "none", border: "none", cursor: "pointer",
                    color: "var(--gold)", padding: "0.5rem",
                    position: "relative", width: "2.5rem", height: "2.5rem",
                    alignItems: "center", justifyContent: "center",
                }}
            >
                <Menu
                    size={22}
                    style={{
                        position: "absolute", transition: "opacity 0.2s, transform 0.2s",
                        opacity: open ? 0 : 1,
                        transform: open ? "rotate(180deg) scale(0)" : "rotate(0deg) scale(1)",
                    }}
                />
                <X
                    size={22}
                    style={{
                        position: "absolute", transition: "opacity 0.2s, transform 0.2s",
                        opacity: open ? 1 : 0,
                        transform: open ? "rotate(0deg) scale(1)" : "rotate(-180deg) scale(0)",
                    }}
                />
            </button>

            {/* Mobile menu */}
            {open && (
                <div style={{
                    position: "fixed", top: 72, left: 0, right: 0,
                    background: "rgba(8,8,8,0.98)",
                    borderBottom: "1px solid rgba(201,168,76,0.18)",
                    padding: "1.5rem 2rem", zIndex: 99,
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                }}>
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpenAt(null)}
                            style={{
                                display: "block", padding: "0.85rem 0",
                                fontFamily: "var(--font-body)", fontSize: "0.72rem",
                                fontWeight: 500, letterSpacing: "0.1em",
                                textTransform: "uppercase",
                                color: pathname === l.href ? "var(--gold)" : "var(--text-body)",
                                textDecoration: "none",
                                borderBottom: "1px solid rgba(255,255,255,0.05)",
                            }}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <div style={{ marginTop: "1.5rem", display: "flex", gap: ".75rem", flexWrap: "wrap" }}>
                        <a
                            href="https://alhiralms.vercel.app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpenAt(null)}
                            style={{
                                display: "inline-block",
                                fontFamily: "var(--font-body)", fontSize: "0.72rem",
                                fontWeight: 600, letterSpacing: "0.08em",
                                textTransform: "uppercase", color: "var(--gold)",
                                background: "transparent",
                                padding: "0.75rem 1.5rem", borderRadius: "2px", textDecoration: "none",
                                border: "1px solid rgba(201,168,76,0.35)",
                            }}
                        >
                            Login
                        </a>
                        <Link
                            href="/join"
                            onClick={() => setOpenAt(null)}
                            style={{
                                display: "inline-block",
                                fontFamily: "var(--font-body)", fontSize: "0.72rem",
                                fontWeight: 600, letterSpacing: "0.08em",
                                textTransform: "uppercase", color: "var(--night)",
                                background: "linear-gradient(135deg, var(--gold-light), var(--gold))",
                                padding: "0.75rem 2rem", borderRadius: "2px", textDecoration: "none",
                            }}
                        >
                            Enroll
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
