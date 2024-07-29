/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container : {
        center: true,
        padding: '1rem'
      }

    },

    screens: {
      // maxsm:'380px',
      xxs: '380px',
      // => @media (min-width: 350px) { ... }

      xs: '450px',
      // => @media (min-width: 450px) { ... }

      sm: '575px',
      // => @media (min-width: 576px) { ... }

      md: '770px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 992px) { ... }

      xl: '1200px',
      // => @media (min-width: 1200px) { ... }

      '2xl': '1400px',
      // => @media (min-width: 1400px) { ... }
  },

    
  },
  plugins: [],
}
