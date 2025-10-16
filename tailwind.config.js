/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-blue": "#1E88E5",
        "primary-green": "#43A047",
        "secondary-blue": "#64B5F6",
        "secondary-green": "#81C784",
        "bg-light": "#F5F9FF",
        "bg-dark": "#1A237E",
        "text-primary": "#2C3E50",
        "text-secondary": "#607D8B",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
        secondary: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
