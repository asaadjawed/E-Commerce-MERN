import express from 'express';
import { createProduct, deleteProduct, getProductById, getProducts, updateProduct } from '../controllers/product.controller.js';

const router = express.Router();

//Get All Products
router.get('/', getProducts);

//Post products 
router.post('/', createProduct);

//Delete products by ID
router.delete('/:id', deleteProduct);

//Get Product by ID
router.get('/:id', getProductById)

//Update Product by ID
router.put('/:id', updateProduct);


export default router;