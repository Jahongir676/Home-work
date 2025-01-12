import express from 'express';
import dotenv from 'dotenv';
import { authRoutes, bookRoutes } from './routes/index.js';
import setupDatabase from './setupDatabase.js';

dotenv.config();

const app = express();
app.use(express.json());

setupDatabase();

app.use('/api/auth', authRoutes);
app.use('/api', bookRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
