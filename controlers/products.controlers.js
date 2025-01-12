import pool from '../database/db.js';

export const getAllProducts = async (req, res) => {
    const { limit = 10, offset = 0, name, min_price, max_price } = req.query;
    let query = 'SELECT * FROM "Products" WHERE 1=1';
    const values = [];
  
    if (name) {
      values.push(`%${name}%`);
      query += ` AND "product_name" ILIKE $${values.length}`;
    }
    if (min_price) {
      values.push(min_price);
      query += ` AND "product_price" >= $${values.length}`;
    }
    if (max_price) {
      values.push(max_price);
      query += ` AND "product_price" <= $${values.length}`;
    }
  
    query += ` LIMIT $${values.length + 1} OFFSET $${values.length + 2}`;
    values.push(limit, offset);
  
    try {
      const result = await pool.query(query, values);
      res.status(200).json({ products: result.rows });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching products', error: err.message });
    }
  };

export const getProductById = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT * FROM "Products" WHERE "product_id" = $1', [id]);
    res.json(result.rows[0]);
};

export const createProduct = async (req, res) => {
    const { product_name, product_price, product_rating, comments } = req.body;
    await pool.query(
        'INSERT INTO "Products" ("product_name", "product_price", "product_rating", "comments") VALUES ($1, $2, $3, $4)',
        [product_name, product_price, product_rating, comments]
    );
    res.json({ message: 'Product created' });
};

export const updateProduct = async (req, res) => {
    const { id } = req.params;
    const { product_name, product_price, product_rating, comments } = req.body;
    await pool.query(
        'UPDATE "Products" SET "product_name" = $1, "product_price" = $2, "product_rating" = $3, "comments" = $4 WHERE "product_id" = $5',
        [product_name, product_price, product_rating, comments, id]
    );
    res.json({ message: 'Product updated' });
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM "Products" WHERE "product_id" = $1', [id]);
    res.json({ message: 'Product deleted' });
};
