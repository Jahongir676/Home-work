import Task from '../models/index.js';

export const getAllTasks = async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
};

export const getTaskById = async (req, res) => {
    const task = await Task.findById(req.params.taskId);
    res.json(task);
};

export const createTask = async (req, res) => {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
};

export const updateTask = async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.taskId, req.body, { new: true });
    res.json(updatedTask);
};

export const deleteTask = async (req, res) => {
    await Task.findByIdAndDelete(req.params.taskId);
    res.status(204).end();
};
