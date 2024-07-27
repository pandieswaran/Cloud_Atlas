const ensureAuthenticated = require('../auth');
const { createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteById } = require('../conrollers/productController');

const router = require('express').Router();

router.post('/add', ensureAuthenticated, createProduct); //secure
router.get('/get', getProducts);
router.get('/get/:id', getProductById);
router.put('/update/:id', ensureAuthenticated, updateProductById);//secure
router.delete('/delete/:id', ensureAuthenticated, deleteById);//secure

module.exports = router