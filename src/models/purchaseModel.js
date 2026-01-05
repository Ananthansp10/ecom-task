import mongoose, { Schema } from "mongoose";

const purchaseSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId
    },
    name:{
        type:String
    },
    description:{
        type:String
    },
    price:{
        type:Number
    },
    quantity:{
        type:Number,
        required:true
    }
})

export const purchaseModel = mongoose.model("purchases",purchaseSchema)