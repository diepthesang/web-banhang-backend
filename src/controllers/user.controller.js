const { getAllProduct, getAllCategory, getProductById, getAllProductByCateId, getAllProductByName, setProductForCart, getProductByProductIdInCart, updateAmountProductInCart, checkout, deleteProductInCart, getAllProductInCart } = require("../services/user.services")


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
    },

    setProductForCart: async (req, res, next) => {
        let { productId, name, price, amount, userId } = req.params


        let product = await getProductByProductIdInCart(productId)

        if (!product && amount !== '0') {
            await setProductForCart(productId, name, price, amount, userId);
            return res.status(200).json(
                {
                    message: `ban da them ${productId} vao gio hang`
                }
            )
        } else {

            if (amount === '0') {
                await deleteProductInCart(productId)
                return res.status(200).json(
                    {
                        message: `ban da xoa san pham ${productId} thanh cong`
                    }
                )
            }

            // let orderId = await product.orderId
            await updateAmountProductInCart(amount, productId)
            return res.status(200).json(
                {
                    message: `trong gio hàng hiện đang có ${amount} ${name}`
                }
            )
        }

    },

    checkout: async (req, res, next) => {
        try {
            let { userId } = req.params;
            console.log(userId);
            await checkout(userId)
            return res.status(200).json(
                {
                    message: 'checkout thanh cong'
                }
            )
        } catch (error) {

        }
    },

    getAllProductInCart: async (req, res, next) => {
        let { userId } = req.params
        console.log(userId);
        let allProduct = await getAllProductInCart(userId)

        try {
            return res.status(200).json(
                allProduct
            )
        } catch (error) {
            return res.status(500).json(
                {
                    errCode: 1,
                    message: 'err get all product in cart'
                }
            )
        }
    }



}
