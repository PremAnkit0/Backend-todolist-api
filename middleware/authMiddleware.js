const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Bearer <token>
  if (!token) return res.status(401).send("Access Denied");

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Attach user info to req
    next(); // Go to next middleware/route
  } catch (err) {
    res.status(400).send("Invalid Token");
  }
};

module.exports = auth;
