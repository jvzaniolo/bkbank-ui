module.exports = {
  stories: [
    '../packages/storybook/stories/**/*.stories.mdx',
    '../packages/storybook/stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        options: {
          cssLoaderOptions: {
            importLoaders: 1,
          },
          postcssLoaderOptions: {
            implementation: require('postcss'),
          },
        },
      },
    },
  ],
  framework: '@storybook/html',
  features: {
    storyStoreV7: true,
  },
  core: {
    builder: '@storybook/builder-vite',
  },
};
