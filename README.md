# ElectroTech Store

**ElectroTech Store** es un proyecto demo de e-commerce para venta de productos de electrónica general (celulares, computadoras, TVs, audio y accesorios). Este paquete está listo para correr localmente y desplegar en Netlify.

---

## Contenido del repo
```
ElectroTech-Store-v1/
  ├─ frontend/            # Aplicación React (Vite + Tailwind)
  ├─ functions/           # Netlify Functions (mock data)
  ├─ netlify.toml         # configuración de build para Netlify
  └─ README.md            # este archivo
```

## Requisitos previos / Prerequisites
- Node.js (v16+ recomendado)
- npm
- Cuenta en Netlify para despliegue continuo

---

## Ejecutar en local (ES)
1. Abrí una terminal y entrá en la carpeta `frontend`:
```bash
cd frontend
```
2. Instalá dependencias:
```bash
npm install
```
3. Levantá el servidor de desarrollo:
```bash
npm run dev
```
4. Abrí `http://localhost:5173` en tu navegador.

> Nota: Reemplazá las imágenes en `frontend/public/images/` por tus imágenes reales (mismos nombres) si querés ver fotos reales.

---

## Deploy en Netlify (ES)
1. Subí el repo a GitHub, GitLab o Bitbucket.
2. En Netlify -> "New site from Git" -> elegí el repositorio.
3. En **Build settings** poné:
   - Base directory: `frontend`
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
4. Variables de entorno (opcional):
   - `ADMIN_EMAIL` (email admin)
   - `ADMIN_PASS` (password admin)
   - `JWT_SECRET` (clave JWT)
   - `VITE_WHATSAPP_NUMBER` (ej: +5491122850681)
5. Hacé deploy y revisá el log.

---

## Checklist pre-despliegue (ES)
- [ ] Confirmar que `frontend/src/data/seed-data.json` contiene los productos.
- [ ] Reemplazar placeholders en `frontend/public/images/` por imágenes reales.
- [ ] Verificar que `netlify.toml` tenga base `frontend` y publish `dist`.
- [ ] Configurar variables de entorno si usás funciones protegidas.

---

## Quick Start (EN)

**Run locally**
```bash
cd frontend
npm install
npm run dev
# open http://localhost:5173
```

**Deploy to Netlify**
1. Push your repo to GitHub/GitLab.
2. Create a new site on Netlify from Git.
3. Build settings:
   - Base directory: `frontend`
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
4. Set environment variables if needed:
   - `ADMIN_EMAIL`, `ADMIN_PASS`, `JWT_SECRET`, `VITE_WHATSAPP_NUMBER` (e.g. +5491122850681)

---

## Contact / Support
If you need help with deploy or connecting a database (MongoDB Atlas, Supabase), contact via WhatsApp:

**+54 9 11 2285 0681**

---

Generated: 2025-10-08T15:11:59.163048 UTC
