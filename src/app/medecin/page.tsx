"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { icon: "📊", label: "Tableau de bord", key: "dashboard" },
  { icon: "👥", label: "Mes patients",    key: "patients" },
  { icon: "📅", label: "Agenda",          key: "agenda" },
  { icon: "📝", label: "Comptes rendus",  key: "cr" },
  { icon: "🤖", label: "IA Assistant",    key: "ia" },
  { icon: "📈", label: "Analytics",       key: "analytics" },
];

const todayPatients = [
  { name: "Jean Dupont",   age: 34, heure: "09h00", motif: "Douleur lombaire",   rapport: true,  urgence: false, initials: "JD", color: "#00D4FF" },
  { name: "Marie Claire",  age: 52, heure: "10h30", motif: "Suivi diabète",      rapport: true,  urgence: false, initials: "MC", color: "#A78BFA" },
  { name: "Karim Benali",  age: 28, heure: "11h15", motif: "Fièvre persistante", rapport: false, urgence: true,  initials: "KB", color: "#EF4444" },
  { name: "Sophie Martin", age: 45, heure: "14h00", motif: "Bilan annuel",       rapport: true,  urgence: false, initials: "SM", color: "#10B981" },
  { name: "Pierre Lefort", age: 61, heure: "15h30", motif: "Tension artérielle", rapport: true,  urgence: false, initials: "PL", color: "#F59E0B" },
];

const preReports = [
  {
    patient: "Jean Dupont", initials: "JD", color: "#00D4FF",
    summary: "Douleur lombaire chronique depuis 3 semaines, intensité 7/10. Localisation : zone L4-L5. Irradiation vers la jambe gauche. Antécédents : hernie discale 2021.",
    alerts: ["Possible récidive hernie discale", "Irradiation sciatique"],
    score: 74,
  },
  {
    patient: "Marie Claire", initials: "MC", color: "#A78BFA",
    summary: "Suivi diabète type 2. Glycémie à jeun 1.42 g/L. Légère fatigue post-prandiale. Traitement actuel : Metformine 1000mg x2.",
    alerts: [],
    score: 31,
  },
  {
    patient: "Sophie Martin", initials: "SM", color: "#10B981",
    summary: "Bilan annuel de routine. Aucun symptôme aigu. Légère anxiété signalée. Demande bilan biologique complet.",
    alerts: [],
    score: 12,
  },
];

function ScoreRing({ score }: { score: number }) {
  const color = score > 60 ? "#EF4444" : score > 30 ? "#F59E0B" : "#10B981";
  const label = score > 60 ? "Élevé" : score > 30 ? "Modéré" : "Faible";
  return (
    <div className="flex flex-col items-center gap-1">
      <div style={{
        width: "52px", height: "52px", borderRadius: "50%",
        border: `3px solid ${color}`,
        background: `${color}14`,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <span className="font-black" style={{ fontSize: "16px", color }}>{score}</span>
      </div>
      <span style={{ fontSize: "10px", color, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>{label}</span>
    </div>
  );
}

export default function MedecinPage() {
  const [active, setActive] = useState("dashboard");
  const [selected, setSelected] = useState<number>(0);
  const report = preReports[selected];

  return (
    <div className="flex min-h-screen" style={{ background: "var(--bg)" }}>

      {/* SIDEBAR */}
      <aside style={{
        width: "220px", flexShrink: 0,
        background: "var(--surface)",
        borderRight: "1px solid rgba(255,255,255,0.05)",
        display: "flex", flexDirection: "column",
        padding: "24px 12px",
        position: "fixed", top: 0, left: 0, bottom: 0, zIndex: 40,
      }}>
        <Link href="/" className="font-black no-underline block mb-8 px-3" style={{ fontSize: "19px" }}>
          Med<span style={{ color: "var(--accent)" }}>Secure</span>
        </Link>

        <div className="flex items-center gap-3 mb-6 p-3" style={{
          background: "rgba(124,58,237,0.08)",
          borderRadius: "12px",
          border: "1px solid rgba(124,58,237,0.15)",
        }}>
          <div style={{
            width: "34px", height: "34px", borderRadius: "9px",
            background: "rgba(124,58,237,0.15)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: "12px", fontWeight: 800, color: "#A78BFA", flexShrink: 0,
          }}>DM</div>
          <div style={{ minWidth: 0 }}>
            <p className="font-semibold" style={{ fontSize: "13px", color: "var(--text-hi)" }}>Dr. Martin</p>
            <p style={{ fontSize: "11px", color: "var(--muted)" }}>Généraliste</p>
          </div>
        </div>

        <nav className="flex flex-col gap-1 flex-1">
          {navItems.map(({ icon, label, key }) => (
            <button key={key} onClick={() => setActive(key)}
              className={`sidebar-link${active === key ? " active" : ""}`}
              style={{ background: "none", border: "none", cursor: "pointer", textAlign: "left", width: "100%" }}>
              <span style={{ fontSize: "15px" }}>{icon}</span>
              {label}
            </button>
          ))}
        </nav>

        <Link href="/login" className="sidebar-link no-underline mt-2" style={{ color: "var(--danger)", opacity: 0.6 }}>
          <span>↩</span> Déconnexion
        </Link>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: "220px", flex: 1, padding: "32px 40px", minWidth: 0 }}>

        {/* HEADER */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="font-mono uppercase mb-1" style={{ fontSize: "10px", letterSpacing: "0.18em", color: "var(--muted)" }}>
              Mercredi 25 juin 2026
            </p>
            <h1 className="font-black" style={{ fontSize: "32px", letterSpacing: "-0.02em" }}>
              Bonjour, Dr. Martin 🩺
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="btn-ghost" style={{ padding: "10px 18px", fontSize: "13px" }}>
              🎤 Dicter un CR
            </button>
            <div className="tag tag-purple" style={{ fontSize: "11px" }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#A78BFA", display: "inline-block", animation: "blink 1.8s ease-in-out infinite" }} />
              IA active
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid gap-4 mb-8" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
          {[
            { icon: "👥", n: "5",  label: "Patients aujourd'hui", color: "var(--accent)",  bg: "rgba(0,212,255,0.06)"   },
            { icon: "🤖", n: "4",  label: "Rapports IA prêts",    color: "#A78BFA",         bg: "rgba(124,58,237,0.06)" },
            { icon: "⚠️", n: "1",  label: "Urgence",              color: "var(--danger)",   bg: "rgba(239,68,68,0.06)"  },
            { icon: "📝", n: "12", label: "CR ce mois",           color: "var(--success)",  bg: "rgba(16,185,129,0.06)" },
          ].map(({ icon, n, label, color, bg }) => (
            <div key={label} style={{ background: bg, borderRadius: "14px", border: `1px solid ${color}22`, padding: "20px 22px" }}>
              <div className="flex items-center justify-between mb-3">
                <span style={{ fontSize: "22px" }}>{icon}</span>
                <span className="font-black" style={{ fontSize: "32px", color, lineHeight: 1 }}>{n}</span>
              </div>
              <p style={{ fontSize: "12px", color: "var(--muted)", fontWeight: 500 }}>{label}</p>
            </div>
          ))}
        </div>

        {/* CONTENT — 2 colonnes */}
        <div className="grid gap-5" style={{ gridTemplateColumns: "1.1fr 1fr" }}>

          {/* PLANNING */}
          <div style={{ background: "var(--surface)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
              <h3 className="font-bold" style={{ fontSize: "15px" }}>Planning du jour</h3>
            </div>
            <div style={{ padding: "12px" }}>
              {todayPatients.map((p, i) => (
                <button key={i}
                  onClick={() => setSelected(i < preReports.length ? i : 0)}
                  style={{
                    display: "flex", alignItems: "center", gap: "14px",
                    padding: "13px 12px", width: "100%", borderRadius: "10px",
                    background: selected === i ? "rgba(0,212,255,0.06)" : "transparent",
                    border: "1px solid",
                    borderColor: selected === i ? "rgba(0,212,255,0.2)" : "transparent",
                    cursor: "pointer", textAlign: "left",
                    transition: "all .15s", marginBottom: "4px",
                  }}>
                  <div style={{
                    width: "38px", height: "38px", borderRadius: "10px", flexShrink: 0,
                    background: `${p.color}18`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "12px", fontWeight: 800, color: p.color,
                  }}>{p.initials}</div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold" style={{ fontSize: "14px", color: "var(--text-hi)" }}>{p.name}</span>
                      {p.urgence && (
                        <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#EF4444", background: "rgba(239,68,68,0.1)", padding: "2px 6px", borderRadius: "4px" }}>
                          URGENT
                        </span>
                      )}
                    </div>
                    <p style={{ fontSize: "12px", color: "var(--muted)" }}>{p.motif}</p>
                  </div>

                  <div className="flex flex-col items-end gap-2" style={{ flexShrink: 0 }}>
                    <span className="font-mono" style={{ fontSize: "12px", color: "var(--muted)" }}>{p.heure}</span>
                    {p.rapport
                      ? <span style={{ fontSize: "9px", fontWeight: 700, color: "#10B981", background: "rgba(16,185,129,0.1)", padding: "2px 7px", borderRadius: "4px" }}>IA ✓</span>
                      : <span style={{ fontSize: "9px", fontWeight: 700, color: "#F59E0B", background: "rgba(245,158,11,0.1)", padding: "2px 7px", borderRadius: "4px" }}>SANS</span>
                    }
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* RAPPORT IA */}
          <div style={{ background: "var(--surface)", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)", overflow: "hidden" }}>
            <div style={{ padding: "20px 24px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <h3 className="font-bold" style={{ fontSize: "15px" }}>Rapport IA</h3>
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#A78BFA", background: "rgba(124,58,237,0.1)", padding: "4px 9px", borderRadius: "6px" }}>
                🤖 Auto-généré
              </span>
            </div>

            {report ? (
              <div style={{ padding: "20px 24px" }}>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div style={{
                      width: "42px", height: "42px", borderRadius: "11px",
                      background: `${report.color}18`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "13px", fontWeight: 800, color: report.color,
                    }}>{report.initials}</div>
                    <div>
                      <p className="font-bold" style={{ fontSize: "15px" }}>{report.patient}</p>
                      <p style={{ fontSize: "12px", color: "var(--muted)" }}>Pré-consultation · IA</p>
                    </div>
                  </div>
                  <ScoreRing score={report.score} />
                </div>

                {report.alerts.length > 0 && (
                  <div style={{ background: "rgba(239,68,68,0.06)", borderRadius: "10px", border: "1px solid rgba(239,68,68,0.18)", padding: "14px 16px", marginBottom: "16px" }}>
                    <p className="font-semibold mb-2" style={{ fontSize: "12px", color: "#EF4444" }}>⚠️ Alertes détectées</p>
                    {report.alerts.map((a) => (
                      <p key={a} style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.6 }}>• {a}</p>
                    ))}
                  </div>
                )}

                <div style={{ background: "var(--surface2)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.05)", padding: "16px", marginBottom: "20px" }}>
                  <p className="font-mono uppercase mb-2" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "var(--muted)" }}>Résumé IA</p>
                  <p style={{ fontSize: "13px", lineHeight: 1.75, color: "var(--text)" }}>{report.summary}</p>
                </div>

                <div className="flex gap-3">
                  <button className="btn-primary" style={{ flex: 1, justifyContent: "center", fontSize: "13px", padding: "11px" }}>
                    🎤 Dicter le CR
                  </button>
                  <button className="btn-ghost" style={{ flex: 1, justifyContent: "center", fontSize: "13px", padding: "11px" }}>
                    📁 Dossier
                  </button>
                </div>
              </div>
            ) : (
              <div style={{ padding: "48px 24px", textAlign: "center", color: "var(--muted)" }}>
                <p style={{ fontSize: "32px", marginBottom: "12px" }}>👈</p>
                <p style={{ fontSize: "14px" }}>Sélectionnez un patient</p>
              </div>
            )}
          </div>
        </div>

        {/* AUDIT — compact */}
        <div style={{ marginTop: "20px", padding: "16px 20px", background: "var(--surface)", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="flex items-center justify-between mb-3">
            <p className="font-semibold" style={{ fontSize: "13px" }}>Journal d&apos;audit</p>
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.06em", color: "var(--muted)", background: "rgba(255,255,255,0.05)", padding: "3px 8px", borderRadius: "5px" }}>
              🔒 TRAÇABILITÉ
            </span>
          </div>
          {[
            { time: "08:47", action: "Consultation du rapport IA — Jean Dupont", hash: "0x3a8f…d91b" },
            { time: "08:31", action: "Connexion sécurisée (2FA validé)", hash: "—" },
            { time: "07:55", action: "Génération rapport IA — 4 patients", hash: "0x7c12…fa44" },
          ].map((log, i, arr) => (
            <div key={i} style={{
              display: "flex", alignItems: "center", gap: "16px",
              padding: "9px 0",
              borderBottom: i < arr.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
            }}>
              <span className="font-mono" style={{ fontSize: "11px", color: "var(--muted)", flexShrink: 0, width: "38px" }}>{log.time}</span>
              <p style={{ fontSize: "13px", flex: 1, color: "var(--text)" }}>{log.action}</p>
              <span className="font-mono" style={{ fontSize: "11px", color: "rgba(0,212,255,0.4)", flexShrink: 0 }}>{log.hash}</span>
            </div>
          ))}
        </div>

      </main>
    </div>
  );
}
