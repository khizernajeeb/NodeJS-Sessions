const authorization = () => {
  return (req, res, next) => {
    if (req.headers["authorization"] != 123456789) {
      res.status(400).send({ error: true, message: "Authentication Error" });
    } else {
      next();
    }
  };
};

module.exports = authorization();
