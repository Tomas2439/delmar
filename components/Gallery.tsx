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
  { id: "gallery-1", src: "/gallery/foto-1.jpg", alt: "Mano sosteniendo un sticker personalizado de vinilo transparente con diseño floral" },
  { id: "gallery-2", src: "/gallery/foto-2.jpg", alt: "Plancha de stickers holográficos con diseños de corazones y estrellas" },
  { id: "gallery-3", src: "/gallery/foto-3.jpg", alt: "Fotos polaroid impresas en formato mediano con diseños de viajes" },
  { id: "gallery-4", src: "/gallery/foto-4.jpg", alt: "Stickers personalizados con fotos de mascotas en formato circular" },
  { id: "gallery-5", src: "/gallery/foto-5.jpg", alt: "Kit de cumpleaños con tarjetas de invitación y stickers temáticos" },
  { id: "gallery-6", src: "/gallery/foto-6.jpg", alt: "Stickers para emprendimientos: etiquetas con logo de marca personalizado" },
  { id: "gallery-7", src: "/gallery/foto-7.jpg", alt: "Planner organizador con imán decorado con stickers coloridos" },
  { id: "gallery-8", src: "/gallery/foto-8.jpg", alt: "Impresión de fotos 10x15 cm sobre fondo claro con flores de temporada" },
  { id: "gallery-9", src: "/gallery/foto-9.jpg", alt: "Stickers en vinilo base blanca aplicados en termo de acero inoxidable" },
];

export default function Gallery() {
  return (
    <section
      id="galeria"
      style={{
        background: "#FFFFFF",
        padding: "80px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="glow-orb" style={{ width: 500, height: 500, bottom: -100, left: -100, opacity: 0.45 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Galería</div>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#1A1A1A",
              marginBottom: 10,
            }}
          >
            Nuestros <span style={{ color: "#E6007E" }}>Trabajos</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#999", fontSize: "0.95rem" }}>
            Fotos reales de nuestros productos
          </p>
        </div>

        {/* Grid */}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}
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
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = "none";
                  const parent = target.parentElement;
                  if (parent && !parent.querySelector(".gallery-placeholder")) {
                    const el = document.createElement("div");
                    el.className = "gallery-placeholder";
                    el.style.cssText =
                      "width:100%;height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;background:linear-gradient(135deg,#fce4f1,#fff8fb);";
                    el.innerHTML = `<span style="font-size:2rem;opacity:0.4">🎨</span><span style="font-family:Poppins,sans-serif;font-size:0.68rem;color:rgba(230,0,126,0.5);text-align:center;padding:0 12px;">${item.alt}</span>`;
                    parent.appendChild(el);
                  }
                }}
              />
              <div className="gallery-overlay">
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
                  <InstagramIcon size={30} color="#fff" />
                  <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.78rem", color: "#fff", letterSpacing: "0.04em" }}>
                    @delmardesing
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* IG CTA */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            id="gallery-ig-cta"
            href="https://instagram.com/delmardesing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: "1rem", padding: "14px 32px" }}
          >
            <InstagramIcon size={19} color="#fff" />
            Seguinos en Instagram
          </a>
          <p style={{ marginTop: 10, fontFamily: "'Inter', sans-serif", color: "#bbb", fontSize: "0.82rem" }}>
            @delmardesing
          </p>
        </div>
      </div>
    </section>
  );
}
