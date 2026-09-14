"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

const CATALOG_CATEGORIES = [
  {
    id: "cat-vinilo",
    title: "Stickers en Vinilo",
    desc: "Ideales para el termo, compu o auto. Resistentes al agua.",
    image: "/gallery/Plancha2.jpeg", // Placeholder real photo
  },
  {
    id: "cat-polaroid",
    title: "Fotos Polaroid",
    desc: "Llevá tus recuerdos en estilo retro. Varios tamaños disponibles.",
    image: "/gallery/TermoStickers.jpeg",
  },
  {
    id: "cat-planchas",
    title: "Planchas Personalizadas",
    desc: "Armá tu propia plancha A4 o A3 con los diseños que quieras.",
    image: "/gallery/Plancha.jpeg",
  },
  {
    id: "cat-marcas",
    title: "Para Emprendimientos",
    desc: "Stickers para packaging, etiquetas y tarjetas de presentación.",
    image: "/gallery/StickerMarca.jpeg",
  },
  {
    id: "cat-kits",
    title: "Kits de Cumpleaños",
    desc: "Combos completos con invitaciones, banderines y stickers.",
    image: "/gallery/KitCumple.jpeg",
  },
];

export default function Catalog() {
  return (
    <section
      id="catalogo"
      style={{
        background: "#FAF7F8",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="glow-orb" style={{ width: 400, height: 400, bottom: -50, right: -50, opacity: 0.3 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Explorá</div>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.7rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#1A1A1A",
              marginBottom: 14,
            }}
          >
            Nuestro <span style={{ color: "#E6007E" }}>Catálogo</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#666", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto" }}>
            Elegí la categoría que buscás y pedí tu presupuesto a medida por WhatsApp.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24 }}>
          {CATALOG_CATEGORIES.map((cat) => (
            <a
              key={cat.id}
              href={`https://wa.me/5492236672480?text=Hola!%20Quería%20consultar%20por%20${encodeURIComponent(cat.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card"
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "hidden",
                padding: 0,
                textDecoration: "none",
                color: "inherit",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-4px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 12px 32px rgba(230,0,126,0.12)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
              }}
            >
              {/* Image Header */}
              <div style={{ width: "100%", height: 200, position: "relative", backgroundColor: "#f0f0f0" }}>
                <Image src={cat.image} alt={cat.title} fill style={{ objectFit: "cover" }} />
              </div>

              {/* Content */}
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", flex: 1 }}>
                <h3
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 800,
                    fontSize: "1.2rem",
                    color: "#1A1A1A",
                    marginBottom: 8,
                  }}
                >
                  {cat.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", color: "#777", fontSize: "0.95rem", lineHeight: 1.6, flex: 1 }}>
                  {cat.desc}
                </p>

                <div
                  style={{
                    marginTop: 20,
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    color: "#E6007E",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                  }}
                >
                  Consultar precios <ArrowRight size={16} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Optional Backup Link */}
        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#888", fontSize: "0.9rem", marginBottom: 12 }}>
            ¿Buscás el listado completo detallado?
          </p>
          <a
            href="https://drive.google.com/drive/folders/1dT4CR1_MviPWuiADV4AGogNiy5genW2D"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              color: "#E6007E",
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
          >
            Ver Drive antiguo
          </a>
        </div>
      </div>
    </section>
  );
}
