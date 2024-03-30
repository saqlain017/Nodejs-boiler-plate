import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config();

const dbConnect = async ()=>{
    try{
        await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
        })
    }catch(error){
        console.log(error);
    }
}

export default dbConnect