const { getAllProduct, getAllCategory, getProductById, getAllProductByCateId, getAllProductByName } = require("../services/user.services")


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
        let proId = req.params.id
        console.log(proId);
        try {
            let data = await getProductById(proId)
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({
                errCode: 1,
                message: 'error get  product by id'
            })
        }
    },

    getAllProductByCateId: async (req, res, next) => {
        let cateId = req.params.id
        console.log(cateId);
        try {
            let data = await getAllProductByCateId(cateId);
            return res.status(200).json(data);
        } catch (error) {
            return res.status(500).json({
                errCode: 1,
                message: 'error get all product by cateId'
            })
        }
    },
    getAllProductByName: async (req, res, next) => {
        let search = req.params.search
        console.log(search)
        try {
            let data = await getAllProductByName(search)
            return res.status(200).json(data)
        } catch (error) {
            return res.status(500).json(
                {
                    errCode: 1,
                    message: 'error get all product by search name'
                }
            )
        }
    }



}
