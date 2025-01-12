import express from 'express';
import { register, login } from '../controllers/index.js';

const authsRouter = express.Router();

authsRouter.post("./register", register);
authsRouter.post("./login", login);

export default authsRouter;