import express from 'express'
import { addProduct } from '../controllers/productControllers.js'
const router = express.Router()

router.post('/add-product',addProduct)

export default router