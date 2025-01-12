import { pool } from "../databases/index.js";

export const createUsersTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "Users" (
        user_id SERIAL PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password BIGINT,
        order_id BIGINT REFERENCES "Orders"(order_id),
        location VARCHAR(255)
      )
    `);
  } catch (error) {
    throw new Error(error.message);
  }
};
