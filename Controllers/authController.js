import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import dotenv from 'dotenv'

dotenv.config();

import { AdminModel } from '../Models/AdminModel.js';

const loginControl = async (req,res)=>{
    const {email,password} = req.body;
    try{
        const Admin = await AdminModel.findOne({email});
        if(!Admin){
            return res.json({message : "User doesnot Exist"})
        }
        const isPassValid = await bcryptjs.compare(password,Admin.password)
        if(!isPassValid){
            return res.json({message : "Incorrect Password"});
        }
        const token = jwt.sign({id:Admin._id},process.env.SECRET);
        res.json({token,userID : Admin._id})
    }catch(error){
        console.log(error)
    }
}

const registerControl = async (req,res)=>{
    try{
        const {name,email,password} = req.body;
        const Admin = await AdminModel.findOne({email});
        if (Admin){
            return res.json ({message : "Admin Already Exists"})
        }
        const hashedPassword = await bcryptjs.hash(password,10);
        const newAdmin = new AdminModel({name,password:hashedPassword,email});
        await newAdmin.save();
        res.json({message : "Admin Registered Successfully"});
    }catch(error){
        res.json({message: error});
    }
}

export {loginControl,registerControl}