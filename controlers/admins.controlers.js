import pool from '../database/db.js'

export const getAllAdmins = async (req, res) => {
    const { limit = 10, offset = 0, first_name, last_name } = req.query;
    let query = 'SELECT * FROM "Admin" WHERE 1=1';
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
      res.status(200).json({ admins: result.rows });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching admins', error: err.message });
    }
  };

export const createAdmin = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password} = req.body;
    const result = await pool.query('INSERT INTO "Admin" (id, first_name, last_name, email, password) VALUES ($1, $2, $3, $4, $5) RETURNING *', [id, first_name, last_name, email, password]);
    res.json(result.rows[0]);
};

export const getAdminByID = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM "Admin" WHERE id = $1', [id]);
    res.json(result.rows[0]);
};

export const updateAdmin = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, password } = req.body;
    const result = await pool.query('UPDATE "Admin" SET first_name = $1, last_name = $2, email = $3, password = $4 WHERE id = $5 RETURNING *', [first_name, last_name, email, password, id]);
    res.json(result.rows[0]);
};

export const deleteAdmin = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('DELETE FROM "Admin" WHERE id = $1', [id]);
    res.json(result.rows[0]);
};

