import Author from '../models/authorModel.js';

export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.findAll();
        res.json(authors);
    } catch (error) {
        res.json({ message: error.message });
    };
};

export const getAuthorById = async (req, res) => {
    try {
        const author = await Author.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(author[0]);
    } catch (error) {
        res.json({ message: error.message });
    };
};

export const createAuthor = async (req, res) => {
    try {
        await Author.create(req.body);
        res.json({
            "message": "Author Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    };
};

export const updateAuthor = async (req, res) => {
    try {
        await Author.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Author Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    };
};

export const deleteAuthor = async (req, res) => {
    try {
        await Author.destroy({
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Author Deleted"
        });
    } catch (error) {
        res.json({ message: error.message });
    };
};
