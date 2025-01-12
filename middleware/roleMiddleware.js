export const roleGuard = (requiredRole) => {
    return (req, res, next) => {
      try {
        if (!req.user || req.user.role !== requiredRole) {
          return res.status(403).json({ message: 'Ruxsat yo‘q' });
        }
        next();
      } catch (error) {
        next(error);
      }
    };
  };
  