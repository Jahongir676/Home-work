import express from 'express';
import { createAdmin, getAdmins, updateAdmin } from '../controllers/admin.js';

const adminRouter = express.Router();

adminRouter.post('/admin', createAdmin);
adminRouter.get('/admin', getAdmins);
adminRouter.put('/admin/:id', updateAdmin);

export default adminRouter;
