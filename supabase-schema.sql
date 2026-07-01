-- ROYALEMETA - SCHEMA COMPLETO DE SUPABASE
-- Ejecuta este SQL en el SQL Editor de Supabase

-- ============================================
-- TABLAS PRINCIPALES
-- ============================================

-- USUARIOS
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  username TEXT UNIQUE NOT NULL,
  avatar_url TEXT,
  puntos_total INT DEFAULT 0,
  puntos_disponibles INT DEFAULT 0,
  racha_dias INT DEFAULT 0,
  ultimo_voto TIMESTAMP,
  ultimo_envio TIMESTAMP,
  suscripcion BOOLEAN DEFAULT FALSE,
  suscripcion_fin TIMESTAMP,
  role TEXT DEFAULT 'user' CHECK (role IN ('user', 'moderator', 'admin')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- MAZOS
CREATE TABLE IF NOT EXISTS mazos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  descripcion TEXT,
  imagen_url TEXT NOT NULL,
  cartas JSONB NOT NULL,
  torre TEXT NOT NULL,
  elixir_promedio DECIMAL(3,1),
  fecha_envio TIMESTAMP DEFAULT NOW(),
  fecha_torneo DATE,
  puntos_votos INT DEFAULT 0,
  votos_positivos INT DEFAULT 0,
  votos_negativos INT DEFAULT 0,
  es_ganador_dia BOOLEAN DEFAULT FALSE,
  es_ganador_semana BOOLEAN DEFAULT FALSE,
  es_ganador_mes BOOLEAN DEFAULT FALSE,
  activo BOOLEAN DEFAULT TRUE,
  reportes INT DEFAULT 0,
  CONSTRAINT cartas_check CHECK (jsonb_array_length(cartas) = 8)
);

-- VOTOS
CREATE TABLE IF NOT EXISTS votos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  mazo_id UUID REFERENCES mazos(id) ON DELETE CASCADE,
  tipo TEXT NOT NULL CHECK (tipo IN ('positivo', 'negativo')),
  fecha_voto TIMESTAMP DEFAULT NOW(),
  UNIQUE(usuario_id, mazo_id)
);

-- TORNEOS
CREATE TABLE IF NOT EXISTS torneos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre TEXT NOT NULL,
  tipo TEXT NOT NULL CHECK (tipo IN ('diario', 'semanal', 'mensual', 'sorpresa')),
  fecha_inicio TIMESTAMP NOT NULL,
  fecha_fin TIMESTAMP NOT NULL,
  costo_puntos INT NOT NULL,
  premio_descripcion TEXT NOT NULL,
  premio_tipo TEXT NOT NULL CHECK (premio_tipo IN ('gemas', 'emote', 'pase', 'mixto')),
  premio_cantidad INT NOT NULL,
  max_inscritos INT,
  estado TEXT DEFAULT 'abierto' CHECK (estado IN ('abierto', 'cerrado', 'finalizado')),
  ganador_id UUID REFERENCES usuarios(id),
  mazo_ganador_id UUID REFERENCES mazos(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- INSCRIPCIONES TORNEOS
CREATE TABLE IF NOT EXISTS inscripciones_torneo (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  torneo_id UUID REFERENCES torneos(id) ON DELETE CASCADE,
  mazo_id UUID REFERENCES mazos(id) ON DELETE CASCADE,
  fecha_inscripcion TIMESTAMP DEFAULT NOW(),
  puntuacion INT DEFAULT 0,
  posicion INT,
  UNIQUE(usuario_id, torneo_id)
);

-- HISTORIAL PUNTOS
CREATE TABLE IF NOT EXISTS historial_puntos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  cantidad INT NOT NULL,
  tipo TEXT NOT NULL CHECK (tipo IN ('envio_mazo', 'voto', 'ganador_torneo', 'racha', 'invitacion', 'reporte', 'suscripcion', 'admin', 'anuncio_recompensado')),
  descripcion TEXT,
  fecha TIMESTAMP DEFAULT NOW()
);

-- SUSCRIPCIONES
CREATE TABLE IF NOT EXISTS suscripciones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  stripe_id TEXT UNIQUE,
  estado TEXT DEFAULT 'activa' CHECK (estado IN ('activa', 'cancelada', 'vencida')),
  fecha_inicio TIMESTAMP DEFAULT NOW(),
  fecha_fin TIMESTAMP,
  auto_renovar BOOLEAN DEFAULT TRUE
);

-- REPORTES
CREATE TABLE IF NOT EXISTS reportes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  mazo_id UUID REFERENCES mazos(id) ON DELETE CASCADE,
  motivo TEXT NOT NULL,
  fecha TIMESTAMP DEFAULT NOW(),
  estado TEXT DEFAULT 'pendiente' CHECK (estado IN ('pendiente', 'revisado', 'rechazado', 'aceptado'))
);

-- NOTIFICACIONES
CREATE TABLE IF NOT EXISTS notificaciones (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  usuario_id UUID REFERENCES usuarios(id) ON DELETE CASCADE,
  titulo TEXT NOT NULL,
  mensaje TEXT NOT NULL,
  tipo TEXT NOT NULL CHECK (tipo IN ('info', 'exito', 'advertencia', 'premio', 'torneo')),
  leido BOOLEAN DEFAULT FALSE,
  fecha TIMESTAMP DEFAULT NOW()
);

-- ============================================
-- ÍNDICES
-- ============================================

CREATE INDEX IF NOT EXISTS idx_mazos_fecha ON mazos(fecha_envio DESC);
CREATE INDEX IF NOT EXISTS idx_mazos_puntos ON mazos(puntos_votos DESC);
CREATE INDEX IF NOT EXISTS idx_votos_mazo ON votos(mazo_id);
CREATE INDEX IF NOT EXISTS idx_votos_usuario ON votos(usuario_id);
CREATE INDEX IF NOT EXISTS idx_torneos_fecha ON torneos(fecha_inicio);
CREATE INDEX IF NOT EXISTS idx_inscripciones_torneo ON inscripciones_torneo(torneo_id);
CREATE INDEX IF NOT EXISTS idx_notificaciones_usuario ON notificaciones(usuario_id, leido);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE mazos ENABLE ROW LEVEL SECURITY;
ALTER TABLE votos ENABLE ROW LEVEL SECURITY;
ALTER TABLE torneos ENABLE ROW LEVEL SECURITY;
ALTER TABLE inscripciones_torneo ENABLE ROW LEVEL SECURITY;
ALTER TABLE historial_puntos ENABLE ROW LEVEL SECURITY;
ALTER TABLE suscripciones ENABLE ROW LEVEL SECURITY;
ALTER TABLE reportes ENABLE ROW LEVEL SECURITY;
ALTER TABLE notificaciones ENABLE ROW LEVEL SECURITY;

-- Políticas básicas (ajustar según necesidades)
CREATE POLICY "Usuarios pueden ver perfiles públicos" ON usuarios FOR SELECT USING (true);
CREATE POLICY "Usuarios actualizan su propio perfil" ON usuarios FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Mazos públicos son visibles" ON mazos FOR SELECT USING (true);
CREATE POLICY "Usuarios crean sus mazos" ON mazos FOR INSERT WITH CHECK (auth.uid() = usuario_id);
CREATE POLICY "Usuarios votan una vez por mazo" ON votos FOR ALL USING (auth.uid() = usuario_id);
