/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          // Adicionando nossa paleta personalizada VidaPlus aqui
          primary: {
              DEFAULT: '#7c3aed', // Violet 600
              hover: '#6d28d9',
          },
          secondary: '#2dd4bf', // Teal 400
        }
      },
    },
    plugins: [],
  }
