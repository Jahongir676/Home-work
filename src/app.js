import express from 'express';
import AdminRoutes from './routes/admin.route.js';
import CourseRoutes from './routes/course.route.js';
import ComentsRoutes from './routes/coments.route.js';

const app = express();
app.use(express.json());

app.use('/api/admins', AdminRoutes);
app.use('/api/courses', CourseRoutes);
app.use('/api/comments', ComentsRoutes);

export default app;
