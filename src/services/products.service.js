import pool from "../database/index.js";

export const getAllProductsService = async () => {
    try {
        const getAllProducts = await pool.query(`SELECT * FROM products;`);
        return getAllProducts;
    } catch (error) {
        return error;
    }
};

export const getProductService = async (id) => {
    try {
        const getProduct = await pool.query(`SELECT * FROM products WHERE id = $1`, [id]);
        return getProduct;
    } catch (error) {
        return error;
    }
};
export const createProductService = async (data) => {
    try {
        const createProduct = await pool.query(`INSERT INTO products (name, description, price, stock, category_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`, [data.name, data.description, data.price, data.stock, data.category_id]);
        return createProduct;
    } catch (error) {
        return error;
    }
};

export const updateProductService = async (id, data) => {
    try {
        const updateProduct = await pool.query(`UPDATE products SET name = $1, description = $2, price = $3, stock = $4, category_id = $5 WHERE id = $6 RETURNING *`, [data.name, data.description, data.price, data.stock, data.category_id, id]);
        return updateProduct;
    } catch (error) {
        return error;
    }
};

export const deleteProductService = async (id) => {
    try {
        const deleteProduct = await pool.query(`DELETE FROM products WHERE id = $1`, [id]);
        return deleteProduct;
    } catch (error) {
        return error;
    }
};

