"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the button after scrolling down 100px
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="https://wa.me/5492236672480?text=Hola!%20Vengo%20de%20la%20página%20web"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: "#25D366", // Official WhatsApp green
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 6px 16px rgba(37,211,102,0.3)",
        zIndex: 9999,
        transition: "transform 0.3s ease, opacity 0.3s ease, box-shadow 0.3s ease",
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transform: isVisible ? "scale(1)" : "scale(0.8) translateY(10px)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.08) translateY(-4px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 24px rgba(37,211,102,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1) translateY(0)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 6px 16px rgba(37,211,102,0.3)";
      }}
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle size={32} />
    </a>
  );
}
