

const { Op } = require("sequelize")
const db = require("../db/models")

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
    }

}






