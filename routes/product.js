const express = require("express");
const { getAllProducts, createProduct, updateProduct, deleteteProduct, getOneProduct } = require("../controllers/productController");
const router = express.Router();

//product routes
router.route('/products/create').post(createProduct)
router.route('/products/getAll').get(getAllProducts)
router.route('/products/getOne/:id').get(getOneProduct)
router.route('/products/update/:id').put(updateProduct)
router.route('/products/delete/:id').delete(deleteteProduct)

module.exports = router;