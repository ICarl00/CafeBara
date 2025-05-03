const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

router.get('/', async (req, res) => {
  const { category, search } = req.query;
  let query = {};

  if (category) {
    query.category = category;
  }
  
  if (search) {
    query.name = { $regex: search, $options: 'i' }; 
  }

  const products = await Product.find(query);
  res.json(products);
});

module.exports = router;
