import express from "express";
import { userController } from "../controller/index.js";
import { userDetailValidation } from "../validations/index.js";
export const userRouter = express.Router();

userRouter.get("/all", userController.AllUsers);
userRouter.get("/all/:id", userController.UserById);
userRouter.put("/update", userDetailValidation, userController.updateUser);
userRouter.delete("/delete", userController.deleteUser);

