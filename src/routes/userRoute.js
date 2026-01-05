import express from 'express'
const router = express.Router()
import { registerUser, userSignIn } from '../controllers/authController.js'

router.post('/register',registerUser)

router.post('/signin',userSignIn)

export default router