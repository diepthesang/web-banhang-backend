

const { Op } = require("sequelize")
const db = require("../db/models")
const { v4: uuidv4 } = require('uuid');
var _ = require('lodash');

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

    setProductForCart: async (productId, name, price, amount, userId) => {

        try {
            await db.Cart.create(
                {
                    productId: productId,
                    name: name,
                    price: price,
                    amount: amount,
                    total: price * amount,
                    userId: userId

                }
            )
        } catch (error) {
            return {
                message: 'err services'
            }
        }
    },
    updateAmountProductInCart: async (amount, productId) => {
        try {
            await db.Cart.update(
                {
                    amount: amount
                },
                {
                    where: {
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
    getProductByProductIdInCart: async (productId) => {
        try {
            return await db.Cart.findOne(
                {
                    where: {
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
        console.log(arrProductId);
        try {
            db.Cart.update(
                {
                    orderId: uuidv4()
                },
                {
                    where: {
                        productId: arrProductId
                    }
                }
            )
        } catch (error) {

        }
    },
    deleteProductInCart: async (productId) => {
        try {
            await db.Cart.destroy(
                {
                    where: {
                        productId: productId,
                        orderId: null
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
    }

}






