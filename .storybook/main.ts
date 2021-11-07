const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const webpackConfig = require('../node_modules/@vue/cli-service/webpack.config.js')

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-designs', '@storybook/addon-a11y'],
  // 很无语啊！一配置webpack就页面空白，可能是vue-cli生成的配置与这里的配置冲突？
  // webpackFinal: config => {
  //   config.module.rules.push({
  //     test: /\.(ts|tsx)$/,
  //     loader: require.resolve('ts-loader'),
  //     // options: { appendTsSuffixTo: [/\.vue$/] },
  //   })
  //   config.resolve.plugins = [
  //     ...(config.resolve.plugins || []),
  //     new TsconfigPathsPlugin({
  //       extensions: config.resolve.extensions,
  //     }),
  //   ]
  //   return { ...webpackConfig, ...config }
  // },
}
