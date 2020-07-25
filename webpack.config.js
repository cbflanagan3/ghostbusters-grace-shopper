module.exports = {
  entry: './client/App.js',
  mode: 'production',
  devtool: 'source-map',
  module: {
    rules: [
    //   {
    //     test: /\.(s*)css$/,
    //     use: ['style-loader', 'css-loader']
    //   },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        //   options: {
        //     presets: ['@babel/preset-react']
        //   }
        }
      }
    ]
  }
}
