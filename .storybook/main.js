/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: [
    '../storybook/**/*.mdx',
    '../storybook/**/*.stories.@(js|jsx|ts|tsx)',
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
            config: './storybook/postcss.config.js',
          },
        },
      },
    },
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {
      lazyCompilation: true,
    },
  },
  docs: {
    autodocs: 'tag',
  },
};

export default config;
