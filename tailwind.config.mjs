import { DM_Sans } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '640px', // => @media (min-width: 640px)
      'md': '768px', // => @media (min-width: 768px)
      'lg': '1024px', // => @media (min-width: 1024px)
      'xl': '1280px', // => @media (min-width: 1280px)
      '2xl': '1536px', // => @media (min-width: 153px)
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        secondary: {
          100:'#BBD51A',
          200: '#26683C',
          300: '#6F6F6F',
          400: '#EFEFEF',
        }
      },
      lineHeight: {
        '12': '67px',
      },

      backgroundImage: {
        'home-image': "url('/Component 5.png')",
      },

      height:{
        'custom' : "674px",
        '345': '345px',
      },

      fontFamily: {
        dmSans: [' DM_San'],
        serif: ['DM Serif Text', 'serif'],  // Add DM Serif Text to the 'serif' font family
      },
      width:{
        'custom': '615px',
      },
    },
  },
  plugins: [],
};
