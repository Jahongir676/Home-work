import pool from '../database/db.js';

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);
        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'User not found' });
        }
        const user = result.rows[0];
        if (user.password !== password) {
            return res.status(401).json({ message: 'Invalid password' });
        }
        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        res.status(500).json({ message: 'Error during login', error: err.message });
    }
};

export const createUser = async (req, res) => {
    const { first_name, last_name, email, password, location } = req.body;
    try {
        const checkQuery = 'SELECT * FROM users WHERE email = $1';
        const checkResult = await pool.query(checkQuery, [email]);
        if (checkResult.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const insertQuery = 'INSERT INTO users (first_name, last_name, email, password, location) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const result = await pool.query(insertQuery, [first_name, last_name, email, password, location]);
        res.status(201).json({ message: 'User created successfully', user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ message: 'Error creating user', error: err.message });
    }
};

export const getAllUsers = async (req, res) => {
    const { limit = 10, offset = 0, first_name, last_name } = req.query;
    let query = 'SELECT * FROM "Users" WHERE 1=1';
    const values = [];
  
    if (first_name) {
      values.push(`%${first_name}%`);
      query += ` AND "first_name" ILIKE $${values.length}`;
    }
    if (last_name) {
      values.push(`%${last_name}%`);
      query += ` AND "last_name" ILIKE $${values.length}`;
    }
  
    query += ` LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(limit, offset);
  
    try {
      const result = await pool.query(query, values);
      res.status(200).json({ users: result.rows });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users', error: err.message });
    }
  };

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM users WHERE user_id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ message: 'Error fetching user', error: err.message });
    }
};

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password, location } = req.body;
    try {
        const query = 'UPDATE users SET first_name = $1, last_name = $2, email = $3, password = $4, location = $5 WHERE user_id = $6 RETURNING *';
        const result = await pool.query(query, [first_name, last_name, email, password, location, id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User updated successfully', user: result.rows[0] });
    } catch (err) {
        res.status(500).json({ message: 'Error updating user', error: err.message });
    }
};

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM users WHERE user_id = $1', [id]);
        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error deleting user', error: err.message });
    }
};
