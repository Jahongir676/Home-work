import express from 'express';
import { GetAllBoards, GetBoardById, CreateBoard, UpdateBoard, DeleteBoard } from "../controllers/index.js";

const boardsRouter = express.Router();

boardsRouter.get("/", GetAllBoards);
boardsRouter.get("/:id", GetBoardById);
boardsRouter.post("/", CreateBoard);
boardsRouter.put("/:id", UpdateBoard);
boardsRouter.delete("/:id", DeleteBoard);

export default boardsRouter;