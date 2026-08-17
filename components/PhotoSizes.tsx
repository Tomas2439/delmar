"use client";

import { useState } from "react";

const PHOTO_SIZES = [
  { size: "20 × 30 cm", qty: "1 foto por hoja A4",  desc: "Tamaño póster",         popular: false },
  { size: "13 × 18 cm", qty: "2 fotos por A4",      desc: "Tamaño carta mediana",  popular: false },
  { size: "10 × 15 cm", qty: "8 fotos por A3",      desc: "Clásico revelado",      popular: true  },
  { size: "9 × 13 cm",  qty: "4 fotos por A4",      desc: "Tamaño pasaporte",      popular: false },
  { size: "6 × 9 cm",   qty: "9 fotos por A4",      desc: "Mini recuerdo",         popular: false },
];

const POLAROID_SIZES = [
  { size: "Mini  5.3 × 8.6 cm",    desc: "Formato pocket",          popular: false },
  { size: "Mediana  9.7 × 6.7 cm", desc: "Clásico retro horizontal", popular: true  },
  { size: "Grande  7.7 × 10.7 cm", desc: "Formato grande vertical",  popular: false },
];

const PROMOS = [
  { qty: "3 fotos",  label: "Starter", emoji: "🌸" },
  { qty: "6 fotos",  label: "Popular", emoji: "💗" },
  { qty: "9 fotos",  label: "Pro",     emoji: "✨" },
  { qty: "15 fotos", label: "Pack",    emoji: "🌟" },
  { qty: "20 fotos", label: "Mega",    emoji: "🔥" },
];

type Tab = "fotos" | "polaroid" | "promos";

export default function PhotoSizes() {
  const [tab, setTab] = useState<Tab>("fotos");

  return (
    <section
      id="medidas"
      style={{
        background: "linear-gradient(180deg, #0D0D0D 0%, #120008 50%, #0D0D0D 100%)",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{ width: 500, height: 500, top: "50%", right: -150, transform: "translateY(-50%)", opacity: 0.3 }}
      />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            📸 Impresión de recuerdos
          </div>
          <h2
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: 12,
            }}
          >
            Medidas &{" "}
            <span style={{ color: "#E6007E" }}>Formatos</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.5)",
              fontSize: "1rem",
            }}
          >
            Fotos impresas de alta calidad en múltiples formatos 🌸
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          {(["fotos", "polaroid", "promos"] as Tab[]).map((t) => (
            <button
              key={t}
              id={`tab-${t}`}
              className={`tab-btn ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t === "fotos"   && "🖼️ Fotos Impresas"}
              {t === "polaroid"&& "📷 Polaroid"}
              {t === "promos"  && "🎁 Promos"}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="glass-dark" style={{ padding: "8px 0", overflow: "hidden" }}>

          {/* Fotos impresas */}
          {tab === "fotos" && (
            <div style={{ overflowX: "auto" }}>
              <table className="sizes-table">
                <thead>
                  <tr>
                    <th>Medida</th>
                    <th>Cantidad por hoja</th>
                    <th>Descripción</th>
                    <th style={{ textAlign: "center" }}>Promo</th>
                  </tr>
                </thead>
                <tbody>
                  {PHOTO_SIZES.map((r) => (
                    <tr key={r.size}>
                      <td>
                        <span
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                            fontWeight: 700,
                            color: "#fff",
                            fontSize: "0.95rem",
                          }}
                        >
                          {r.size}
                        </span>
                      </td>
                      <td style={{ color: "rgba(255,255,255,0.6)" }}>{r.qty}</td>
                      <td style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.85rem" }}>{r.desc}</td>
                      <td style={{ textAlign: "center" }}>
                        {r.popular && (
                          <span
                            style={{
                              background: "rgba(230,0,126,0.18)",
                              border: "1px solid rgba(230,0,126,0.4)",
                              color: "#FF6FB5",
                              fontFamily: "var(--font-poppins), Poppins, sans-serif",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                              padding: "3px 10px",
                              borderRadius: 50,
                            }}
                          >
                            ⭐ Popular
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Polaroid */}
          {tab === "polaroid" && (
            <div style={{ overflowX: "auto" }}>
              <table className="sizes-table">
                <thead>
                  <tr>
                    <th>Formato</th>
                    <th>Descripción</th>
                    <th style={{ textAlign: "center" }}>Promo</th>
                  </tr>
                </thead>
                <tbody>
                  {POLAROID_SIZES.map((r) => (
                    <tr key={r.size}>
                      <td>
                        <span
                          style={{
                            fontFamily: "var(--font-poppins), Poppins, sans-serif",
                            fontWeight: 700,
                            color: "#fff",
                            fontSize: "0.95rem",
                          }}
                        >
                          {r.size}
                        </span>
                      </td>
                      <td style={{ color: "rgba(255,255,255,0.55)" }}>{r.desc}</td>
                      <td style={{ textAlign: "center" }}>
                        {r.popular && (
                          <span
                            style={{
                              background: "rgba(230,0,126,0.18)",
                              border: "1px solid rgba(230,0,126,0.4)",
                              color: "#FF6FB5",
                              fontFamily: "var(--font-poppins), Poppins, sans-serif",
                              fontWeight: 700,
                              fontSize: "0.7rem",
                              padding: "3px 10px",
                              borderRadius: 50,
                            }}
                          >
                            ⭐ Clásico
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Promos */}
          {tab === "promos" && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
                gap: 16,
                padding: "24px",
              }}
            >
              {PROMOS.map((p) => (
                <div
                  key={p.qty}
                  style={{
                    background: "rgba(230,0,126,0.08)",
                    border: "1px solid rgba(230,0,126,0.2)",
                    borderRadius: 16,
                    padding: "24px 16px",
                    textAlign: "center",
                    transition: "transform 0.25s ease, border-color 0.25s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-4px)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230,0,126,0.6)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230,0,126,0.2)";
                  }}
                >
                  <div style={{ fontSize: "2rem", marginBottom: 8 }}>{p.emoji}</div>
                  <div
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 900,
                      fontSize: "1.15rem",
                      color: "#fff",
                      marginBottom: 4,
                    }}
                  >
                    {p.qty}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.7rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#E6007E",
                    }}
                  >
                    Pack {p.label}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 32 }}>
          <p style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-inter), Inter, sans-serif", fontSize: "0.9rem", marginBottom: 16 }}>
            ¿No encontrás el tamaño que buscás? ¡Consultanos!
          </p>
          <a
            id="photo-cta-wa"
            href="https://wa.me/5492236672480?text=Hola!%20Quiero%20consultar%20sobre%20impresión%20de%20fotos%20%F0%9F%93%B8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Consultar por fotos
          </a>
        </div>
      </div>
    </section>
  );
}
