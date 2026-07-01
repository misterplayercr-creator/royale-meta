# RoyaleMeta - Plataforma de Mazos de Clash Royale

Stack: Next.js 14 + TypeScript + Tailwind CSS + Supabase + Stripe

## Setup rápido

1. Instalar dependencias:
```bash
npm install
```

2. Copiar `.env.local` y completar variables:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=tu_key
NEXT_PUBLIC_ADSENSE_ID=tu_id
```

3. Ejecutar schema SQL en Supabase:
```bash
-- Importar archivo supabase-schema.sql en el SQL Editor de Supabase
```

4. Levantar desarrollo:
```bash
npm run dev
```

## Estructura

- `app/` - Rutas (App Router)
- `components/` - Componentes reutilizables
- `lib/` - Utilidades (Supabase client, helpers)
- `types/` - Tipos TypeScript

## Build

```bash
npm run build
npm start
```
