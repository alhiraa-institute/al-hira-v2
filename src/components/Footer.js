"use client";

import Image from "next/image";
import Link from "next/link";

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
            background: "rgba(8,8,8,0.97)",
            borderTop: "1px solid rgba(201,168,76,0.12)",
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
                            Al Hiraa Islamic Coaching Centre — nurturing faith, knowledge, and character
                            through authentic online Islamic education.
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
                        <a href="https://wa.me/919187418343" target="_blank" rel="noopener noreferrer" style={{ ...colLink, marginTop: ".5rem" }}
                            onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}>
                            💬 WhatsApp
                        </a>
                        <a href="https://instagram.com/ahicsuffah" target="_blank" rel="noopener noreferrer" style={colLink}
                            onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
                            onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}>
                            📸 @ahicsuffah
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
                        © 2026 Al Hiraa Islamic Coaching Centre. All rights reserved.
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
