"use client";

import { useState } from "react";

const PHOTO_SIZES = [
  { size: "20 × 30 cm", qty: "1 por hoja A4",  desc: "Tamaño póster",          popular: false },
  { size: "13 × 18 cm", qty: "2 por hoja A4",  desc: "Tamaño carta mediana",   popular: false },
  { size: "10 × 15 cm", qty: "8 por hoja A3",  desc: "Clásico revelado",       popular: true  },
  { size: "9 × 13 cm",  qty: "4 por hoja A4",  desc: "Tamaño pasaporte",       popular: false },
  { size: "6 × 9 cm",   qty: "9 por hoja A4",  desc: "Mini recuerdo",          popular: false },
];

const POLAROID_SIZES = [
  { size: "Mini  5.3 × 8.6 cm",     desc: "Formato pocket",           popular: false },
  { size: "Mediana  9.7 × 6.7 cm",  desc: "Clásico retro horizontal", popular: true  },
  { size: "Grande  7.7 × 10.7 cm",  desc: "Formato grande vertical",  popular: false },
];

// Promos apply to Polaroid only — no emojis, no pack names
const POLAROID_PROMOS = [
  { qty: "3 fotos"  },
  { qty: "6 fotos"  },
  { qty: "9 fotos"  },
  { qty: "15 fotos" },
  { qty: "20 fotos" },
];

type Tab = "fotos" | "polaroid";

export default function PhotoSizes() {
  const [tab, setTab] = useState<Tab>("fotos");

  return (
    <section
      id="medidas"
      style={{
        background: "#FAF7F8",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="glow-orb" style={{ width: 400, height: 400, top: "40%", right: -100, opacity: 0.5 }} />

      <div style={{ maxWidth: 860, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Impresión de recuerdos</div>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#1A1A1A",
              marginBottom: 12,
            }}
          >
            Medidas &{" "}
            <span style={{ color: "#E6007E" }}>Formatos</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#999", fontSize: "0.95rem" }}>
            Fotos impresas de alta calidad en múltiples formatos
          </p>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 32, flexWrap: "wrap" }}>
          {(["fotos", "polaroid"] as Tab[]).map((t) => (
            <button
              key={t}
              id={`tab-${t}`}
              className={`tab-btn ${tab === t ? "active" : ""}`}
              onClick={() => setTab(t)}
            >
              {t === "fotos"    && "Fotos Impresas"}
              {t === "polaroid" && "Polaroid + Promos"}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          className="glass-card"
          style={{ padding: "8px 0", overflow: "hidden" }}
        >
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
                        <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1A1A1A", fontSize: "0.93rem" }}>
                          {r.size}
                        </span>
                      </td>
                      <td style={{ color: "#666" }}>{r.qty}</td>
                      <td style={{ color: "#999", fontSize: "0.85rem" }}>{r.desc}</td>
                      <td style={{ textAlign: "center" }}>
                        {r.popular && (
                          <span
                            style={{
                              background: "rgba(230,0,126,0.09)",
                              border: "1px solid rgba(230,0,126,0.28)",
                              color: "#E6007E",
                              fontFamily: "'Poppins', sans-serif",
                              fontWeight: 700,
                              fontSize: "0.68rem",
                              padding: "3px 10px",
                              borderRadius: 50,
                            }}
                          >
                            Popular
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Polaroid + Promos */}
          {tab === "polaroid" && (
            <div>
              {/* Sizes table */}
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
                          <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1A1A1A", fontSize: "0.93rem" }}>
                            {r.size}
                          </span>
                        </td>
                        <td style={{ color: "#666" }}>{r.desc}</td>
                        <td style={{ textAlign: "center" }}>
                          {r.popular && (
                            <span
                              style={{
                                background: "rgba(230,0,126,0.09)",
                                border: "1px solid rgba(230,0,126,0.28)",
                                color: "#E6007E",
                                fontFamily: "'Poppins', sans-serif",
                                fontWeight: 700,
                                fontSize: "0.68rem",
                                padding: "3px 10px",
                                borderRadius: 50,
                              }}
                            >
                              Clásico
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Promos — quantity only, no emojis, no pack names */}
              <div
                style={{
                  borderTop: "1px solid rgba(230,0,126,0.10)",
                  padding: "24px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.78rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#E6007E",
                    marginBottom: 16,
                  }}
                >
                  Promos por cantidad
                </p>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
                    gap: 12,
                  }}
                >
                  {POLAROID_PROMOS.map((p) => (
                    <div
                      key={p.qty}
                      style={{
                        background: "rgba(230,0,126,0.06)",
                        border: "1px solid rgba(230,0,126,0.18)",
                        borderRadius: 14,
                        padding: "18px 12px",
                        textAlign: "center",
                        transition: "transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease",
                        cursor: "default",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230,0,126,0.5)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 20px rgba(230,0,126,0.14)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(230,0,126,0.18)";
                        (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "'Poppins', sans-serif",
                          fontWeight: 900,
                          fontSize: "1.1rem",
                          color: "#1A1A1A",
                        }}
                      >
                        {p.qty}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 28 }}>
          <p style={{ color: "#bbb", fontFamily: "'Inter', sans-serif", fontSize: "0.88rem", marginBottom: 14 }}>
            No encontras el tamaño que buscas? Consultanos sin cargo
          </p>
          <a
            id="photo-cta-wa"
            href="https://wa.me/5492236672480?text=Hola!%20Quiero%20consultar%20sobre%20impresión%20de%20fotos"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar por fotos
          </a>
        </div>
      </div>
    </section>
  );
}
