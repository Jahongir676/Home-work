import express from "express";
import { createDebtController,updateDebtController,deleteDebtController,getOneDebtController,getDebtsController} from '../controllers/index.js'

export const debtRouter = express.Router()


debtRouter.get("/", getDebtsController)
debtRouter.get("/:id", getOneDebtController)
debtRouter.post("/", createDebtController)
debtRouter.put("/:id", updateDebtController)
debtRouter.delete("/:id", deleteDebtController)