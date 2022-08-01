const express = require('express');
const { getAllProduct, getAllCategory, getProductById } = require('../controllers/user.controller');
const route = express.Router()


route.get('/product', getAllProduct)
route.get('/category', getAllCategory)
route.get('/product/:id', getProductById)






module.exports = route