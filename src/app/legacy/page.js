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

const LEGACY_ITEMS = [
    {
        icon: "",
        title: "A Life Devoted to Teaching",
        text: "Dr. Noor ul Huq dedicated decades to teaching Quran, Arabic, and Islamic Studies  not from institutions, but from sincerity. He believed knowledge belonged to every Muslim, regardless of circumstance.",
    },
    {
        icon: "",
        title: "Generosity Without Limits",
        text: "He funded students who could not pay, opened his home as a classroom, and never allowed anyone's economic situation to be a barrier to learning sacred knowledge. His generosity was not occasional  it was his character.",
    },
    {
        icon: "",
        title: "Seeds of Al Hiraa",
        text: "It was his model of teaching  personal, accountable, spiritually grounded  that shaped Al Hiraa's founding principles. The institution exists because one man demonstrated what Islamic education could look like when done right.",
    },
    {
        icon: "",
        title: "The Inspiration Behind Suffah",
        text: "Suffah is our answer to a question he lived by: how do we make this accessible, trackable, and lasting? Technology cannot replace a teacher. But it can honour one — by making what he built impossible to lose.",
    },
];

export default function Legacy() {
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
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>In Honoured Memory</p>
                    <h1 className="section-title" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 400, marginBottom: "1rem" }}>
                        His Legacy
                    </h1>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
            </div>

            {/* Tribute */}
            <section style={{ padding: "6rem 1.5rem 4rem", maxWidth: "800px", margin: "0 auto", textAlign: "center" }}>
                <div className="reveal">
                    <div style={{ fontFamily: "var(--font-body)", fontStyle: "italic", fontSize: "clamp(1.05rem,2.5vw,1.3rem)", lineHeight: 2, color: "var(--gold-pale)", marginBottom: "2.5rem", position: "relative", padding: "2rem 2.5rem", borderTop: "1px solid rgba(201,168,76,.2)", borderBottom: "1px solid rgba(201,168,76,.2)" }}>
                        &ldquo;Knowledge is not a possession  it is a trust. And a trust must be passed on.&rdquo;
                        <div style={{ fontSize: ".8rem", color: "var(--text-dim)", marginTop: "1rem", letterSpacing: ".08em", textTransform: "uppercase", fontStyle: "normal", fontFamily: "var(--font-body)", fontWeight: 600 }}>Dr. Noor ul Huq — Teacher, Scholar, Benefactor</div>
                    </div>
                    <p style={{ lineHeight: 2, color: "var(--text-body)", fontSize: "1rem" }}>
                        Al Hiraa Islamic Coaching Centre was founded in the spirit of Dr. Noor ul Huq — a scholar and teacher
                        whose generosity made Islamic education accessible to all who sought it. His life embodied what this
                        institution stands for. Suffah, the platform we built to run that institution, is named in acknowledgement
                        of his legacy: that sacred knowledge, properly structured, can outlast any single teacher.
                    </p>
                </div>
            </section>

            {/* Legacy Items */}
            <section style={{ padding: "3rem 1.5rem 6rem", maxWidth: "1000px", margin: "0 auto" }}>
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

            {/* Continuity */}
            <section style={{ padding: "5rem 1.5rem 8rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
                <div className="reveal">
                    <p className="section-label" style={{ marginBottom: "1rem" }}>His Work, Continued</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", marginBottom: "1.5rem" }}>
                        The Platform Is the Promise
                    </h2>
                    <p style={{ color: "var(--text-body)", lineHeight: 2, marginBottom: "2.5rem", fontSize: ".97rem" }}>
                        Every feature in Suffah — the prayer tracker, the guardian portal, the live classroom — exists because
                        a real teacher showed us what education grounded in ibadah and accountability looks like.
                        We are building technology to protect and continue that model, not replace it.
                    </p>
                    <Link href="/about" className="btn-ghost">About Suffah</Link>
                </div>
            </section>
        </div>
    );
}
