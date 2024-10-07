const express = require('express');
const { createProduct, greetPeople, getAllProducts, getProductById,updateProduct} = require('../controller/productController');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended:true}))

//create product
router.post('/createproduct', createProduct)
router.get('/hi', greetPeople)
router.get('/getproducts', getAllProducts)
router.get('/getproductsbyid/:id', getProductById)
router.put('/updateproduct/:id', updateProduct)


module.exports = router;