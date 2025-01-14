import { logger } from "../../utils/logger.js";
import pool from "../../database/index.js";

export const createUserTable = async () => {
  try {
    // await pool.query(`
    //     CREATE TYPE USER_ROLE AS ENUM('user', 'admin', 'manager');
    //   `)

    await pool.query(`
           CREATE TABLE IF NOT EXISTS users (
             id SERIAL PRIMARY KEY,
             user_id INTEGER REFERENCES users(id),
             platform VARCHAR NOT NULL,
             platform_user VARCHAR NOT NULL
           );
         `);
  } catch (error) {
    logger.error(error);
  }
};
