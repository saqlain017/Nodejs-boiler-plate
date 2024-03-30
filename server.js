import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import dbConnect from './Config/dbConnection.js';
import { authRouter } from './Routers/authRoutes.js';
import { userRoutes } from './Routers/userRoutes.js';

const app = express();

dbConnect();
dotenv.config();
app.use(cors());

const PORT = process.env.PORT || 5000;
app.use(express.json());
app.use('/auth',authRouter);
app.use('/employee',userRoutes)

app.listen(PORT,()=>{
    console.log(`The Port is running at http://localhost:${PORT}`);
})





app.listen()