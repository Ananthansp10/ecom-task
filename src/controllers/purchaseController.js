import { ERROR_MESSAGE } from "../constants/errorMessage.js"
import { STATUS_CODE } from "../constants/statusCode.js"
import { productModel } from "../models/productModel.js"
import { purchaseModel } from "../models/purchaseModel.js"
import { userModel } from "../models/userModel.js"

export const purchaseProduct = async (req,res) => {
    try {
        const userId = req.params.userId
        const productId = req.params.productId
        const quantity = req.params.quantity
        const user = await userModel.findById(userId)
        if(!user){
            return res.status(404).json({success:false,message:"user not found"})
        }
        const product = await productModel.findById(productId)
        if(!product){
            return res.status(404).json({success:false,message:"product not found"})
        }
        await purchaseModel.create({
            userId:userId,
            ...product,
            quantity:quantity
        })
        res.status(200).json({success:true,message:"purchase successfully"})
    } catch (error) {
        res.status(STATUS_CODE.INTERNAL_ERROR).json({success:false,message:ERROR_MESSAGE.INTERNAL_ERROR})
    }
}