const express = require('express');
const passport = require('passport');
const passportConfig = require('../middelware/passport.middleware')
const { getAllProduct, getAllCategory, getProductById, getAllProductByCateId, getAllProductByName, setProductForCart, checkout, getAllProductInCart, updateAmountProductInCart, getTotalAmountInCart, setInfoCheckout } = require('../controllers/user.controller');
const route = express.Router()


route.get('/product', getAllProduct)
route.get('/category', getAllCategory)
route.get('/product/:id', getProductById)
route.get('/category/:id', getAllProductByCateId)
route.get('/searchProduct/:search', getAllProductByName)
route.post('/setProductCart', passport.authenticate('jwt', { session: false }), setProductForCart)
// route.get('/checkout/:userId', checkout)
route.get('/allProductCart', passport.authenticate('jwt', { session: false }), getAllProductInCart)
route.get('/updateAmountProductInCart/:productId/:amount', passport.authenticate('jwt', { session: false }), updateAmountProductInCart)
route.get('/totalAmount', passport.authenticate('jwt', { session: false }), getTotalAmountInCart)
route.post('/checkout', passport.authenticate('jwt', { session: false }), checkout, setInfoCheckout)


module.exports = route