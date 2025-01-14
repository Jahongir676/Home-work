import {
  getAllAddressService,
  getAddressService,
  createAddressService,
  updateAddressService,
  deleteAddressService,
} from "../services/index.js";
export const addressController = {
  AllAddress: (req, res, next) => {
    try {
      const allData = getAllAddressService("SELECT * FROM address");
      res.status(200).send(allData);
    } catch (error) {
      next(error);
    }
  },

  AddressById: (req, res, next) => {
    try {
      const { id } = req.params;
      const oneAddress = getAddressService(
        "SELECT * FROM address WHERE id = $1",
        id
      );
      if (oneAddress) res.status(200).send({ msg: "ok", data: oneAddress });
    } catch (error) {
      next(error);
    }
  },

  createAddress: (req, res, next) => {
    try {
      const { user_id, address, city, postal_code, country, phone_number } =
        req.body;
      const createAddress = createAddressService(
        "INSERT INTO address (user_id, address, city, postal_code, country, phone_number) VALUESING ($1, $2, $3, $4, $5, $6)",
        [user_id, address, city, postal_code, country, phone_number]
      );
      res.status(200).send({ msg: "ok", data: createAddress });
    } catch (error) {
      next(error);
    }
  },

  updateAddress: (req, res, next) => {
    try {
      const { id } = req.params;
      const { user_id, address, city, postal_code, country, phone_number } =
        req.body;
      const updateAddress = updateAddressService(
        "UPDATE address SET user_id = $1, address = $2, city = $3, postal_code = $4, country = $5, phone_number = $6 WHERE id = $7",
        [user_id, address, city, postal_code, country, phone_number, id]
      );
      res.status(200).send({ msg: "ok", data: updateAddress });
    } catch (error) {
      next(error);
    }
  },

  deleteAddress: (req, res, next) => {
    try {
      const { id } = req.params;
      const deleteAddress = deleteAddressService(
        "DELETE FROM address WHERE id = $1",
        [id]
      );
      res.status(200).send({ msg: "ok", data: deleteAddress });
    } catch (error) {
      next(error);
    }
  }
}