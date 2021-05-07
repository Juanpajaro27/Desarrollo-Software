const helps = {};

helps.auth = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/signin");
};

module.exports = helps;
