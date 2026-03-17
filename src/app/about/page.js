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

const PILLARS = [
    { icon: "📖", title: "Qur'anic Excellence", text: "From correct recitation with Tajweed to Hifz and Tarteel, every course builds a genuine relationship with the Book of Allah  not just surface-level reading." },
    { icon: "🤲", title: "Spiritual Accountability", text: "The Namaz Tracker is built into the platform. Students log their five daily prayers alongside their academic milestones  because real Islamic education shapes the whole person." },
    { icon: "👨‍👩‍👧‍👦", title: "Parental Visibility", text: "Parents receive their own Guardian account on Suffah. Attendance, prayer records, teacher feedback, and progress reports are visible in real time  for their child only." },
    { icon: "🎥", title: "Live Classes, Always", text: "Every session at AHIC is live. A real teacher, a real classroom on Suffah, and a student who can see, speak, and be seen. No pre-recorded substitutes." },
    { icon: "📈", title: "Structured Progression", text: "Each course is designed with levels and prerequisites. Students cannot skip foundations. Every stage is tracked, measured, and reported  growth is never assumed." },
    { icon: "🌍", title: "Accessible Worldwide", text: "Classes are primarily online, accessible to any student with a browser. No app to install, no tech barriers. Local students in Mysuru can also attend in person." },
];

const PLATFORM = [
    { icon: "🔒", title: "No Cross-Role Data Leakage", text: "Four strictly separated roles  Admin, Teacher, Student, Guardian. By design, a teacher can only see their own students, and a parent only their own child." },
    { icon: "📊", title: "Analytics for Every Role", text: "Admins see platform KPIs, teachers track class and student performance, students monitor their own progress, and guardians review their ward's complete profile." },
    { icon: "💬", title: "Bidirectional Feedback", text: "Teachers give structured feedback on students. Students rate and review teachers. Both sides are reviewed by admins  neither party can see the other's submissions directly." },
    { icon: "🗓️", title: "Smart Scheduling", text: "Classes follow RFC 5545 RRULE recurring schedules with full timezone support. Rescheduling, cancellations, and exceptions are handled without disrupting the calendar." },
];

export default function About() {
    useReveal();
    const whatsappLink = "https://wa.me/919187418343?text=Assalamu%20Alaikum%2C%20I%27m%20interested%20in%20enrolling%20at%20Al%20Hiraa%20Islamic%20Coaching%20Centre.";
    return (
        <div style={{ position: "relative", zIndex: 1 }}>

            {/* Page Header */}
            <div className="glow-border-bottom" style={{ position: "relative", zIndex: 1, paddingTop: "9rem", paddingBottom: "3rem", textAlign: "center", background: "linear-gradient(to bottom,rgba(7,9,15,.85) 0%,rgba(10,10,10,.5) 100%)", backdropFilter: "blur(8px)", overflow: "hidden" }}>
                <div className="page-header-blobs" aria-hidden>
                    <div className="page-header-blob-1" />
                    <div className="page-header-blob-2" />
                </div>
                <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Al Hiraa Islamic Coaching Centre</p>
                    <h1 className="section-title" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 400, marginBottom: ".5rem" }}>
                        About AHIC
                    </h1>
                    <p style={{ fontFamily: "var(--font-arabic)", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: "var(--gold)", opacity: .65, direction: "rtl", margin: ".25rem 0 1rem" }}>رَابِطَةُ القُلُوب · نَشْرُ الحِكْمَة</p>
                    <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "clamp(.9rem,2vw,1.05rem)", color: "var(--text-body)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 1.5rem" }}>
                        Connecting Hearts  Sharing Wisdom
                    </p>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
            </div>

            {/* Who We Are */}
            <section style={{ padding: "6rem 1.5rem 4rem", maxWidth: "860px", margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Our Identity</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)", marginBottom: "1.5rem" }}>
                        Who We Are
                    </h2>
                    <p style={{ lineHeight: 2, color: "var(--text-body)", fontSize: "1rem", maxWidth: "740px", margin: "0 auto 1.25rem" }}>
                        <strong style={{ color: "var(--cream)" }}>Al Hiraa Islamic Coaching Centre (AHIC)</strong> is a dedicated Islamic educational institution committed to nurturing faith, knowledge, and strong moral character among school and college students aged 4 to 25 years.
                    </p>
                    <p style={{ lineHeight: 2, color: "var(--text-body)", fontSize: "1rem", maxWidth: "740px", margin: "0 auto" }}>
                        What began as a humble initiative of home tuitions grew over more than two years into a structured Centre for Islamic learning. On <strong style={{ color: "var(--cream)" }}>6 November 2023 (21/4/1445 Hijri)</strong>, we marked a milestone with the formal establishment of AHIC  and have been growing steadily ever since, alhamdulillah.
                    </p>
                </div>

                {/* Vision Mission */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem", marginTop: "2rem" }}>
                    <div className="ahic-card reveal delay-1" style={{ padding: "2.25rem 1.75rem", backdropFilter: "blur(4px)", borderLeft: "3px solid var(--gold)" }}>
                        <div style={{ fontSize: "1.75rem", marginBottom: ".85rem" }}></div>
                        <h3 style={{ fontFamily: "var(--font-body)", fontSize: ".82rem", fontWeight: 600, color: "var(--gold)", marginBottom: ".3rem", letterSpacing: ".06em", textTransform: "uppercase" }}>Vision</h3>
                        <p style={{ fontFamily: "var(--font-arabic)", fontSize: "1.05rem", color: "var(--gold-pale)", opacity: .65, direction: "rtl", margin: "0 0 .5rem" }}>رُؤيَتُنَا</p>
                        <p style={{ fontSize: ".92rem", color: "var(--cream)", lineHeight: 1.8, fontStyle: "italic" }}>To ignite hearts with faith, minds with knowledge, and lives with purpose.</p>
                    </div>
                    <div className="ahic-card reveal delay-2" style={{ padding: "2.25rem 1.75rem", backdropFilter: "blur(4px)", borderLeft: "3px solid var(--gold)" }}>
                        <div style={{ fontSize: "1.75rem", marginBottom: ".85rem" }}></div>
                        <h3 style={{ fontFamily: "var(--font-body)", fontSize: ".82rem", fontWeight: 600, color: "var(--gold)", marginBottom: ".3rem", letterSpacing: ".06em", textTransform: "uppercase" }}>Mission</h3>
                        <p style={{ fontFamily: "var(--font-arabic)", fontSize: "1.05rem", color: "var(--gold-pale)", opacity: .65, direction: "rtl", margin: "0 0 .5rem" }}>رِسَالَتُنَا</p>
                        <p style={{ fontSize: ".9rem", color: "var(--text-body)", lineHeight: 1.8 }}>To deliver structured, authentic Islamic education through live online and offline classes, making Qur&apos;anic recitation, Hifz, Arabic, and Islamic values accessible to every student regardless of location.</p>
                    </div>
                    <div className="ahic-card reveal delay-3" style={{ padding: "2.25rem 1.75rem", backdropFilter: "blur(4px)", borderLeft: "3px solid var(--gold)" }}>
                        <div style={{ fontSize: "1.75rem", marginBottom: ".85rem" }}></div>
                        <h3 style={{ fontFamily: "var(--font-body)", fontSize: ".82rem", fontWeight: 600, color: "var(--gold)", marginBottom: ".65rem", letterSpacing: ".06em", textTransform: "uppercase" }}>Our Name</h3>
                        <p style={{ fontSize: ".9rem", color: "var(--text-body)", lineHeight: 1.8 }}>Al Hiraa refers to the Cave of Hira, where Prophet Muhammad ﷺ received the first revelation of the Qur&apos;an — the command to Read. Just as that revelation illuminated humanity, we aim to illuminate young minds with faith, wisdom, and clarity.</p>
                    </div>
                </div>
            </section>

            {/* Logo Meaning */}
            <section className="glow-border-top glow-border-bottom" style={{ padding: "5rem 1.5rem", background: "rgba(10,10,10,.55)", backdropFilter: "blur(6px)" }}>
                <div style={{ maxWidth: "860px", margin: "0 auto" }}>
                    <div className="reveal" style={{ textAlign: "center", marginBottom: "2.5rem" }}>
                        <p className="section-label" style={{ marginBottom: ".75rem" }}>The Meaning Behind Our Mark</p>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.4rem)" }}>Our Logo Reflects Four Truths</h2>
                        <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "1rem" }}>
                        {[
                            { num: "01", label: "Knowledge", text: "Knowledge that removes ignorance" },
                            { num: "02", label: "Faith", text: "Faith that brings peace to the heart" },
                            { num: "03", label: "Hope", text: "Hope in times of confusion and doubt" },
                            { num: "04", label: "Guidance", text: "Guidance for the heart and mind" },
                        ].map((item, i) => (
                            <div key={item.num} className={`ahic-card reveal delay-${i + 1}`} style={{ padding: "1.75rem 1.5rem", backdropFilter: "blur(4px)", textAlign: "center" }}>
                                <div style={{ fontFamily: '"Luxury", Georgia, serif', fontSize: "2.5rem", color: "rgba(201,168,76,.2)", lineHeight: 1, marginBottom: ".6rem" }}>{item.num}</div>
                                <div style={{ fontFamily: "var(--font-body)", fontSize: ".78rem", fontWeight: 600, color: "var(--gold)", letterSpacing: ".08em", textTransform: "uppercase", marginBottom: ".4rem" }}>{item.label}</div>
                                <div style={{ fontSize: ".85rem", color: "var(--text-body)", lineHeight: 1.7 }}>{item.text}</div>
                            </div>
                        ))}
                    </div>
                    <p className="reveal" style={{ textAlign: "center", fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: ".97rem", color: "var(--gold-pale)", lineHeight: 1.9, maxWidth: "600px", margin: "2rem auto 0" }}>
                        We believe Islamic knowledge is the light that shapes confident, ethical, and purposeful individuals.
                    </p>
                </div>
            </section>

            {/* What We Stand For */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Our Teaching Philosophy</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
                        What Every Student Receives
                    </h2>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "1.25rem" }}>
                    {PILLARS.map((v, i) => (
                        <div key={v.title} className={`ahic-card reveal delay-${(i % 4) + 1}`} style={{ padding: "2rem 1.75rem", backdropFilter: "blur(4px)" }}>
                            <div style={{ fontSize: "1.75rem", marginBottom: ".85rem" }}>{v.icon}</div>
                            <h3 style={{ fontFamily: "var(--font-body)", fontSize: ".82rem", fontWeight: 600, color: "var(--gold)", marginBottom: ".6rem", letterSpacing: ".06em", textTransform: "uppercase" }}>{v.title}</h3>
                            <p style={{ fontSize: ".88rem", color: "var(--text-body)", lineHeight: 1.75 }}>{v.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Platform Section */}
            <section className="glow-border-top glow-border-bottom" style={{ padding: "6rem 1.5rem", background: "rgba(10,10,10,.55)", backdropFilter: "blur(6px)" }}>
                <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                    <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
                        <p className="section-label" style={{ marginBottom: ".75rem" }}>How Learning Is Delivered</p>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem,3.5vw,2.6rem)" }}>
                            Powered by Suffah  Our Own LMS
                        </h2>
                        <p style={{ color: "var(--text-body)", fontSize: ".97rem", lineHeight: 1.85, maxWidth: "680px", margin: ".75rem auto 0" }}>
                            AHIC runs on <strong style={{ color: "var(--cream)" }}>Suffah</strong> — a learning management system we built from scratch because no commercial platform could handle what Islamic education actually requires. Suffah is not a branded third-party tool. It is our platform, built entirely around our students&apos; needs.
                        </p>
                        <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                    </div>

                    <div className="ahic-card reveal" style={{ padding: "3rem 2.5rem", borderLeft: "3px solid var(--gold)", backdropFilter: "blur(6px)", marginBottom: "2rem", maxWidth: "860px", margin: "0 auto 2rem" }}>
                        <p style={{ lineHeight: 1.95, color: "var(--text-body)", fontSize: "1rem", marginBottom: "1.25rem" }}>
                            When Al Hiraa began growing from home tuitions into a structured institution, we evaluated every major LMS on the market — Teachable, Thinkific, Moodle, Google Classroom. None of them could track a student&apos;s five daily prayers, give parents real-time visibility into their child&apos;s learning, or enforce the kind of data separation that a responsible teaching institution requires.
                        </p>
                        <p style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "1rem", color: "var(--gold-pale)", lineHeight: 1.9, paddingTop: "1.5rem", borderTop: "1px solid rgba(201,168,76,.15)", textAlign: "center" }}>
                            Suffah is not a generic LMS adapted for Islamic use  it is an Islamic education platform, first and last.
                        </p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: "1.25rem" }}>
                        {PLATFORM.map((t, i) => (
                            <div key={t.title} className={`ahic-card reveal delay-${(i % 4) + 1}`} style={{ padding: "1.75rem", backdropFilter: "blur(4px)", display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                                <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{t.icon}</span>
                                <div>
                                    <div style={{ fontFamily: "var(--font-body)", fontSize: ".8rem", fontWeight: 600, color: "var(--cream)", marginBottom: ".4rem" }}>{t.title}</div>
                                    <div style={{ fontSize: ".83rem", color: "var(--text-body)", lineHeight: 1.75 }}>{t.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "6rem 1.5rem 8rem", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
                <div className="reveal">
                    <p className="section-label" style={{ marginBottom: "1rem" }}>Ready to Begin?</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", marginBottom: "1.5rem" }}>
                        Join the Al Hiraa Family
                    </h2>
                    <p style={{ color: "var(--text-body)", lineHeight: 1.95, marginBottom: "2.25rem", fontSize: "1rem" }}>
                        Explore our five active courses, fill in the enrollment form, or reach out directly on WhatsApp for an immediate response. Classes are open to students aged 4 to 25, online worldwide and offline in Mysuru.
                    </p>
                    <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                        <Link href="/courses" className="btn-gold">View Our Courses</Link>
                        <Link href="/join" className="btn-ghost">Enroll Now</Link>
                    </div>
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: ".8rem", color: "var(--text-dim)", textDecoration: "none", letterSpacing: ".05em", transition: "color .2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "var(--gold)"} onMouseLeave={(e) => e.currentTarget.style.color = "var(--text-dim)"}>
                        WhatsApp: +91 91874 18343 &nbsp; 📸 Instagram: @ahicsuffah
                    </a>
                </div>
            </section>
        </div>
    );
}
