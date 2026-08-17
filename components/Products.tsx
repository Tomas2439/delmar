"use client";

import {
  Sticker,
  Camera,
  Users,
  LayoutGrid,
  BookOpen,
  Gift,
  Mail,
  Image as ImageIcon,
  Sparkles,
  Layers,
} from "lucide-react";

const PRODUCTS = [
  {
    id: "stickers-vinilo",
    icon: <Sticker size={28} />,
    title: "Stickers en Vinilo",
    desc: "Base blanca, cristal, holográfico, DTF o UV. Calidad premium para cualquier superficie.",
    badge: "⭐ Más vendido",
  },
  {
    id: "stickers-personalizados",
    icon: <Camera size={28} />,
    title: "Stickers Personalizados",
    desc: "Mandanos tu foto favorita y la convertimos en sticker. ¡Tu recuerdo siempre con vos!",
    badge: "💗 Favorito",
  },
  {
    id: "stickers-marcas",
    icon: <Users size={28} />,
    title: "Stickers para Marcas",
    desc: "Etiquetas y stickers para emprendimientos. Pedidos mayoristas con descuento.",
    badge: "🏷️ Mayorista",
  },
  {
    id: "planchas-personalizadas",
    icon: <LayoutGrid size={28} />,
    title: "Planchas Personalizadas",
    desc: "Diseñá tu plancha completa con todos los stickers que quieras. Totalmente a tu medida.",
    badge: null,
  },
  {
    id: "planners-iman",
    icon: <BookOpen size={28} />,
    title: "Planners con Imán",
    desc: "Organizadores decorativos con imán para la heladera. Funcional y hermoso.",
    badge: "✨ Nuevo",
  },
  {
    id: "kits-cumple",
    icon: <Gift size={28} />,
    title: "Kits de Cumpleaños",
    desc: "Papelería temática, tarjetas de invitación y decoración para eventos especiales.",
    badge: "🎂 Popular",
  },
  {
    id: "tarjetas-eventos",
    icon: <Mail size={28} />,
    title: "Tarjetas de Eventos",
    desc: "Invitaciones y tarjetas personalizadas para bodas, XV años, baby showers y más.",
    badge: null,
  },
  {
    id: "fotos-impresas",
    icon: <ImageIcon size={28} />,
    title: "Fotos Impresas",
    desc: "Revelado desde 6x9 hasta 20x30cm. Tu momento favorito en papel de alta calidad.",
    badge: "📸 Muy pedido",
  },
  {
    id: "polaroids",
    icon: <Sparkles size={28} />,
    title: "Fotos Polaroid",
    desc: "Formato mini, mediana o grande con el estilo retro que todos amamos.",
    badge: "💫 Tendencia",
  },
  {
    id: "dtf-uv",
    icon: <Layers size={28} />,
    title: "Impresión DTF & UV",
    desc: "Tecnología de vanguardia para colores vibrantes y durabilidad excepcional.",
    badge: null,
  },
];

export default function Products() {
  return (
    <section
      id="productos"
      style={{
        background: "#0D0D0D",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{ width: 700, height: 700, top: -200, left: "50%", transform: "translateX(-50%)", opacity: 0.25 }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            🛍️ Lo que hacemos
          </div>
          <h2
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#fff",
              marginBottom: 16,
            }}
          >
            Nuestros <span style={{ color: "#E6007E" }}>Productos</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.55)",
              fontSize: "1.05rem",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Todo personalizable, hecho con amor desde Mar del Plata 💗
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 20,
          }}
        >
          {PRODUCTS.map((product) => (
            <div key={product.id} id={product.id} className="product-card">
              {/* Badge */}
              {product.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: 16,
                    right: 16,
                    background: "rgba(230,0,126,0.15)",
                    border: "1px solid rgba(230,0,126,0.35)",
                    color: "#FF6FB5",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    padding: "4px 10px",
                    borderRadius: 50,
                  }}
                >
                  {product.badge}
                </div>
              )}

              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  background: "rgba(230,0,126,0.12)",
                  border: "1px solid rgba(230,0,126,0.25)",
                  borderRadius: 16,
                  color: "#E6007E",
                  marginBottom: 18,
                }}
              >
                {product.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.05rem",
                  color: "#fff",
                  letterSpacing: "0.02em",
                  marginBottom: 10,
                }}
              >
                {product.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  color: "rgba(255,255,255,0.55)",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                }}
              >
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
