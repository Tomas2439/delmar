"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Inicio",        href: "#inicio" },
  { label: "Nosotras",      href: "#nosotras" },
  { label: "Productos",     href: "#productos" },
  { label: "Galería",       href: "#galeria" },
  { label: "Cómo pedir",    href: "#como-pedir" },
  { label: "Contacto",      href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <header
      id="nav-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.35s ease",
        background: scrolled ? "rgba(13,13,13,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(230,0,126,0.2)" : "none",
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
            src="/logo-color.jpg"
            alt="Del Mar Design logo"
            width={42}
            height={42}
            style={{ borderRadius: "50%", objectFit: "cover" }}
          />
          <span style={{
            fontFamily: "var(--font-poppins), Poppins, sans-serif",
            fontWeight: 800,
            fontSize: "1rem",
            letterSpacing: "0.06em",
            color: "#fff",
            display: "none",
          }}
            className="nav-wordmark"
          >
            DEL MAR DESIGN
          </span>
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            gap: 32,
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                style={{
                  fontFamily: "var(--font-poppins), Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "0.88rem",
                  letterSpacing: "0.04em",
                  color: "rgba(255,255,255,0.85)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E6007E")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <a
          href="https://wa.me/5492236672480"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary nav-cta"
          style={{ padding: "10px 22px", fontSize: "0.85rem" }}
        >
          💬 Pedir presupuesto
        </a>

        {/* Burger */}
        <button
          id="nav-burger"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: "none",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            display: "none",
            padding: 4,
          }}
          className="nav-burger"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: "rgba(13,13,13,0.97)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(230,0,126,0.2)",
            padding: "16px 24px 24px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 4 }}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={handleLinkClick}
                  style={{
                    display: "block",
                    fontFamily: "var(--font-poppins), Poppins, sans-serif",
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "rgba(255,255,255,0.85)",
                    textDecoration: "none",
                    padding: "12px 8px",
                    borderBottom: "1px solid rgba(255,255,255,0.06)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "#E6007E")}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
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
            onClick={handleLinkClick}
            className="btn-primary"
            style={{ marginTop: 16, width: "100%", justifyContent: "center" }}
          >
            💬 Pedir presupuesto
          </a>
        </div>
      )}


    </header>
  );
}
