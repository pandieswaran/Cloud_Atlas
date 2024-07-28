const ensureAuthenticated = require('../auth');
const { createProduct,
    getProducts,
    getProductById,
    updateProductById,
    deleteById } = require('../conrollers/productController');

const router = require('express').Router();

//Routes to Product using /products
router.post('/add', ensureAuthenticated, createProduct); //Proceteced Routes using Only Token
router.get('/get', getProducts);
router.get('/get/:id', getProductById);
router.put('/update/:id', ensureAuthenticated, updateProductById);//Proceteced Routes using Only Token
router.delete('/delete/:id', ensureAuthenticated, deleteById);//Proceteced Routes using Only Token

module.exports = router