import express from 'express';
import {
  createAdmin,
  getAllAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin
} from '../controllers/admin.controller.js';

const AdminRouter = express.Router();

AdminRouter.post('/create', createAdmin);
AdminRouter.get('/', getAllAdmins);
AdminRouter.get('/:id', getAdminById);
AdminRouter.put('/:id', updateAdmin);
AdminRouter.delete('/:id', deleteAdmin);

export default AdminRouter;
