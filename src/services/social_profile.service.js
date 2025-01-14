import pool from "../database/index.js";

export const getAllSocialProfileService = async (query) => {
  try {
    const getAllSocialProfile = await pool.query(query);
    return getAllSocialProfile;
  } catch (error) {
    return error;
  }
};

export const getSocialProfileService = async (query, [data]) => {
  try {
    const getSocialProfile = await pool.query(query, [data]);
    return getSocialProfile;
  } catch (error) {
    return error;
  }
};

export const createSocialProfileService = async (query, [data]) => {
  try {
    const createSocialProfile = await pool.query(query, [data]);
    return createSocialProfile;
  } catch (error) {
    return error;
  }
};

export const updateSocialProfileService = async (query, [data]) => {
  try {
    const updateSocialProfile = await pool.query(query, [data]);
    return updateSocialProfile;
  } catch (error) {
    return error;
  }
};

export const deleteSocialProfileService = async (query, [data]) => {
  try {
    const deleteSocialProfile = await pool.query(query, [data]);
    return deleteSocialProfile;
  } catch (error) {
    return error;
  }
};
