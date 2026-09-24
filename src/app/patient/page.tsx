"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { icon: "🏠", label: "Accueil",           key: "home" },
  { icon: "📅", label: "Rendez-vous",       key: "rdv" },
  { icon: "📋", label: "Pré-consultation",  key: "pre" },
  { icon: "📁", label: "Dossier médical",   key: "dossier" },
  { icon: "💬", label: "Messagerie",        key: "messages" },
];

const consultations = [
  { date: "12 juin 2026", medecin: "Dr. Martin", motif: "Douleur lombaire", statut: "Compte rendu disponible", tag: "tag-green" },
  { date: "28 mai 2026",  medecin: "Dr. Leroy",  motif: "Suivi tension",    statut: "Terminée",                tag: "tag-cyan" },
  { date: "03 mai 2026",  medecin: "Dr. Martin", motif: "Bilan annuel",     statut: "Terminée",                tag: "tag-cyan" },
];

export default function PatientPage() {
  const [active, setActive] = useState("home");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>

      {/* SIDEBAR */}
      <aside style={{
        width: "240px",
        background: "var(--surface)",
        borderRight: "1px solid rgba(0,212,255,0.07)",
        display: "flex",
        flexDirection: "column",
        padding: "28px 16px",
        position: "fixed",
        top: 0, left: 0, bottom: 0,
        zIndex: 40,
        transform: sidebarOpen ? "translateX(0)" : undefined,
      }}>
        {/* Logo */}
        <Link href="/" className="font-black no-underline block mb-10 px-2" style={{ fontSize: "20px" }}>
          Med<span style={{ color: "var(--accent)" }}>Secure</span>
        </Link>

        {/* User card */}
        <div className="flex items-center gap-3 mb-8 p-3" style={{
          background: "var(--surface2)",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.05)",
        }}>
          <div className="flex items-center justify-center font-black" style={{
            width: "38px", height: "38px",
            background: "rgba(0,212,255,0.12)",
            borderRadius: "10px",
            fontSize: "15px",
            color: "var(--accent)",
          }}>
            JD
          </div>
          <div>
            <p className="font-semibold" style={{ fontSize: "13px", color: "var(--text-hi)" }}>Jean Dupont</p>
            <p style={{ fontSize: "11px", color: "var(--muted)" }}>Patient</p>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(({ icon, label, key }) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`sidebar-link${active === key ? " active" : ""}`}
              style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%" }}
            >
              <span style={{ fontSize: "16px" }}>{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        {/* Logout */}
        <Link href="/login" className="sidebar-link no-underline mt-4" style={{ color: "var(--danger)", opacity: 0.7 }}>
          <span style={{ fontSize: "16px" }}>↩</span>
          Déconnexion
        </Link>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: "240px", flex: 1, padding: "36px clamp(20px,3vw,48px)", minWidth: 0 }}>

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-mono uppercase mb-1" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--muted)" }}>
              Espace Patient
            </p>
            <h1 className="font-black" style={{ fontSize: "28px", letterSpacing: "-0.02em" }}>
              Bonjour, Jean 👋
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="tag tag-cyan">
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--accent)", display: "inline-block", animation: "blink 1.8s ease-in-out infinite" }} />
              Espace sécurisé
            </div>
          </div>
        </div>

        {/* NEXT APPOINTMENT */}
        <div className="card p-6 mb-6" style={{
          background: "linear-gradient(135deg, rgba(0,212,255,0.06) 0%, rgba(124,58,237,0.06) 100%)",
          border: "1px solid rgba(0,212,255,0.15)",
        }}>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="tag tag-cyan mb-3">📅 Prochain rendez-vous</div>
              <h2 className="font-black mb-1" style={{ fontSize: "22px", letterSpacing: "-0.01em" }}>
                Jeudi 3 juillet 2026
              </h2>
              <p style={{ fontSize: "15px", color: "var(--text)" }}>
                Dr. Martin — Médecine générale
              </p>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginTop: "4px" }}>
                14h30 · Cabinet Pasteur, Paris 12e
              </p>
            </div>
            <div className="flex flex-col gap-2" style={{ minWidth: "180px" }}>
              <button className="btn-primary" style={{ fontSize: "13px", padding: "11px 18px" }}>
                📋 Remplir le questionnaire
              </button>
              <button className="btn-ghost" style={{ fontSize: "13px", padding: "10px 18px" }}>
                Modifier · Annuler
              </button>
            </div>
          </div>
        </div>

        {/* PRE-CONSULTATION ALERT */}
        <div className="mb-6 p-5 flex items-start gap-4" style={{
          background: "rgba(245,158,11,0.07)",
          borderRadius: "14px",
          border: "1px solid rgba(245,158,11,0.2)",
        }}>
          <span style={{ fontSize: "22px", flexShrink: 0 }}>⚠️</span>
          <div className="flex-1">
            <p className="font-semibold mb-1" style={{ fontSize: "14px", color: "#F59E0B" }}>
              Questionnaire pré-consultation à remplir
            </p>
            <p style={{ fontSize: "13px", color: "var(--text)" }}>
              Votre rendez-vous du 3 juillet approche. Prenez 3 minutes pour décrire vos symptômes — votre médecin sera mieux préparé.
            </p>
          </div>
          <button className="btn-primary" style={{ fontSize: "12px", padding: "9px 16px", flexShrink: 0, background: "#F59E0B" }}>
            Commencer →
          </button>
        </div>

        {/* QUICK STATS */}
        <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))" }}>
          {[
            { icon: "📅", n: "1",  label: "Prochain RDV",         color: "var(--accent)" },
            { icon: "📁", n: "8",  label: "Consultations totales", color: "#A78BFA" },
            { icon: "💊", n: "2",  label: "Ordonnances actives",   color: "var(--success)" },
            { icon: "📋", n: "1",  label: "Questionnaire en attente", color: "#F59E0B" },
          ].map(({ icon, n, label, color }) => (
            <div key={label} className="card p-5">
              <div className="flex items-center justify-between mb-2">
                <span style={{ fontSize: "20px" }}>{icon}</span>
                <span className="font-black" style={{ fontSize: "28px", color }}>{n}</span>
              </div>
              <p style={{ fontSize: "12px", color: "var(--muted)" }}>{label}</p>
            </div>
          ))}
        </div>

        {/* RECENT CONSULTATIONS */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold" style={{ fontSize: "16px" }}>Historique des consultations</h3>
            <button style={{ fontSize: "12px", color: "var(--accent)", background: "none", border: "none", cursor: "pointer" }}>
              Voir tout →
            </button>
          </div>
          <div className="flex flex-col gap-3">
            {consultations.map((c, i) => (
              <div key={i} className="flex flex-wrap items-center justify-between gap-3 p-4" style={{
                background: "var(--surface2)",
                borderRadius: "10px",
                border: "1px solid rgba(255,255,255,0.04)",
              }}>
                <div className="flex items-center gap-4">
                  <div style={{ width: "40px", height: "40px", background: "rgba(0,212,255,0.08)", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>
                    🩺
                  </div>
                  <div>
                    <p className="font-semibold" style={{ fontSize: "14px" }}>{c.medecin}</p>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>{c.date} · {c.motif}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span className={`tag ${c.tag}`} style={{ fontSize: "10px" }}>{c.statut}</span>
                  {c.tag === "tag-green" && (
                    <button style={{ fontSize: "12px", color: "var(--accent)", background: "none", border: "none", cursor: "pointer" }}>
                      Lire →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  );
}
