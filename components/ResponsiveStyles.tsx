/**
 * Global responsive overrides injected once at the app level.
 * This avoids styled-jsx dependency while keeping media query rules.
 */
export default function ResponsiveStyles() {
  return (
    <style>{`
      /* ── Navbar ──────────────────────────────────────────────── */
      @media (max-width: 768px) {
        .nav-desktop  { display: none !important; }
        .nav-cta      { display: none !important; }
        .nav-burger   { display: flex !important; }
        .nav-wordmark { display: block !important; }
      }
      @media (min-width: 769px) {
        .nav-wordmark { display: block !important; }
      }

      /* ── About ───────────────────────────────────────────────── */
      @media (max-width: 768px) {
        .about-grid {
          grid-template-columns: 1fr !important;
          gap: 40px !important;
        }
      }

      /* ── Gallery ─────────────────────────────────────────────── */
      @media (max-width: 640px) {
        .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 380px) {
        .gallery-grid { grid-template-columns: 1fr !important; }
      }

      /* ── Steps ───────────────────────────────────────────────── */
      @media (max-width: 640px) {
        .steps-grid      { grid-template-columns: 1fr !important; }
        .step-connector  { display: none !important; }
      }

      /* ── Footer ──────────────────────────────────────────────── */
      @media (max-width: 640px) {
        .footer-grid { grid-template-columns: 1fr !important; text-align: center !important; }
        .footer-right { text-align: center !important; }
        .footer-right > div { align-items: center !important; }
      }
    `}</style>
  );
}
