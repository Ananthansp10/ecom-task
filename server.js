import expresss from 'express'
const app = expresss()
import dotenv from 'dotenv'
import { connectDb } from './src/config/databaseConfig.js'
import userRouter from './src/routes/userRoute.js'
import productRouter from './src/routes/productRoute.js'

dotenv.config()

connectDb()

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)

const port = process.env.PORT

app.listen(port,()=>{
    console.log("server started")
})