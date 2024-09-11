module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { filter:'blur(10px)' },
          '100%': { filter:'blue(0)' },
        },
        gapout:{
          '0%':{opacity:'0'},
           '100%':{opacity:'100'},
        },
        slidein:{
          '0%':{transform:"translateX(-500px)"},
          '100%':{transform:"translateX(0px)"}
        }
      },
      animation: {
        gapout:'gapout 0.5s ease-in',
        gapout2:'gapout 0.2s ease-in',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeIn2:'fadeIn 1s ease-in-out',
        fadeIn3:'fadeIn 3s ease-in',
        slidein:'slidein 3s ease-in'
      },
      fontFamily:{
        'Hurricane':['Hurricane'],
        'Montserrat':['Montserrat'],
        'Lexend':['Lexend'],
      },
      backgroundImage:{
         'mybg':"url('../assets/wl2.jpg')",
      },
    },
  },
  plugins: [],
}
