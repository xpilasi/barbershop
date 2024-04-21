/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    letterSpacing:{
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    extend: {
      colors:{
       'barber-bg': '#1D1C1C',
       'beige':'#D7D4D1'
      },
      fontFamily:{
        merryRegular: 'merri_w_regular',
        heaters:'heaters',
        highrise:'highrise',
        heavitas:'heavitas',
        hilborn:'hilborn',
        bebasKai:'bebasKai',
        smythe:'smythe'
      }
    },
  },
  plugins: [],
}

