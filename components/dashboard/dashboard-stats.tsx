'use client'

import { motion } from 'framer-motion'
import { Trophy, Swords, Users, Flame } from 'lucide-react'

const stats = [
  { icon: <Trophy className="w-6 h-6" />, label: 'Puntos Totales', value: '12,450', color: 'text-[#FFD700]' },
  { icon: <Swords className="w-6 h-6" />, label: 'Mazos Enviados', value: '47', color: 'text-[#8B5CF6]' },
  { icon: <Users className="w-6 h-6" />, label: 'Votos Recibidos', value: '1,892', color: 'text-[#3B82F6]' },
  { icon: <Flame className="w-6 h-6" />, label: 'Racha Actual', value: '12 días', color: 'text-[#EF4444]' },
]

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-6 rounded-2xl bg-[#1a2d4a] border border-[#1a2d4a] card-hover"
        >
          <div className={`w-12 h-12 rounded-xl bg-[#0a1628] flex items-center justify-center mb-4 ${stat.color}`}>
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-white font-cinzel">{stat.value}</div>
          <div className="text-sm text-[#94a3b8]">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}
