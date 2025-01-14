import pool from '../database/index.js';

export const getAllCategories = async () => {
    try {
        const categories = await pool.query(`SELECT * FROM categories`);
        return categories.rows;
    } catch (error) {
        return error
    }
};

export const getCategoryById = async (id) => {
    try {
        const category = await pool.query(`SELECT * FROM categories WHERE id = $1`, [id]);
        return category.rows[0];
    } catch (error) {
        return error
    }
};

export const createCategory = async (data) => {
    try {
        const createCategory = await pool.query(`INSER INTO categories (name, description tag) VALUES ($1, $2, $3) RETURNING * `, [data.name, data.description, data.tag]);
        return createCategory.rows[0];
    } catch (error) {
        return error
    }
};

export const updateCategory = async (id, data) => {
    try {
        const updateCategory = await pool.query(`UPDATE categories SET name = $1, description = $2, tag = $3 WHERE id = $4 RETURNING *`, [data.name, data.description, data.tag, id]);
        return updateCategory.rows[0];
    } catch (error) {
        return error
    }
};

export const deleteCategory = async (id) => {
    try {
        const deleteCategory = await pool.query(`DELETE FROM categories WHERE id = $1 RETURNING *`, [id]);
        return deleteCategory.rows[0];
    } catch (error) {
        return error
    }
};