/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'flag_sverd': "url('https://i.postimg.cc/mkBB9V0H/flag.webp')",
        'flag_sverd': "url('https://i.postimg.cc/63dBTF1K/flag-1.jpg')",
        'logo': "url('https://i.postimg.cc/Vvg1Wn8H/inprof-logo.jpg')",
        'logo_svg': "url('https://i.postimg.cc/BQZJQY5W/inprof-logo.png')",
      },
      width: {
        '40-r': '30rem',
        '35-r': '20rem'
      },
      height: {
        '40-r': '30rem',
        '35-r': '20rem'
      },

    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}