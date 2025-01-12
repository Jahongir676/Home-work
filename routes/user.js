import express from 'express';
import { createUser, getUsers, updateUser, deleteUser } from '../controllers/user.js';

const userRouter = express.Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);

export default userRouter;
