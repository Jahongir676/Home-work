import express from "express";
import { validationProductMidd } from '../middlewares//index.js';
import { createProducstController, getAllProducstsController,
         getByIdProducstController,
         updateByIdProducstcontroller,
         deleteByIdProducstController } from "../controllers/index.js";


export const productsRouter = express.Router()

productsRouter.get("/", getAllProducstsController)

productsRouter.get("/:id", getByIdProducstController)

productsRouter.post("/", validationProductMidd, createProducstController)

productsRouter.put("/:id", updateByIdProducstcontroller)

productsRouter.delete("/:id", deleteByIdProducstController)
