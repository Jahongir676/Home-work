import express from 'express';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser } from '../controlers/index.js';

const useRouter = express.Router();

useRouter.get('/', getAllUsers);
useRouter.get('/:userId', getUserById);
useRouter.post('/', createUser);
useRouter.put('/:userId', updateUser);
useRouter.delete('/:userId', deleteUser);

export default useRouter;
