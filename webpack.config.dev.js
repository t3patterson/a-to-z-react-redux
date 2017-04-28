const path = require('path')

module.exports = {
  context: __dirname,
  entry: './js/app.js',
  devtool: 'eval',
  output: {
    path: path.join( __dirname, '/public' ),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json']
  },
  stats: {
    colors: true,
    reasons: true,
    chunks: true
  },
  module: {
    rules: [
      { 
        test: /\.js$/,
        loader: 'babel-loader',
        include: path.resolve(__dirname, 'js')
      }
    ]
  }
}