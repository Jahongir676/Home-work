import User from '../models/index.js';

export const getAllUsers = async (req, res) => {
    const users = await User.find().select('-password');
    res.json(users);
};

export const getUserById = async (req, res) => {
    const user = await User.findById(req.params.userId).select('-password');
    res.json(user);
};

export const createUser = async (req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
};

export const updateUser = async (req, res) => {
    const updatedUser = await User.findByIdAndUpdate(req.params.userId, req.body, { new: true }).select('-password');
    res.json(updatedUser);
};

export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.userId);
    res.status(204).end();
};
