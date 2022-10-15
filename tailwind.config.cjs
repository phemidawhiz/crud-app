/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: '10px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      '2xl': '24px',
      '3xl': '36px',
      '4xl': '48px',
      '5xl': '64px',
      '6xl': '72px'
    },
    fontWeight: {
      hairline: 100,
      'extra-light': 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    colors: {
      'purple': '#4834d4',
      'cyan': 'hsl(180, 66%, 49%)',
      'cyan-hover': 'rgba(41,199,199,0.7)',
      'violet': "#7158e2",
      'danger': 'hsl(0, 87%, 67%)',
      'tomato': 'tomato',
      'dark-blue': 'hsl(255, 11%, 22%)',
      'gray-violet': ' hsl(257, 7%, 63%)',
      'very-dark-violet': ' hsl(260, 8%, 14%)',
      'gray': 'hsl(0, 0%, 75%)',
      'light': '#f5f5f5',
      'white': '#fff',
      'black': '#1e272e'
    },
    'hero-pattern': "url('/img/hero-pattern.svg')",
    'footer-texture': "url('/img/footer-texture.png')",
    spacing: {
      '1': '4px',
      '2': '8px',
      '4': '16px',
      '6': '24px',
      '8': '32px',
      '12': '48px',
      '16': '64px',
      '20': "84px",
      '24': '96px',
      '32': '128px',
    },
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.25em',
    },
    extend: {
      height: {
        '128': '32rem',
        '12': '48px',
      },
      lineHeight: {
        'loose': '2.5px',
        '12': '3rem',
      }
    },
  },
  plugins: [],
}
