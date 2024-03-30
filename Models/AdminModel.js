import mongoose, { mongo } from "mongoose";

const AdminSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type:String, required : true},
    password : {type : String,required : true}
},{timestamps : true});

export const AdminModel = new mongoose.model("admin",AdminSchema);