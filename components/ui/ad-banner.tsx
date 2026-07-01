'use client'

export default function AdBanner({ slot, type = 'horizontal' }: { slot: string; type?: 'horizontal' | 'vertical' | 'square' }) {
  const sizeClass = type === 'horizontal' ? 'h-24 w-full max-w-3xl' : type === 'vertical' ? 'h-64 w-48' : 'h-64 w-64'

  return (
    <div className={`${sizeClass} mx-auto rounded-xl border-2 border-dashed border-[#8B5CF6]/30 bg-[#1a2d4a]/50 flex items-center justify-center`}>
      <div className="text-center p-4">
        <div className="text-xs text-[#94a3b8] mb-1">Anuncio</div>
        <div className="text-xs text-[#94a3b8]/60 font-mono break-all">{slot}</div>
        <div className="text-xs text-[#FFD700] mt-2">Espacio para Google AdSense</div>
      </div>
    </div>
  )
}
