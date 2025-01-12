import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import pool from '../config/db.js';

const SECRET_KEY = 'just_a_secret_key';

const authMiddleware = {
  register: async (req, res, next) => {
    const { name, email, password } = req.body;
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const result = await pool.query(
        'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
        [name, email, hashedPassword]
      );
      const user = result.rows[0];
      const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
      req.user = { id: user.id, name: user.name, email: user.email, token };
      next();
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  login: async (req, res, next) => {
    const { email, password } = req.body;
    try {
      const result = await pool.query('SELECT * FROM Users WHERE email = $1', [email]);
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'User not found' });
      }

      const user = result.rows[0];
      const validPassword = await bcrypt.compare(password, user.password);
      if (validPassword) {
        const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
        req.user = { id: user.id, name: user.name, email: user.email, token }; 
        next(); 
      } else {
        res.status(401).json({ error: 'Invalid password' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },

  auth: (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      req.user = decoded;
      next();
    } catch (err) {
      res.status(403).json({ error: 'Invalid or expired token.' });
    }
  },
};

export default authMiddleware;
