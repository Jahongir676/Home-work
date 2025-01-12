import { addProductToDb, getAllProducts, getOneProduct, updateProduct, deleteProduct } from "../services/phone.services.js";

export const createProducstController = (req, res, next) => {
  try {
    addProductToDb(req.body);
    return res.status(200).send({ Status: "Created", Data: req.body });
  } catch (error) {
    next(error);
  }
};

export const getAllProducstsController = (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const filters = {
      name: req.query.name || null,
      company: req.query.company || null
    };

    const sort = req.query.sort || null;  // Example: "price_asc" or "price_desc"

    let products = getAllProducts(page, limit, filters, sort);
    return res.status(200).send(products);
  } catch (error) {
    next(error);
  }
};

export const getByIdProducstController = (req, res, next) => {
  try {
    const id = req.params.id;
    const product = getOneProduct(id);
    return res.status(200).send(product);
  } catch (error) {
    next(error);
  }
};

export const updateByIdProducstcontroller = (req, res, next) => {
  try {
    const id = req.params.id;
    const data = req.body;
    updateProduct(id, data);
    return res.status(200).send({ Status: "Changed", Data: data });
  } catch (error) {
    next(error);
  }
};

export const deleteByIdProducstController = (req, res, next) => {
  try {
    const id = req.params.id;
    deleteProduct(id);
    return res.status(200).send({ Status: "Deleted" });
  } catch (error) {
    next(error);
  }
};
