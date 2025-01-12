import authMiddleware from '../middleware/auth.middleware.js';

export const register = (req, res) => {
  authMiddleware.register(req, res, () => {
    res.status(201).json(req.user);
  });
};

export const login = (req, res) => {
  authMiddleware.login(req, res, () => {
    res.json(req.user);
  });
};
