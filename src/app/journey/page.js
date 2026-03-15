"use client";

import Link from "next/link";
import { useEffect } from "react";

function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.12 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

const TIMELINE = [
    {
        year: "2021",
        label: "The Beginning",
        title: "Home Tuitions & A Growing Vision",
        side: "left",
        points: [
            "Al Hiraa begins as small home-based Qur'an and Islamic studies circles",
            "Students responded quickly  word spread through families and communities",
            "Demand outgrew what WhatsApp groups and notebooks could manage",
            "A vision forms: not just tuition, but a structured institution with proper systems",
        ],
    },
    {
        year: "8/4/1445 Hijri",
        label: "6 November 2023",
        title: "AHIC Formally Established",
        side: "right",
        points: [
            "Al Hiraa Islamic Coaching Centre (AHIC) officially founded",
            "Structured Islamic programs launched for students aged 425 years",
            "Subjects: Tajweed, Qur'anic Recitation, Hifz, Arabic for Beginners",
            "Classes begin both offline locally and primarily through online sessions",
        ],
    },
    {
        year: "2023 - 2024",
        label: "Platform Decision",
        title: "The Need for Suffah",
        side: "left",
        points: [
            "Every existing LMS  Teachable, Thinkific, Moodle, Google Classroom  evaluated",
            "None could track prayer compliance, parental oversight, or enforce role separation",
            "Decision: build a dedicated Islamic learning platform from scratch",
            "Suffah is conceived  an Islamic education system, not a rebranded generic tool",
        ],
    },
    {
        year: "2024 Q1",
        label: "Suffah Development",
        title: "Core Infrastructure Built",
        side: "right",
        points: [
            "Architecture: Next.js 15 App Router, TypeScript, PostgreSQL with Prisma ORM",
            "Four-role auth system  Admin, Teacher, Student, Guardian  via NextAuth v5",
            "Course management, enrollment pipelines, and admin dashboard completed",
            "RFC 5545 RRULE scheduling engine for recurring classes",
        ],
    },
    {
        year: "2024 Q3",
        label: "Live Classroom",
        title: "The Classroom Goes Live",
        side: "left",
        points: [
            "LiveKit WebRTC integration  built-in video classroom, no third-party dependency",
            "tldraw collaborative whiteboard embedded into every live session",
            "Persistent in-session chat with full message history",
            "Automatic attendance marking triggered on session join and leave",
        ],
    },
    {
        year: "2025 Q1",
        label: "Islamic Features",
        title: "Namaz Tracker & Guardian Portal",
        side: "right",
        points: [
            "Namaz Prayer Tracker launched  five daily prayers, monthly summaries, CSV export",
            "Guardian Portal  dedicated parent accounts with ward-level visibility",
            "Bidirectional feedback system: teachers to students and students to teachers",
            "Prayer and attendance data linked across teacher, student, and guardian dashboards",
        ],
    },
    {
        year: "2025 Q3",
        label: "Analytics & Reports",
        title: "Role-Specific Dashboards",
        side: "left",
        points: [
            "Recharts-powered analytics dashboards for all four user roles",
            "Attendance CSV export  printable, parent-ready, date-filtered",
            "Admin KPI dashboard: active students, course growth, enrollment trends",
            "Teacher performance metrics: session rates, feedback history, student progress",
        ],
    },
    {
        year: "2026",
        label: "Live & Growing",
        title: "Suffah in Full Operation",
        side: "right",
        points: [
            "Full feature suite live and running daily within Al Hiraa",
            "Every enrolled student attends live classes, tracks prayers, and gets parent reporting",
            "Upcoming courses: Qiraat, Calligraphy, Qur'anic Tarjuma",
            "Every future update informed by real teachers, students, and families",
        ],
    },
];

const LEGACY_ITEMS = [
    {
        icon: "",
        title: "A Life Devoted to Knowledge",
        text: "Al-Hajj, Al-Hafiz late Dr. Noor Ul Huq Saheb devoted his life to the pursuit of sacred knowledge. Begining his journey of learning, understanding and after the age of 50 Memorizing the Qur'an. He spent decades immersed in its guidance and wisdom. At the age of 90, he returned to his Creator, leaving behind more than memories. He planted the seed of Al Hiraa Islamic Coaching Center (AHIC), a legacy of learning that continues to inspire and nurture generations.",
    },
    {
        icon: "",
        title: "Generosity Without Condition",
        text: "He opened space as a classroom. He never allowed financial circumstance to become a barrier to sacred learning. Generosity was not occasional for him  it was his character.",
    },
    {
        icon: "",
        title: "The Seed of Al Hiraa",
        text: "His lifelong Passion & unwavering dedication to the Qur'an laid the foundation of AHIC. By providing the space for this Centre, he planted a seed of Sadaqah Jariyah that continues to flourish with every verse recited and every lesson learned here.",
    },
    {
        icon: "",
        title: "The Inspiration Behind Suffah",
        text: "Suffah is our answer to a question he lived by: how do we make this accessible, trackable, and lasting? Technology cannot replace a teacher. But it can honour one  by making the institution he made possible, impossible to lose.",
    },
];

export default function Journey() {
    useReveal();
    return (
        <div style={{ position: "relative", zIndex: 1 }}>

            <div className="glow-border-bottom" style={{
                position: "relative", zIndex: 1, paddingTop: "9rem", paddingBottom: "3rem",
                textAlign: "center",
                background: "linear-gradient(to bottom,rgba(7,9,15,.85) 0%,rgba(10,10,10,.5) 100%)",
                backdropFilter: "blur(8px)", overflow: "hidden",
            }}>
                <div className="page-header-blobs" aria-hidden>
                    <div className="page-header-blob-1" />
                    <div className="page-header-blob-2" />
                </div>
                <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>From Home Tuitions to a Living Platform</p>
                    <h1 className="section-title" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 400, marginBottom: ".5rem" }}>
                        Our Story
                    </h1>
                    <p style={{ fontFamily: "var(--font-arabic)", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: "var(--gold)", opacity: .65, direction: "rtl", margin: ".25rem 0 1rem" }}>قِصَّتُنَا</p>
                    <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "clamp(.9rem,2vw,1.05rem)", color: "var(--text-body)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 1.5rem" }}>
                        A testament to sincere intention  and what becomes possible when you build the right infrastructure around it.
                    </p>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
            </div>

            <section style={{ padding: "6rem 1.5rem 6rem", maxWidth: "1000px", margin: "0 auto", position: "relative" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Al Hiraa & Suffah</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}>From <span style={{ fontFamily: '"Luxury", Georgia, serif' }}>2021</span> to Today</h2>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
                <div className="timeline-line" />
                <div style={{ display: "flex", flexDirection: "column", gap: "3.5rem" }}>
                    {TIMELINE.map((item, i) => (
                        <div key={item.year} className={`reveal delay-${(i % 4) + 1}`} style={{ display: "flex", justifyContent: item.side === "right" ? "flex-end" : "flex-start", position: "relative" }}>
                            <div className="timeline-dot" />
                            <div className="ahic-card" style={{ maxWidth: "500px", width: "calc(50% - 2.5rem)", padding: "2rem 1.75rem", backdropFilter: "blur(4px)" }}>
                                <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".6rem", flexWrap: "wrap" }}>
                                    <span style={{ fontFamily: '"Luxury", Georgia, serif', fontSize: ".65rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: "var(--gold)", background: "rgba(201,168,76,.1)", padding: ".25rem .65rem", borderRadius: "99px" }}>{item.year}</span>
                                    <span style={{ fontSize: ".72rem", color: "var(--text-dim)", letterSpacing: ".06em", textTransform: "uppercase" }}>{item.label}</span>
                                </div>
                                <h2 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(.95rem,2.5vw,1.1rem)", fontWeight: 600, color: "var(--cream)", marginBottom: "1rem", letterSpacing: ".01em" }}>{item.title}</h2>
                                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: ".55rem" }}>
                                    {item.points.map((pt) => (
                                        <li key={pt} style={{ display: "flex", gap: ".6rem", fontSize: ".83rem", color: "var(--text-body)", lineHeight: 1.7, alignItems: "flex-start" }}>
                                            <span style={{ color: "var(--gold-dim)", flexShrink: 0, marginTop: "3px" }}></span>
                                            <span>{pt}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <div className="glow-border-top glow-border-bottom" style={{ background: "rgba(201,168,76,.03)", padding: "1.5rem", textAlign: "center", position: "relative" }}>
                <p style={{ fontFamily: "var(--font-body)", fontSize: ".65rem", fontWeight: 600, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--gold-pale)" }}>
                    &nbsp; In Honoured Memory &nbsp;
                </p>
            </div>

            <section style={{ padding: "6rem 1.5rem 4rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                <div className="reveal">
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>A Legacy of Mercy</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.5rem)", marginBottom: "2rem" }}>
                        Al Hajj, Al Hafiz, Late Dr. Noor ul Huq
                    </h2>
                    <div style={{ position: "relative", padding: "2rem 2.5rem", borderTop: "1px solid rgba(201,168,76,.2)", borderBottom: "1px solid rgba(201,168,76,.2)", marginBottom: "2rem" }}>
                        <p style={{ fontFamily: "var(--font-arabic)", fontSize: "clamp(1.1rem,2vw,1.3rem)", color: "var(--gold)", opacity: .7, direction: "rtl", margin: "0 0 1rem" }}>طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ</p>
                        <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "clamp(1.05rem,2.5vw,1.25rem)", lineHeight: 2, color: "var(--gold-pale)", margin: "0 0 1rem" }}>
                            &ldquo;Knowledge is not a possession  it is a trust. And a trust must be passed on.&rdquo;
                        </p>
                        <p style={{ fontSize: ".78rem", color: "var(--text-dim)", letterSpacing: ".08em", textTransform: "uppercase", fontFamily: "var(--font-body)", fontWeight: 600 }}>Dr. Noor ul Huq - Mentor & Benefactor</p>
                    </div>
                    <p style={{ lineHeight: 2, color: "var(--text-body)", fontSize: "1rem", marginBottom: ".75rem" }}>
                        The establishment of Al Hiraa Islamic Coaching Centre was made possible through the profound generosity of Al Hajj, Al Hafiz, late Dr. Noor ul Huq Saheb. By providing the space for this Centre, he planted a seed of Sadaqah Jariyah  ongoing charity  that continues to flourish with every verse recited and every lesson learned.
                    </p>
                    <p style={{ lineHeight: 2, color: "var(--text-body)", fontSize: "1rem", marginBottom: "1.75rem" }}>
                        His life gave this institution its soul. His generosity gave it its home. Suffah, the platform we built to run that institution, is named in acknowledgement of his legacy: that sacred knowledge, properly structured, can outlast any single teacher.
                    </p>
                    <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "1rem", color: "var(--gold-pale)", lineHeight: 1.9, padding: "1.25rem 1.5rem", background: "rgba(201,168,76,.05)", borderRadius: "8px", border: "1px solid rgba(201,168,76,.15)" }}>
                        May Allah (SWT) have mercy upon Dr. Noor ul Huq Saheb, accept this noble act, and grant him a place in the highest ranks of Jannatul Firdaus. Ameen.
                    </p>
                </div>
            </section>

            <section style={{ padding: "2rem 1.5rem 6rem", maxWidth: "1000px", margin: "0 auto" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
                    {LEGACY_ITEMS.map((item, i) => (
                        <div key={item.title} className={`ahic-card reveal delay-${i + 1}`} style={{ padding: "2.25rem 1.75rem", backdropFilter: "blur(4px)", borderLeft: "3px solid rgba(201,168,76,.3)" }}>
                            <div style={{ fontSize: "1.75rem", marginBottom: ".85rem" }}>{item.icon}</div>
                            <h3 style={{ fontFamily: "var(--font-body)", fontSize: ".82rem", fontWeight: 600, color: "var(--gold)", marginBottom: ".75rem", letterSpacing: ".06em", textTransform: "uppercase" }}>{item.title}</h3>
                            <p style={{ fontSize: ".88rem", color: "var(--text-body)", lineHeight: 1.85 }}>{item.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section style={{ padding: "5rem 1.5rem 8rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                <div className="reveal">
                    <p className="section-label" style={{ marginBottom: "1rem" }}>His Work, Continued</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", marginBottom: "1.5rem" }}>
                        The Platform Is the Promise
                    </h2>
                    <p style={{ color: "var(--text-body)", lineHeight: 2, marginBottom: "2.5rem", fontSize: ".97rem" }}>
                        Every feature in Suffah  the Namaz Tracker, the Guardian Portal, the live classroom  exists because a real teacher showed us what education grounded in ibadah and accountability looks like. We build technology to protect and continue that model, not replace it.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                        <Link href="/courses" className="btn-gold">Explore Our Courses</Link>
                        <Link href="/join" className="btn-ghost">Enroll Now</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
