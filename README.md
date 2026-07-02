# RoyaleMeta - Documentación del Proyecto

## 🚀 Características Implementadas

### Autenticación
- **Login**: `/login` - Formulario con email/contraseña, persiste sesión en cookies
- **Registro**: `/registro` - Crea usuario con username, disparador en Supabase crea registro automáticamente
- **Reset Password**: `/reset-password` - Envía email de recuperación

### Dashboard (Requiere autenticación)
- **Panel Principal** (`/dashboard`): Estadísticas del usuario, actividad reciente
- **Mi Perfil** (`/dashboard/perfil`): Avatar, username, email, racha, puntos
- **Mis Mazos** (`/dashboard/mis-mazos`): Lista de mazos enviados por el usuario
- **Torneos** (`/dashboard/torneos`): Torneos activos con inscripción
- **Premios** (`/dashboard/premios`): Puntos canjeables y historial
- **Suscripción** (`/dashboard/suscripcion`): Planes Royale+ (Gratis/Mensual/Anual)
- **Configuración** (`/dashboard/configuracion`): Preferencias de cuenta
- **Historial** (`/dashboard/historial`): Enlace a premios

### Panel Administrador (Requiere rol admin)
- `/admin` - Dashboard con estadísticas
- `/admin/usuarios` - Gestión de usuarios
- `/admin/mazos` - Moderación de mazos
- `/admin/torneos` - Gestión de torneos
- `/admin/premios` - Configuración de premios
- `/admin/reportes` - Moderación de reportes
- `/admin/analytics` - Estadísticas avanzadas

## 📁 Estructura del Proyecto

```
royale-meta/
├── app/
│   ├── (auth)/          # Rutas auth protegidas por middleware
│   │   ├── login/       # Página de login
│   │   └── registro/    # Página de registro
│   ├── admin/           # Panel administrador
│   │   ├── layout.tsx   # Layout con verificación de admin
│   │   └── page.tsx     # Dashboard admin
│   ├── dashboard/       # Panel usuario
│   │   ├── layout.tsx   # Layout con autenticación
│   │   ├── page.tsx     # Panel principal
│   │   ├── perfil/      # Perfil usuario
│   │   ├── mis-mazos/   # Mazos del usuario
│   │   ├── torneos/     # Torneos
│   │   ├── premios/     # Premios puntos
│   │   ├── suscripcion/ # Suscripción
│   │   ├── configuracion/ # Configuración
│   │   └── historial/   # Historial
│   ├── (public)/        # Páginas públicas
│   │   ├── page.tsx     # Landing page
│   │   ├── mazos/       # Mazos comunidad
│   │   ├── ranking/     # Ranking jugadores
│   │   ├── torneos/     # Torneos públicos
│   │   ├── reglas/      # Términos
│   │   └── contacto/    # Contacto
│   ├── api/auth/
│   │   ├── login/       # POST - Login
│   │   ├── register/    # POST - Registro
│   │   ├── logout/      # POST - Logout
│   │   ├── me/          # GET/POST - Usuario actual
│   │   └── reset-password/ # POST - Reset password
│   ├── middleware.ts    # Protección de rutas
│   └── layout.tsx       # Layout raíz (Navbar + Footer)
├── components/
│   ├── auth/
│   │   ├── login-form.tsx
│   │   └── register-form.tsx
│   ├── dashboard/
│   │   ├── sidebar.tsx
│   │   ├── dashboard-stats.tsx
│   │   └── actividad-reciente.tsx
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── footer.tsx
│   │   └── providers.tsx    # Contexto Supabase
│   └── mazo/
│       └── mazo-card.tsx
├── contexts/
│   └── dashboard-context.tsx  # Contexto datos usuario
├── lib/
│   └── supabase/
│       ├── client.ts          # Cliente navegador
│       └── server.ts          # Cliente servidor
└── supabase-schema.sql        # Schema base de datos
```

## 🔧 Configuración

### Variables de Entorno (.env.local)
```
NEXT_PUBLIC_SUPABASE_URL=https://kvqbimyojjkqsuhniknq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Supabase Schema
Ejecutar `supabase-schema.sql` en el SQL Editor incluye:
- 9 tablas con relaciones
- Extension uuid-ossp para generar IDs
- Trigger `handle_new_user` para crear usuario automático
- Políticas RLS (Row Level Security)

## 💻 Comandos

```bash
npm run dev        # Desarrollo
npm run build      # Build producción
npm start          # Servidor producción
```

## 🚢 Deploy

1. Subir a GitHub (hecho)
2. Deploy en Vercel: `vercel --prod`
3. Configurar variables en Vercel
4. Ejecutar schema SQL en Supabase

## 🔗 URLs

- **GitHub**: https://github.com/misterplayercr-creator/royale-meta
- **Supabase**: Configurar Site URL en producción