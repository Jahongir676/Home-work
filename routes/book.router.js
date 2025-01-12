import express from 'express';
import { createBook,getAllBooks,getBookById,updateBook,deleteBook } from '../controlers/index.js';
import { verifyToken } from '../middleware/index.js';

const router = express.Router();

router.post('/books', verifyToken, createBook);
router.get('/books', verifyToken,getAllBooks);
router.get('/books/:id', verifyToken,getBookById);
router.put('/books/:id', verifyToken, updateBook);
router.delete('/books/:id', verifyToken, deleteBook);

export default router;
