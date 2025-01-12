import express from 'express';
import { getAllTasks, getTaskById, createTask, updateTask, deleteTask } from '../controlers/index.js';

const taskRouter = express.Router();

taskRouter.get('/', getAllTasks);
taskRouter.get('/:taskId', getTaskById);
taskRouter.post('/', createTask);
taskRouter.put('/:taskId', updateTask);
taskRouter.delete('/:taskId', deleteTask);

export default taskRouter;
