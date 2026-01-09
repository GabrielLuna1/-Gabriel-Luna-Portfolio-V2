import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // O segredo está aqui: Este comando manda o Tailwind olhar TUDO dentro de src
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B", // Preto Profundo
        surface: "#18181B",    // Cinza Surface
        primary: "#22D3EE",    // Ciano Neon
        secondary: "#A1A1AA",  // Cinza Texto Muted
        white: "#F4F4F5",      // Branco Gelo
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        display: ['var(--font-sora)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;