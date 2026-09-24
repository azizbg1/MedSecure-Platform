"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

const features = [
  {
    icon: "👤",
    title: "Espace Patient",
    color: "#00D4FF",
    items: ["Prise de rendez-vous", "Questionnaire intelligent", "Carte corporelle interactive", "Historique médical"],
  },
  {
    icon: "🤖",
    title: "IA Médicale",
    color: "#7C3AED",
    items: ["Pré-triage intelligent", "Chatbot d'accompagnement", "Speech-to-text consultation", "Génération de comptes rendus"],
  },
  {
    icon: "🩺",
    title: "Espace Médecin",
    color: "#10B981",
    items: ["Rapport IA avant consultation", "Historique complet patient", "Rédaction assistée", "Dashboard analytique"],
  },
  {
    icon: "🔒",
    title: "Cybersécurité",
    color: "#F59E0B",
    items: ["JWT + OAuth + 2FA", "Données chiffrées AES-256", "Traçabilité complète", "Contrôle d'accès par rôle"],
  },
];

const steps = [
  { n: "01", title: "Prise de rendez-vous", desc: "Le patient réserve, modifie ou annule ses consultations directement depuis son espace." },
  { n: "02", title: "Questionnaire intelligent", desc: "Avant la visite, le patient renseigne ses symptômes et localise la douleur sur une carte corporelle." },
  { n: "03", title: "Pré-rapport IA", desc: "L'IA structure les informations en un résumé médical lisible envoyé au médecin avant la consultation." },
  { n: "04", title: "Consultation préparée", desc: "Le médecin arrive informé — il gagne du temps et se concentre sur l'essentiel." },
  { n: "05", title: "Rédaction assistée", desc: "Pendant ou après la consultation, l'IA transcrit la voix et génère le compte rendu médical." },
  { n: "06", title: "Traçabilité & intégrité", desc: "Chaque accès est journalisé — qui a consulté quoi et quand — pour une traçabilité médicale complète." },
];

export default function Landing() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function onScroll() {
      const nav = navRef.current;
      if (!nav) return;
      if (window.scrollY > 40) {
        nav.style.background = "rgba(7,12,24,0.9)";
        nav.style.backdropFilter = "blur(16px)";
        nav.style.borderBottomColor = "rgba(0,212,255,0.1)";
      } else {
        nav.style.background = "transparent";
        nav.style.backdropFilter = "none";
        nav.style.borderBottomColor = "transparent";
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 border-b border-transparent"
        style={{ transition: "background .3s, backdrop-filter .3s, border-color .3s" }}
      >
        <div className="flex items-center justify-between gap-4" style={{ padding: "18px clamp(20px,4vw,64px)" }}>
          <Link href="/" className="flex items-baseline gap-2 no-underline">
            <span className="font-black text-white" style={{ fontSize: "20px", letterSpacing: "-0.02em" }}>
              Med<span style={{ color: "var(--accent)" }}>Secure</span>
            </span>
            <span className="font-mono text-[10px] tracking-widest" style={{ color: "var(--muted)" }}>BETA</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {["Fonctionnalités", "Comment ça marche", "Sécurité"].map((l) => (
              <a key={l} href="#" className="font-mono uppercase no-underline transition-colors"
                style={{ fontSize: "11px", letterSpacing: "0.18em", color: "var(--muted)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
              >
                {l}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link href="/login" className="btn-ghost" style={{ padding: "10px 20px", fontSize: "13px" }}>
              Se connecter
            </Link>
            <Link href="/login" className="btn-primary" style={{ padding: "10px 20px", fontSize: "13px" }}>
              Commencer →
            </Link>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden" style={{ paddingTop: "80px" }}>
        {/* Orbs */}
        <div className="absolute" style={{
          width: "600px", height: "600px",
          background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
          top: "-100px", left: "-100px", pointerEvents: "none",
        }} />
        <div className="absolute" style={{
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(124,58,237,0.10) 0%, transparent 70%)",
          bottom: "-50px", right: "-50px", pointerEvents: "none",
        }} />

        <div style={{ padding: "0 clamp(20px,4vw,64px)", width: "100%" }}>
          <div className="flex flex-col items-center text-center" style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="tag tag-cyan mb-14" style={{ fontSize: "12px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "blink 1.8s ease-in-out infinite" }} />
              IA médicale · Sécurité · Données protégées
            </div>

            <h1 className="font-black mb-10" style={{ fontSize: "clamp(40px,6vw,88px)", lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              La consultation médicale,{" "}
              <span className="gradient-text">augmentée par l&apos;IA</span>
            </h1>

            <p className="mb-20" style={{ fontSize: "clamp(16px,1.8vw,20px)", lineHeight: 1.9, color: "var(--text)", maxWidth: "520px" }}>
              Patient préparé, médecin informé, données protégées.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-24">
              <Link href="/login?role=patient" className="btn-primary" style={{ fontSize: "15px", padding: "16px 32px" }}>
                👤 Espace Patient
              </Link>
              <Link href="/login?role=medecin" className="btn-ghost" style={{ fontSize: "15px", padding: "16px 32px" }}>
                🩺 Espace Médecin
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-12" style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "40px", width: "100%" }}>
              {[
                { n: "3 min", l: "Questionnaire moyen" },
                { n: "40%",   l: "Gain de temps / consultation" },
                { n: "100%",  l: "Données chiffrées" },
              ].map(({ n, l }) => (
                <div key={l} className="flex flex-col items-center gap-2">
                  <span className="font-black" style={{ fontSize: "30px", color: "var(--accent)" }}>{n}</span>
                  <span className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.16em", color: "var(--muted)" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="fonctionnalites" style={{ padding: "96px clamp(20px,4vw,64px)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="text-center mb-16">
            <p className="font-mono uppercase mb-3" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--muted)" }}>Modules</p>
            <h2 className="font-black" style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.02em" }}>
              Tout ce dont vous avez besoin
            </h2>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))" }}>
            {features.map((f) => (
              <div key={f.title} className="card p-7 transition-all duration-200">
                <div className="mb-5 flex items-center gap-3">
                  <span style={{ fontSize: "28px" }}>{f.icon}</span>
                  <span className="font-bold" style={{ fontSize: "16px", color: f.color }}>{f.title}</span>
                </div>
                <ul className="flex flex-col gap-3">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-2" style={{ fontSize: "14px", color: "var(--text)" }}>
                      <span style={{ color: f.color, marginTop: "2px", flexShrink: 0 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="comment" style={{ padding: "96px clamp(20px,4vw,64px)", background: "var(--surface)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div className="text-center mb-16">
            <p className="font-mono uppercase mb-3" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--muted)" }}>Parcours</p>
            <h2 className="font-black" style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.02em" }}>
              Comment ça marche
            </h2>
          </div>

          <div className="grid gap-6" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))" }}>
            {steps.map((s, i) => (
              <div key={s.n} className="relative p-6" style={{
                background: "var(--surface2)",
                borderRadius: "14px",
                border: "1px solid rgba(255,255,255,0.05)",
              }}>
                <div className="font-black mb-4" style={{ fontSize: "36px", color: "rgba(0,212,255,0.15)", lineHeight: 1 }}>
                  {s.n}
                </div>
                <h3 className="font-bold mb-2" style={{ fontSize: "15px", color: "var(--text-hi)" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", lineHeight: 1.7, color: "var(--text)" }}>{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute" style={{
                    right: "-24px", top: "50%", transform: "translateY(-50%)",
                    color: "var(--muted)", fontSize: "18px", zIndex: 1,
                  }}>→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "96px clamp(20px,4vw,64px)", background: "var(--surface)" }}>
        <div className="text-center" style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(28px,3.5vw,48px)", letterSpacing: "-0.02em" }}>
            Prêt à transformer<br />votre cabinet ?
          </h2>
          <p className="mb-8" style={{ fontSize: "16px", lineHeight: 1.7, color: "var(--text)" }}>
            Rejoignez MedSecure — la plateforme pensée par et pour les professionnels de santé.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/login?role=patient" className="btn-primary" style={{ fontSize: "15px", padding: "16px 32px" }}>
              Créer un compte patient
            </Link>
            <Link href="/login?role=medecin" className="btn-ghost" style={{ fontSize: "15px", padding: "16px 32px" }}>
              Accès médecin
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "32px clamp(20px,4vw,64px)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="font-black" style={{ fontSize: "18px" }}>
            Med<span style={{ color: "var(--accent)" }}>Secure</span>
          </span>
          <p className="font-mono" style={{ fontSize: "11px", color: "var(--muted)" }}>
            © 2026 MedSecure — Données protégées · RGPD compliant
          </p>
          <div className="flex gap-6">
            {["Mentions légales", "Confidentialité", "Contact"].map((l) => (
              <a key={l} href="#" className="font-mono no-underline transition-colors" style={{ fontSize: "11px", color: "var(--muted)", letterSpacing: "0.1em" }}>
                {l}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
