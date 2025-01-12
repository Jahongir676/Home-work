import express from 'express';
import { createAuthor, getAuthors, updateAuthor, deleteAuthor } from '../controllers/auth.js';
import { authGuard } from '../middleware/authMiddleware.js';

const authRouter = express.Router();

authRouter.post('/', authGuard, createAuthor);
authRouter.get('/', authGuard, getAuthors);
authRouter.put('/:id', authGuard, updateAuthor);
authRouter.delete('/:id', authGuard, deleteAuthor);

export default authRouter;
