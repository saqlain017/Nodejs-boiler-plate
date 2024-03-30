import { userModel } from "../Models/userModel.js";
const createEmployee = async (req,res)=>{
    try{
    const {
        employeeId,
        fullName,
        email,
        doj,
        gender,
        contact,
        jobTitle,
        department,
        salary,
        employeeStatus,
        emergencyContact,
      } = req.body;
        const user = await userModel.findOne({employeeId});
        if (user){
            return res.json ({message : "User Already Exists"})
        }
        const newUser = new userModel({
            employeeId,
            fullName,
            email,
            doj,
            gender,
            contact,
            jobTitle,
            department,
            salary,
            employeeStatus,
            emergencyContact,
      });
        await newUser.save();
        res.json({message : "Employee Registered Successfully"});
    }catch(error){
        res.json({message: error});
    }
}

const getEmployee = async (req,res)=>{
    try{
       const employees = await userModel.find({});
       res.json(employees);
    }catch(error){
        res.status(500).json({Error : error});
    }
}

const updateEmployee = async (req,res)=>{
    const employeeId = req.params.id;
    try{
        const updatedEmployee = await userModel.findByIdAndUpdate(employeeId,req.body,{new:true});
        if (!updatedEmployee){
            return res.status(404).json({error : "Employee not found"})
        }
        res.json({message : "Employee updated successfully", employee : updatedEmployee});
    }catch(error){
        res.status(500).json({message: error.message,error : "Failed to update" });
    }
}
const deleteEmployee = async (req,res)=>{
    const employeeId = req.params.id;
    try{
        const deleteEmployee = await userModel.findByIdAndRemove(employeeId);
        if (!deleteEmployee){
            return res.json({message : "Employee not found"})
        }
        res.status(200).json({message : "Employee deleted", employee : deleteEmployee});
    }catch(error){
        res.status(500).json({message : error.message, Error : "Failed to delete"})
    }
}

const getSpecificEmployee = async (req,res)=>{
    const employeeId = req.params.id;
    try{
        const spEmployee = await userModel.findById(employeeId);
        if(!spEmployee){
            return res.status(404).json({message : "Employee not found"});
        }
        res.json(spEmployee)
    }catch(error){
        res.status(500).json({error : "Failed to retrieve", message : error.message})
    }
}
export {createEmployee,getEmployee,updateEmployee,deleteEmployee,getSpecificEmployee}