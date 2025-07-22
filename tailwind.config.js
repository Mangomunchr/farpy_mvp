module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        farpy: {
          background: "#05050a",
          neon: "#00ff99",
          accent: "#0afff7",
          danger: "#ff3c71"
        }
      },
      fontFamily: {
        mono: ["'Share Tech Mono'", "monospace"]
      }
    }
  },
  plugins: []
};
