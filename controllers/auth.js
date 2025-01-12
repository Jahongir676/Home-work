import Author from '../models/Author.js';

export const createAuthor = async (req, res) => {
  const { name, bio } = req.body;
  try {
    const newAuthor = new Author({ name, bio });
    await newAuthor.save();
    res.status(201).json({ message: 'Author muvaffaqiyatli yaratildi', author: newAuthor });
  } catch (error) {
    res.status(500).json({ message: 'Author yaratishda xatolik', error: error.message });
  }
};

export const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();
    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({ message: 'Authorlarni olishda xatolik', error: error.message });
  }
};

export const updateAuthor = async (req, res) => {
  const { id } = req.params;
  const { name, bio } = req.body;
  try {
    const updatedAuthor = await Author.findByIdAndUpdate(id, { name, bio }, { new: true });
    if (!updatedAuthor) return res.status(404).json({ message: 'Author topilmadi' });
    res.status(200).json({ message: 'Author yangilandi', author: updatedAuthor });
  } catch (error) {
    res.status(500).json({ message: 'Author yangilashda xatolik', error: error.message });
  }
};

export const deleteAuthor = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedAuthor = await Author.findByIdAndDelete(id);
    if (!deletedAuthor) return res.status(404).json({ message: 'Author topilmadi' });
    res.status(200).json({ message: 'Author o‘chirildi' });
  } catch (error) {
    res.status(500).json({ message: 'Author o‘chirishda xatolik', error: error.message });
  }
};
