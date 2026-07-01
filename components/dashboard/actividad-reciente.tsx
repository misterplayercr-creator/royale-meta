'use client'

const actividades = [
  { accion: 'Enviaste un mazo', puntos: '+15', fecha: 'Hoy, 10:30' },
  { accion: 'Votaste positivamente', puntos: '+2', fecha: 'Hoy, 09:15' },
  { accion: 'Ganaste torneo diario', puntos: '+50', fecha: 'Ayer, 20:00' },
  { accion: 'Invitaste a un amigo', puntos: '+25', fecha: 'Ayer, 14:20' },
]

export default function ActividadReciente() {
  return (
    <div className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a]">
      <h3 className="font-cinzel text-lg font-bold text-white mb-4">Actividad Reciente</h3>
      <div className="space-y-4">
        {actividades.map((act, i) => (
          <div key={i} className="flex items-center justify-between">
            <div>
              <div className="text-white text-sm">{act.accion}</div>
              <div className="text-xs text-[#94a3b8]">{act.fecha}</div>
            </div>
            <span className="text-[#10B981] font-semibold text-sm">{act.puntos}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
