import express from 'express'
const router = express.Router();
import { createEmployee,getEmployee,updateEmployee,getSpecificEmployee,deleteEmployee } from '../Controllers/userController.js';

router.post('/createEmployee',createEmployee)
router.get('/',getEmployee)
router.put('/updateEmployee/:id',updateEmployee)
router.delete('/deleteEmployee/:id',deleteEmployee)
router.get('/:id',getSpecificEmployee)
export {router as userRoutes}