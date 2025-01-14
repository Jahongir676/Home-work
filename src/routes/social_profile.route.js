import express from "express";
import { social_profileController } from "../controller/index.js";
import { userPlatformValidation } from "../validations/index.js";
export const social_profileRouter = express.Router();

social_profileRouter.get("/", social_profileController.getAllSocialProfiles);
social_profileRouter.get("/:id", social_profileController.getSocialProfile);
social_profileRouter.post("/", userPlatformValidation, social_profileController.createSocialProfile);
social_profileRouter.put("/:id", userPlatformValidation, social_profileController.updateSocialProfile);
social_profileRouter.delete("/:id", social_profileController.deleteSocialProfile);

