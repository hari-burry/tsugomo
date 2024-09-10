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
        }
      },
      animation: {
        gapout:'gapout 0.5s ease-in',
        gapout2:'gapout 0.2s ease-in',
        fadeIn: 'fadeIn 0.5s ease-in-out',
        fadeIn2:'fadeIn 1s ease-in-out',
      },
      fontFamily:{
        'Hurricane':['Hurricane'],
        'Montserrat':['Montserrat'],
      },
      backgroundImage:{
         'mybg':"url('../assets/wl2.jpg')",
      },
    },
  },
  plugins: [],
}
