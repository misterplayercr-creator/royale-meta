import { createServerSupabase } from '@/lib/supabase/server'

export default async function RankingPage() {
  const supabase = await createServerSupabase()
  const { data: usuarios } = await supabase
    .from('usuarios')
    .select('*')
    .order('puntos_total', { ascending: false })
    .limit(50)

  return (
    <div className="min-h-screen bg-[#0a1628] pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-cinzel text-3xl md:text-4xl font-bold text-white mb-8">Ranking Global</h1>
        <div className="space-y-4">
          {usuarios?.map((user, index) => (
            <div key={user.id} className="flex items-center justify-between p-4 rounded-xl bg-[#1a2d4a] border border-[#1a2d4a]">
              <div className="flex items-center gap-4">
                <span className="font-cinzel font-bold text-xl text-[#FFD700]">#{index + 1}</span>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center text-white font-bold">
                  {user.username.charAt(0).toUpperCase()}
                </div>
                <span className="font-semibold text-white">@{user.username}</span>
              </div>
              <span className="text-[#FFD700] font-bold">{user.puntos_total.toLocaleString()} pts</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
