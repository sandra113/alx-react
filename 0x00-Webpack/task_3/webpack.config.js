const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development', // Set Webpack mode to development
  entry: {
    header: './modules/header/header.js',
    body: './modules/body/body.js',
    footer: './modules/footer/footer.js'
  },
  output: {
    filename: '[name].bundle.js', // Generate separate bundles for each entry point
    path: path.resolve(__dirname, 'public'),
    clean: true // Clean the build folder on each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'], // Load and inject CSS
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Use your HTML template
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    static: path.join(__dirname, 'public'),
    port: 8564, // Set the port for the dev server
    open: true // Automatically open the browser
  },
  devtool: 'inline-source-map' // Improve development speed with inline source mapping
};
