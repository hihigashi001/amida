const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // 'media' or 'class'
  theme: {
    fontFamily: {
      body: [
        'Open Sans',
        'メイリオ',
        'Meiryo',
        'YuGothic',
        'Yu Gothic',
        'MS PGothic',
        'sans-serif'
      ]
    },
    extend: {
      gridTemplateRows: {
        'layout-rows': '50px 50px 1fr 30px',
      },
      gridTemplateColumns: {
        'layout-columns': '200px 1fr',
      },
      colors: {
        'primary': '#4CAF93',
        'secondary': '#5cd6b4',
        'tertiary': '#EDF4F0',
        'hover': '#FCFADE',
        'hoverCommit': '#faf6be',
        'seoColor': '#020202',
      },

    },
  },
  variants: {
    extend: {
      backgroundColor: ['even', 'odd'],
      borderCollapse: ['hover', 'focus'],
    }
  },
  plugins: [
    require('tailwindcss-writing-mode')({
      variants: ['responsive', 'hover']
    })
  ],
  experimental: {
    optimizeFonts: true,
  },
};
