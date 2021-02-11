const express = require('express');
const router = express.Router();

//Controllers
const {getAdminPage, getAdminProducts, getAddProduct, postAddProduct, getProductDetail, postEditProduct} = require('../controolers/adminController')

router.get('/', getAdminPage)
router.get('/products', getAdminProducts)
router.get('/add-product', getAddProduct)
router.get('/product-detail', getProductDetail)

//Post
router.post('/add-product', postAddProduct)
router.post('/products', postEditProduct)


module.exports = router