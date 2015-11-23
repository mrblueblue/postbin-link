if (process.env.NODE_ENV === 'production'){
  module.exports = (req, res, next) => next()
} else {
  var compiler = require('./compiler');
  module.exports = require('webpack-hot-middleware')(compiler);
}
