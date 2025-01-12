import categoryModel from '../models/index.js';

export const getAllCategories = async () => {
    return await categoryModel.find();
};

export const getCategoryById = async (id) => {
    return await categoryModel.findById(id);
};

export const createCategory = async (categoryData) => {
    const category = new categoryModel(categoryData);
    return await category.save();
};

export const updateCategory = async (id, categoryData) => {
    return await categoryModel.findByIdAndUpdate(id, categoryData, { new: true });
};

export const deleteCategory = async (id) => {
    return await categoryModel.findByIdAndDelete(id);
};
