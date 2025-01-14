import { logger } from '../../utils/logger.js'
import pool from '../../database/index.js'

export const createCategory = async () => {
    try {
        await pool.query(
            `
            CREATE TABLE IF NOT EXISTS categories (
            id SERIAL PRIMARY KEY,
            name VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            tag VARCHAR NOT NULL,
            created_at TIMESTAMPTZ,
            updated_at TIMESTAMPTZ
            );
            `)
    } catch (error) {
        logger.error(error);
    }
}