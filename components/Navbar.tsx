"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio",     href: "#inicio"     },
  { label: "Nosotras",  href: "#nosotras"   },
  { label: "Productos", href: "#productos"  },
  { label: "Galería",   href: "#galeria"    },
  { label: "Cómo pedir",href: "#como-pedir" },
  { label: "Contacto",  href: "#contacto"   },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="nav-header"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.35s ease",
        background: scrolled ? "rgba(255,255,255,0.90)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(230,0,126,0.12)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(230,0,126,0.07)" : "none",
        padding: "0 24px",
      }}
    >
      <nav
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <Image
            src="/delmar-negro.png"
            alt="Del Mar Design — logo magenta"
            width={44}
            height={44}
            style={{ objectFit: "contain" }}
          />
        </a>

        {/* Desktop links */}
        <ul className="nav-desktop" style={{ display: "flex", gap: 30, listStyle: "none", margin: 0, padding: 0 }}>
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.86rem",
                  letterSpacing: "0.03em",
                  color: "#444",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E6007E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#444")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href="https://wa.me/5492236672480"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary nav-cta"
          style={{ padding: "10px 20px", fontSize: "0.83rem" }}
        >
          Pedir presupuesto
        </a>

        {/* Burger */}
        <button
          id="nav-burger"
          onClick={() => setMenuOpen((v) => !v)}
          className="nav-burger"
          style={{ background: "none", border: "none", color: "#1A1A1A", cursor: "pointer", display: "none", padding: 4 }}
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(255,255,255,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(230,0,126,0.12)",
            padding: "16px 24px 24px",
            boxShadow: "0 12px 32px rgba(230,0,126,0.08)",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "#333",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderBottom: "1px solid rgba(230,0,126,0.08)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E6007E")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "#333")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://wa.me/5492236672480"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-primary"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            Pedir presupuesto
          </a>
        </div>
      )}
    </header>
  );
}
