import express from 'express';
import {getAdminByID,getAllAdmins,createAdmin,updateAdmin,deleteAdmin} from '../controlers/index.js'
const adminRouter = express.Router();

adminRouter.get('/', getAllAdmins);
adminRouter.get('/', getAdminByID);
adminRouter.post('/', createAdmin);
adminRouter.put('/', updateAdmin);
adminRouter.delete('/', deleteAdmin);

export default adminRouter;
