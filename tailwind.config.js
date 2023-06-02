/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        main:["Poppins"]
      },
      colors:{
        mainColor:"#32aeff",
        backgroundPage:"#232946",
        backgroundMain:"#b8c1ec",
        textColor2:"#b8c1ec",
        textColor:"#ffffff",
        btnColor:"#d70224",

      },
      animation:{
        "custom-slow-rotate":"rotate 30s 1 forwards"
      },
      keyframes:{
        fadeUp:{
          '0%': { transform: 'translateY(-100px) scale(0)',
                },
          '100%':{transform:'translateY(0px) scale(1)'}
        },
        rotate:{
          "0%": {rotate:'0deg',
                scale:"0",
                origin: "center",
              },
          "50%":{scale:"3 1.5", origin: "center",},
          "100%":{rotate:"360deg",
                scale:"6 1.5",
                origin: "center",      
        }
        }
      }
    },
  },
  plugins: [],
}

