module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(c|le)ss$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      }
    ]
  }
}
