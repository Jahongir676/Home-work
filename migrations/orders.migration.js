import { pool } from "../databases/index.js";

export const createOrdersTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "Orders" (
        order_id BIGINT PRIMARY KEY,
        user_location VARCHAR(255) REFERENCES "Users"(location),
        is_received BOOLEAN
      )
    `);
  } catch (error) {
    throw new Error(error.message);
  }
};
