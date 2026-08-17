"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
    const colHead = {
        fontFamily: "var(--font-body)",
        fontSize: "0.6rem",
        fontWeight: 700,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color: "var(--gold)",
        marginBottom: "1.5rem",
        display: "block",
    };

    const colLink = {
        display: "block",
        fontFamily: "var(--font-body)",
        fontSize: "0.82rem",
        color: "var(--text-dim)",
        textDecoration: "none",
        marginBottom: "0.7rem",
        letterSpacing: "0.02em",
        transition: "color 0.2s",
    };

    return (
        <footer style={{
            position: "relative",
            zIndex: 1,
            background: "var(--footer-bg)",
            borderTop: "1px solid var(--border-gold-alpha)",
        }}>
            {/* Gold gradient cap */}
            <div style={{
                height: "2px",
                background: "linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.5) 30%, var(--gold) 50%, rgba(201,168,76,0.5) 70%, transparent 100%)",
            }} />

            <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "4rem 1.5rem 0" }}>

                {/* Main grid */}
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
                    gap: "3rem 2.5rem",
                    paddingBottom: "3.5rem",
                    borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}>

                    {/* Brand */}
                    <div style={{ gridColumn: "span 2", minWidth: 0 }}>
                        <Image
                            src="/Al-hiraa.png"
                            alt="Al Hiraa"
                            width={160}
                            height={56}
                            style={{ objectFit: "contain", marginBottom: "1.5rem", display: "block" }}
                        />
                        <p style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.85rem",
                            lineHeight: 1.9,
                            color: "var(--text-dim)",
                            maxWidth: "280px",
                            marginBottom: "1.5rem",
                        }}>
                            Al Hiraa Quran Coaching Academy — nurturing emaan, knowledge, and character
                            through Quran education.
                        </p>
                        <p style={{
                            fontFamily: "var(--font-body)",
                            fontSize: "0.58rem",
                            fontWeight: 700,
                            letterSpacing: "0.22em",
                            textTransform: "uppercase",
                            color: "rgba(201,168,76,0.45)",
                        }}>
                            Connecting Hearts · Sharing Wisdom
                        </p>
                    </div>

                    {/* Courses */}
                    <div>
                        <span style={colHead}>Courses</span>
                        {[
                            { label: "Tajweed Basics - Junior", href: "/courses" },
                            { label: "Tajweed Foundations - Senior", href: "/courses" },
                            { label: "Qur'anic Recitation", href: "/courses" },
                            { label: "Hifz-e-Qur'an", href: "/courses" },
                            { label: "Arabic for Beginners", href: "/courses" },
                        ].map((l) => (
                            <Link key={l.label} href={l.href} style={colLink}
                                onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}>
                                {l.label}
                            </Link>
                        ))}
                    </div>

                    {/* Al Hiraa */}
                    <div>
                        <span style={colHead}>Al Hiraa</span>
                        {[
                            { label: "About AHIC", href: "/about" },
                            { label: "Our Story", href: "/journey" },
                            { label: "Enroll Now", href: "/join" },
                        ].map((l) => (
                            <Link key={l.label} href={l.href} style={colLink}
                                onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}>
                                {l.label}
                            </Link>
                        ))}

                        <a href="https://www.instagram.com/Alhiraa.Quran" target="_blank" rel="noopener noreferrer" className="nav-ig-link" aria-label="Follow us on Instagram" style={{ marginTop: "0.75rem" }}>
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
                    </div>

                </div>

                {/* Bottom bar */}
                <div style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: "1rem",
                    padding: "1.5rem 0 2rem",
                }}>
                    <p style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.72rem",
                        color: "rgba(138,128,112,0.6)",
                        letterSpacing: "0.04em",
                    }}>
                        © 2026 Al Hiraa Quran Coaching Academy. All rights reserved.
                    </p>
                    <p style={{
                        fontFamily: "var(--font-arabic)",
                        fontSize: "1.1rem",
                        color: "rgba(201,168,76,0.35)",
                        direction: "rtl",
                        letterSpacing: "0",
                    }}>
                       
                    </p>
                </div>

            </div>
        </footer>
    );
}
