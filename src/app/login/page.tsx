"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";

function LoginForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [role, setRole] = useState<"patient" | "medecin">("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    const r = searchParams.get("role");
    if (r === "medecin") setRole("medecin");
  }, [searchParams]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push(role === "medecin" ? "/medecin" : "/patient");
    }, 900);
  }

  return (
    <div className="min-h-screen flex" style={{ background: "var(--bg)" }}>
      {/* Left panel — visual */}
      <div className="hidden lg:flex flex-col justify-between relative overflow-hidden" style={{
        width: "45%",
        background: "var(--surface)",
        padding: "48px",
        borderRight: "1px solid rgba(0,212,255,0.08)",
      }}>
        {/* Orb */}
        <div className="absolute" style={{
          width: "500px", height: "500px",
          background: "radial-gradient(circle, rgba(0,212,255,0.10) 0%, transparent 70%)",
          top: "-100px", left: "-100px", pointerEvents: "none",
        }} />
        <div className="absolute" style={{
          width: "400px", height: "400px",
          background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)",
          bottom: "-50px", right: "-50px", pointerEvents: "none",
        }} />

        {/* Logo */}
        <Link href="/" className="font-black no-underline" style={{ fontSize: "22px", position: "relative", zIndex: 1 }}>
          Med<span style={{ color: "var(--accent)" }}>Secure</span>
        </Link>

        {/* Main content */}
        <div className="relative z-10">
          <h2 className="font-black mb-4" style={{ fontSize: "clamp(28px,2.5vw,40px)", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
            La consultation,<br />
            <span className="gradient-text">préparée et protégée</span>
          </h2>
          <p style={{ fontSize: "15px", lineHeight: 1.8, color: "var(--text)", marginBottom: "32px" }}>
            Patient ou médecin, MedSecure centralise vos consultations avec une IA de confiance et une sécurité de niveau hospitalier.
          </p>

          {/* Feature list */}
          <div className="flex flex-col gap-3">
            {[
              { icon: "🤖", text: "Pré-rapport IA avant chaque consultation" },
              { icon: "🔒", text: "Données chiffrées AES-256" },
              { icon: "🔗", text: "Intégrité des CR certifiée blockchain" },
              { icon: "✅", text: "Conforme RGPD & HDS" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex items-center gap-3" style={{ fontSize: "14px", color: "var(--text)" }}>
                <span style={{ fontSize: "18px" }}>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom badge */}
        <div className="relative z-10 flex items-center gap-2">
          <span style={{
            display: "inline-block", width: "8px", height: "8px",
            borderRadius: "50%", background: "var(--success)",
            animation: "blink 1.8s ease-in-out infinite",
          }} />
          <span className="font-mono" style={{ fontSize: "11px", letterSpacing: "0.16em", color: "var(--muted)", textTransform: "uppercase" }}>
            Système opérationnel
          </span>
        </div>
      </div>

      {/* Right panel — form */}
      <div className="flex-1 flex items-center justify-center" style={{ padding: "clamp(24px,4vw,64px)" }}>
        <div style={{ width: "100%", maxWidth: "420px" }}>

          {/* Mobile logo */}
          <Link href="/" className="lg:hidden font-black no-underline block mb-10" style={{ fontSize: "22px" }}>
            Med<span style={{ color: "var(--accent)" }}>Secure</span>
          </Link>

          <h1 className="font-black mb-2" style={{ fontSize: "28px", letterSpacing: "-0.02em" }}>
            Connexion
          </h1>
          <p style={{ fontSize: "14px", color: "var(--text)", marginBottom: "32px" }}>
            Accédez à votre espace personnel
          </p>

          {/* Role toggle */}
          <div className="flex gap-2 mb-8 p-1" style={{
            background: "var(--surface2)",
            borderRadius: "12px",
          }}>
            {([
              { key: "patient",  label: "👤  Patient" },
              { key: "medecin",  label: "🩺  Médecin" },
            ] as const).map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setRole(key)}
                style={{
                  flex: 1,
                  padding: "10px 16px",
                  borderRadius: "9px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: 600,
                  transition: "all .2s",
                  background: role === key ? "var(--accent)" : "transparent",
                  color: role === key ? "#070C18" : "var(--muted)",
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="font-mono uppercase block mb-2" style={{ fontSize: "10px", letterSpacing: "0.16em", color: "var(--muted)" }}>
                Adresse email
              </label>
              <input
                type="email"
                placeholder={role === "medecin" ? "docteur@hopital.fr" : "jean.dupont@email.fr"}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.16em", color: "var(--muted)" }}>
                  Mot de passe
                </label>
                <a href="#" style={{ fontSize: "12px", color: "var(--accent)", textDecoration: "none" }}>
                  Oublié ?
                </a>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  style={{ paddingRight: "48px" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute", right: "14px", top: "50%", transform: "translateY(-50%)",
                    background: "none", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: "16px",
                  }}
                >
                  {showPassword ? "🙈" : "👁"}
                </button>
              </div>
            </div>

            {/* 2FA notice */}
            <div className="flex items-start gap-3 p-3" style={{
              background: "rgba(0,212,255,0.05)",
              borderRadius: "10px",
              border: "1px solid rgba(0,212,255,0.12)",
            }}>
              <span style={{ fontSize: "14px", flexShrink: 0 }}>🔐</span>
              <p style={{ fontSize: "12px", color: "var(--text)", lineHeight: 1.5 }}>
                Double authentification (2FA) activée. Un code vous sera envoyé par SMS après connexion.
              </p>
            </div>

            <button
              type="submit"
              className="btn-primary w-full justify-center"
              style={{ padding: "15px", fontSize: "15px", marginTop: "4px", opacity: loading ? 0.7 : 1 }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span style={{ display: "inline-block", animation: "spin 0.8s linear infinite", fontSize: "14px" }}>⟳</span>
                  Connexion en cours…
                </>
              ) : (
                `Se connecter ${role === "medecin" ? "→ Espace Médecin" : "→ Espace Patient"}`
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
            <span className="font-mono" style={{ fontSize: "11px", color: "var(--muted)" }}>OU</span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.07)" }} />
          </div>

          <p style={{ fontSize: "14px", color: "var(--text)", textAlign: "center" }}>
            Pas encore de compte ?{" "}
            <a href="#" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 600 }}>
              Créer un compte
            </a>
          </p>

          <p className="text-center mt-8 font-mono" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "var(--muted)" }}>
            RGPD · HDS · DONNÉES CHIFFRÉES AES-256
          </p>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
