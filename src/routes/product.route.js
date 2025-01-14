import express from 'express';
import { productController } from '../controller/index.js';
import { productValidation } from '../validations/index.js';
export const productRouter = express.Router();

productRouter.get('/all', productController.AllProducts);
productRouter.get('/all/:id', productController.Product);
productRouter.post('/create', productValidation, productController.createProduct);
productRouter.put('/update/:id', productValidation, productController.updateProduct);
productRouter.delete('/delete/:id', productController.deleteProduct);