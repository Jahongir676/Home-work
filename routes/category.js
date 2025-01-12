import express from 'express';
import { createCategory, getCategories, updateCategory, deleteCategory } from '../controllers/category.js';
import { authGuard } from '../middleware/authMiddleware.js';
import { roleGuard } from '../middleware/roleMiddleware.js';

const categoryRouter = express.Router();

categoryRouter.post('/', authGuard, roleGuard('author'), createCategory);
categoryRouter.get('/', authGuard, getCategories);
categoryRouter.put('/:id', authGuard, roleGuard('author'), updateCategory);
categoryRouter.delete('/:id', authGuard, roleGuard('author'), deleteCategory);

export default categoryRouter;
