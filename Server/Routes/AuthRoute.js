import express from 'express'

import {loginUser, registerUser} from '../Controllers/AuthController.js'
import morgan from 'morgan';
const app=express();
const router=express.Router()
app.use(morgan('combined'));
router.post('/register',registerUser)
router.post('/login',loginUser)
export default router;