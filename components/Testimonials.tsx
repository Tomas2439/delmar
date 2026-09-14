"use client";

import { Star } from "lucide-react";
import Image from "next/image";

const TESTIMONIALS = [
  {
    name: "Mar Cakes",
    text: "¡Buenisimos los stickers! La calidad es excelente y los colores re vivos. A nuestros clientes les encantan tus stickers 😍",
    role: "Emprendedora",
    img: "/gallery/StickerMarca.jpeg", // Using existing gallery images as avatars/context for now
  },
  {
    name: "Agus V.",
    text: "Pedí el kit de cumpleaños, los banderines y las invitaciones quedaron soñadas. La atención de Fiorella un 10. ¡Súper recomendable!",
    role: "Clienta",
    img: "/gallery/KitCumple.jpeg",
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        background: "#FFFFFF",
        padding: "80px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Experiencias</div>
          <h2
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)",
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: "#1A1A1A",
            }}
          >
            Qué dicen de <span style={{ color: "#E6007E" }}>nosotros</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="glass-card"
              style={{
                padding: "32px",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ display: "flex", gap: 4, color: "#FFD700" }}>
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={18} fill="currentColor" />
                ))}
              </div>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: "#444",
                  lineHeight: 1.6,
                  fontStyle: "italic",
                  flex: 1,
                }}
              >
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    overflow: "hidden",
                    position: "relative",
                    background: "#f0f0f0",
                  }}
                >
                  <Image src={t.img} alt={t.name} fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1A1A1A" }}>{t.name}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", color: "#888" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
