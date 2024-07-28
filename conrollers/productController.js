const Product = require('../models/Product');

//Create a Product
const createProduct = async (req, res) => {
    const body = req.body;
    console.log('userInfo', req.userInfo);
    try {
        const product = new Product(body);
        const result = await product.save();
        res.status(201).json({ message: "Created", result });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get all the Product
const getProducts = async (req, res) => {
    try {
        const results = await Product.find({});
        res.status(200).json({ data: results });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Get a Product Using ID
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findById(id);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Success", data: result });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Update a Product Using ID
const updateProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const result = await Product.findByIdAndUpdate(id, body, { new: true });
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Updated", data: result });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

//Delete a Product Using ID
const deleteById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await Product.findByIdAndDelete(id);
        if (!result) {
            return res.status(404).json({ message: "Product not found" });
        }
        res.status(200).json({ message: "Deleted" });
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = {
    createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteById
};
