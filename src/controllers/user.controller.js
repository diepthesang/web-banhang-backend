const _ = require("lodash")
const { getAllProduct, getAllCategory, getProductById, getAllProductByCateId, getAllProductByName, setProductForCart, getProductByProductIdInCart, updateAmountProductInCart, checkout, deleteProductInCart, getAllProductInCart, setInfoCheckout } = require("../services/user.services")


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
        let userId = req.user.id
        console.log(userId);
        let { productId, name, price, img, amount } = req.body
        console.log(productId)

        let product = await getProductByProductIdInCart(userId, productId)

        if (!product) {
            await setProductForCart(productId, name, price, img, amount, userId);
            return res.status(200).json(
                {
                    message: `ban da them ${productId} vao gio hang`
                }
            )
        } else {
            let amountPlus = product.amount + 1

            await updateAmountProductInCart(productId, amountPlus, userId)
            return res.status(200).json(
                {
                    message: `trong gio hàng hiện đang có ${amount} ${name}`
                }
            )

        }

        // let orderId = await product.orderId

    },



    checkout: async (req, res, next) => {
        try {
            let userId = req.user.id
            console.log(userId);
            req.orderId = await checkout(userId)

            next();

        } catch (error) {

        }
    },

    getAllProductInCart: async (req, res, next) => {
        let userId = req.user.id
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
    },

    updateAmountProductInCart: async (req, res, next) => {
        let userId = req.user.id
        let { productId, amount } = req.params
        try {
            let product = await getProductByProductIdInCart(productId);
            if (!product) {
                return res.status(200).json({

                })
            }
            if (product) {
                if (amount !== '0') {
                    await updateAmountProductInCart(productId, amount, userId)
                    return res.status(200).json(
                        {
                            message: 'update san pham trong gio hang thanh cong'
                        }
                    )
                }
                if (amount === "0") {
                    await deleteProductInCart(productId, userId)
                    return res.status(200).json({
                        message: 'xoa san pham trong gio hang thanh cong'
                    })
                }
            }
        } catch (error) {

        }

    },

    getTotalAmountInCart: async (req, res, next) => {
        console.log('>>>>>>>>>>>>>');
        let userId = req.user.id
        console.log(userId)
        try {
            let product = await getAllProductInCart(userId)
            let arrAmount = _.map(product, 'amount')
            console.log(arrAmount)
            let totalAmount = _.sum(arrAmount)
            console.log(totalAmount);
            return res.json({
                totalAmount: totalAmount
            })
        } catch (error) {

        }
    },

    setInfoCheckout: async (req, res, next) => {
        let orderId = req.orderId;
        const { firstname, lastname, phoneNumber, address, city, country } = req.body
        let userId = req.user.id
        try {
            setInfoCheckout(userId, firstname, lastname, phoneNumber, address, city, country, orderId)
            res.status(200).json(
                {
                    orderId: orderId,
                    message: 'set info thanh cong'
                }
            )
        } catch (error) {
            res.status(500).json(
                {
                    message: 'err setInforcheckout'
                }
            )
        }
    }



}
