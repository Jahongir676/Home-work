import express from 'express';
import {
  createComment,
  getAllComments,
  getCommentById,
  updateComment,
  deleteComment
} from '../controllers/coments.controller.js';

const ComentsRouter = express.Router();

ComentsRouter.post('/create', createComment);
ComentsRouter.get('/', getAllComments);
ComentsRouter.get('/:id', getCommentById);
ComentsRouter.put('/:id', updateComment);
ComentsRouter.delete('/:id', deleteComment);

export default ComentsRouter;
