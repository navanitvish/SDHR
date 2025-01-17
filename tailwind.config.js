/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "pulse-slow": "pulse 10s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
