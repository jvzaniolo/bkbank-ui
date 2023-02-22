module.exports = {
  stories: [
    '../packages/storybook/stories/**/*.mdx',
    '../packages/storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
  ],
  staticDirs: ['../node_modules/@fontsource/montserrat'],
  framework: {
    name: '@storybook/html-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
