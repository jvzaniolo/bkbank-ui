/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        '2xs': '0.625rem',
      },
      boxShadow: {
        'level-1': '0px 2px 4px rgba(0, 0, 0, 0.16)',
        'level-2': '0px 4px 8px rgba(0, 0, 0, 0.08)',
        'level-3': '0px 8px 24px rgba(0, 0, 0, 0.16)',
        'level-4': '0px 16px 32px rgba(0, 0, 0, 0.16)',
        'level-5': '0px 16px 48px rgba(0, 0, 0, 0.24)',
      },
      colors: {
        primary: {
          lightest: '#CBD6FF',
          lighter: '#A1A1FF',
          light: '#7474DB',
          medium: '#28289C',
          dark: '#0F0F70',
          pure: '#00003C',
        },
        secondary: {
          lightest: '#D7E2FF ',
          lighter: '#ACC7FF',
          light: '#6590DE',
          medium: '#2E5DA8',
          pure: '#2B4A7E',
          dark: '#002F67',
        },
        highlight: {
          lightest: '#BEF9FF ',
          lighter: '#96F5FE',
          light: '#41EFFF',
          pure: '#00CDDF',
          medium: '#00BFD0',
          dark: '#009AA8',
        },
        success: {
          light: '#40E4B8',
          pure: '#00BA88',
          medium: '#00976E',
          dark: '#004D38',
        },
        warning: {
          light: '#F4A360',
          pure: '#EB7E24',
          medium: '#DB6300',
          dark: '#9D4700',
        },
        error: {
          light: '#F3635F',
          pure: '#DE3730',
          medium: '#BD0600',
          dark: '#770300',
        },
        high: {
          light: '#F2F2F2',
          pure: '#FFFFFF',
          medium: '#E0E0E0',
          dark: '#BFBFBF',
        },
        low: {
          light: '#A4A4A4',
          pure: '#000000',
          medium: '#7A7A7A',
          dark: '#545454',
        },
      },
    },
  },
  plugins: [],
}
