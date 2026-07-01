export interface Usuario {
  id: string
  email: string
  username: string
  avatar_url?: string
  puntos_total: number
  puntos_disponibles: number
  racha_dias: number
  ultimo_voto?: string
  ultimo_envio?: string
  suscripcion: boolean
  suscripcion_fin?: string
  role: 'user' | 'moderator' | 'admin'
  created_at: string
  updated_at: string
}

export interface Mazo {
  id: string
  usuario_id: string
  titulo: string
  descripcion?: string
  imagen_url: string
  cartas: string[]
  torre: string
  elixir_promedio: number
  fecha_envio: string
  fecha_torneo?: string
  puntos_votos: number
  votos_positivos: number
  votos_negativos: number
  es_ganador_dia: boolean
  es_ganador_semana: boolean
  es_ganador_mes: boolean
  activo: boolean
  reportes: number
  usuario?: Usuario
  ya_voto?: boolean
}

export interface Voto {
  id: string
  usuario_id: string
  mazo_id: string
  tipo: 'positivo' | 'negativo'
  fecha_voto: string
}

export interface Torneo {
  id: string
  nombre: string
  tipo: 'diario' | 'semanal' | 'mensual' | 'sorpresa'
  fecha_inicio: string
  fecha_fin: string
  costo_puntos: number
  premio_descripcion: string
  premio_tipo: 'gemas' | 'emote' | 'pase' | 'mixto'
  premio_cantidad: number
  max_inscritos?: number
  estado: 'abierto' | 'cerrado' | 'finalizado'
  ganador_id?: string
  mazo_ganador_id?: string
  created_at: string
  inscritos_count?: number
  ya_inscrito?: boolean
}

export interface InscripcionTorneo {
  id: string
  usuario_id: string
  torneo_id: string
  mazo_id: string
  fecha_inscripcion: string
  puntuacion: number
  posicion?: number
  usuario?: Usuario
  mazo?: Mazo
}

export interface HistorialPuntos {
  id: string
  usuario_id: string
  cantidad: number
  tipo: 'envio_mazo' | 'voto' | 'ganador_torneo' | 'racha' | 'invitacion' | 'reporte' | 'suscripcion' | 'admin' | 'anuncio_recompensado'
  descripcion?: string
  fecha: string
}

export interface Suscripcion {
  id: string
  usuario_id: string
  stripe_id?: string
  estado: 'activa' | 'cancelada' | 'vencida'
  fecha_inicio: string
  fecha_fin?: string
  auto_renovar: boolean
}

export interface Reporte {
  id: string
  usuario_id: string
  mazo_id: string
  motivo: string
  fecha: string
  estado: 'pendiente' | 'revisado' | 'rechazado' | 'aceptado'
  usuario?: Usuario
  mazo?: Mazo
}

export interface Notificacion {
  id: string
  usuario_id: string
  titulo: string
  mensaje: string
  tipo: 'info' | 'exito' | 'advertencia' | 'premio' | 'torneo'
  leido: boolean
  fecha: string
}

export interface Metricas {
  usuarios_activos_diarios: number
  usuarios_activos_mensuales: number
  nuevos_registros_dia: number
  tasa_retencion_semanal: number
  mazos_enviados_dia: number
  mazos_totales: number
  promedio_votos_mazo: number
  inscritos_promedio: number
  torneos_completados: number
  premios_entregados: number
  ingresos_anuncios: number
  ingresos_suscripciones: number
  donaciones: number
  gastos_premios: number
  margen_neto: number
  tiempo_medio_sesion: number
  paginas_vistas: number
  tasa_retorno: number
}

export interface PlanSuscripcion {
  mensual: { price_id: string; precio: number; ciclo: string }
  trimestral: { price_id: string; precio: number; ciclo: string; descuento: string }
  anual: { price_id: string; precio: number; ciclo: string; descuento: string }
}
