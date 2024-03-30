import express from 'express'
import { loginControl,registerControl } from '../Controllers/authController.js';
const router =  express.Router();

router.post('/login',loginControl)
router.post('/register',registerControl)

export {router as authRouter}