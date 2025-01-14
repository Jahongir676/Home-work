import { getAllProductsService, getProductService, createProductService, updateProductService, deleteProductService } from '../services/index.js'

export const productController = {
    AllProducts: (req, res, next) => {
        try {
            const products = getAllProductsService()
            res.status(200).send(products)
        } catch (error) {
            throw new Error(error)
        }
    },
    Product: (req, res, next) => {
        try {
            const { id } = req.params
            const product = getProductService(id)
            if (product.rowCount === 0) {
                res.status(404).send({ message: 'Product not found' })
            }
            res.status(200).send(product)
        } catch (error) {
            throw new Error(error)
        }
    },
    createProduct: (req, res, next) => {
        try {
            const { name, price, quantity } = req.body
            const product = createProductService(name, price, quantity)
            res.status(200).send(product)
        } catch (error) {
            throw new Error(error)
        }
    },
    updateProduct: (req, res, next) => {
        try {
            const { id } = req.params
            const { name, price, quantity } = req.body
            const product = updateProductService(id, name, price, quantity)
            res.status(200).send(product)
        } catch (error) {
            throw new Error(error)
        }
    },
    deleteProduct: (req, res, next) => {
        try {
            const { id } = req.params
            const product = deleteProductService(id)
            res.status(200).send("Product deleted")
        } catch (error) {
            throw new Error(error)
        }
    }
}