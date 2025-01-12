import pool from '../config/db.js';

export const createBook = async (req, res) => {
  const { title, author, publication_date, genre } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO books (title, author, publication_date, genre, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [title, author, publication_date, genre, req.userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Book creation failed' });
  }
};

export const getAllBooks = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM books');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve books' });
  }
};

export const getBookById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM books WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve book' });
  }
};

export const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, publication_date, genre } = req.body;
  try {
    const result = await pool.query(
      'UPDATE books SET title = $1, author = $2, publication_date = $3, genre = $4 WHERE id = $5 RETURNING *',
      [title, author, publication_date, genre, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update book' });
  }
};

export const deleteBook = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM books WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Book not found' });
    }
    res.status(200).json({ message: 'Book deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete book' });
  }
};


