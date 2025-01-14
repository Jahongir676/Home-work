import express from "express";
import { addressController } from "../controller/index.js";
import { userAddressValidation } from "../validations/index.js";

export const addressRouter = express.Router();

addressRouter.get("/all", addressController.AllAddress);
addressRouter.get("/all/:id", addressController.AddressById);
addressRouter.post("/new", userAddressValidation, addressController.createAddress);
addressRouter.put("/update", userAddressValidation, addressController.updateAddress);
addressRouter.delete("/delete", addressController.deleteAddress);
