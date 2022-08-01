
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

    getProductById: async () => {
        try {
            return await db.Product.findAll(
                {
                    where: {
                        id: 1
                    }
                }
            )
        } catch (error) {
            return {
                message: "error services"
            }
        }
    }
}


