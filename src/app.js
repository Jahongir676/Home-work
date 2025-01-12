import express from 'express';
import connectDB from './config/db.js';
import authorRoutes from './routes/authorRouter.js';
import categoryRoutes from './routes/categoryRouter.js';

connectDB();

const app = express();
app.use(express.json());
app.use('/api/authors', authorRoutes);
app.use('/api/categories', categoryRoutes);

export default app;
