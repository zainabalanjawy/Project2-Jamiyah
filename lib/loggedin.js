module.exports = function (req, res, next) {
  // console.log(req.isAuthenticated());
  if (!req.user) {
    res.redirect("/");
  } else {
    next();
  }
};
