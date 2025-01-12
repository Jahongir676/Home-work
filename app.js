import express from 'express';
import dotenv from 'dotenv';
import db from './config/db.js';
import authorRoutes from './routes/auth.js';
import categoryRoutes from './routes/category.js';
import userRoutes from './routes/user.js';
import adminRoutes from './routes/admin.js';
import authMiddleware from './middleware/authMiddleware.js';

dotenv.config();
const app = express();
app.use(express.json());

db();
app.use('/admin/author', authMiddleware, authorRoutes);
app.use('/admin/category', authMiddleware, categoryRoutes);
app.use('/admin/user', authMiddleware, userRoutes);
app.use('/admin', authMiddleware, adminRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server ${PORT} portida ishlamoqda`));
