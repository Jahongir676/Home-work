import Admin from '../models/Admin.js';

export const createAdmin = async (req, res) => {
  const { name, role } = req.body;
  try {
    const newAdmin = new Admin({ name, role });
    await newAdmin.save();
    res.status(201).json({ message: 'Admin muvaffaqiyatli yaratildi', admin: newAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Admin yaratishda xatolik', error: error.message });
  }
};

export const getAdmins = async (req, res) => {
  try {
    const admins = await Admin.find();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Adminlarni olishda xatolik', error: error.message });
  }
};

export const updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, role } = req.body;
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(id, { name, role }, { new: true });
    if (!updatedAdmin) return res.status(404).json({ message: 'Admin topilmadi' });
    res.status(200).json({ message: 'Admin yangilandi', admin: updatedAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Admin yangilashda xatolik', error: error.message });
  }
};
