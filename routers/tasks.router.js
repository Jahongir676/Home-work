import express from 'express';
import { GetAllTasks, GetTaskById, CreateTask, UpdateTask, DeleteTask } from "../controllers/index.js";

const tasksRouter = express.Router();

tasksRouter.get("/", GetAllTasks);
tasksRouter.get("/:id", GetTaskById);
tasksRouter.post("/", CreateTask);
tasksRouter.put("/:id", UpdateTask);
tasksRouter.delete("/:id", DeleteTask);

export default tasksRouter;
