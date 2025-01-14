import { logger } from "../utils/logger.js";
import {
  getAllSocialProfileService,
  getSocialProfileService,
  createSocialProfileService,
  updateSocialProfileService,
  deleteSocialProfileService,
} from "../services/index.js";
export const social_profileController = {
  getAllSocialProfiles: (req, res) => {
    try {
      const socialProfiles = getAllSocialProfileService();
      res.json(socialProfiles);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getSocialProfile: (req, res) => {
    try {
      const { id } = req.params;
      const socialProfile = getSocialProfileService(id);
      if (!socialProfile) {
        return res.status(404).json({ error: "Social Profile not found" });
      }
      res.json(socialProfile);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  createSocialProfile: (req, res) => {
    try {
      const { name, link } = req.body;
      const newSocialProfile = createSocialProfileService(name, link);
      res.status(201).json(newSocialProfile);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  updateSocialProfile: (req, res) => {
    try {
      const { id } = req.params;
      const { name, link } = req.body;
      const updatedSocialProfile = updateSocialProfileService(id, name, link);
      if (!updatedSocialProfile) {
        return res.status(404).json({ error: "Social Profile not found" });
      }
      res.json(updatedSocialProfile);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deleteSocialProfile: (req, res) => {
    try {
      const { id } = req.params;
      const deletedSocialProfile = deleteSocialProfileService(id);
      if (!deletedSocialProfile) {
        return res.status(404).json({ error: "Social Profile not found" });
      }
      res.json(deletedSocialProfile);
    } catch (error) {
      logger.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
};