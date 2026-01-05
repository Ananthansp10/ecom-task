import express from 'express'
import dotenv from 'dotenv'
import { connectDb } from './src/config/databaseConfig.js'
import userRouter from './src/routes/userRoute.js'
import productRouter from './src/routes/productRoute.js'

dotenv.config()

connectDb()

const app = express()

app.use(express.json())

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

const port = process.env.PORT || 5000

app.listen(port,()=>{
    console.log("server started")
})