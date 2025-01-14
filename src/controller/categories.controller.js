import { getAllCategories, getCategoryById, createCategory, updateCategory, deleteCategory } from '../services/index.js';

export const categoryController = {
    AllCategories: (req, res) => {
        try {
            const categories = getAllCategories();
            res.status(200).send({ msg: categories })
        } catch (error) {
            throw new Error(error.message);
        }
    },

    CategoryById: (req, res) => {
        try {
            const category = getCategoryById(req.params.id);
            if (category.rows.length === 0) {
                return res.status(404).send({ msg: "Category not found" });
            }
            res.status(200).send({ msg: category })
        } catch (error) {
            throw new Error(error.message);
        }
    },

    createCategory: (req, res) => {
        try {
            const createCategory = createCategory(req.body);
            res.status(200).send({ msg: createCategory })
        } catch (error) {
            throw new Error(error.message);
        }
    },

    updateCategory: (req, res) => {
        try {
            const updateCategory = updateCategory(req.params.id, req.body);
            res.status(200).send({ msg: updateCategory })
        } catch (error) {
            throw new Error(error.message);
        }
    },

    deleteCategory: (req, res) => {
        try {
            const deleteCategory = deleteCategory(req.params.id);
            res.status(200).send({ msg: "Category deleted" })
        } catch (error) {
            throw new Error(error.message);
        }
    }
}