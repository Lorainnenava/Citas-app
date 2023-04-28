const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ msg: "Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req._idUser = decoded.user._id;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Token inválido" });
  }
};

module.exports = verifyToken;
