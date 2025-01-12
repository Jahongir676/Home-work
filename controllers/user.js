import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) => {
  const { email, password, role } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword, role });
    await newUser.save();
    res.status(201).json({ message: 'User muvaffaqiyatli yaratildi', user: newUser });
  } catch (error) {
    res.status(500).json({ message: 'User yaratishda xatolik', error: error.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Userlarni olishda xatolik', error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password, role } = req.body;
  try {
    const hashedPassword = password ? await bcrypt.hash(password, 10) : undefined;
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { email, password: hashedPassword, role },
      { new: true }
    );
    if (!updatedUser) return res.status(404).json({ message: 'User topilmadi' });
    res.status(200).json({ message: 'User yangilandi', user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'User yangilashda xatolik', error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) return res.status(404).json({ message: 'User topilmadi' });
    res.status(200).json({ message: 'User o‘chirildi' });
  } catch (error) {
    res.status(500).json({ message: 'User o‘chirishda xatolik', error: error.message });
  }
};
