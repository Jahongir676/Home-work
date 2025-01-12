import { v4 } from "uuid";
import { readProductsDb, writeProductsDb } from "./database.services.js";
import path from 'path';

const dbFilePath = path.join(import.meta.dirname, '../database/products.json');

export const addProductToDb = (newProduct) => {
    let products = readProductsDb(dbFilePath);
    const id = v4();
    newProduct = { id, ...newProduct };
    products.push(newProduct);
    writeProductsDb(dbFilePath, products);
};

export const getAllProducts = (page, limit, filters, sort) => {
    let products = readProductsDb(dbFilePath);

    if (filters.name) {
        products = products.filter(product => 
            product.module && product.module.toLowerCase().includes(filters.name.toLowerCase())
        );
    }

    if (filters.company) {
        products = products.filter(product => 
            product.company && product.company.toLowerCase() === filters.company.toLowerCase()
        );
    }
    if (sort) {
        const [key, order] = sort.split('_');
        products.sort((a, b) => {
            if (order === 'desc') {
                return b[key] - a[key];
            } else {
                return a[key] - b[key];
            }
        });
    }

    const totalProducts = products.length;
    const totalPages = Math.ceil(totalProducts / limit);

    if (page > totalPages) {
        return {
            totalProducts,
            currentPage: page,
            totalPages,
            products: []
        };
    }

    const startIndex = (page - 1) * limit;
    const paginatedProducts = products.slice(startIndex, startIndex + limit);

    return {
        totalProducts,
        currentPage: page,
        totalPages,
        products: paginatedProducts
    };
};

export const getOneProduct = (id) => {
    const products = readProductsDb(dbFilePath);
    const product = products.find(product => product.id == id);
    if (!product) {
        throw new Error(`Mahsulot topilmadi`);
    } else {
        return product;
    }
};

export const updateProduct = (id, data) => {
    let products = readProductsDb(dbFilePath);
    let found = false;
    for (let product of products) {
        if (product.id == id) {
            Object.assign(product, data);
            found = true;
            break;
        }
    }
    if (found) {
        writeProductsDb(dbFilePath, products);
        return data;
    } else {
        throw new Error('Mahsulot topilmadi');
    }
};

export const deleteProduct = (id) => {
    let products = readProductsDb(dbFilePath);
    const newProducts = products.filter(product => product.id != id);
    if (newProducts.length == products.length) {
        throw new Error(`Mahsulot topilmadi`);
    } else {
        writeProductsDb(dbFilePath, newProducts);
    }
};
