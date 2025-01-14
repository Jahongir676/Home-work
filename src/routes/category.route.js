import express from "express";
import { categoryController } from '../controller/index.js';
import { categoryValidation } from '../validations/index.js';
export const categoryRouter = express.Router();

categoryRouter.get('/', categoryController.AllCategories);
categoryRouter.get('/:id', categoryController.CategoryById);
categoryRouter.post('/', categoryValidation, categoryController.createCategory);
categoryRouter.put('/:id', categoryValidation, categoryController.updateCategory);
categoryRouter.delete('/:id', categoryController.deleteCategory);
