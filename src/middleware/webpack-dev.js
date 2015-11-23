if (process.env.NODE_ENV === 'production') {
  module.exports = (req, res, next) => next();
} else {

  var compiler = require('./compiler');
  var config = require('../../webpack.config.dev');

  module.exports = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  });
}
