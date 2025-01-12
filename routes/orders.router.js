import express from 'express';
import {getAllOrders, getOrderById, createOrder, updateOrder, deleteOrder} from '../controlers/index.js';
const ordersRouter = express.Router();

ordersRouter.get('/', getAllOrders);
ordersRouter.get('/:id', getOrderById);
ordersRouter.post('/', createOrder);
ordersRouter.put('/:id', updateOrder);
ordersRouter.delete('/:id', deleteOrder);

export default ordersRouter;
