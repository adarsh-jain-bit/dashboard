// tailwind.config.js
export default {
  theme: {
    extend: {
          
    colors: {
        purple: "var(--purple)",
        green: "var(--green)",
        "light-gray": "var(--light-gray)",
        white: "var(--white)",
        black: "var(--black)",
        whitelight: "var(--whitelight)",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' }, // or -100% depending on container
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
