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

const FEATURES = [
    {
        icon: "",
        tag: "Access Control",
        title: "Role-Based Authentication",
        color: "#c9a84c",
        points: [
            "Four distinct account types: Admin, Teacher, Student, Guardian",
            "JWT sessions with NextAuth v5  fully server-side enforced",
            "Strict data isolation  no cross-role data leakage by design",
            "Permission middleware applied at route and API level",
        ],
    },
    {
        icon: "",
        tag: "Academic Core",
        title: "Course Management & Enrollment",
        color: "#c9a84c",
        points: [
            "Admin creates courses and assigns teachers to each",
            "Students enroll through a structured admin approval flow",
            "Centralized content repository per course with file attachments",
            "Live enrollment status tracking in real time",
        ],
    },
    {
        icon: "",
        tag: "Scheduling",
        title: "Smart Class Scheduling (RRULE)",
        color: "#c9a84c",
        points: [
            "RFC 5545 RRULE for recurring class schedules (daily, weekly, custom)",
            "Per-session exception handling  cancel or reschedule individual classes",
            "Teacher and student calendars auto-populated from schedule",
            "Conflict detection built into the admin interface",
        ],
    },
    {
        icon: "",
        tag: "Live Classroom",
        title: "Built-in WebRTC Classroom",
        color: "#c9a84c",
        points: [
            "Native LiveKit WebRTC  no Zoom, no Google Meet, no third-party dependency",
            "In-session collaborative tldraw whiteboard with live cursors",
            "Persistent in-room text chat with full history",
            "Host controls: mute, camera toggle, participant management",
        ],
    },
    {
        icon: "",
        tag: "Accountability",
        title: "Automated Attendance Tracking",
        color: "#c9a84c",
        points: [
            "Session presence auto-detected via WebRTC join/leave events",
            "Manual override available for teachers to correct edge cases",
            "Per-student attendance percentage computed per course",
            "Attendance heatmaps available in every role's dashboard",
        ],
    },
    {
        icon: "",
        tag: "Islamic Accountability",
        title: "Namaz Prayer Tracker",
        color: "#c9a84c",
        points: [
            "Students log all five daily prayers (Fajr, Dhuhr, Asr, Maghrib, Isha)",
            "Per-prayer streaks, weekly summaries, and compliance calendars",
            "Visible to Teachers and Guardians for pastoral accountability",
            "First-class dashboard feature  not a plugin or afterthought",
        ],
    },
    {
        icon: "",
        tag: "Communication",
        title: "Bidirectional Feedback System",
        color: "#c9a84c",
        points: [
            "Teachers submit structured feedback per student per session",
            "Students and Guardians receive and can acknowledge feedback",
            "Feedback history searchable and filterable by date or course",
            "Privacy enforced  feedback only visible to relevant parties",
        ],
    },
    {
        icon: "",
        tag: "Insights",
        title: "Role-Specific Analytics",
        color: "#c9a84c",
        points: [
            "Admin: platform-wide KPIs  total students, active courses, growth trends",
            "Teacher: class performance, attendance rates, feedback history",
            "Student: personal progress, attendance, prayer compliance",
            "Guardian: ward-specific view of attendance, prayer, and feedback",
        ],
    },
    {
        icon: "",
        tag: "Reporting",
        title: "Attendance Reports & CSV Export",
        color: "#c9a84c",
        points: [
            "On-demand attendance reports filterable by course, date range, student",
            "One-click CSV export for offline analysis or parent distribution",
            "Percentage-based thresholds with visual alerts for low attendance",
            "Full audit trail preserved  no data is ever overwritten or deleted",
        ],
    },
    {
        icon: "",
        tag: "Family",
        title: "Guardian Portal",
        color: "#c9a84c",
        points: [
            "Dedicated Guardian accounts  separate login, separate dashboard",
            "Guardians linked to specific wards (can monitor multiple children)",
            "Attendance, prayer, and feedback all visible in one view",
            "Strict scoping  Guardians only ever see their own ward&apos;s data",
        ],
    },
];

export default function Programs() {
    useReveal();
    return (
        <div style={{ position: "relative", zIndex: 1 }}>
            {/* Page Header */}
            <div className="glow-border-bottom" style={{ position: "relative", zIndex: 1, paddingTop: "9rem", paddingBottom: "3rem", textAlign: "center", background: "linear-gradient(to bottom,rgba(7,9,15,.85) 0%,rgba(10,10,10,.5) 100%)", backdropFilter: "blur(8px)", overflow: "hidden" }}>
                <div className="page-header-blobs" aria-hidden>
                    <div className="page-header-blob-1" />
                    <div className="page-header-blob-2" />
                </div>
                <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>What Suffah Delivers</p>
                    <h1 className="section-title" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 400, marginBottom: "1rem" }}>
                        Platform Features
                    </h1>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
            </div>

            {/* Features */}
            <section style={{ padding: "6rem 1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
                <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                    {FEATURES.map((feat, i) => (
                        <div key={feat.title} className={`ahic-card reveal delay-${(i % 4) + 1}`} style={{ padding: "2.5rem", backdropFilter: "blur(4px)", borderLeft: `3px solid ${feat.color}` }}>
                            <div style={{ display: "flex", alignItems: "flex-start", gap: "1.25rem", flexWrap: "wrap" }}>
                                <div style={{ flexShrink: 0, width: "3rem", height: "3rem", display: "flex", alignItems: "center", justifyContent: "center", background: `${feat.color}18`, borderRadius: "50%", fontSize: "1.4rem" }}>{feat.icon}</div>
                                <div style={{ flex: 1, minWidth: "220px" }}>
                                    <div style={{ display: "flex", alignItems: "center", gap: ".75rem", marginBottom: ".5rem", flexWrap: "wrap" }}>
                                        <span style={{ fontFamily: "var(--font-body)", fontSize: ".68rem", fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: feat.color, opacity: .9 }}>{feat.tag}</span>
                                    </div>
                                    <h2 style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem,2.5vw,1.2rem)", fontWeight: 600, color: "var(--cream)", marginBottom: "1.25rem", letterSpacing: ".01em" }}>{feat.title}</h2>
                                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: ".6rem" }}>
                                        {feat.points.map((pt) => (
                                            <li key={pt} style={{ display: "flex", gap: ".65rem", alignItems: "flex-start", fontSize: ".88rem", color: "var(--text-body)", lineHeight: 1.7 }}>
                                                <span style={{ color: feat.color, flexShrink: 0, marginTop: "2px" }}></span>
                                                <span dangerouslySetInnerHTML={{ __html: pt }} />
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: "5rem 1.5rem 8rem", textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
                <div className="reveal">
                    <p className="section-label" style={{ marginBottom: "1rem" }}>Ready to Get Started?</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", marginBottom: "1.5rem" }}>
                        Enroll and Start Learning
                    </h2>
                    <p style={{ color: "var(--text-body)", lineHeight: 1.95, marginBottom: "2.5rem", fontSize: "1rem" }}>
                        Every feature above is live and already serving students at Al Hiraa. Enroll today and experience Suffah — a purpose-built learning system, available to every Al Hiraa student.
                    </p>
                    <Link href="/join" className="btn-gold">Enroll Now</Link>
                </div>
            </section>
        </div>
    );
}
