import pool from '../database/db.js';

export const getAllComments = async (req, res) => {
    const { limit = 10, offset = 0, product_id } = req.query;
    let query = 'SELECT * FROM "Comments" WHERE 1=1';
    const values = [];
  
    if (product_id) {
      values.push(product_id);
      query += ` AND "product_id" = $${values.length}`;
    }
  
    query += ` LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(limit, offset);
  
    try {
      const result = await pool.query(query, values);
      res.status(200).json({ comments: result.rows });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching comments', error: err.message });
    }
  };

export const createComment = async (req, res) => {
    const { product_id, comment } = req.body;
    await pool.query(
        'INSERT INTO "Comments" ("product_id", "comment") VALUES ($1, $2)',
        [product_id, comment]
    );
    res.json({ message: 'Comment created' });
};
