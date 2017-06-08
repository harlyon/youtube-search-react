const path = require('path')
const webpack = require('webpack')

module.exports = {
  context: __dirname,
  entry: [
    './src/index.js'
  ],
  devtool: 'cheap-eval-source-map',
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: false,
    modules: false
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
}
