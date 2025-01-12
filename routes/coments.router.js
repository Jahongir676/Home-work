import express from 'express';
const {getAllComments,createComment}= require('../controllers/index.js');
const comentsRouter = express.Router();

comentsRouter.get('/', getAllComments);
comentsRouter.post('/', createComment);

module.exports = comentsRouter;