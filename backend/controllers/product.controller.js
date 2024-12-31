import mongoose from 'mongoose';
import Product from '../models/products.model.js';

export const createProduct = async (req, res) => {
    const product = req.body;
    console.log('Product: ', product);

    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const newProduct = new Product(product);

    try {
        await newProduct.save();
        res.status(201).json({ success: true, data: newProduct });
    } catch (err) {
        console.log("Error in creating new Product: ", err.message);
        res.status(500).json({ success: false, message: err.message });
    }

}

export const deleteProduct = async (req, res) => {

    const { id } = req.params;
    console.log('Product ID: ', id);

    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Product ID' });
    };

    try {
        const product = await Product.findByIdAndDelete(id);
        console.log('Product Deleted: ', product);
        res.status(200).json({ success: true, message: 'Product Deleted Successfully' });
    } catch (err) {
        console.log("Error in deleting Product: ", err.message);
        res.status(500).json({ success: false, message: err.message });
    }
}

export const getProducts = async (req, res) => {

    try {
        const getProducts = req.body;
        console.log('Get Products: ', getProducts);

        if (!getProducts) {
            return res.status(400).json({ success: false, message: 'No products found' });
        }

        const products = await Product.find({});
        console.log('Products: ', products);

        res.status(200).json({ success: true, data: products, message: 'Products fetched successfully' });

    } catch (err) {
        console.log("Error in getting Products: ", err.message);
        res.status(500).json({ success: false, message: err.message });
    }

}

export const updateProduct =  async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    console.log('Product to Update: ', product);
    if(!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: 'Invalid Product ID' });
    };


    try {
        const updateProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        console.log('Updated Product: ', updateProduct);

        if (!updateProduct) {
            res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.status(200).json({ success: true, data: updateProduct });
    } catch (err) {
        console.log("Error in updating Product: ", err.message);
        res.status(500).json({ success: false, message: err.message });
    }
}

export const getProductById = async (req, res) => {
    const { id } = req.params;
    console.log('Product Fetched By ID: ', id);

    try {
        const getProductById = await Product.findById(id);
        console.log('GetIDProduct: ', getProductById);

        if (!getProductById) {
            res.status(404).json({ success: false, message: 'Product not found' });
        }

        res.status(200).json({ success: true, data: getProductById });
    } catch (err) {
        console.log("Error in getting Product by ID: ", err.message);
        res.status(500).json({ success: false, message: err.message });
    }
}