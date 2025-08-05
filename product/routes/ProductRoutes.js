const express = require('express');
const { createProduct, getProduct } = require('../controllers/ProductController'); // ✅ require added


const router = express.Router();

router.post('/products', createProduct);
router.get('/products', getProduct);

module.exports = router; // ✅ fixed typo
