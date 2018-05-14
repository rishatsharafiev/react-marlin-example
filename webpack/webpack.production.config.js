module.exports = require('./webpack.make')({
  production: true,
  sourceMaps: false,
  lint: true,
  HtmlWebpackPlugin: {
    title: 'Super Hot Sales ⚡⚡⚡'
  },
});
