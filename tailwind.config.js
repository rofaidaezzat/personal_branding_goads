
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        go: {
          orange: '#F1592A',
          black: '#050505',
          gray: '#F9FAFB',
          warm: '#FAF9F6',
          orangeLight: '#FFF0EC'
        }
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 10px 40px -10px rgba(0,0,0,0.08)',
        'glow': '0 0 20px rgba(241, 89, 42, 0.4)',
      }
    },
  },
  plugins: [],
}
