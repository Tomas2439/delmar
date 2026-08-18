# Del Mar Design — Landing Page

Landing page oficial de **Del Mar Design**, emprendimiento de stickers, papelería personalizada y regalos desde Mar del Plata, Argentina.

🔗 Instagram: [@delmardesing](https://instagram.com/delmardesing)

---

## Stack

- **Framework**: Next.js 16 (App Router, static export)
- **Estilos**: Tailwind CSS v4 + CSS custom (glassmorphism claro)
- **Fuentes**: Google Fonts — Poppins + Inter
- **Iconos**: lucide-react
- **Deploy**: Vercel

---

## Estructura

```
del-mar-design/
├── app/
│   ├── globals.css        # Design tokens, glass utilities, animaciones
│   ├── layout.tsx         # Metadata SEO, favicon
│   └── page.tsx           # Página principal
├── components/
│   ├── Navbar.tsx         # Sticky con glass scroll effect
│   ├── Hero.tsx           # Logo flotante, gradiente pastel, CTAs
│   ├── AboutUs.tsx        # Historia de Fiorella
│   ├── Products.tsx       # Grid de cards glass (10 productos)
│   ├── PhotoSizes.tsx     # Tabla de medidas: fotos y polaroid
│   ├── Gallery.tsx        # Grid 3×3 con overlay Instagram
│   ├── HowToOrder.tsx     # 3 pasos + CTA WhatsApp
│   ├── Footer.tsx         # Logo blanco, links, ubicación
│   └── ResponsiveStyles.tsx # Media queries globales
└── public/
    ├── delmar-negro.png   # Logo magenta (fondos claros)
    ├── delmar-blanco.png  # Logo blanco (fondos oscuros)
    └── gallery/           # Fotos de producto
```

---

## Links integrados

| Destino | Valor |
|---|---|
| Instagram | [@delmardesing](https://instagram.com/delmardesing) |
| Catálogo | [Google Drive](https://drive.google.com/drive/folders/1dT4CR1_MviPWuiADV4AGogNiy5genW2D) |

---

## Desarrollo local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## Build

```bash
npm run build
```

## Deploy

El repo está conectado a Vercel. Cada `push` a `main` genera un nuevo deploy automáticamente.

---

*Hecho con amor en Mar del Plata 💗*
