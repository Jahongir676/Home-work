import express from 'express';
import { GetAllUsers, GetUserById, UpdateUser, DeleteUser } from  "../controllers/index.js";

const usersRouter = express.Router();

usersRouter.get("/", GetAllUsers);
usersRouter.get("/:id", GetUserById);
usersRouter.put(":id", UpdateUser);
usersRouter.delete("/:id", DeleteUser);

export default usersRouter;