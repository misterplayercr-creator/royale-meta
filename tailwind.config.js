/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fondo: {
          principal: '#0a1628',
          secundario: '#111d33',
          tarjeta: '#1a2d4a',
        },
        dorado: '#FFD700',
        purpura: '#8B5CF6',
        azul: '#3B82F6',
        exito: '#10B981',
        peligro: '#EF4444',
      },
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
