import pool from "../database/index.js";

export const getAllUserService = async (query, data) => {
  try {
    const data = await pool.query(query, [...data]);
    return data.rows;
  } catch (error) {
    return error;
  }
};

export const getOneUserService = async (query, id) => {
  try {
    const userData = await pool.query(query, [id]);
    return userData;
  } catch (error) {
    return error;
  }
};

export const updateUserService = async (query, id) => {
  try {
    const updateUser = await pool.query(query, id);
    return updateUser;
  } catch (error) {
    return error;
  }
};

export const deleteUserService = async (query, id) => {
  try {
    const deleteUser = await pool.query(query, id);
    return deleteUser;
  } catch (error) {
    return error;
  }
};
