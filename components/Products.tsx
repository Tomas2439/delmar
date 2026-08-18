"use client";

import {
  Sticker, Camera, Users, LayoutGrid, BookOpen,
  Gift, Mail, Image as ImageIcon, Sparkles, Layers,
} from "lucide-react";

const PRODUCTS = [
  { id: "stickers-vinilo",        icon: <Sticker size={26} />,     title: "Stickers en Vinilo",        desc: "Base blanca, cristal, holográfico, DTF o UV. Calidad premium para cualquier superficie.", badge: "Más vendido" },
  { id: "stickers-personalizados",icon: <Camera size={26} />,      title: "Stickers Personalizados",   desc: "Mandanos tu foto favorita y la convertimos en sticker.", badge: "Favorito" },
  { id: "stickers-marcas",        icon: <Users size={26} />,       title: "Stickers para Marcas",      desc: "Etiquetas y stickers para emprendimientos. Pedidos mayoristas con descuento.", badge: "Mayorista" },
  { id: "planchas-personalizadas",icon: <LayoutGrid size={26} />,  title: "Planchas Personalizadas",   desc: "Diseñá tu plancha completa con todos los stickers que quieras.", badge: null },
  { id: "planners-iman",          icon: <BookOpen size={26} />,    title: "Planners con Imán",         desc: "Organizadores decorativos con imán para la heladera. Funcional y hermoso.", badge: "Nuevo" },
  { id: "kits-cumple",            icon: <Gift size={26} />,        title: "Kits de Cumpleaños",        desc: "Papelería temática, tarjetas de invitación y decoración para eventos.", badge: "Popular" },
  { id: "tarjetas-eventos",       icon: <Mail size={26} />,        title: "Tarjetas de Eventos",       desc: "Invitaciones personalizadas para bodas, XV años, baby showers y más.", badge: null },
  { id: "fotos-impresas",         icon: <ImageIcon size={26} />,   title: "Fotos Impresas",            desc: "Revelado desde 6×9 hasta 20×30 cm. Tu momento favorito en papel de alta calidad.", badge: "Muy pedido" },
  { id: "polaroids",              icon: <Sparkles size={26} />,    title: "Fotos Polaroid",            desc: "Formato mini, mediana o grande con el estilo retro que todos amamos.", badge: "Tendencia" },
  { id: "dtf-uv",                 icon: <Layers size={26} />,      title: "Impresión DTF & UV",        desc: "Tecnología de vanguardia para colores vibrantes y durabilidad excepcional.", badge: null },
];

export default function Products() {
  return (
    <section
      id="productos"
      style={{
        background: "#FFFFFF",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div className="glow-orb" style={{ width: 600, height: 600, top: -100, left: "50%", transform: "translateX(-50%)", opacity: 0.5 }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Lo que hacemos</div>
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
            Nuestros <span style={{ color: "#E6007E" }}>Productos</span>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", color: "#888", fontSize: "1rem", maxWidth: 460, margin: "0 auto" }}>
            Todo personalizable, hecho con amor desde Mar del Plata 💗
          </p>
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 18 }}>
          {PRODUCTS.map((product) => (
            <div key={product.id} id={product.id} className="product-card">
              {product.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: 14,
                    right: 14,
                    background: "rgba(230,0,126,0.09)",
                    border: "1px solid rgba(230,0,126,0.25)",
                    color: "#E6007E",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.68rem",
                    padding: "3px 10px",
                    borderRadius: 50,
                    letterSpacing: "0.04em",
                  }}
                >
                  {product.badge}
                </div>
              )}

              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 52,
                  height: 52,
                  background: "rgba(230,0,126,0.08)",
                  border: "1px solid rgba(230,0,126,0.18)",
                  borderRadius: 14,
                  color: "#E6007E",
                  marginBottom: 16,
                }}
              >
                {product.icon}
              </div>

              <h3
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "1rem",
                  color: "#1A1A1A",
                  letterSpacing: "0.01em",
                  marginBottom: 8,
                }}
              >
                {product.title}
              </h3>
              <p style={{ fontFamily: "'Inter', sans-serif", color: "#777", fontSize: "0.88rem", lineHeight: 1.65 }}>
                {product.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
