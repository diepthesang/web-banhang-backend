const express = require('express');
const { getAllProduct, getAllCategory, getProductById, getAllProductByCateId, getAllProductByName } = require('../controllers/user.controller');
const route = express.Router()


route.get('/product', getAllProduct)
route.get('/category', getAllCategory)
route.get('/product/:id', getProductById)
route.get('/category/:id', getAllProductByCateId)
route.get('/searchProduct/:search', getAllProductByName)





module.exports = route