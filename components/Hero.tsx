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
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #4a003a 0%, #1a0015 35%, #0D0D0D 70%)",
      }}
    >
      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{ width: 600, height: 600, top: -200, left: -200, opacity: 0.6 }}
      />
      <div
        className="glow-orb"
        style={{ width: 400, height: 400, bottom: -100, right: -100, opacity: 0.4 }}
      />

      {/* Dot grid pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(rgba(230,0,126,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "100px 24px 60px",
          maxWidth: 720,
          width: "100%",
        }}
      >
        {/* Logo */}
        <div
          className="animate-float"
          style={{ marginBottom: 32, display: "inline-block" }}
        >
          <Image
            src="/logo-color.jpg"
            alt="Logo de Del Mar Design — Monograma DMD en forma de corazón color magenta"
            width={140}
            height={140}
            priority
            style={{
              borderRadius: "50%",
              boxShadow: "0 0 60px rgba(230,0,126,0.5), 0 0 120px rgba(230,0,126,0.2)",
              border: "3px solid rgba(230,0,126,0.5)",
            }}
          />
        </div>

        {/* Glass panel */}
        <div className="glass-hero animate-fade-up" style={{ padding: "40px 36px 44px" }}>
          {/* Section label */}
          <div className="section-label" style={{ marginBottom: 20, justifyContent: "center" }}>
            ✨ Mar del Plata, Argentina
          </div>

          <h1
            style={{
              fontFamily: "var(--font-poppins), Poppins, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 6vw, 3.6rem)",
              letterSpacing: "0.04em",
              lineHeight: 1.1,
              color: "#fff",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            DEL MAR{" "}
            <span style={{ color: "#E6007E" }}>DESIGN</span>
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 3vw, 1.25rem)",
              color: "rgba(255,255,255,0.8)",
              fontFamily: "var(--font-inter), Inter, sans-serif",
              fontWeight: 400,
              lineHeight: 1.5,
              marginBottom: 36,
            }}
          >
            El emprendimiento que no sabías que necesitabas 💗
            <br />
            <span style={{ fontSize: "0.9em", color: "rgba(255,255,255,0.55)" }}>
              Stickers · Papelería · Fotos Polaroid · Regalos personalizados
            </span>
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: 16,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              id="hero-cta-catalogo"
              href={DRIVE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              <ExternalLink size={18} /> Ver catálogo
            </a>
            <a
              id="hero-cta-wa"
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <MessageCircle size={18} /> Pedir presupuesto
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: 0.4,
          }}
        >
          <div
            style={{
              width: 1,
              height: 48,
              background: "linear-gradient(to bottom, transparent, rgba(230,0,126,0.8))",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "0.7rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Scroll
          </span>
        </div>
      </div>
    </section>
  );
}
