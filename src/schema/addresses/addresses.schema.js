import { logger } from "../../utils/logger.js";
import pool from "../../database/index.js";

export const createAddressTable = async () => {
  try {
    // await pool.query(`
    //     CREATE TYPE USER_ROLE AS ENUM('user', 'admin', 'manager');
    //   `)

    await pool.query(`
           CREATE TABLE IF NOT EXISTS users (
             id SERIAL PRIMARY KEY,
             user_id INT REFERENCES users(id),
             title VARCHAR NOT NULL,
             created_at TIMESTAMPTZ,
             address_line_1 VARCHAR NOT NULL,
             address_line_2 VARCHAR NOT NULL, 
             country VARCHAR NOT NULL,
             city VARCHAR NOT NULL,
             postal_code VARCHAR NOT NULL,
             phone_number VARCHAR UNIQUE NOT NULL,
             created_at TIMESTAMPTZ,
             updated_at TIMESTAMPTZ
           );
         `);
  } catch (error) {
    logger.error(error);
  }
};
