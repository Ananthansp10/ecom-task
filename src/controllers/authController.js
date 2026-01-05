import { ERROR_MESSAGE } from "../constants/errorMessage.js"
import { STATUS_CODE } from "../constants/statusCode.js"
import bcrypt from 'bcrypt'
import { userModel } from "../models/userModel.js"
import { SUCCESS_MESSAGE } from "../constants/successMessage.js"

export const registerUser = async (req,res) => {
    try {
       const {name,email,phoneNumber,password} = req.body
       if(!name || !email || !phoneNumber || !password){
           return res.status(STATUS_CODE.BAD_REQUEST).json({success:false,message:ERROR_MESSAGE.MISSING_FIELD})
       }
       const hashedPassword = await bcrypt.hash(password,10)
       const isUserExist = await userModel.findOne({email:email})
       if(isUserExist){
            return res.status(STATUS_CODE.CONFLICT).json({success:false,message:ERROR_MESSAGE.EMAIL_EXIST})
       }else{
            await userModel.create({
                name:name,
                email:email,
                phoneNumber:phoneNumber,
                password:hashedPassword
            })
            return res.status(STATUS_CODE.SUCCESS).json({success:true,message:SUCCESS_MESSAGE.USER_CREATED})
       }
    } catch (error) {
        res.status(STATUS_CODE.INTERNAL_ERROR).json({success:false,message:ERROR_MESSAGE.INTERNAL_ERROR})
    }
}

export const userSignIn = async (req,res) => {
    try {
        const {email,password} = req.body
        if(!email || !password){
            return res.status(STATUS_CODE.BAD_REQUEST).json({success:false,message:ERROR_MESSAGE.MISSING_FIELD})
        }
        const user = await userModel.findOne({email:email})
        if(!user){
            return res.status(STATUS_CODE.UNAUTHORIZE).json({success:false,message:ERROR_MESSAGE.USER_NOT_EXIST})
        }
        const isPasswordMatch = await bcrypt.compare(password,user.password)
        if(!isPasswordMatch){
            return res.status(STATUS_CODE.UNAUTHORIZE).json({success:false,message:ERROR_MESSAGE.WRONG_PASSWORD})
        }
        res.status(STATUS_CODE.SUCCESS).json({success:true,message:SUCCESS_MESSAGE.USER_LOGGED_IN})
    } catch (error) {
        res.status(STATUS_CODE.INTERNAL_ERROR).json({success:false,message:ERROR_MESSAGE.INTERNAL_ERROR})
    }
}