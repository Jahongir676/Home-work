import { pool } from "../databases/index.js";

export const createCommentsTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "Comments" (
        product_id BIGINT REFERENCES "Products"(product_id),
        comment TEXT
      )
    `);
  } catch (error) {
    throw new Error(error.message);
  }
};
