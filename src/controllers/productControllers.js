import { ERROR_MESSAGE } from "../constants/errorMessage.js"
import { STATUS_CODE } from "../constants/statusCode.js"
import { SUCCESS_MESSAGE } from "../constants/successMessage.js"
import { productModel } from "../models/productModel.js"

export const addProduct = async (req,res) => {
    try {
        const {name,description,price} = req.body
        if(!name || !description || !price){
            return res.status(STATUS_CODE.BAD_REQUEST).json({success:false,message:ERROR_MESSAGE.MISSING_FIELD})
        }
        await productModel.create({
            name:name,
            description:description,
            price:price
        })
        res.status(STATUS_CODE.SUCCESS).json({success:true,message:SUCCESS_MESSAGE.PRODUCT_ADDED})
    } catch (error) {
        res.status(STATUS_CODE.INTERNAL_ERROR).json({success:false,message:ERROR_MESSAGE.INTERNAL_ERROR})
    }
}