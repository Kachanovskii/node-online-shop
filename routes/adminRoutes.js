const express = require('express');
const router = express.Router();

//Controllers
const {getAdminPage, getAdminProducts} = require('../controolers/adminController')

router.get('/admin', getAdminPage)
router.get('/admin/products', getAdminProducts)

module.exports = router