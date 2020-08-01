module.exports = function (req, res, next) {
    res.setHeader('X-time', `${new Date().toLocaleString()}`);
    next();
  }