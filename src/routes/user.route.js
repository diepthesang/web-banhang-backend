const express = require('express');
const { getAllProduct, getAllCategory, getProductById, getAllProductByCateId, getAllProductByName, setProductForCart, checkout, getAllProductInCart } = require('../controllers/user.controller');
const route = express.Router()


route.get('/product', getAllProduct)
route.get('/category', getAllCategory)
route.get('/product/:id', getProductById)
route.get('/category/:id', getAllProductByCateId)
route.get('/searchProduct/:search', getAllProductByName)
route.get('/cart/:productId/:name/:price/:amount/:userId', setProductForCart)
route.get('/checkout/:userId', checkout)
route.get('/allProductCart/:userId', getAllProductInCart)


module.exports = route