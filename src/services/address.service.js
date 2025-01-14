import pool from "../database/index.js";

export const getAllAddressService = async (query) => {
  try {
    const getAllAddress = await pool.query(query);
    return getAllAddress;
  } catch (error) {
    return error;
  }
};

export const getAddressService = async (query, [data]) => {
  try {
    const getAddress = await pool.query(query, [data]);
    return getAddress;
  } catch (error) {
    return error;
  }
};

export const createAddressService = async (query, [data]) => {
  try {
    const createAddress = await pool.query(query, [data]);
    return createAddress;
  } catch (error) {
    return error;
  }
};

export const updateAddressService = async (query, [data]) => {
  try {
    const updateAddress = await pool.query(query, [data]);
    return updateAddress;
  } catch (error) {
    return error;
  }
};

export const deleteAddressService = async (query, [data]) => {
  try {
    const deleteAddress = await pool.query(query, [data]);
    return deleteAddress;
  } catch (error) {
    return error;
  }
};
