import express from 'express';
import { getAuthors, getAuthorById, createAuthor, updateAuthor, deleteAuthor } from '../controllers/index.js';

const authorRoutes = express.Router();

authorRoutes.get('/', getAuthors);
authorRoutes.get('/:id', getAuthorById);
authorRoutes.post('/', createAuthor);
authorRoutes.put('/:id', updateAuthor);
authorRoutes.delete('/:id', deleteAuthor);

export default authorRoutes;
