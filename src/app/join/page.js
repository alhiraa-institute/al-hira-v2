"use client";

import { useState, useEffect } from "react";

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

const WHY_ITEMS = [
    { icon: "🎥", title: "Live Classes Only", text: "Every session at AHIC is live — conducted by a real teacher using our built-in Suffah classroom with video, whiteboard, and chat. No pre-recorded videos." },
    { icon: "🤲", title: "Namaz Accountability Built In", text: "Students log their five daily prayers as part of the learning system. Spiritual growth and academic progress are tracked side by side." },
    { icon: "👨‍👩‍👧‍👦", title: "Parent Guardian Portal", text: "Parents receive their own Suffah account with real-time visibility into attendance, prayer records, and teacher feedback — for their child only." },
    { icon: "✔️", title: "Automatic Attendance", text: "Attendance marks itself when students join a live session. No manual entry, no missed records. Both parents and teachers always know who attended." },
    { icon: "📈", title: "Structured Level Progression", text: "Each course follows a defined sequence — students advance level by level with clear prerequisites, so no foundational steps are skipped." },
    { icon: "🌍", title: "Online & Offline Access", text: "Classes run primarily online, accessible from anywhere worldwide. Local students in Mysuru can also attend in-person sessions at the Centre." },
];

const FAQS = [
    { q: "Who can enroll at Al Hiraa?", a: "We welcome learners aged 4 to 25 — from young children beginning Qur'anic recitation to adults seeking structured Islamic Studies. All levels are welcome." },
    { q: "Are classes live or pre-recorded?", a: "All classes are fully live, conducted by qualified teachers in real time using our built-in Suffah classroom. There are no pre-recorded courses at AHIC." },
    { q: "What courses are currently running?", a: "We currently offer: Tajweed Basics - Junior, Tajweed Foundations - Senior, Qur'anic Recitation, Hifz-e-Qur'an (up to 3 Juz), and Arabic for Beginners. Qiraat, Calligraphy, and Qur'anic Tarjuma are launching shortly." },
    { q: "How do online classes work?", a: "Students join their scheduled class through the Suffah platform — our purpose-built learning system. No downloads needed. It runs in any browser on any device." },
    { q: "Can parents monitor their child's progress?", a: "Yes. Every parent or guardian receives a dedicated Suffah Guardian account with full visibility into attendance, teacher feedback, and prayer tracking — for their child only." },
    { q: "How do I enroll or get more information?", a: "Fill in the enrollment form on this page and we'll respond within 48 hours. For a faster reply, WhatsApp us directly on +91 91874 18343 or follow us on Instagram @ahicsuffah." },
];

export default function Join() {
    useReveal();
    const [form, setForm] = useState({ name: "", age: "", email: "", phone: "", program: "", message: "" });
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [open, setOpen] = useState(null);

    function handleChange(e) { setForm({ ...form, [e.target.name]: e.target.value }); }
    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/enroll", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });
            const data = await res.json();
            if (!res.ok) throw new Error(data.error || "Something went wrong.");
            setSent(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    const inputStyle = {
        width: "100%", background: "rgba(201,168,76,.05)",
        border: "1px solid rgba(201,168,76,.2)", borderRadius: "8px",
        padding: ".7rem 1rem", color: "var(--cream)", fontSize: ".9rem",
        outline: "none", fontFamily: "var(--font-body)", boxSizing: "border-box",
        transition: "border-color .2s",
    };

    return (
        <div style={{ position: "relative", zIndex: 1 }}>
            {/* Page Header */}
            <div style={{ position: "relative", zIndex: 1, paddingTop: "9rem", paddingBottom: "3rem", textAlign: "center", borderBottom: "1px solid rgba(201,168,76,.1)", background: "linear-gradient(to bottom,rgba(7,9,15,.85) 0%,rgba(10,10,10,.5) 100%)", backdropFilter: "blur(8px)", overflow: "hidden" }}>
                <div className="page-header-blobs" aria-hidden>
                    <div className="page-header-blob-1" />
                    <div className="page-header-blob-2" />
                </div>
                <div style={{ maxWidth: "700px", margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 1 }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Begin Your Journey</p>
                    <h1 className="section-title" style={{ fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 400, marginBottom: ".5rem" }}>
                        Enroll at Al Hiraa
                    </h1>
                    <p style={{ fontFamily: "var(--font-arabic)", fontSize: "clamp(1.2rem,2.5vw,1.6rem)", color: "var(--gold)", opacity: .65, direction: "rtl", margin: ".25rem 0 1rem" }}>اِلْتَحِقْ بِنَا · ابْدَأْ رِحْلَتَكَ</p>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
            </div>

            {/* Form + Why Section */}
            <section style={{ padding: "6rem 1.5rem 5rem", maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "4rem", alignItems: "start" }}>
                {/* Enrollment Form */}
                <div className="reveal">
                    <div style={{ marginBottom: "2rem" }}>
                        <p className="section-label" style={{ marginBottom: ".6rem" }}>Enrollment Inquiry</p>
                        <h2 className="section-title" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: ".75rem" }}>Start Learning with Us</h2>
                        <p style={{ fontSize: ".9rem", color: "var(--text-body)", lineHeight: 1.8 }}>Fill in the form and we&apos;ll reach out within 48 hours to discuss the right program for your student.</p>
                    </div>
                    {sent ? (
                        <div style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(201,168,76,.3)", borderRadius: "12px", padding: "2.5rem", textAlign: "center" }}>
                            <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}></div>
                            <h3 style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", fontWeight: 600, color: "var(--cream)", marginBottom: ".75rem" }}>Inquiry Received</h3>
                            <p style={{ color: "var(--text-body)", fontSize: ".9rem", lineHeight: 1.8 }}>Thank you, {form.name}. We will be in touch within 48 hours.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
                            {[
                                { name: "name", label: "Student Name", type: "text", required: true },
                                { name: "age", label: "Age / Level", type: "text", required: false },
                                { name: "email", label: "Parent Email", type: "email", required: true },
                                { name: "phone", label: "WhatsApp / Phone", type: "tel", required: false },
                            ].map((field) => (
                                <div key={field.name}>
                                    <label style={{ display: "block", fontSize: ".72rem", color: "var(--text-dim)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".4rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>{field.label}{field.required && " *"}</label>
                                    <input
                                        type={field.type} name={field.name} value={form[field.name]}
                                        onChange={handleChange} required={field.required}
                                        style={inputStyle}
                                        onFocus={(e) => e.target.style.borderColor = "var(--gold)"}
                                        onBlur={(e) => e.target.style.borderColor = "rgba(201,168,76,.2)"}
                                    />
                                </div>
                            ))}
                            <div>
                                <label style={{ display: "block", fontSize: ".72rem", color: "var(--text-dim)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".4rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>Course of Interest</label>
                                <select name="program" value={form.program} onChange={handleChange} style={{ ...inputStyle, background: "rgba(10,10,10,.95)", color: form.program ? "var(--cream)" : "var(--text-dim)" }}>
                                    <option value="">Select a course</option>
                                    <option value="tajweed">Tajweed Basics - Junior</option>
                                    <option value="tarteel">Tajweed Foundations - Senior</option>
                                    <option value="recitation">Qur'anic Recitation</option>
                                    <option value="hifz">Hifz-e-Qur'an (up to 3 Juz)</option>
                                    <option value="arabic">Arabic for Beginners</option>
                                    <option value="upcoming">Upcoming — Qiraat / Calligraphy / Tarjuma</option>
                                </select>
                            </div>
                            <div>
                                <label style={{ display: "block", fontSize: ".72rem", color: "var(--text-dim)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".4rem", fontFamily: "var(--font-body)", fontWeight: 600 }}>Additional Message</label>
                                <textarea name="message" value={form.message} onChange={handleChange} rows={3}
                                    style={{ ...inputStyle, resize: "vertical" }}
                                    onFocus={(e) => e.target.style.borderColor = "var(--gold)"}
                                    onBlur={(e) => e.target.style.borderColor = "rgba(201,168,76,.2)"}
                                />
                            </div>
                            {error && (
                                <p style={{ fontSize: ".85rem", color: "#e57373", margin: 0 }}>{error}</p>
                            )}
                            <button type="submit" className="btn-gold" style={{ marginTop: ".5rem" }} disabled={loading}>
                                {loading ? "Sending…" : "Submit Inquiry"}
                            </button>
                        </form>
                    )}
                </div>

                {/* Why Al Hiraa */}
                <div className="reveal delay-2">
                    <p className="section-label" style={{ marginBottom: ".6rem" }}>Why Al Hiraa?</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", marginBottom: "1.75rem" }}>What Every Student Gets</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: ".85rem" }}>
                        {WHY_ITEMS.map((item) => (
                            <div key={item.title} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", padding: "1.1rem 1.25rem", background: "rgba(201,168,76,.04)", border: "1px solid rgba(201,168,76,.1)", borderRadius: "10px" }}>
                                <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>{item.icon}</span>
                                <div>
                                    <div style={{ fontFamily: "var(--font-body)", fontSize: ".72rem", fontWeight: 600, color: "var(--gold)", letterSpacing: ".06em", textTransform: "uppercase", marginBottom: ".3rem" }}>{item.title}</div>
                                    <div style={{ fontSize: ".84rem", color: "var(--text-body)", lineHeight: 1.7 }}>{item.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section style={{ padding: "5rem 1.5rem 8rem", maxWidth: "700px", margin: "0 auto" }}>
                <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
                    <p className="section-label" style={{ marginBottom: ".75rem" }}>Common Questions</p>
                    <h2 className="section-title" style={{ fontSize: "clamp(1.6rem,3vw,2.2rem)" }}>FAQ</h2>
                    <div className="gold-rule" style={{ margin: "1.25rem auto 0" }} />
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: ".75rem" }}>
                    {FAQS.map((faq, i) => (
                        <div key={i} className="reveal" style={{ border: "1px solid rgba(201,168,76,.15)", borderRadius: "10px", overflow: "hidden", background: "rgba(201,168,76,.03)" }}>
                            <button onClick={() => setOpen(open === i ? null : i)} style={{ width: "100%", textAlign: "left", padding: "1.1rem 1.25rem", background: "transparent", border: "none", color: "var(--cream)", fontFamily: "var(--font-body)", fontSize: ".9rem", cursor: "pointer", display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem" }}>
                                <span>{faq.q}</span>
                                <span style={{ color: "var(--gold)", fontSize: "1.1rem", flexShrink: 0, transition: "transform .2s", transform: open === i ? "rotate(45deg)" : "none" }}>+</span>
                            </button>
                            {open === i && (
                                <div style={{ padding: "0 1.25rem 1.1rem", fontSize: ".85rem", color: "var(--text-body)", lineHeight: 1.85, borderTop: "1px solid rgba(201,168,76,.08)" }}>{faq.a}</div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
