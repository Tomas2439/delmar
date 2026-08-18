"use client";

import Image from "next/image";
import { ExternalLink, MessageCircle } from "lucide-react";

const WA_LINK =
  "https://wa.me/5492236672480?text=Hola!%20Vi%20su%20web%20y%20quisiera%20pedir%20un%20presupuesto%20%F0%9F%92%97";
const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1dT4CR1_MviPWuiADV4AGogNiy5genW2D";

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse 100% 80% at 60% 10%, #fce4f1 0%, #fff8fb 40%, #ffffff 75%)",
      }}
    >
      {/* Soft orbs */}
      <div className="glow-orb" style={{ width: 600, height: 600, top: -120, left: -120, opacity: 0.7 }} />
      <div className="glow-orb" style={{ width: 400, height: 400, bottom: -80, right: -80, opacity: 0.5 }} />

      {/* Subtle dot grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(rgba(230,0,126,0.10) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "100px 24px 60px",
          maxWidth: 700,
          width: "100%",
        }}
      >
        {/* Floating logo */}
        <div className="animate-float" style={{ marginBottom: 32, display: "inline-block" }}>
          <Image
            src="/delmar-negro.png"
            alt="Logo de Del Mar Design — monograma DMD en forma de corazón, color magenta"
            width={180}
            height={180}
            priority
            loading="eager"
            style={{
              filter: "drop-shadow(0 12px 28px rgba(230,0,126,0.25))",
              objectFit: "contain",
            }}
          />
        </div>

        {/* Glass panel */}
        <div className="glass-hero animate-fade-up" style={{ padding: "44px 40px 48px" }}>
          <div className="section-label" style={{ justifyContent: "center", marginBottom: 20 }}>
            Mar del Plata, Argentina
          </div>

          <h1
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              color: "#1A1A1A",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            DEL MAR{" "}
            <span style={{ color: "#E6007E" }}>DESIGN</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.2rem)",
              color: "#666",
              lineHeight: 1.6,
              marginBottom: 12,
            }}
          >
            El emprendimiento que no sabías que necesitabas 💗
          </p>
          <p style={{ fontSize: "0.9rem", color: "#999", marginBottom: 36 }}>
            Stickers · Papelería · Fotos Polaroid · Regalos personalizados
          </p>

          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              id="hero-cta-catalogo"
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink size={17} /> Ver catálogo
            </a>
            <a
              id="hero-cta-wa"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={17} /> Pedir presupuesto
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div
          style={{
            marginTop: 44,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 6,
            opacity: 0.35,
          }}
        >
          <div style={{ width: 1, height: 44, background: "linear-gradient(to bottom, transparent, #E6007E)" }} />
          <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#E6007E" }}>
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
