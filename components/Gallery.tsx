"use client";


// Inline Instagram SVG (lucide-react doesn't include brand icons)
function InstagramIcon({ size = 24, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

// Placeholders: replace src with real product photos from Fiorella.
// All alt texts describe the product for accessibility & SEO.
const GALLERY_ITEMS = [
  {
    id: "gallery-1",
    src: "/gallery/foto-1.jpg",
    alt: "Mano sosteniendo un sticker personalizado de vinilo transparente con diseño floral",
  },
  {
    id: "gallery-2",
    src: "/gallery/foto-2.jpg",
    alt: "Plancha de stickers holográficos con diseños de corazones y estrellas",
  },
  {
    id: "gallery-3",
    src: "/gallery/foto-3.jpg",
    alt: "Fotos polaroid impresas en formato mediano con diseños de viajes",
  },
  {
    id: "gallery-4",
    src: "/gallery/foto-4.jpg",
    alt: "Stickers personalizados con fotos de mascotas en formato circular",
  },
  {
    id: "gallery-5",
    src: "/gallery/foto-5.jpg",
    alt: "Kit de cumpleaños con tarjetas de invitación y stickers temáticos",
  },
  {
    id: "gallery-6",
    src: "/gallery/foto-6.jpg",
    alt: "Stickers para emprendimientos: etiquetas con logo de marca personalizado",
  },
  {
    id: "gallery-7",
    src: "/gallery/foto-7.jpg",
    alt: "Planner organizador con imán decorado con stickers coloridos",
  },
  {
    id: "gallery-8",
    src: "/gallery/foto-8.jpg",
    alt: "Impresión de fotos 10x15 cm sobre fondo claro con flores de temporada",
  },
  {
    id: "gallery-9",
    src: "/gallery/foto-9.jpg",
    alt: "Stickers en vinilo base blanca aplicados en termo de acero inoxidable",
  },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      style={{
        background: "#0D0D0D",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        className="glow-orb"
        style={{ width: 600, height: 600, bottom: -200, left: -150, opacity: 0.2 }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            📸 Galería
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
            Nuestros{" "}
            <span style={{ color: "#E6007E" }}>Trabajos</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.5)",
              fontSize: "1rem",
            }}
          >
            Fotos reales de nuestros productos ✨
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 14,
          }}
          className="gallery-grid"
        >
          {GALLERY_ITEMS.map((item) => (
            <a
              key={item.id}
              id={item.id}
              href="https://instagram.com/delmardesing"
              target="_blank"
              rel="noopener noreferrer"
              className="gallery-item"
              aria-label={`Ver en Instagram: ${item.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                onError={(e) => {
                  // Fallback placeholder when real photos are not yet uploaded
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".gallery-placeholder")) {
                    const placeholder = document.createElement("div");
                    placeholder.className = "gallery-placeholder";
                    placeholder.style.cssText =
                      "width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg,rgba(230,0,126,0.08),rgba(13,13,13,0.4));";
                    placeholder.innerHTML = `<span style="font-size:2.5rem">🎨</span><span style="font-family:Poppins,sans-serif;font-size:0.72rem;color:rgba(255,255,255,0.4);text-align:center;padding:0 12px;">${item.alt}</span>`;
                    parent.appendChild(placeholder);
                  }
                }}
              />
              <div className="gallery-overlay">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <InstagramIcon size={32} color="#fff" />
                  <span
                    style={{
                      fontFamily: "var(--font-poppins), Poppins, sans-serif",
                      fontWeight: 700,
                      fontSize: "0.8rem",
                      color: "#fff",
                      letterSpacing: "0.04em",
                    }}
                  >
                    @delmardesing
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Instagram CTA */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            id="gallery-ig-cta"
            href="https://instagram.com/delmardesing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            <InstagramIcon size={20} color="#fff" />
            Seguinos en Instagram
          </a>
          <p
            style={{
              marginTop: 12,
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.85rem",
            }}
          >
            @delmardesing
          </p>
        </div>
      </div>


    </section>
  );
}
