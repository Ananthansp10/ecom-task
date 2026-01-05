import mongoose from "mongoose";

export const connectDb = () => {
    try {
        mongoose.connect('mongodb://127.0.0.1:27017/ecom').then(()=>{
            console.log("Database connected")
        }).catch(()=>{
            console.log("Database not connected")
        })
    } catch (error) {
        console.log(error)
    }
}