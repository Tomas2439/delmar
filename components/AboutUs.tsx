"use client";

import { MapPin, Star, Package } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="nosotras"
      style={{
        background: "#FAF7F8",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orbs */}
      <div className="glow-orb" style={{ top: -60, right: -60, width: 300, height: 300, opacity: 0.6 }} />
      <div className="glow-orb" style={{ bottom: -40, left: -40, width: 220, height: 220, opacity: 0.4 }} />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
          position: "relative",
          zIndex: 2,
        }}
        className="about-grid"
      >
        {/* Text */}
        <div>
          <div className="section-label">Nuestra historia</div>

          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
              letterSpacing: "0.02em",
              lineHeight: 1.15,
              color: "#1A1A1A",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            Hola! Soy{" "}
            <span style={{ color: "#E6007E" }}>Fiorella</span>
          </h2>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: "#555", marginBottom: 16 }}>
            La creadora de este pequeño gran proyecto lleno de color y creatividad.
            Así nace <strong style={{ color: "#E6007E" }}>Del Mar Design</strong>, un espacio donde los stickers
            cobran vida para expresar emociones, ideas y momentos especiales.
          </p>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "1.05rem", lineHeight: 1.75, color: "#555", marginBottom: 32 }}>
            Cada diseño está hecho con mucho amor, pensado para acompañarte en tu termo,
            tu computadora o donde quieras darle un toque único a tu día. Hacemos stickers
            personalizados: ¡mandanos tu foto favorita y nosotros la hacemos sticker!
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {[
              { icon: <Package size={15} />, text: "Minorista & Mayorista" },
              { icon: <Star size={15} />,    text: "Presupuesto sin cargo" },
              { icon: <MapPin size={15} />,  text: "Mar del Plata" },
            ].map((badge) => (
              <div
                key={badge.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  background: "rgba(230,0,126,0.07)",
                  border: "1px solid rgba(230,0,126,0.20)",
                  color: "#E6007E",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  padding: "8px 16px",
                  borderRadius: 50,
                }}
              >
                {badge.icon}
                {badge.text}
              </div>
            ))}
          </div>
        </div>

        {/* Visual card */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          <div
            className="glass-card"
            style={{
              padding: "48px 36px",
              textAlign: "center",
              width: "100%",
              maxWidth: 360,
            }}
          >
            <div style={{ fontSize: "4.5rem", marginBottom: 16 }}>🎨</div>
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 800,
                fontSize: "1.3rem",
                color: "#E6007E",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 8,
              }}
            >
              Hecho con amor
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", color: "#888", fontSize: "0.92rem", lineHeight: 1.6 }}>
              Cada sticker es un diseño único, pensado para vos.
            </p>

            <div
              style={{
                marginTop: 28,
                paddingTop: 24,
                borderTop: "1px solid rgba(230,0,126,0.12)",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {[
                { n: "10+",   label: "Productos" },
                { n: "100%",  label: "Personal." },
                { n: "💗",    label: "Amor MDQ" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "1.5rem", color: "#E6007E" }}>
                    {s.n}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.7rem", color: "#aaa", fontWeight: 500 }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating badge */}
          <div
            style={{
              position: "absolute",
              top: -12,
              right: 0,
              background: "#E6007E",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "0.72rem",
              padding: "6px 14px",
              borderRadius: 50,
              boxShadow: "0 4px 16px rgba(230,0,126,0.35)",
              whiteSpace: "nowrap",
            }}
          >
            Manda tu foto!
          </div>
        </div>
      </div>
    </section>
  );
}
