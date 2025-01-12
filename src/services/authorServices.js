import authorModel from '../models/index.js';

export const getAllAuthors = async () => {
    return await authorModel.find();
};

export const getAuthorById = async (id) => {
    return await authorModel.findById(id);
};

export const createAuthor = async (authorData) => {
    const author = new authorModel(authorData);
    return await author.save();
};

export const updateAuthor = async (id, authorData) => {
    return await authorModel.findByIdAndUpdate(id, authorData, { new: true });
};

export const deleteAuthor = async (id) => {
    return await authorModel.findByIdAndDelete(id);
};
