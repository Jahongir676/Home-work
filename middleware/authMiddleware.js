import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Token mavjud emas, kirish rad etildi' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Token notogri' });
  }
};

export const authGuard = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(409).send("Token not found");
    }

    const [type, token] = req.headers.authorization.split(" ");

    if (type !== "Bearer" || !token) {
      return res.status(409).send("Not valid data");
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
      if (err) {
        return res.status(403).send("Forbidden");
      }
      req.user = payload;
      console.log(payload);
      
      next();
    });
  } catch (error) {
    next(error);
  }
};

export default authMiddleware;
