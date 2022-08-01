const { getAllProduct, getAllCategory, getProductById } = require("../services/user.services")


module.exports = {
    getAllProduct: async (req, res, next) => {
        try {
            let data = await getAllProduct()
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({
                errCode: 1,
                message: 'error get all product'
            })
        }
    },
    getAllCategory: async (req, res, next) => {
        try {
            let data = await getAllCategory()
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json({
                errCode: 1,
                message: 'error get all category'
            })
        }
    },
    getProductById: async (req, res, next) => {
        try {
            let data = await getProductById()
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({
                errCode: 1,
                message: 'error get all product by id'
            })
        }
    }


}