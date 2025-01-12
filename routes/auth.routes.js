import express from "express";
import { loginUserController, logoutUserController, registerUserController } from '../controllers/index.js';

export const authRouter = express.Router()


authRouter.post("/register", registerUserController)
authRouter.post("/login", loginUserController)
authRouter.post("/logout", logoutUserController)