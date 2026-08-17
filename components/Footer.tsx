"use client";

import Image from "next/image";
import { MapPin, ExternalLink } from "lucide-react";

// Inline Instagram SVG (lucide-react doesn't include brand icons)
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const WA_LINK =
  "https://wa.me/5492236672480?text=Hola!%20Vi%20su%20web%20y%20quisiera%20pedir%20un%20presupuesto%20%F0%9F%92%97";
const DRIVE_LINK =
  "https://drive.google.com/drive/folders/1dT4CR1_MviPWuiADV4AGogNiy5genW2D";

export default function Footer() {
  return (
    <footer
      id="contacto"
      style={{
        background: "#0D0D0D",
        borderTop: "1px solid rgba(230,0,126,0.2)",
        padding: "72px 24px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top glow */}
      <div
        style={{
          position: "absolute",
          top: -1,
          left: "50%",
          transform: "translateX(-50%)",
          width: "60%",
          height: 2,
          background: "linear-gradient(90deg, transparent, #E6007E, transparent)",
        }}
      />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Main grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            gap: 48,
            alignItems: "start",
            marginBottom: 56,
          }}
          className="footer-grid"
        >
          {/* Left: About blurb */}
          <div>
            <h3
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#E6007E",
                marginBottom: 14,
              }}
            >
              Del Mar Design
            </h3>
            <p
              style={{
                fontFamily: "var(--font-inter), Inter, sans-serif",
                color: "rgba(255,255,255,0.45)",
                fontSize: "0.9rem",
                lineHeight: 1.7,
                marginBottom: 18,
              }}
            >
              Stickers, papelería y recuerdos personalizados hechos con amor.
              El emprendimiento que no sabías que necesitabas 💗
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                color: "rgba(255,255,255,0.4)",
                fontFamily: "var(--font-inter), Inter, sans-serif",
                fontSize: "0.85rem",
              }}
            >
              <MapPin size={14} style={{ color: "#E6007E" }} />
              Mar del Plata, Argentina
            </div>
          </div>

          {/* Center: Logo */}
          <div style={{ textAlign: "center" }}>
            <a href="#inicio">
              <Image
                src="/logo-white.jpg"
                alt="Del Mar Design — logo versión blanca"
                width={100}
                height={100}
                style={{
                  borderRadius: "50%",
                  opacity: 0.9,
                  filter: "brightness(0) invert(1)",
                  transition: "opacity 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLImageElement).style.opacity = "1")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLImageElement).style.opacity = "0.9")
                }
              />
            </a>
          </div>

          {/* Right: Contact links */}
          <div style={{ textAlign: "right" }} className="footer-right">
            <h3
              style={{
                fontFamily: "var(--font-poppins), Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "1rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: "#E6007E",
                marginBottom: 14,
              }}
            >
              Contacto
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, alignItems: "flex-end" }}>
              {/* WhatsApp */}
              <a
                id="footer-wa"
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#25D366",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.75")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +54 9 2236 67-2480
              </a>

              {/* Instagram */}
              <a
                id="footer-ig"
                href="https://instagram.com/delmardesing"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#FF6FB5",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.75")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
              >
                <InstagramIcon size={18} />
                @delmardesing
              </a>

              {/* Drive */}
              <a
                id="footer-drive"
                href={DRIVE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "rgba(255,255,255,0.5)",
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)")}
              >
                <ExternalLink size={18} />
                Ver catálogo
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "linear-gradient(90deg, transparent, rgba(230,0,126,0.2), transparent)",
            marginBottom: 28,
          }}
        />

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.25)",
              fontSize: "0.8rem",
            }}
          >
            © {new Date().getFullYear()} Del Mar Design · Todos los derechos reservados
          </p>
          <p
            style={{
              fontFamily: "var(--font-inter), Inter, sans-serif",
              color: "rgba(255,255,255,0.2)",
              fontSize: "0.8rem",
            }}
          >
            Hecho con 💗 en Mar del Plata
          </p>
        </div>
      </div>


    </footer>
  );
}
