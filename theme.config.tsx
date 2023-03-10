import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>BK Bank UI</span>,
  project: {
    link: 'https://github.com/jvzaniolo/bkbank-ui/',
  },
  nextThemes: {
    defaultTheme: 'light',
  },
  darkMode: false,
  chat: {
    // link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/jvzaniolo/bkbank-ui/',
  footer: {
    text: 'BK Bank - Design System Documentation',
  },
}

export default config
