module.exports = {
  entry: {
    main: [
      'webpack/hot/dev-server',
      './main.js'
    ]
  },
  output: {
    path: __dirname,
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components|dist)/,
        loader: 'babel'
      }
    ]
  },
  devtool: 'source-map',
  watch: true,
  watchOptions: {
    poll: true
  }
};
