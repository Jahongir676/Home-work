import express from "express";
import { findMyProfile, updateMyProfile, deleteMyProfile } from "../controllers/index.js";


export const profileRouter = express.Router()


profileRouter.get("/:id", findMyProfile)
profileRouter.put("/:id", updateMyProfile)
profileRouter.delete("/:id", deleteMyProfile)