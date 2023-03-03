module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
          postcssOptions: {
            config: './stories/postcss.config.js',
          },
        },
      },
    },
  ],
  staticDirs: ['../packages/ui/scripts/components'],
  features: {
    previewMdx2: true,
  },
  builder: {
    name: 'webpack5',
    options: {
      lazyCompilation: true,
    },
  },
  framework: '@storybook/react',
};
