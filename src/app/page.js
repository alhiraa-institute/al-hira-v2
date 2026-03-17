"use client";

import Image from "next/image";
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

/* ── Hero ── */
function Hero() {
  return (
    <section style={{
      position: "relative", minHeight: "100vh",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <div className="hero-glow" style={{ position: "absolute", inset: 0 }} />

      {/* Radial gradient blobs — hero-section-9 style, AHIC gold tones */}
      <div aria-hidden style={{
        position: "absolute", inset: 0, pointerEvents: "none", zIndex: 2, opacity: 0.45,
      }}>
        <div style={{
          width: "35rem", height: "80rem",
          position: "absolute", left: 0, top: 0,
          transform: "translateY(-54%) rotate(-45deg)",
          borderRadius: "9999px",
          background: "radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(201,168,76,0.09) 0%, rgba(140,110,20,0.03) 50%, transparent 80%)",
        }} />
        <div style={{
          width: "14rem", height: "80rem",
          position: "absolute", left: 0, top: 0,
          transform: "rotate(-45deg) translate(5%, -50%)",
          borderRadius: "9999px",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(201,168,76,0.06) 0%, rgba(140,110,20,0.02) 80%, transparent 100%)",
        }} />
        <div style={{
          width: "14rem", height: "80rem",
          position: "absolute", left: 0, top: 0,
          transform: "translateY(-54%) rotate(-45deg)",
          background: "radial-gradient(50% 50% at 50% 50%, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 80%, transparent 100%)",
        }} />
      </div>

      <div style={{
        position: "absolute", top: "-120px", left: "-120px", width: "500px", height: "500px",
        borderRadius: "50%", border: "1px solid rgba(201,168,76,0.07)", pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "-100px", right: "-100px", width: "450px", height: "450px",
        borderRadius: "50%", border: "1px solid rgba(201,168,76,0.06)", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "9rem 1.5rem 4rem", maxWidth: "860px", width: "100%" }}>


        {/* Bismillah */}
        <p className="reveal delay-1" style={{
          fontFamily: "var(--font-arabic)",
          fontSize: "clamp(1.4rem, 3vw, 2rem)",
          color: "var(--gold)", marginBottom: "1rem",
          direction: "rtl", letterSpacing: "0",
        }}>
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>



        <h1 className="section-title reveal delay-3"
          style={{ fontSize: "clamp(2.4rem, 6vw, 5.2rem)", fontWeight: 400, marginBottom: "0.75rem", letterSpacing: "0.02em" }}>
          Igniting Hearts with Faith
        </h1>

        <p className="reveal delay-4" style={{
          fontFamily: "var(--font-body)", fontSize: "clamp(0.7rem, 1.5vw, 0.82rem)",
          fontWeight: 600, letterSpacing: "0.2em",
          color: "var(--gold-pale)", marginBottom: "1rem", textTransform: "uppercase",
        }}>
          MINDS WITH KNOWLEDGE · LIVES WITH PURPOSE
        </p>

        <p className="reveal delay-4" style={{
          fontFamily: "var(--font-body)", fontStyle: "italic",
          fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
          color: "var(--text-body)", lineHeight: 1.75,
          maxWidth: "620px", margin: "0 auto 3rem",
        }}>
          Welcome to Al Hiraa Islamic Coaching Centre — A dedicated Islamic learning platform
          nurturing faith, character, and knowledge among young learners through authentic online teaching.
        </p>

        <div className="reveal delay-5" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/courses" className="btn-gold">Explore Courses</Link>
          <Link href="/join" className="btn-ghost">Enroll Now</Link>
        </div>


      </div>

      {/* 3D Platform Showcase — hero-section-9 style */}
      <div className="platform-showcase-wrap" style={{ width: "100%", position: "relative", zIndex: 10 }}>
        <div className="platform-showcase-inner">
          <div style={{ transform: "rotateX(20deg)" }}>
            <div className="platform-showcase-skew">
              <Image
                src="/hero.png"
                alt="AlHira LMS Platform Dashboard"
                width={2880}
                height={1800}
                style={{
                  width: "100%", height: "auto",
                  borderRadius: "12px",
                  border: "1px solid rgba(201,168,76,0.18)",
                  boxShadow: "0 30px 80px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(201,168,76,0.08)",
                  position: "relative", zIndex: 2,
                }}
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Marquee ── */
function Marquee() {
  const text = ["Connecting Hearts", "Sharing Wisdom", "Igniting Minds", "Guiding with Light", "Nurturing Faith"];
  const repeated = [...text, ...text];
  return (
    <div className="glow-border-top glow-border-bottom" style={{
      overflow: "hidden",
      background: "rgba(201,168,76,0.03)",
      backdropFilter: "blur(4px)",
      padding: "1.1rem 0",
      position: "relative", zIndex: 1,
    }}>
      <div className="marquee-track">
        {repeated.map((t, i) => (
          <span key={i} style={{
            fontFamily: "var(--font-body)", fontSize: "0.62rem", letterSpacing: "0.2em",
            fontWeight: 600,
            textTransform: "uppercase", color: "var(--gold)", padding: "0 3rem",
          }}>
            {t} <span style={{ color: "var(--gold-dim)", margin: "0 1rem" }}>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Stats ── */
const STATS = [
  { value: "5+", label: "Years of Excellence" },
  { value: "100+", label: "Students Guided" },
  { value: "5", label: "Core Courses" },
  { value: "4–25", label: "Age Group (Years)" },
];

function Stats() {
  return (
    <div className="glow-border-top glow-border-bottom" style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.04), rgba(201,168,76,0.07))",
      padding: "4rem 1.5rem",
      position: "relative", zIndex: 1,
      backdropFilter: "blur(6px)",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "2rem", textAlign: "center" }}>
        {STATS.map((s, i) => (
          <div key={s.label} className={`reveal delay-${i + 1}`}>
            <div style={{ fontFamily: '"Luxury", Georgia, serif', fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--gold-light)", fontWeight: 400, lineHeight: 1 }}>{s.value}</div>
            <div style={{ fontFamily: "var(--font-body)", fontSize: "0.58rem", fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-dim)", marginTop: "0.6rem" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Features ── */
const FEATURES = [
  { icon: "📖", title: "Tajweed Basics - Junior", text: "Learn to recognize Arabic letters and develop correct pronunciation while progressing to reading two, three and five letter words & beyond." },
  { icon: "🎓", title: "Tajweed Foundations - Senior", text: "Recite in a measured tone while focusing on Tajweed application, developing fluency and accuracy in reading words and short sentences." },
  { icon: "🕌", title: "Qur'anic Recitation", text: "The complete journey from the Arabic alphabet and Qa'idah to reading Juz Amma and beyond." },
  { icon: "👑", title: "Hifz-e-Qur'an", text: "Structured Hifz up to 3 Juz with daily targets, revision schedules, and milestone tracking built into the Suffah platform." },
  { icon: "📜", title: "Arabic for Beginners", text: "Understand Qur'anic vocabulary, sentence structure, and grammar so you can read Islamic texts without relying solely on translation." },
  { icon: "🕋", title: "Prayer Accountability", text: "Our built-in Namaz Tracker monitors students' five daily prayers — spiritual growth is as much a part of AHIC as academic progress." },
];

function Features() {
  return (
    <section style={{ padding: "7rem 1.5rem", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Our Courses</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "1rem" }}>
            Five Courses. One Platform. One Purpose.
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: "0.98rem", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 1.5rem" }}>
            Structured Islamic programs for ages 4–25, delivered live on our purpose-built learning platform — Suffah
          </p>
          <div className="gold-rule" style={{ margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
          {FEATURES.map((f, i) => (
            <div key={f.title} className={`ahic-card reveal delay-${(i % 5) + 1}`}
              style={{ padding: "2rem 1.75rem", backdropFilter: "blur(6px)" }}>
              <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>{f.icon}</div>
              <h3 style={{
                fontFamily: "var(--font-body)", fontSize: "0.88rem", fontWeight: 600,
                color: "var(--cream)", marginBottom: "0.6rem", letterSpacing: "0.01em",
              }}>{f.title}</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-body)", lineHeight: 1.75 }}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Timeline preview ── */
const TIMELINE_PREVIEW = [
  { year: "2021", icon: "🕊️", title: "Humble Beginnings", text: "Started with home tuitions, teaching 3–5 students with a vision to build a structured Islamic learning space" },
  { year: "2023", icon: "🏫", title: "Foundation Established", text: "On November 6, 2023 (21/4/1445 Hijri), we marked a milestone with the establishment of our Centre (AHIC)" },
  { year: "2026", icon: "🎯", title: "Digital Excellence", text: "Online LMS platform-Suffah and official website launched" },
];

function TimelinePreview() {
  return (
    <section className="glow-border-top glow-border-bottom" style={{
      padding: "7rem 1.5rem",
      background: "rgba(10,10,10,0.6)",
      backdropFilter: "blur(6px)",
      position: "relative", zIndex: 1,
    }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div className="reveal" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p className="section-label" style={{ marginBottom: "0.75rem" }}>Established 2023 · Est. from 2021</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: "1rem" }}>
            From Humble Beginnings
          </h2>
          <p style={{ color: "var(--text-body)", fontSize: "0.98rem", lineHeight: 1.8, maxWidth: "500px", margin: "0 auto 1.5rem" }}>
            A testament to the power of sincere intention and the pursuit of beneficial knowledge
          </p>
          <div className="gold-rule" style={{ margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem", marginBottom: "2.5rem" }}>
          {TIMELINE_PREVIEW.map((t, i) => (
            <div key={t.year} className={`ahic-card reveal delay-${i + 1}`}
              style={{ padding: "2rem 1.75rem", backdropFilter: "blur(4px)" }}>
              <div style={{
                fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 600, letterSpacing: "0.15em",
                textTransform: "uppercase", color: "var(--gold)", marginBottom: "0.6rem",
              }}>{t.icon} {t.year}</div>
              <h3 style={{
                fontFamily: "var(--font-body)", fontSize: "0.9rem", fontWeight: 600,
                color: "var(--cream)", marginBottom: "0.6rem",
              }}>{t.title}</h3>
              <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: "var(--text-body)" }}>{t.text}</p>
            </div>
          ))}
        </div>
        <div className="reveal" style={{ textAlign: "center" }}>
          <Link href="/journey" className="btn-ghost">Read Our Full Story</Link>
        </div>
      </div>
    </section>
  );
}

/* ── CTA ── */
function CTA() {
  return (
    <section style={{
      padding: "7rem 1.5rem",
      position: "relative", zIndex: 1,
      textAlign: "center",
    }}>
      <div className="reveal" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <p className="section-label" style={{ marginBottom: "0.75rem" }}>Join the Community</p>
        <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", marginBottom: "1.5rem" }}>
          Begin Your Journey of Knowledge
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: "1.1rem", lineHeight: 1.85,
          color: "var(--text-body)", maxWidth: "600px", margin: "0 auto 2.5rem",
        }}>
          Join hundreds of students worldwide who are strengthening their faith,
          mastering the Qur&apos;an, and building noble character through our authentic Islamic education.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/join" className="btn-gold">Start Learning Today</Link>
          <a href="https://wa.me/919187418343?text=Assalamu%20Alaikum%2C%20I%27m%20interested%20in%20enrolling%20at%20AHIC" target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ display: "inline-flex", alignItems: "center", gap: ".4rem" }}>💬 WhatsApp Us</a>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  useReveal();
  return (
    <div style={{ position: "relative", zIndex: 1 }}>
      <Hero />
      <Marquee />
      <Stats />
      <Features />
      <TimelinePreview />
      <CTA />
    </div>
  );
}
