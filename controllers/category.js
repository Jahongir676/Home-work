import Category from '../models/Category.js';

export const createCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json({ message: 'Category muvaffaqiyatli yaratildi', category: newCategory });
  } catch (error) {
    res.status(500).json({ message: 'Category yaratishda xatolik', error: error.message });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Categorylarni olishda xatolik', error: error.message });
  }
};

export const updateCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!updatedCategory) return res.status(404).json({ message: 'Category topilmadi' });
    res.status(200).json({ message: 'Category yangilandi', category: updatedCategory });
  } catch (error) {
    res.status(500).json({ message: 'Category yangilashda xatolik', error: error.message });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCategory = await Category.findByIdAndDelete(id);
    if (!deletedCategory) return res.status(404).json({ message: 'Category topilmadi' });
    res.status(200).json({ message: 'Category o‘chirildi' });
  } catch (error) {
    res.status(500).json({ message: 'Category o‘chirishda xatolik', error: error.message });
  }
};
