"use client";

import { MapPin, Star, Package } from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="nosotras"
      style={{
        background: "#FFFFFF",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative pink blob */}
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 320,
          height: 320,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,0,126,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -60,
          left: -60,
          width: 240,
          height: 240,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(230,0,126,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1100,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 64,
          alignItems: "center",
        }}
        className="about-grid"
      >
        {/* Text column */}
        <div>
          <div className="section-label">
            💗 Nuestra historia
          </div>

          <h2
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "0.02em",
              lineHeight: 1.15,
              color: "#0D0D0D",
              textTransform: "uppercase",
              marginBottom: 24,
            }}
          >
            ¡Hola! Soy{" "}
            <span style={{ color: "#E6007E" }}>Fiorella</span>
          </h2>

          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#444",
              marginBottom: 16,
            }}
          >
            La creadora de este pequeño gran proyecto lleno de color y
            creatividad. Así nace <strong style={{ color: "#E6007E" }}>Del Mar Design</strong>,
            un espacio donde los stickers cobran vida para expresar
            emociones, ideas y momentos especiales.
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#444",
              marginBottom: 32,
            }}
          >
            Cada diseño está hecho con mucho amor, pensado para acompañarte
            en tu termo, tu computadora o donde quieras darle un toque único
            a tu día. Hacemos stickers personalizados: ¡mandanos tu foto
            favorita y nosotros la hacemos sticker!
          </p>

          {/* Badges */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {[
              { icon: <Package size={16} />, text: "Minorista & Mayorista" },
              { icon: <Star size={16} />,    text: "Presupuesto sin cargo" },
              { icon: <MapPin size={16} />,  text: "📍 Mar del Plata" },
            ].map((badge) => (
              <div
                key={badge.text}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(230,0,126,0.08)",
                  border: "1px solid rgba(230,0,126,0.25)",
                  color: "#E6007E",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
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

        {/* Visual column */}
        <div
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* Main card */}
          <div
            style={{
              background: "linear-gradient(135deg, #fff0f6 0%, #fce4f1 100%)",
              border: "2px solid rgba(230,0,126,0.2)",
              borderRadius: 28,
              padding: "48px 36px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(230,0,126,0.12)",
              width: "100%",
              maxWidth: 360,
            }}
          >
            <div style={{ fontSize: "5rem", marginBottom: 16 }}>🎨</div>
            <p
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "1.4rem",
                color: "#E6007E",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: 8,
              }}
            >
              Hecho con amor
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                color: "#888",
                fontSize: "0.95rem",
                lineHeight: 1.6,
              }}
            >
              Cada sticker es un diseño único, pensado para vos.
            </p>

            {/* Stats row */}
            <div
              style={{
                marginTop: 28,
                paddingTop: 24,
                borderTop: "1px solid rgba(230,0,126,0.15)",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              {[
                { n: "10+", label: "Productos" },
                { n: "100%", label: "Personalizado" },
                { n: "💗",   label: "Amor MDQ" },
              ].map((s) => (
                <div key={s.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 900,
                      fontSize: "1.5rem",
                      color: "#E6007E",
                    }}
                  >
                    {s.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-inter), Inter, sans-serif",
                      fontSize: "0.72rem",
                      color: "#999",
                      fontWeight: 500,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Floating emoji badges */}
          <div
            style={{
              position: "absolute",
              top: -16,
              right: -10,
              background: "#E6007E",
              color: "#fff",
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              padding: "6px 14px",
              borderRadius: 50,
              boxShadow: "0 4px 16px rgba(230,0,126,0.4)",
              whiteSpace: "nowrap",
            }}
          >
            ✨ ¡Mandanos tu foto!
          </div>
        </div>
      </div>


    </section>
  );
}
