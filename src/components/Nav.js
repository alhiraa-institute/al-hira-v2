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
                background: scrolled ? "var(--nav-bg-scrolled)" : "var(--nav-bg)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
                borderBottom: scrolled
                    ? "1px solid var(--nav-border)"
                    : "1px dashed var(--nav-border-dashed)",
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
            <div className="hidden md:flex" style={{ gap: "0.6rem", alignItems: "center" }}>
                <a href="tel:+919187418343" className="nav-icon-link" aria-label="Call Us">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="navbar-icon"
                    >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                </a>
                <a href="https://www.instagram.com/Alhiraa.Quran" target="_blank" rel="noopener noreferrer" className="nav-ig-link" aria-label="Follow us on Instagram">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ig-icon"
                    >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
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
                    background: "rgba(8, 8, 8, 0.98)",
                    borderBottom: "1px solid var(--nav-border)",
                    padding: "1.5rem 2rem 2rem", zIndex: 99,
                    backdropFilter: "blur(24px)",
                    WebkitBackdropFilter: "blur(24px)",
                    boxShadow: "0 20px 40px rgba(0,0,0,0.9)",
                }}>
                    {links.map((l) => (
                        <Link
                            key={l.href}
                            href={l.href}
                            onClick={() => setOpenAt(null)}
                            style={{
                                display: "block", padding: "0.85rem 0",
                                fontFamily: "var(--font-body)", fontSize: "0.8rem",
                                fontWeight: 600, letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                color: pathname === l.href ? "var(--gold-light)" : "var(--gold)",
                                textDecoration: "none",
                                borderBottom: "1px solid rgba(201,168,76,0.15)",
                            }}
                        >
                            {l.label}
                        </Link>
                    ))}
                    <div style={{ marginTop: "1.5rem", display: "flex", gap: ".75rem", alignItems: "center", flexWrap: "wrap" }}>
                        <a href="tel:+919187418343" className="nav-icon-link" aria-label="Call Us" onClick={() => setOpenAt(null)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="navbar-icon"
                            >
                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/Alhiraa.Quran" target="_blank" rel="noopener noreferrer" className="nav-ig-link" aria-label="Follow us on Instagram" onClick={() => setOpenAt(null)}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="22"
                                height="22"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="ig-icon"
                            >
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                            </svg>
                        </a>
                        <a
                            href="https://alhiralms.vercel.app/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setOpenAt(null)}
                            style={{
                                display: "inline-block",
                                fontFamily: "var(--font-body)", fontSize: "0.72rem",
                                fontWeight: 600, letterSpacing: "0.08em",
                                textTransform: "uppercase", color: "var(--gold-light)",
                                background: "transparent",
                                padding: "0.75rem 1.5rem", borderRadius: "2px", textDecoration: "none",
                                border: "1px solid rgba(201,168,76,0.5)",
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
