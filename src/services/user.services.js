

const { Op } = require("sequelize")
const db = require("../db/models")
const { v4: uuidv4 } = require('uuid');
var _ = require('lodash');
const product = require("../db/models/product");

module.exports = {
    getAllProduct: async () => {
        try {
            return await db.Product.findAll()
        } catch (error) {
            return {
                message: 'error services'
            }
        }
    },
    getAllCategory: async () => {
        try {
            return await db.Category.findAll()
        } catch (err) {
            return {
                message: "error services"
            }
        }
    },

    getProductById: async (proId) => {
        try {
            return await db.Product.findAll(
                {
                    where: {
                        id: proId
                    }
                }
            )
        } catch (error) {
            return {
                message: "error services"
            }
        }
    },

    getAllProductByCateId: async (cateId) => {
        try {
            return await db.Product.findAll(
                {
                    where: {
                        cateId: cateId
                    }
                }
            )
        } catch (error) {
            return {
                message: 'error services'
            }
        }
    },

    getAllProductByName: async (search) => {
        try {
            return await db.Product.findAll(
                {
                    where: {
                        name: { [Op.substring]: `%${search}` },
                    },
                }

            )
        } catch (error) {
            return {
                message: 'error services'
            }
        }
    },

    setProductForCart: async (productId, name, price, img, amount, userId) => {

        try {
            await db.Cart.create(
                {
                    productId: productId,
                    name: name,
                    price: price,
                    img: img,
                    amount: amount,
                    total: price * amount,
                    userId: userId,

                }
            )
        } catch (error) {
            return {
                message: 'err services'
            }
        }
    },
    updateAmountProductInCart: async (productId, amount, userId) => {
        try {
            let getProduct = await db.Cart.findOne(
                {
                    where: {
                        productId: productId,
                        orderId: null,
                        userId: userId
                    }

                }
            )
            let priceById = getProduct.price
            console.log('>>>><<<<');
            console.log(priceById);

            await db.Cart.update(
                {
                    amount: amount,
                    total: amount * priceById
                },
                {
                    where: {
                        productId: productId,
                        orderId: null,
                        userId: userId
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err services'
            }
        }
    },
    getProductByProductIdInCart: async (userId, productId) => {
        try {
            return await db.Cart.findOne(
                {
                    where: {
                        userId: userId,
                        productId: productId,
                        orderId: null
                    }
                }
            )
        } catch (error) {
            return {
                message: 'err services'
            }
        }
    },


    checkout: async (userId) => {
        let getAllProductId = await db.Cart.findAll(
            {
                where: {
                    orderId: null,
                    userId: userId,
                }
            }
        )
        let arrProductId = _.map(getAllProductId, 'productId')
        let orderId = uuidv4()
        console.log(arrProductId);
        try {
            await db.Cart.update(
                {
                    orderId: orderId,
                },
                {
                    where: {
                        userId: userId,
                        productId: arrProductId,
                        orderId: null,
                    }
                }
            )
            return orderId;
        } catch (error) {

        }
    },
    getOrderId: async (userId, orderId) => {
        try {
            let product = await db.Cart.findAll(
                {
                    where: {
                        userId: userId,
                        orderId: orderId,
                    }
                }
            )
            let orderId = product.orderId;
            return orderId;
        } catch (error) {

        }
    },

    deleteProductInCart: async (productId, userId) => {
        try {
            await db.Cart.destroy(
                {
                    where: {
                        productId: productId,
                        orderId: null,
                        userId: userId
                    }
                }
            )
        } catch (error) {

        }
    },

    getAllProductInCart: async (userId,) => {
        try {
            return await db.Cart.findAll(
                {
                    where: {
                        userId: userId,
                        orderId: null
                    }
                }
            )
        } catch (error) {
            return {
                message: 'error service, giõ hàng trống'
            }
        }
    },
    setInfoCheckout: async (userId, firstname, lastname, phoneNumber, address, city, country, orderId) => {

        try {
            await db.Checkout.create(
                {
                    userId: userId,
                    firstname: firstname,
                    lastname: lastname,
                    phoneNumber: phoneNumber,
                    address: address,
                    city: city,
                    country: country,
                    orderId: orderId,
                }
            )
        } catch (error) {
            return {
                message: 'err service'
            }
        }
    }

}






