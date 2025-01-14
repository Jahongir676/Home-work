import pool from '../../database/index.js'
import { logger } from '../../utils/logger.js';

export const createCategoryTable = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS products (
            id SERIAL PRIMARY KEY,
            category_id INTEGER NOT NULL FOREIGN KEY (category_id) REFERENCES categories (id),
            title VARCHAR NOT NULL,
            picture VARCHAR NOT NULL,
            summary VARCHAR NOT NULL,
            description VARCHAR NOT NULL,
            price REAL NOT NULL,
            discount_type ENUM NOT NULL,
            discount_value REAL NOT NULL,
            tags INTEGER[] NOT NULL,
            created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
            );
            `)
    } catch (error) {
        logger.error(error)
    }
};