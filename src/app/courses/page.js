"use client";

import Link from "next/link";
import { useEffect } from "react";

function useReveal() {
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const obs = new IntersectionObserver(
            (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
            { threshold: 0.1 }
        );
        els.forEach((el) => obs.observe(el));
        return () => obs.disconnect();
    }, []);
}

const COURSES = [
    {
        id: "tajweed",
        number: "01",
        tag: "Level 1",
        title: "Tajweed Basics - Junior",
        arabic: "تَجْوِيد",
        color: "#c9a84c",
        icon: "📖",
        tagline: "Recite the Qur’an the way it was revealed",
        description:
            "Tajweed is the science of proper Qur’anic recitation — the rules that govern pronunciation, elongation, merging, and clarity of every letter. This course builds the oral foundation every Muslim needs to recite the Qur’an with correctness and beauty.",
        highlights: [
            "Arabic letter recognition",
            "Correct pronunciation",
            "Basic Tajweed rules",
            "Word Reading skills",
            "Live correction in every session — not self-paced guesswork",
        ],
        details: [
            { label: "Duration", value: "18-24 months" },
            { label: "Students per Batch", value: "3-4 only" },
            { label: "Session Duration", value: "20 minutes" },
            { label: "Class Days", value: "5 days a week" }
        ],
        ageGroup: "Ages 4 — 6",
        level: "L1",
    },
    {
        id: "tarteel",
        number: "02",
        tag: "Level 2",
        title: "Tajweed Foundations - Senior",
        arabic: "تَرْتِيل",
        color: "#c9a84c",
        icon: "🎓",
        tagline: "Slow, measured, and melodious recitation",
        description:
            "This course introduces young learners to the basic rules of Tajweed while helping them read short Qur'anic words & sentences with clarity.",
        highlights: [
            "Tajweed Application.",
            "Word reading.",
            "Small sentences reading.",
            "Fluency and accuracy.",
        ],
        details: [
            { label: "Duration", value: "12-18 months" },
            { label: "Students per Batch", value: "3" },
            { label: "Session Duration", value: "20 minutes" },
            { label: "Class Days", value: "5 days a week" }
        ],
        ageGroup: "Ages 7 — 8",
        level: "L2",
    },
    {
        id: "recitation",
        number: "03",
        tag: "Qur’an",
        title: "Qur’anic Recitation",
        arabic: "تِلَاوَة",
        color: "#c9a84c",
        icon: "🕌",
        tagline: "From Qa’idah to smooth, complete recitation",
        description:
            "A structured, three-tier progression system designed for students aged 9 and older. To ensure personalized attention, class sizes purposefully decrease as students advance through the levels.",
        highlights: [],
        details: [
            { label: "Session Duration", value: "20 minutes" },
            { label: "Class Days", value: "5 days a week" }
        ],
        progression: [
            {
                tier: "R1",
                title: "Foundation",
                duration: "15 months",
                batchSize: "2-3 students per batch",
                focus: "Noorani Qaidah, Amma Para, Salah Crash Course, and Recitation Strengthening."
            },
            {
                tier: "R2",
                title: "Refinement",
                duration: "12 months",
                batchSize: "2 students per batch",
                focus: "Recitation (7-10 Juz), Tajweed Refinement, Melody & Fluency."
            },
            {
                tier: "R3",
                title: "Mastery",
                duration: "12-15 months",
                batchSize: "1-on-1 sessions",
                focus: "Recitation (20 Juz), Advanced Tajweed Rules, Mastery & Corrections."
            }
        ],
        ageGroup: "Ages 9+",
        level: "Tiered",
    },
    {
        id: "hifz",
        number: "04",
        tag: "Hifz",
        title: "Hifz Program",
        arabic: "حِفْظ",
        color: "#c9a84c",
        icon: "👑",
        tagline: "Structured memorization with dedicated revision and Tajweed accuracy.",
        description:
            "A focused, one-on-one memorization program designed for students who have built a strong recitation foundation.",
        highlights: [
            "Structured memorization",
            "Gradual retention building",
            "Dedicated revision phase",
            "Tajweed accuracy",
        ],
        details: [
            { label: "Eligibility", value: "Complete Recitation R2 or Pass Entrance Exam" },
            { label: "Session Duration", value: "20 minutes" },
            { label: "Class Days", value: "5 days a week" }
        ],
        progression: [
            {
                tier: "H1",
                title: "Key Surahs",
                duration: "8-9 months",
                batchSize: "1-on-1 sessions",
                timeline: "6 months memorization + up to 3 months revision",
                focus: "Surahs As-Sajdah, Yaseen, Ad-Dukhan, Ar-Rahman, Al-Waqi'ah, and Al-Mulk."
            },
            {
                tier: "H2",
                title: "Selected Juz",
                duration: "20-24 months",
                batchSize: "1-on-1 sessions",
                timeline: "15-18 months memorization + 4-6 months revision",
                focus: "28th Juz (Qad Sami), 29th Juz (Tabarak), and 30th Juz (Amma)."
            }
        ],
        ageGroup: "Depends on ability",
        level: "Advanced",
    },
    {
        id: "arabic",
        number: "05",
        tag: "Language",
        title: "Arabic for Beginners",
        arabic: "عَرَبِيَّة",
        color: "#c9a84c",
        icon: "📜",
        tagline: "Practical Arabic for everyday Islamic learning.",
        description:
            "This course helps learners develop confidence in reading, understanding, and using basic Arabic in daily contexts to better understand Qur'anic and Islamic terms.",
        highlights: [
            "Building practical Arabic language skills.",
            "Learning essential vocabulary.",
            "Mastering simple sentence structures and basic communication.",
        ],
        details: [
            { label: "Duration", value: "12-15 months" },
            { label: "Students per Batch", value: "4-6" },
            { label: "Weekdays", value: "20 mins / session" },
            { label: "Weekends", value: "30 mins / session" }
        ],
        ageGroup: "Ages 11+",
        level: "Beginner",
    },
];

const UPCOMING = [
    {
        icon: "\uD83C\uDF99\uFE0F",
        title: "Qiraat",
        arabic: "\u0642\u0650\u0631\u064e\u0627\u0621\u064e\u0627\u062a\u064c",
        description: "The seven authenticated styles of Qur\u2019anic recitation, taught with proper chain-of-narration \u2014 a rare and advanced course for serious students of the Qur\u2019an.",
        badge: "Coming Soon",
    },
    {
        icon: "\u270F\uFE0F",
        title: "Urdu & Arabic Calligraphy",
        arabic: "\u062e\u0637\u064c",
        description: "The sacred art of Islamic script \u2014 Naskh, Thuluth, and Nastaliq \u2014 using traditional tools and methods to develop beautiful, purposeful handwriting.",
        badge: "Launching Shortly",
    },
    {
        icon: "\uD83D\uDCDA",
        title: "Qur\u2019anic Tarjuma",
        arabic: "\u062a\u0631\u062c\u0645\u0629",
        description: "A word-by-word and verse-by-verse translation study of selected portions of the Qur\u2019an, building genuine understanding of the Book of Allah.",
        badge: "Coming Soon",
    },
];

const PLATFORM_HIGHLIGHTS = [
    {
        icon: "\uD83C\uDFA5",
        title: "Live Classroom \u2014 No Third-Party Apps",
        text: "Every session at AHIC is fully live, conducted inside our built-in video classroom. No Zoom links, no Google Meet, no extra installs. Students join directly through the Suffah platform \u2014 camera, microphone, and an interactive whiteboard, all in one place.",
    },
    {
        icon: "\uD83E\uDD32",
        title: "Namaz Tracker \u2014 Prayer Built Into Learning",
        text: "No Islamic education system should stop at the academic. Suffah includes a dedicated Namaz Tracker where teachers log students\u2019 five daily prayers \u2014 Fajr, Dhuhr, Asr, Maghrib, Isha \u2014 building spiritual accountability alongside Qur\u2019anic knowledge.",
    },
    {
        icon: "\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67",
        title: "Guardian Portal \u2014 Parents Stay Informed",
        text: "Every student\u2019s parent or guardian receives their own Suffah account. From there, they can view their child\u2019s attendance, teacher feedback, Hifz progress, and prayer records in real time \u2014 without accessing any other student\u2019s data.",
    },
    {
        icon: "\uD83D\uDCCA",
        title: "Attendance & Progress \u2014 Automatic",
        text: "The moment a student joins a live session, attendance is marked. No roll call, no manual entry. Milestones, session history, and performance analytics are visible to teachers, students, and guardians \u2014 all updated live.",
    },
    {
        icon: "\uD83C\uDFD7\uFE0F",
        title: "Structured Progression System",
        text: "Each course on Suffah follows a defined level structure \u2014 students advance through levels in order, with prerequisites enforced, so no one skips essential foundations. Every stage is tracked, so progress is always visible and measurable.",
    },
    {
        icon: "\uD83D\uDD12",
        title: "Complete Privacy by Design",
        text: "Four user roles \u2014 Admin, Teacher, Student, Guardian \u2014 each with strictly enforced data boundaries. Teachers see only their students. Parents see only their children. No data leaks across accounts, ever.",
    },
];

export default function Courses() {
    useReveal();
    const whatsappLink = "https://wa.me/919187418343?text=Assalamu%20Alaikum%2C%20I%27m%20interested%20in%20enrolling%20at%20Al%20Hiraa%20Islamic%20Coaching%20Centre.";

    return (
        <div style={{ position: "relative", zIndex: 1 }}>

            {/* Page Header */}
            <div className="glow-border-bottom" style={{
                position: "relative", zIndex: 1, paddingTop: "9rem", paddingBottom: "3rem",
                textAlign: "center",
                background: "linear-gradient(to bottom,rgba(8,8,8,.85) 0%,rgba(10,10,10,.5) 100%)",
                backdropFilter: "blur(8px)", overflow: "hidden",
            }}>
                <div className="page-header-blobs" aria-hidden>
                    <div className="page-header-blob-1" />
                    <div className="page-header-blob-2" />
                </div>
                <div style={{ maxWidth: "760px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Al Hiraa Islamic Coaching Centre</p>
                    <h1 className="section-title" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 400, marginBottom: ".5rem" }}>
                        Courses &amp; Programs
                    </h1>
                    <p style={{ fontFamily: "var(--font-arabic)", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: "var(--gold)", opacity: .65, direction: "rtl", margin: ".25rem 0 1rem" }}>الدُّرُوسُ وَالبَرَامِج</p>
                    <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "clamp(.9rem,2vw,1.05rem)", color: "var(--text-body)", lineHeight: 1.8, maxWidth: "580px", margin: "0 auto 1.5rem" }}>
                        Five structured Islamic courses, delivered live on our purpose-built learning platform for students aged 4 to 25 years, online and offline.
                    </p>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
            </div>

            {/* Platform Banner */}
            <section className="glow-border-bottom" style={{
                padding: "3rem 1.5rem",
                background: "rgba(201,168,76,.04)",
            }}>
                <div style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center" }}>
                    <div className="reveal" style={{
                        display: "inline-flex", alignItems: "center", gap: ".6rem",
                        background: "rgba(201,168,76,.08)", border: "1px solid rgba(201,168,76,.2)",
                        borderRadius: "99px", padding: ".4rem 1.2rem", marginBottom: "1.25rem",
                    }}>
                        <span style={{ fontSize: ".65rem", fontFamily: "var(--font-body)", fontWeight: 600, letterSpacing: ".12em", textTransform: "uppercase", color: "var(--gold)" }}>
                            Powered by Suffah AHIC&apos;s dedicated learning platform
                        </span>
                    </div>
                    <p className="reveal" style={{ color: "var(--text-body)", lineHeight: 1.9, fontSize: ".97rem", maxWidth: "700px", margin: "0 auto" }}>
                        Every course at Al Hiraa runs on <strong style={{ color: "var(--cream)" }}>Suffah</strong> our purpose-built learning management system.
                        Live video classrooms, automatic attendance, prayer tracking, parent dashboards, and structured progress reporting
                        are not add-ons. They are part of what every enrolled student and guardian gets from day one.
                    </p>
                </div>
            </section>

            {/* Active Courses */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Currently Enrolling</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
                        Our Five Core Courses
                    </h2>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {COURSES.map((course, i) => (
                        <div
                            key={course.id}
                            className={`ahic-card reveal delay-${(i % 4) + 1}`}
                            style={{
                                padding: "2.5rem", backdropFilter: "blur(4px)",
                                borderLeft: `3px solid ${course.color}`,
                                position: "relative", overflow: "hidden",
                            }}
                        >
                            {/* Course number watermark */}
                            <div aria-hidden style={{
                                position: "absolute", right: "1.5rem", top: "1rem",
                                fontFamily: '"Luxury", Georgia, serif', fontSize: "5rem", fontWeight: 400,
                                color: `${course.color}0d`, lineHeight: 1, userSelect: "none",
                            }}>
                                {course.number}
                            </div>

                            <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap", alignItems: "flex-start" }}>
                                {/* Icon */}
                                <div style={{
                                    flexShrink: 0, width: "3.25rem", height: "3.25rem",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    background: `${course.color}15`, borderRadius: "50%", fontSize: "1.5rem",
                                }}>
                                    {course.icon}
                                </div>

                                {/* Content */}
                                <div style={{ flex: 1, minWidth: "240px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".5rem", flexWrap: "wrap" }}>
                                        <span style={{
                                            fontSize: ".65rem", fontFamily: "var(--font-body)", fontWeight: 600,
                                            letterSpacing: ".1em", textTransform: "uppercase",
                                            color: course.color, opacity: .9,
                                            background: `${course.color}12`, padding: ".2rem .65rem", borderRadius: "99px",
                                        }}>{course.tag}</span>
                                        <span style={{ fontSize: ".75rem", color: "var(--text-dim)", fontFamily: "var(--font-body)", letterSpacing: ".04em" }}>{course.ageGroup}</span>
                                        <span style={{ fontSize: ".75rem", color: "var(--text-dim)", fontFamily: "var(--font-body)" }}>&middot; {course.level}</span>
                                    </div>

                                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "1rem", flexWrap: "wrap", marginBottom: ".75rem" }}>
                                        <h2 style={{
                                            fontFamily: "var(--font-body)", fontSize: "clamp(1.1rem,2.5vw,1.35rem)",
                                            fontWeight: 600, color: "var(--cream)", letterSpacing: ".01em", margin: 0,
                                        }}>{course.title}</h2>
                                        <span style={{
                                            fontFamily: "var(--font-arabic)",
                                            fontSize: "clamp(1.8rem,3.5vw,2.4rem)",
                                            color: course.color,
                                            opacity: .95,
                                            direction: "rtl",
                                            lineHeight: 1.3,
                                        }}>{course.arabic}</span>
                                    </div>

                                    <p style={{
                                        fontFamily: "var(--font-body)", fontStyle: "italic",
                                        fontSize: ".83rem", color: "var(--gold-pale)", marginBottom: "1rem", lineHeight: 1.6,
                                    }}>
                                        {course.tagline}
                                    </p>

                                    <p style={{ fontSize: ".9rem", color: "var(--text-body)", lineHeight: 1.8, marginBottom: "1.25rem", maxWidth: "700px" }}>
                                        {course.description}
                                    </p>

                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: ".5rem" }}>
                                        {course.highlights.map((pt) => (
                                            <li key={pt} style={{
                                                display: "flex", gap: ".6rem", alignItems: "flex-start",
                                                fontSize: ".82rem", color: "var(--text-body)", lineHeight: 1.65,
                                            }}>
                                                <span style={{ color: course.color, flexShrink: 0, marginTop: "3px" }}>&#x25B8;</span>
                                                <span>{pt}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {course.details && (
                                        <div style={{
                                            marginTop: "1.25rem", padding: "1rem",
                                            background: "rgba(255,255,255,0.02)",
                                            border: `1px solid ${course.color}25`,
                                            borderRadius: "8px",
                                            display: "flex", gap: "1rem", flexWrap: "wrap",
                                            alignItems: "center"
                                        }}>
                                            {course.details.map((detail, idx) => (
                                                <div key={idx} style={{ flex: "1 1 auto", minWidth: "120px" }}>
                                                    <div style={{ fontSize: "0.65rem", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-dim)", marginBottom: "0.3rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>{detail.label}</div>
                                                    <div style={{ fontSize: "0.85rem", color: "var(--cream)", fontWeight: 500, fontFamily: "var(--font-body)" }}>{detail.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {course.progression && (
                                        <div style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
                                            {course.progression.map((tier, idx) => (
                                                <div key={idx} style={{
                                                    background: "rgba(201,168,76,0.04)",
                                                    border: `1px solid ${course.color}30`,
                                                    borderLeft: `3px solid ${course.color}`,
                                                    borderRadius: "6px",
                                                    padding: "1rem",
                                                }}>
                                                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem" }}>
                                                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                                            <span style={{ fontFamily: "var(--font-cinzel)", fontWeight: 700, color: course.color, fontSize: "1.1rem" }}>{tier.tier}</span>
                                                            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, color: "var(--cream)", fontSize: "0.9rem" }}>{tier.title}</span>
                                                        </div>
                                                        <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.7rem", color: "var(--gold-dim)", fontFamily: "var(--font-body)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                                                            <span>&#x23F2; {tier.duration}</span>
                                                            <span>&bull;</span>
                                                            <span>&#x1F465; {tier.batchSize}</span>
                                                        </div>
                                                    </div>
                                                    {tier.timeline && (
                                                        <div style={{ fontSize: "0.75rem", color: "var(--gold)", marginBottom: "0.4rem", fontWeight: 500, fontFamily: "var(--font-body)" }}>
                                                            &#x25B8; {tier.timeline}
                                                        </div>
                                                    )}
                                                    <div style={{ fontSize: "0.85rem", color: "var(--text-body)", lineHeight: 1.6 }}>
                                                        <strong style={{ color: "var(--text-dim)", fontWeight: 600 }}>Focus:</strong> {tier.focus}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    <div style={{ marginTop: "1.5rem" }}>
                                        <Link href="/join" style={{
                                            display: "inline-block",
                                            fontFamily: "var(--font-body)", fontSize: ".7rem", fontWeight: 600,
                                            letterSpacing: ".1em", textTransform: "uppercase",
                                            color: course.color, textDecoration: "none",
                                            border: `1px solid ${course.color}40`,
                                            padding: ".45rem 1.1rem", borderRadius: "2px",
                                            transition: "background .2s, border-color .2s",
                                        }}
                                            onMouseEnter={(e) => { e.currentTarget.style.background = `${course.color}12`; e.currentTarget.style.borderColor = course.color; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${course.color}40`; }}
                                        >
                                            Enroll in this Course &rarr;
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* How Classes Are Delivered */}
            <section className="glow-border-top glow-border-bottom" style={{
                padding: "6rem 1.5rem",
                background: "rgba(10,10,10,.55)",
                backdropFilter: "blur(6px)",
            }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="reveal" style={{ textAlign: "center", marginBottom: "1rem" }}>
                        <p className="section-label" style={{ marginBottom: ".75rem" }}>How Learning Happens at AHIC</p>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
                            The Suffah Platform Built for Islamic Education
                        </h2>
                        <p className="reveal" style={{
                            color: "var(--text-body)", fontSize: ".97rem", lineHeight: 1.85,
                            maxWidth: "680px", margin: "1.25rem auto 0",
                        }}>
                            Most online Islamic education platforms are generic LMS tools with Islamic branding added.
                            Suffah was built from scratch because Islamic education has specific requirements that no
                            off-the-shelf system could meet: prayer accountability, parental visibility, and the kind
                            of teacher-student trust that only structured, role-based oversight can provide.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "1.25rem", marginTop: "3.5rem" }}>
                        {PLATFORM_HIGHLIGHTS.map((feat, i) => (
                            <div
                                key={feat.title}
                                className={`ahic-card reveal delay-${(i % 4) + 1}`}
                                style={{ padding: "2rem 1.75rem", backdropFilter: "blur(4px)", borderLeft: "3px solid rgba(201,168,76,.3)" }}
                            >
                                <div style={{ fontSize: "1.75rem", marginBottom: ".85rem" }}>{feat.icon}</div>
                                <h3 style={{
                                    fontFamily: "var(--font-body)", fontSize: ".82rem", fontWeight: 600,
                                    color: "var(--gold)", marginBottom: ".65rem", letterSpacing: ".06em", textTransform: "uppercase",
                                }}>{feat.title}</h3>
                                <p style={{ fontSize: ".88rem", color: "var(--text-body)", lineHeight: 1.8 }}>{feat.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Upcoming Courses */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Expanding Our Curriculum</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
                        Upcoming Courses
                    </h2>
                    <p style={{ color: "var(--text-body)", fontSize: ".95rem", lineHeight: 1.8, maxWidth: "520px", margin: ".75rem auto 0" }}>
                        These programs are in development and launching shortly. Contact us to express interest.
                    </p>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
                    {UPCOMING.map((course, i) => (
                        <div
                            key={course.title}
                            className={`ahic-card reveal delay-${i + 1}`}
                            style={{ padding: "2rem 1.75rem", backdropFilter: "blur(4px)", opacity: .85 }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: ".85rem" }}>
                                <span style={{ fontSize: "1.75rem" }}>{course.icon}</span>
                                <span style={{
                                    fontSize: ".6rem", fontFamily: "var(--font-body)", fontWeight: 600,
                                    letterSpacing: ".08em", textTransform: "uppercase",
                                    color: "var(--gold-pale)", background: "rgba(201,168,76,.1)",
                                    padding: ".2rem .65rem", borderRadius: "99px",
                                }}>{course.badge}</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "baseline", gap: ".75rem", marginBottom: ".5rem" }}>
                                <h3 style={{ fontFamily: "var(--font-body)", fontSize: ".92rem", fontWeight: 600, color: "var(--cream)", margin: 0 }}>{course.title}</h3>
                                <span style={{ fontFamily: "var(--font-arabic)", fontSize: "1.35rem", color: "var(--gold-pale)", opacity: .65, direction: "rtl" }}>{course.arabic}</span>
                            </div>
                            <p style={{ fontSize: ".86rem", color: "var(--text-body)", lineHeight: 1.8 }}>{course.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="glow-border-top" style={{
                padding: "6rem 1.5rem 8rem",
                background: "rgba(10,10,10,.55)",
                backdropFilter: "blur(6px)",
            }}>
                <div style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}>
                    <div className="reveal">
                        <p className="section-label" style={{ marginBottom: "1rem" }}>Ready to Begin?</p>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", marginBottom: "1.25rem" }}>
                            Enroll Your Child Today
                        </h2>
                        <p style={{ color: "var(--text-body)", lineHeight: 1.95, marginBottom: "2rem", fontSize: "1rem", maxWidth: "580px", margin: "0 auto 2.25rem" }}>
                            Fill in our enrollment form and we&apos;ll reach out within 48 hours \u2014 or contact us directly
                            on WhatsApp for an immediate response. Classes are available online (and offline locally),
                            for students aged 4 to 25.
                        </p>

                        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <Link href="/join" className="btn-gold">
                                Fill Enrollment Form
                            </Link>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-ghost"
                                style={{ display: "inline-flex", alignItems: "center", gap: ".5rem" }}
                            >
                                <span>&#x1F4AC;</span> WhatsApp Us
                            </a>
                        </div>

                        <div style={{ marginTop: "2rem", display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
                            <a href="tel:+919187418343" style={{
                                fontFamily: "var(--font-body)", fontSize: ".75rem", color: "var(--text-dim)",
                                textDecoration: "none", letterSpacing: ".05em", transition: "color .2s",
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}
                            >
                                &#x1F4DE; +91 91874 18343
                            </a>
                            <a href="https://instagram.com/ahicsuffah" target="_blank" rel="noopener noreferrer" style={{
                                fontFamily: "var(--font-body)", fontSize: ".75rem", color: "var(--text-dim)",
                                textDecoration: "none", letterSpacing: ".05em", transition: "color .2s",
                            }}
                                onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"}
                                onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}
                            >
                                Instagram: @ahicsuffah
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}