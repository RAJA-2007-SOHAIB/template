import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // Overrides the common style-loader with the extraction loader
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
});
