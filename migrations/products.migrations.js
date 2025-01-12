import { pool } from "../databases/index.js";

export const createProductsTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "Products" (
        product_id BIGINT PRIMARY KEY,
        product_name VARCHAR(255),
        product_price BIGINT,
        product_rating FLOAT,
        comments TEXT
      )
    `);
  } catch (error) {
    throw new Error(error.message);
  }
};
