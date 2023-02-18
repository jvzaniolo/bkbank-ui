module.exports = {
  stories: [
    '../packages/storybook/**/*.stories.mdx',
    '../packages/storybook/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-postcss',
  ],
  framework: '@storybook/html',
};
