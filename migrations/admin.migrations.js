import { pool } from "../databases/index.js";

export const createAdminTable = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS "Admin" (
        admin_id BIGINT PRIMARY KEY,
        first_name VARCHAR(255),
        last_name VARCHAR(255),
        email VARCHAR(255) UNIQUE,
        password BIGINT,
        add_product VARCHAR(255),
        users_data TEXT
      )
    `);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const dropAdminTable = async () => {
  try {
    await pool.query(`
      DROP TABLE IF EXISTS "Admin"
    `);
  } catch (error) {
    throw new Error(error.message);
  }
};
