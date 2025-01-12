import express from 'express';
import {loginUser,createUser,getAllUsers,getUser,updateUser,deleteUser} from '../controlers/index.js'
const userRouter = express.Router();

userRouter.post('/login',loginUser);
userRouter.post('/create',createUser);
userRouter.get('/',getAllUsers);
userRouter.get('/:id',getUser);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);

export default userRouter;