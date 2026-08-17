"use client";

import { ShoppingBag, MessageSquare, CheckCircle } from "lucide-react";

const STEPS = [
  {
    id: "step-elegir",
    number: "01",
    icon: <ShoppingBag size={32} />,
    title: "Elegí tu producto",
    desc: "Explorá nuestro catálogo y encontrá el sticker, foto o papelería que más te guste. ¡Todo es personalizable!",
    emoji: "🛍️",
  },
  {
    id: "step-contar",
    number: "02",
    icon: <MessageSquare size={32} />,
    title: "Contanos qué necesitás",
    desc: "Escribinos por WhatsApp o Instagram con tu idea, fotos o referencia. Sin cargo y sin compromiso.",
    emoji: "💬",
  },
  {
    id: "step-presupuesto",
    number: "03",
    icon: <CheckCircle size={32} />,
    title: "Recibí tu presupuesto",
    desc: "Te respondemos con el precio y los tiempos de entrega. Si te conviene, ¡empezamos! 🎉",
    emoji: "✅",
  },
];

const WA_LINK =
  "https://wa.me/5492236672480?text=Hola!%20Vi%20su%20web%20y%20quisiera%20pedir%20un%20presupuesto%20%F0%9F%92%97";

export default function HowToOrder() {
  return (
    <section
      id="como-pedir"
      style={{
        background: "linear-gradient(135deg, #0D0D0D 0%, #200010 50%, #0D0D0D 100%)",
        padding: "96px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Orbs */}
      <div
        className="glow-orb"
        style={{ width: 500, height: 500, top: "50%", left: "50%", transform: "translate(-50%,-50%)", opacity: 0.35 }}
      />

      <div style={{ maxWidth: 1000, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>
            ✨ Sin complicaciones
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
            ¿Cómo{" "}
            <span style={{ color: "#E6007E" }}>pedir?</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.5)",
              fontSize: "1.05rem",
              maxWidth: 440,
              margin: "0 auto",
            }}
          >
            3 pasos simples y tu pedido está en camino 🚀
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 24,
            marginBottom: 56,
          }}
          className="steps-grid"
        >
          {STEPS.map((step, index) => (
            <div key={step.id} id={step.id} className="step-card" style={{ position: "relative" }}>
              {/* Connector line (between steps, not after last) */}
              {index < STEPS.length - 1 && (
                <div
                  style={{
                    position: "absolute",
                    top: "40px",
                    right: "-12px",
                    width: "24px",
                    height: "2px",
                    background: "linear-gradient(90deg, rgba(230,0,126,0.6), rgba(230,0,126,0.1))",
                    zIndex: 3,
                  }}
                  className="step-connector"
                />
              )}

              {/* Number badge */}
              <div
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 900,
                  fontSize: "3rem",
                  color: "rgba(230,0,126,0.12)",
                  lineHeight: 1,
                  marginBottom: 16,
                  userSelect: "none",
                }}
              >
                {step.number}
              </div>

              {/* Icon */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 64,
                  height: 64,
                  background: "rgba(230,0,126,0.12)",
                  border: "1px solid rgba(230,0,126,0.3)",
                  borderRadius: 18,
                  color: "#E6007E",
                  marginBottom: 20,
                }}
              >
                {step.icon}
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "#fff",
                  marginBottom: 12,
                }}
              >
                {step.title}
              </h3>
              <p
                style={{
                  fontFamily: "var(--font-inter), Inter, sans-serif",
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.9rem",
                  lineHeight: 1.65,
                }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Big CTA */}
        <div
          style={{
            textAlign: "center",
            background: "rgba(230,0,126,0.06)",
            border: "1px solid rgba(230,0,126,0.2)",
            borderRadius: 24,
            padding: "40px 32px",
            backdropFilter: "blur(12px)",
          }}
        >
          <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>💗</div>
          <h3
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 800,
              fontSize: "1.5rem",
              color: "#fff",
              marginBottom: 8,
            }}
          >
            Presupuesto{" "}
            <span style={{ color: "#E6007E" }}>sin cargo</span>
          </h3>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.5)",
              fontSize: "0.95rem",
              marginBottom: 28,
            }}
          >
            Sin compromiso. Te respondemos rápido y con toda la info que necesitás.
          </p>
          <a
            id="howto-cta-wa"
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-wa"
            style={{ display: "inline-flex" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Pedir presupuesto por WhatsApp
          </a>
        </div>
      </div>


    </section>
  );
}
