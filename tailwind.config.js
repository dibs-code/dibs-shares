/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'lg1440': '1440px'
      },
      fontSize: {
        22: '22px'
      },
      width: {
        22: '5.5rem',
        68: '17rem',
        92: "23rem",
        88: "22rem",
        84: "21rem",
        100: '25rem',
        104: '26rem',
      },
      padding: {
        92: "23rem",
        88: "22rem",
        84: "21rem"
      },
      colors: {
        primary: '#5158F6',
        secondary: '#F59569',
        input: '#EFF3F8',
        label: '#565656',
        black: '#353535',
        chips: '#5EBAB0',
        gray: '#6F7787',
        body: '#F6F8FA',
        disabled: '#E2E4E7',
        'dark-gray-2': '#535353',
        'soft-sky': '#BCC8DE',
        'soft-blue': '#EBF5FB',
        'soft-pink': '#FCEFEF',
        'light-gray': '#EBECEF',
        'light-gray-2': '#EDF2F3',
        'dark-gray': '#757575',
        'light-gray-3': '#96969F',
        'blue-gray-light': '#E9EFF6',
        'primary-light': '#EEEFFF',
        'primary-light-2': '#F8F0F4',
        'secondary-light': '#FFECE4',
        'secondary-light-2': '#F6C7B4',
        'disabled-bg': '#C0C0C0',
        'disabled-text': '#939393',
      },
      backgroundImage: {
        'token-left': "url('/img/tokenLeft-background.svg')",
        gradient: 'linear-gradient(135deg,#5158f6,#822df5 33.76%,#f3a761)',
        lottery: 'linear-gradient(62.08deg, #F9DEDE 8.16%, #DCDEFD 104.78%);',
        'presale-header': "url('/img/presale-header.svg')",
        nocode: "url('../public/nocode.png')",
        codeinfo: "url('../public/codeinfobg.png')",
        'public-sale-header': "url('/img/public-header.svg')",
        squircle: "url('../public/squircle.png')",
        'gradient-light': "radial-gradient(62.15% 4494.21% at 43.37% 31.6%, rgba(239, 71, 111, 0.1) 0%, rgba(94, 87, 145, 0.1) 100%)",
        blob: "url('/img/blob-bg.svg')",
        blur: "url('/img/blur-bg.svg')",
        tf: "url('../public/tf-bg.svg')",
        cf: "url('../public/cf-bg.svg')",
        g2: "linear-gradient(92.79deg, rgba(246, 150, 81, 0.177) -1.84%, rgba(246, 81, 121, 0.183) 108.07%)",
        g3: "linear-gradient(92.79deg, rgba(81, 88, 246, 0.177) -1.84%, rgba(154, 81, 246, 0.183) 108.07%)",
      },
      boxShadow: {
        'primary-xl': '0px 8px 18px rgba(81, 88, 246, 0.15)',
        header: '0px 4px 12px rgba(0, 0, 0, 0.07)',
        'lottery-inner-card': '0px 12px 18px rgba(0, 0, 0, 0.06)',
        button: '0px 8px 12px rgba(0, 0, 0, 0.22)'
      },
      zIndex: {
        100: '100',
      },
    },
  },
}
  // plugins: [require('@tailwindcss/forms'),require('@tailwind