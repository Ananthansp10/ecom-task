import express from 'express'
import { purchaseProduct } from '../controllers/purchaseController.js'
const router = express.Router()

router.post('/purchase',purchaseProduct)

export default router